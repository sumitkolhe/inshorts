const xray = require("x-ray");
const x = xray();

module.exports = (req, res) => {
  x("https://inshorts.com/en/read", ".news-card", [
    {
      title: ".news-card-title a@text",
      description: ".news-card-content div@text",
      author: ".author @text",
      inshorts_link: ".news-card-title a@href",
      image: ".news-card-image @style",
      timestamp: ".time @content",
      read_more: ".read-more a@href",
    },
  ])(function (err, obj) {
    var responseJson = new Object();
    var totalArticles = Object.keys(obj).length;
    var str = JSON.stringify(obj);
    var convertedStr = str.replace(/(\\")*(\\n)*(\\t)*/g, "");
    var newObj = JSON.parse(convertedStr);
   
    responseJson["category"] = "all";
    responseJson["total"] = totalArticles;
    responseJson["articles"] = newObj; 
    for (var i in responseJson.articles){
      
      responseJson.articles[i].image= responseJson.articles[i].image.split("'")[1];
      
    }
    
    res.json(responseJson);
  });
};
