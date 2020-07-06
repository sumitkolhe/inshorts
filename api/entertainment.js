
const xray = require("x-ray");
const x = xray();

module.exports = (req, res) => {
  x("https://inshorts.com/en/read/entertainment", ".news-card", [
    {
      title: ".news-card-title a@text",
      description: ".news-card-content div@text",
      author: ".author @text",
      inshorts_link: ".news-card-title a@href",
      image:".news-card-image @style",
      timestamp: ".time @content",
      read_more: ".read-more a@href"
     
    },
  ])(function (err, obj) {
console.log(obj)
    res.json(obj);
  });
};
