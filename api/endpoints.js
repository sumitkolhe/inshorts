module.exports = (req, res) => {
  var endpoints = new Object();
  (endpoints["all"] = "https://inshorts.vercel.app/all"),
    (endpoints["national"] = "https://inshorts.vercel.app/national"),
    (endpoints["buisness"] = "https://inshorts.vercel.app/business"),
    (endpoints["sports"] = "https://inshorts.vercel.app/sports"),
    (endpoints["world"] = "https://inshorts.vercel.app/world"),
    (endpoints["politics"] = "https://inshorts.vercel.app/politics"),
    (endpoints["technology"] = "https://inshorts.vercel.app/technology"),
    (endpoints["startup"] = "https://inshorts.vercel.app/startup"),
    (endpoints["entertainment"] = "https://inshorts.vercel.app/entertainment"),
    (endpoints["science"] = "https://inshorts.vercel.app/science"),
    (endpoints["automobile"] = "https://inshorts.vercel.app/automobile"),
    res.json(endpoints);
};
