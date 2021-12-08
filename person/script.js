const peopleForm = document.getElementById('people-form');
const fullName = document.getElementById('full-name');
const documentNumber = document.getElementById('document-number');
const age = document.getElementById('age');
const height = document.getElementById('people-height');
const weight = document.getElementById('people-weight');
const addPeople = document.getElementById('add-people');
const peopleTable = document.getElementById('people-information');
const personFields = document.querySelectorAll('.person-field');

let people = [
  {
    fullName: 'alejandro',
    documentNumber: 458152,
    age: 40,
    height: 180,
    weight: 70,
  },
];

personFields.forEach((personField) => {
  personField.addEventListener('keyup', validate);
});

addPeople.addEventListener('click', () => {
  addPerson();
});

function addPerson() {
  if (
    people.includes(fullName.value) ||
    people.includes(documentNumber.value)
  ) {
    alert('Esta persona ya se encuentra registrada');
  } else {
    people.push({
      fullName: fullName.value,
      documentNumber: documentNumber.value,
      age: age.value,
      height: height.value,
      weight: weight.value,
    });
    renderPeople();
    console.log(people);
  }
}

function deletePeople(index) {
  people = people.filter((_, i) => index !== i);
  renderPeople();

  console.log(index);
}

function updatePeople(index) {
  const updatedFullName = prompt('Escribe el nuevo nombre');
  const updatedDocumentNumber = prompt('Escribe el nuevo número de documento');
  const updatedAge = prompt('Escribe la nueva de edad');
  const updatedHeight = prompt('Escribe la nueva altura de la persona');
  const updatedWeight = prompt('Escribe el nuevo peso de la persona');
  if (
    people.includes(updatedFullName) ||
    people.includes(updatedDocumentNumber)
  ) {
    alert('Esta persona ya se encuentra registrada');
  } else {
    people[index] = {
      fullName: updatedFullName,
      documentNumber: updatedDocumentNumber,
      age: updatedAge,
      height: updatedHeight,
      weight: updatedWeight,
    };
    renderPeople();
  }
}

function renderPeople() {
  peopleTable.innerHTML = '';
  people.forEach((person, index) => {
    // creación de la tabla
    const row = document.createElement('tr');
    row.innerHTML = `<td>${person.fullName}</td>
    <td>${person.documentNumber}</td>
    <td>${person.age}</td>
    <td>${person.height}</td>
    <td>${person.weight}</td>`;

    const td = document.createElement('td');

    // creación de botón eliminar
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger';
    deleteButton.innerText = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      deletePeople(index);
    });

    // creación de botón actualizar
    const updateButton = document.createElement('button');
    updateButton.className = 'btn btn-primary';
    updateButton.innerText = 'Actualizar';
    updateButton.addEventListener('click', () => {
      updatePeople(index);
    });

    td.appendChild(deleteButton);
    td.appendChild(updateButton);
    row.appendChild(td);

    peopleTable.appendChild(row);
  });
}

function validate() {
  for (let personField of personFields) {
    if (personField.value == '') {
      addPeople.disabled = true;
      return;
    }
  }
  addPeople.disabled = false;
}

validate();
renderPeople();
