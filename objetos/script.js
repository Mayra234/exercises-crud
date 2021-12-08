const objectsList = document.getElementById('objects-list');
const objectInput = document.querySelector('[name="object"]');
const addButton = document.getElementById('add');

let objects = [];

objectInput.addEventListener('keyup', function () {
  validate();
});

addButton.addEventListener('click', function () {
  addObject();
});

function addObject() {
  if (objects.includes(objectInput.value)) {
    alert(objectInput.value + ' ya se encuentra agregado');
  } else {
    objects.push(objectInput.value);
    console.log(objects);
    renderObjects();
  }

  objectInput.value = '';
  validate();
}

function updateObject(index) {
  const newObject = prompt('Escribe el nuevo nombre del objeto');
  if (objects.includes(newObject)) {
    alert(objectInput.value + ' ya se encuentra agregado');
  } else {
    objects[index] = newObject;
    renderObjects();
  }
}

function deleteObject(index) {
  objects = objects.filter((_, i) => index !== i);
  renderObjects();
}

function validate() {
  if (objectInput.value == '') {
    add.disabled = true;
  } else {
    add.disabled = false;
  }
}

function renderObjects() {
  objectsList.innerHTML = '';

  objects.forEach((object, index) => {
    //Se genera el elemento LI
    const li = document.createElement('li');
    li.id = `object-${index}`;
    li.style.marginBottom = '10px';
    li.innerText = object;

    //Se genera el botón de eliminar dentro del LI
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Eliminar';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => {
      deleteObject(index);
    });

    //Se genera el botón de actualizar dentro del LI
    const updateButton = document.createElement('button');
    updateButton.innerText = 'Actualizar';
    updateButton.style.marginLeft = '10px';
    updateButton.addEventListener('click', () => {
      updateObject(index);
    });

    li.appendChild(deleteButton);
    li.appendChild(updateButton);

    objectsList.appendChild(li);
  });
}

validate();
renderObjects();
