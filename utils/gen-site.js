const fs = require('fs');
// const { resolve } = require('path');

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('src/style.css', 'dist/index.html', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Style sheet copied",
      });
    });
  });
};

module.exports = { writeFile, copyFile };