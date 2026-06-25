const { exec } = require('child_process');

async function gitCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, output) => {
      if (error) reject(error);
      resolve(output.replace('\n', ''));
    });
  });
}

async function getCurrentBranch() {
  const branch = await gitCommand('git rev-parse --abbrev-ref HEAD');

  return branch.replace('\n', '');
}

async function getCurrentCommit() {
  const sha = await gitCommand('git rev-parse HEAD');

  return sha.replace('\n', '');
}

async function commitAndPush(files, message) {
  // eslint-disable-next-line no-console
  await gitCommand(`git add ${files}`);
  // eslint-disable-next-line no-console
  console.log(`✅ Files ${files} stashed`);
  await gitCommand(`git commit -nm ${JSON.stringify(message)}`);
  // eslint-disable-next-line no-console
  console.log(`✅ Commit ${JSON.stringify(message)} created`);
  await gitCommand('git push');
  // eslint-disable-next-line no-console
  console.log('✅ Changes pushed');
}

module.exports = {
  commitAndPush,
  getCurrentBranch,
  getCurrentCommit,
};
