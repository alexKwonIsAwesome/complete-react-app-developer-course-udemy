var Promise = require('es6-promise').Promise;

function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

//getTempCallback('Philadelphia', function(err, temp) {
//  if (err) {
//    console.log('error', err);
//  } else {
//    console.log('success', temp)
//  }
//});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject("City not Found");
    }, 1000);
  });
}

//getTempPromise('Philadelphia').then(function (temp) {
//  console.log('promise success', temp);
//}, function (err) {
//  console.log('promise error', err);
//})

// Challenge

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject("A & B need to be numbers");
    }
  });
}

addPromise(2, 3).then(function (numb) {
  console.log('promise success', numb);
}, function (err) {
  console.log('promise error', err);
});

addPromise("alex", 9).then(function (numb) {
  console.log('this should not show up');
}, function(err) {
  console.log('this should apper', err);
});
