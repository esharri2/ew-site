const sharp = require("sharp");
const path = require("path");
const glob = require("glob");
const fs = require("fs");
const del = require("del");

const mediaDir = "./dist/media/source/*.*";
const sizes = [
  // { tag: "xl", size: 1440 },
  { tag: "lg", size: 1080 },
  { tag: "md", size: 720 },
  { tag: "sm", size: 480 },
];

const getImageNames = () => glob.sync(mediaDir);

const createImages = async (image) => {
  const name = path.parse(image).name;
  const ext = path.extname(image);
  // console.log("kick off resize for ", name);
  for (const size of sizes) {
    sharp(image)
      .resize({ width: size.size, withoutEnlargement: true })
      .toFile(`./dist/media/${name}-${size.tag}${ext}`)
      .then(() => {
        //  console.log(`${image} has been resized`);
        return true;
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

const init = () => {
  const imageNames = getImageNames();
  for (const image of imageNames) {
    createImages(image);
  }

  (async () => {
    try {
      const deletePaths = await del(["dist/media/source/*"]);
      console.log(`${deletePaths.length} images have been deleted.`);
    } catch (error) {
      console.error(error);
    }
  })();
};

init();
