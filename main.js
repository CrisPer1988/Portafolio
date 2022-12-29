function addNewAttr(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].taxes = array[i].price * 0.19
        
        
    }
    return Math.round().array
    
  }

  console.log(addNewAttr([
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    }
  ]
  ));
  