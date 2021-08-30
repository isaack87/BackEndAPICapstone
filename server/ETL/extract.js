require("csv-parse")

async function download(target) {
  return new Promise(async (resolve, reject) => {
    const { url, out, name } = target;

    const request = {
      url,
      responseType: 'stream',
    };

    try {
      const response = await axios(request);
      let output;

      if (url.endsWith('.zip')) {
        output = unzip.Extract({ path: out });
      } else {
        const file = path.resolve(out, name);
        output = fs.createWriteStream(file);
      }

      const stream = response.data
        .pipe(output)
        .on('finish', resolve)
        .on('error', reject);
    } catch (err) {
      reject(err);
    }
  });
}

stream.pipe(csvStream).pipe(format).pipe(merge);

const csvStream = csv({
  columns: true,
  delimiter: ';',
  trim: true,
});
