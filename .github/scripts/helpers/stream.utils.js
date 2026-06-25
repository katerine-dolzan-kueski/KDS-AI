const { Readable } = require('stream');

function arrayToStream(items) {
  const readable = new Readable();
  // eslint-disable-next-line no-underscore-dangle
  readable._read = () => { };

  items.forEach(item => readable.push(item));

  readable.push(null);

  return readable;
}

async function readStream(readable) {
  const chunks = [];
  // eslint-disable-next-line no-restricted-syntax
  for await (const chunk of readable) {
    chunks.push(chunk);
  }
  return chunks;
}

module.exports = {
  arrayToStream,
  readStream,
};
