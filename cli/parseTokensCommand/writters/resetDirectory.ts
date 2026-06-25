import fs from 'node:fs';

const resetDirectory = (dir: string) => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true });
  }
  fs.mkdirSync(dir, { recursive: true });
};

export default resetDirectory;
