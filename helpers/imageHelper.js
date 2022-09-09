let { writeFile } = require("fs");
let request = require("request");
exports.SaveFile = (fileOut, data) => {
  writeFile(fileOut, data, "binary", (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("The file was saved!");
  });
};
