function createUser() {
  const user = 'Masood'

  return function () {
    console.log(user)
  }
}

const create = createUser()
create()
