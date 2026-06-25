class Semver {
  minor = 0;

  mayor = 0;

  patch = 0;

  constructor(ver = '0.0.0') {
    const [mayor = 0, minor = 0, patch = 0] = ver
      .match(/[0-9.]/g)
      .join('')
      .split('.')
      .map((n) => parseInt(n));

    this.mayor = mayor;
    this.minor = minor;
    this.patch = patch;
  }

  bump(type) {
    if (type === 'mayor') this.bumpMayor();
    if (type === 'minor') this.bumpMinor();
    if (type === 'patch') this.bumpPatch();
  }

  bumpMayor() {
    this.mayor += 1;
    this.minor = 0;
    this.patch = 0;
  }

  bumpMinor() {
    this.minor += 1;
    this.patch = 0;
  }

  bumpPatch() { this.patch += 1; }

  toString() {
    return `${this.mayor}.${this.minor}.${this.patch}`;
  }
}

module.exports = Semver;
