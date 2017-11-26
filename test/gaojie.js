const _ = require('underscore')
function always(params) {
  return function () {
    return params
  }
}
function checker() {
  var validators = _.toArray(arguments);
  // console.log('validators', validators);
  return function (obj) {
    return _.reduce(validators, function (errs, check) {
      // console.log('err', errs)
      // console.log('check', check);
      // console.log('check(obj)',check(obj));
      // obj 没有任何用处
      if (check(obj)) {
        return errs
      } else {
        return _.chain(errs).push(check.message).value()
      }
    }, [])
  }
}
// var alwaysPasses = checker(always(true),always(true))
// alwaysPasses({})
var fails = always(false)
fails.message = 'a failure  in life ';
var alwaysFail = checker(fails)
// console.log(alwaysFail({}))
// console.log('');


console.log(['11', '11', '11', '11'].map(parseInt))

function curry(fun) {
  return function (arguments) {
    return fun(arguments)
  }
}
console.log(['11', '11', '11', '11'].map(curry(parseInt)))