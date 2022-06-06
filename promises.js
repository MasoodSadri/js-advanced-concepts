fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    return response.json()
  })
  .catch(function (err) {
    console.log(err)
  })
  .then(function (data) {
    console.log(data)
  })
