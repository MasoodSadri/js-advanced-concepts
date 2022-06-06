this.title = 'Book'

function info() {
  console.log('Title: ' + this.title)
}

// info()

const product = {
  productInfo: info,
  title: title,
}

product.productInfo()
