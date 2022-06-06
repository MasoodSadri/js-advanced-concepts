const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('It worked.')
  }, 3000)
})

myPromise.then(function (data) {
  console.log(data)
})
