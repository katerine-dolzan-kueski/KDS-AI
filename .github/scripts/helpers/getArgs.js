const { getInput } = require('./github.utils');

function prepareArgKey(key, shortcuts) {
  const noDashKey = key.replace(/^-*/, '');

  return shortcuts[noDashKey] || noDashKey;
}

function getArgs(shortcuts = {}) {
  const mapArgs = process.argv.reduce((params, arg) => {
    if (arg.includes('=')) {
      const [key, value] = arg.split('=');
      params.set(prepareArgKey(key, shortcuts), value);
    } else if (params.has('next')) {
      const key = params.get('next');
      params.set(prepareArgKey(key, shortcuts), arg);
      params.delete('next');
    } else if (arg.startsWith('-')) {
      params.set('next', arg.replace(/^-*/, ''));
    }
    return params;
  }, new Map());

  const inputEntries = Object.values(shortcuts).map(key => {
    const inputValue = getInput(key);

    if (!inputValue) return false;

    return [key, inputValue];
  }).filter(Boolean);

  const mappedEntries = [...inputEntries, ...mapArgs.entries()];

  return Object.fromEntries(mappedEntries);
}
module.exports = {
  getArgs,
};

