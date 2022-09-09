const { SaveFile } = require("./helpers/imageHelper");

const { firstReq, secondReq } = require("./utils/fetchUrls");
const { width, height } = require("./utils/constants");

request.get(firstReq, (err, res, firstBody) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Received response with status:" + res.statusCode);

  request.get(secondReq, (err, res, secondBody) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("Received response with status:" + res.statusCode);
    //blender
    blend(
      [
        { buffer: new Buffer(firstBody, "binary"), x: 0, y: 0 },
        { buffer: new Buffer(secondBody, "binary"), x: width, y: 0 },
      ],
      { width: width * 2, height: height, format: "jpeg" },
      (err, data) => {
        const fileOut = join(process.cwd(), "/upload", `/cat-card.jpg`);

        //write the file
        SaveFile(fileOut, data);
      }
    );
  });
});
