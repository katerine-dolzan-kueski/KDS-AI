function toDoubleDigit(num) {
  return num.toString().padStart(2, '0');
}

function validNextReleaseTag(lastTag, nextTag) {
  if (!lastTag.includes(nextTag)) return nextTag;
  if (lastTag === nextTag) return `${nextTag}-01`;

  const sufix = lastTag.match(new RegExp(`${nextTag}-(.*)`));
  const numericSufix = parseInt(sufix);
  const nextSufix = Number.isNaN(numericSufix) ? toDoubleDigit(numericSufix + 1) : `${sufix}i`;

  return `${nextTag}-${nextSufix}`;
}

function validateReleaseTag(nextTag) {
  if (nextTag.match(/^v\d+\.\d+\.\d+(-[0-9a-z]+)?$/)) return nextTag;

  throw new Error('Provided tag mush follow the pattern: "vX.XXX.XXX"');
}

function newReleaseTag(lastTag) {
  const date = new Date();
  const YYYY = date.getFullYear();
  const MM = toDoubleDigit(date.getMonth() + 1);
  const DD = toDoubleDigit(date.getDate());

  const nextTag = `production-${YYYY}-${MM}-${DD}`;

  return validNextReleaseTag(lastTag, nextTag);
}

module.exports = {
  newReleaseTag,
  validateReleaseTag,
};
