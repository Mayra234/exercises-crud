const cardAnimal = document.getElementById('card-animal');
const animalForm = document.getElementById('animal-form');
const animalInput = document.getElementById('animal-input');
const animalDescription = document.getElementById('animal-description');
const animalType = document.getElementById('type-animals');
const addAnimal = document.getElementById('add-animal');
const animalsTable = document.getElementById('animals-table');
const animalFields = document.querySelectorAll('.animal-field');

let animals = [];

animalFields.forEach((animalField) => {
  animalField.addEventListener('keyup', validate);
});

addAnimal.addEventListener('click', function () {
  addAnimals();
});

function addAnimals() {
  if (animals.includes(animalInput.value)) {
    alert('Este animal ya se encuentra registrado');
  } else {
    animals.push({
      name: animalInput.value,
      description: animalDescription.value,
      type: animalType.value,
    });
    renderAnimal();
  }
  animalInput.value = '';
  animalDescription.value = '';
  animalType.value = 'Elige el tipo de animal';
  validate();
}

function updateAnimal(index) {
  const newNameAnimal = prompt('Escribe el nuevo nombre del animal');
  const newDescriptionAnimal = prompt(
    'Escribe la nueva descripción del animal'
  );
  const newTypeAnimal = prompt('Escribe el nuevo tipo de animal');

  if (animals.includes(newNameAnimal)) {
    alert('Este animal ya se encuentra registrado');
  } else {
    animals[index] = {
      name: newNameAnimal,
      description: newDescriptionAnimal,
      type: newTypeAnimal,
    };
    renderAnimal();
  }
}

function deleteAnimal(index) {
  animals = animals.filter((_, i) => index !== i);
  renderAnimal();
}

function renderAnimal() {
  animalsTable.innerHTML = '';

  //tbody
  animals.forEach((animal, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${animal.name}</td>
    <td>${animal.description}</td>
    <td>${animal.type}</td>`;

    const td = document.createElement('td');

    //Se genera el botón de eliminar dentro del LI
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Eliminar';
    deleteButton.classList = 'btn btn-danger';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', function () {
      deleteAnimal(index);
    });

    //Se genera el botón de actualizar dentro del LI
    const updateButton = document.createElement('button');
    updateButton.innerText = 'Actualizar';
    updateButton.classList = 'btn btn-primary';
    updateButton.style.marginLeft = '10px';
    updateButton.addEventListener('click', () => {
      updateAnimal(index);
    });

    td.appendChild(deleteButton);
    td.appendChild(updateButton);
    row.appendChild(td);

    animalsTable.appendChild(row);
  });
}

function validate() {
  for (let animalField of animalFields) {
    if (animalField.value == '') {
      addAnimal.disabled = true;
      return;
    }
  }
  addAnimal.disabled = false;
}

validate();
renderAnimal();
