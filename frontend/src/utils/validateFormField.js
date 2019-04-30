import validator from "validator";
import * as R from "ramda";

const isEmail = R.curry(value => validator.isEmail(value));
const isMin = R.curry((value, min) => value.length > min);
const isMax = R.curry((value, max) => value.length < max);

// export const validateFormField = (value, rules) => {
//   const hasError = msg => R.when(R.equals(R.__, false), () => msg);
//   const hasEmailError = hasError("Email is not valid")(isEmail(value));

//   const checkRule = R.cond([
//     [R.equals("email"), R.always(hasEmailError)]
//   ]);

//   return R.map(checkRule)(rules);
// };
