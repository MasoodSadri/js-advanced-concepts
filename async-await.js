async function sendRequest() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    console.log(response)

    const data = await response.json()

    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

sendRequest()
