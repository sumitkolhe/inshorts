import { NowRequest, NowResponse } from "@vercel/node";
import { addHeaders } from "../utils/header";
import { getNewsEndpoint } from "../utils/endpoint";
import xray from "x-ray";

const x = xray();

module.exports = (req: NowRequest, res: NowResponse) => {
  addHeaders(res);
  const news_category = req.query.category as string;
  let endpoint: string = getNewsEndpoint(news_category);

  if (!news_category) {
    res.json({
      status: "online",
      Documentation:
        "https://github.com/sumitkolhe/inshorts-api#-inshorts-news-api",
    });
  } else if (!endpoint) {
    res.status(400).json({ message: "incorrect news category" });
  } else {
    x(endpoint, ".news-card", [
      {
        title: ".news-card-title a@text",
        description: ".news-card-content div@text",
        author: ".author @text",
        inshorts_link: ".news-card-title a@href",
        image: ".news-card-image @style",
        timestamp: ".time @content",
        read_more: ".read-more a@href",
      },
    ])((err, news) => {
      if (err) res.json(err);

      var responseJson = new Object() as any;
      var totalArticles = Object.keys(news).length;
      var str = JSON.stringify(news);
      var convertedStr = str.replace(/(\\")*(\\n)*(\\t)*/g, "");
      var newObj = JSON.parse(convertedStr);

      responseJson["category"] = news_category;
      responseJson["total"] = totalArticles;
      responseJson["articles"] = newObj;
      for (var i in responseJson.articles) {
        responseJson.articles[i].image = responseJson.articles[i].image.split(
          "'"
        )[1];
      }

      res.json(responseJson);
    });
  }
};
