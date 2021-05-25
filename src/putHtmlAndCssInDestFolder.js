const fs = require("fs").promises;

const putHtmlAndCssInDestFolder = function (teamHtml) {
  return new Promise((resolve, reject) => {
    //first save our html file in the destination directory, with name index.html
    fs.writeFile("./dist/index.html", teamHtml)
      .then(() => {
        console.log("index.html created");

        // now we copy css file over to dist directory
        fs.copyFile("./src/style.css", "./dist/style.css")
          .then(() => {
            //now we are done
            console.log("style sheet copied successfully");
            resolve();
          })
          .catch((err) => {
            console.log("-- Error copying css file to dist folder! ---");
            console.log(err);
            reject(err);
          });
      })
      .catch((err) => {
        console.log("--Error creating index.html file in dist folder --");
        console.log(err);
        reject(err);
      });
  });
};

module.exports = putHtmlAndCssInDestFolder;
