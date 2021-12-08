const productForm = document.getElementById('product-form');
const productInput = document.getElementById('product');
const descriptionProduct = document.getElementById('description-product');
const productQuantity = document.getElementById('product-quantity');
const addProduct = document.getElementById('add-product');
const listProducts = document.getElementById('list-products');

let products = [];

productInput.addEventListener('keyup', function () {
  validate();
});

descriptionProduct.addEventListener('keyup', function () {
  validate();
});

productQuantity.addEventListener('keyup', function () {
  validate();
});

addProduct.addEventListener('click', function () {
  addProducts();
});

function addProducts() {
  if (products.includes(productInput.value)) {
    alert('Este producto ya se encuentra registrado');
  } else {
    products.push({
      name: productInput.value,
      description: descriptionProduct.value,
      quantity: productQuantity.value,
    });
    console.log(products);
    renderProducts();
  }

  productInput.value = '';
  descriptionProduct.value = '';
  productQuantity.value = '';

  validate();
}

function updateProducts(index) {
  const newProduct = prompt('Escribe el nuevo nombre del producto');
  const newDescription = prompt('Escribe la nueva descripción del producto');
  const newQuantity = prompt('Escribe la nueva cantidad del producto');
  if (products.includes(newProduct, newDescription, newQuantity)) {
    alert('Este producto ya se encuentra registrado');
  } else {
    products[index] = {
      name: newProduct,
      description: newDescription,
      quantity: newQuantity,
    };
    renderProducts();
  }
}

function deleteProducts(index) {
  products = products.filter((_, i) => index !== i);
  renderProducts();
}

function validate() {
  if (
    (productInput.value == '',
    descriptionProduct.value == '',
    productQuantity.value == '')
  ) {
    addProduct.disabled = true;
  } else {
    addProduct.disabled = false;
  }
}

function renderProducts() {
  listProducts.innerHTML = '';

  products.forEach((product, index) => {
    //Se genera el elemento LI
    const li = document.createElement('li');
    li.id = `product-${index}`;
    li.style.marginBottom = '10px';
    li.innerText = `${product.name} ${product.description} ${product.quantity}`;

    //Se genera el botón de eliminar dentro del LI
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger';
    deleteButton.innerText = 'Eliminar';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => {
      deleteProducts(index);
    });

    //Se genera el botón de actualizar dentro del LI
    const updateButton = document.createElement('button');
    updateButton.className = 'btn btn-primary';
    updateButton.innerText = 'Actualizar';
    updateButton.style.marginLeft = '10px';
    updateButton.addEventListener('click', () => {
      updateProducts(index);
    });

    li.appendChild(deleteButton);
    li.appendChild(updateButton);

    listProducts.appendChild(li);
  });
}

validate();
renderProducts();
