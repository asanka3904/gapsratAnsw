let { greeting, who, width, height, color, size } = require("./constants");

let firstReq = {
  // https://cataas.com/cat/says/Hi%20There?width=500&amp;height=800&amp;c=Cyan&amp;s=150
  url:
    process.env.URL +
    greeting +
    "?width=" +
    width +
    "&height=" +
    height +
    "&color" +
    color +
    "&s=" +
    size,
  encoding: "binary",
};

let secondReq = {
  url:
    process.env.URL +
    who +
    "?width=" +
    width +
    "&height=" +
    height +
    "&color" +
    color +
    "&s=" +
    size,
  encoding: "binary",
};

module.exports = {
  firstReq,
  secondReq,
};
