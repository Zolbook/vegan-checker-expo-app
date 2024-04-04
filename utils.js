const tf = require('@tensorflow/tfjs-node');
const sharp = require('sharp');

async function preprocessImage(image) {
  // Load the image data into a buffer
  const buffer = Buffer.from(image, 'base64');

  // Use sharp to resize and convert the image to a 3D tensor with shape (1, width, height, channels)
  const resizedImage = await sharp(buffer)
    .resize(224, 224)
    .toFormat('jpg')
    .toBuffer();

  const tensor = tf.node.decodeJpeg(resizedImage).expandDims(0);

  return tensor;
}
