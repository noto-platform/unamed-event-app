const t = require("tcomb-validation");

/**
 * TODO Maybe use tcomb form ?
 */

const correctTime = value =>
  new RegExp(/[0-9]{2}[\s]?[-][\s]?[0-9]{2}/g).test(value);

// For some reason the t.String allows empty strings...
const inputLength = value => value.length > 0;

const ValidationSchema = t.struct({
  title: t.refinement(t.String, inputLength),
  description: t.refinement(t.String, inputLength),
  openinghours: t.refinement(t.String, correctTime)
});

export default ValidationSchema;
