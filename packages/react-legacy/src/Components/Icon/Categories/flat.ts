/**
 * Flat icons are the colored counterpart of glyph icons and are known
 * for their subtle use of highlight and shadow. This lack of contrast
 * is what gives this popular icon style the name ‘flat’.
 * E.g. https://www.creativefreedom.co.uk/icon-designers-blog/flat-icons-a-trend-in-icon-design/
 * */

export const flat = {};

export const iconNames = Object
  .keys(flat)
  .reduce(
    (dictionary, name) => ({ ...dictionary, [name]: name }),
    {},
  );
