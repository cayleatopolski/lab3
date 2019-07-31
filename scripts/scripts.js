"use strict";

const addressBook = [];

function handleSubmit(event) {
  event.preventDefault();
  addressBook.push({
    name: event.target[0].value,
    email: event.target[1].value,
    phone: event.target[2].value,
    relation: event.target[3].value
  });
  displayPeople();
}

function displayPeople() {
  document.querySelector(".new_contact").innerHTML = "";

  addressBook.forEach((person, index) => {
    const div = document.createElement("div");
    div.classList.add("contact_card");
    div.innerHTML = `
    <p>Name: ${person.name}</p>
    <p>Email: ${person.email}</p>
    <p>Phone: ${person.phone}</p>
    <p>Relation: ${person.relation}</p>
    <i class="fa fa-trash" index = "${index}"></i>
    `;
    document.querySelector(".new_contact").append(div);
  });
}

document.querySelector("form").addEventListener("submit", handleSubmit);

function handleDelete(event) {
  addressBook.splice(Number(event.target.attributes[0].value), 1);
  displayPeople();
}

document.querySelector(".new_contact").addEventListener("click", handleDelete);
