class Product {
  constructor() {
    this.title = 'Book'
  }

  info() {
    console.log('Title 1: ' + this.title)
  }

  delayMethod() {
    setTimeout(
      function () {
        console.log(this)
        console.log('Title 2: ' + this.title)
      }.bind(this),
      3000
    )
  }
}

const book = new Product()

book.info()
book.delayMethod()
