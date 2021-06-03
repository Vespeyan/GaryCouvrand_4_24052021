function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeF = document.querySelectorAll(".close");
let birthDate = document.getElementById("birthdate");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeF.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

function checkFirstName () {
  let firstName = document.getElementById("firstname").value;
  if (firstName.length < 2) {
  document.getElementById("error_firstname").innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  return "non";
} else { 
    document.getElementById("error_firstname").innerHTML="";
    return "oui";
  }
}

function checkLastName () {
  let lastName = document.getElementById("lastname").value;
  if (lastName.length < 2) {
  document.getElementById("error_lastname").innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  return "non";
} else {
    document.getElementById("error_lastname").innerHTML="";
    return "oui";
  }
}

function checkEmail () {
  let email = document.getElementById("email").value;
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
  document.getElementById("error_email").innerHTML=""; 
  return "oui";
} else {
    document.getElementById("error_email").innerHTML="Veuillez entrer un email valide.";
    return "non";
  }
}

function checkBirthDate () {
  let birthDate = document.getElementById("birthdate").value;
  let formatDate = /(\d{4})-(\d{2})-(\d{2})/;
  if (formatDate.test(birthDate)) {
  document.getElementById("error_birthdate").innerHTML=""; 
  return "oui";
} else {
    document.getElementById("error_birthdate").innerHTML="Veuillez entrer une date de naissance valide.";
    return "non";
  }
}

function checkQuantity () {
  let quantity = document.getElementById("quantity").value;
  if (quantity == "") {
  document.getElementById("error_quantity").innerHTML="Veuillez indiquer une quantité."
  return "non";
} else {
    document.getElementById("error_quantity").innerHTML="";
    return "oui";
  }
}

function checkRadio () {  
    if (document.querySelectorAll('input[type="radio"]:checked').length === 0) {
    document.getElementById("error_locations").innerHTML="Veuillez cocher une case.";
    return "non";
} else {
  document.getElementById("error_locations").innerHTML="";
  return "oui";
}
}

function checkConditions () {
  if (document.getElementById("checkbox1").checked) {
    document.getElementById("error_conditions").innerHTML="";
    return "oui";
  } else {
    document.getElementById("error_conditions").innerHTML="<p>Veuillez valider les conditions d'utilisation.</p>";
    return "non";
  }
}

function validate() {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthDate();
  checkQuantity();
  checkRadio();
  checkConditions();

  if (checkFirstName() == "oui" && checkLastName() == "oui" && checkEmail() == "oui" && checkEmail() == "oui" && checkBirthDate() == "oui" && checkRadio() == "oui" && checkConditions() == "oui") {
    return true;
  } else {
    return false;
  }
 
}

  
