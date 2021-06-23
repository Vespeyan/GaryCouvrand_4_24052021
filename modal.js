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
const formulaire = document.getElementById("formulaire");
const birthDate = document.getElementById("birthdate");
const confirmation = document.getElementById("confirmation");
const submitButton = document.getElementById("btn-submit");
const closeButton = document.getElementById("btn-close");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const conditionsInput = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  document.body.style.overflow = "hidden";
}

// close modal event
closeF.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

// écoute du bouton de soumission et lancement de la fonction de validation
submitButton.addEventListener("click", validate);


// fonction vérifiant si un prénom de plus de deux caractères a bien été rentré
function checkFirstName () {
  let firstName = document.getElementById("firstname");
  if (firstName.value.length < 2) {
  document.getElementById("error_firstname").style.display = "inline";
  firstName.style.borderColor = "red";
  return false; 
} else { 
    document.getElementById("error_firstname").style.display = "none";
    firstName.style.borderColor = "";
    return true;
  }
}

// écoute de l'input et lancement de la fonction
firstNameInput.addEventListener("focusout", checkFirstName);


// fonction vérifiant si un nom de plus de deux caractères a bien été rentré
function checkLastName () {
  let lastName = document.getElementById("lastname");
  if (lastName.value.length < 2) {
  document.getElementById("error_lastname").style.display = "inline";
  lastName.style.borderColor = "red";
  return false;
} else {
    document.getElementById("error_lastname").style.display = "none";
    lastName.style.borderColor = "";
    return true;
  }
}

// écoute de l'input et lancement de la fonction
lastNameInput.addEventListener("focusout", checkLastName);

// fonction vérifiant si un email a bien été rentré, ainsi que sa conformité
function checkEmail () {
  let email = document.getElementById("email");
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
  document.getElementById("error_email").style.display = "none";
  email.style.borderColor = "";
  return true;
} else {
    document.getElementById("error_email").style.display = "inline";
    email.style.borderColor = "red";
    return false;
  }
}

// écoute de l'input et lancement de la fonction
emailInput.addEventListener("focusout", checkEmail);

// fonction vérifiant si une date de naissance a été rentrée, ainsi que sa conformité
function checkBirthDate () {
  let birthDate = document.getElementById("birthdate");
  if (birthDate.value == "") {
  document.getElementById("error_birthdate").style.display = "inline";
  birthDate.style.borderColor = "red";
  return false;
} else {
    document.getElementById("error_birthdate").style.display = "none";
    birthDate.style.borderColor = "";
    return true;
  }
}

// écoute de l'input et lancement de la fonction
birthDateInput.addEventListener("focusout", checkBirthDate);

// fonction vérifiant si un nombre a été saisi dans la case des tournois
function checkQuantity () {
  let quantity = document.getElementById("quantity");
  if (quantity.value == "") {
  document.getElementById("error_quantity").style.display = "inline";
  quantity.style.borderColor = "red";
  return false;
} else {
    document.getElementById("error_quantity").style.display = "none";
    quantity.style.borderColor = "";
    return true;
  }
}

// écoute de l'input et lancement de la fonction
quantityInput.addEventListener("focusout", checkQuantity);

// fonction vérifiant si un bouton radio a bien été coché
function checkRadio () {  
    if (document.querySelectorAll('input[type="radio"]:checked').length === 0) {
    document.getElementById("error_locations").style.display = "inline";
    return false;
} else {
  document.getElementById("error_locations").style.display = "none";
  return true;
  }
}

// fonction vérifiant si les conditions d'utilisation ont été lues et acceptées
function checkConditions () {
  if (document.getElementById("checkbox1").checked) {
    document.getElementById("error_conditions").style.display = "none";
    return true;
  } else {
    document.getElementById("error_conditions").style.display = "inline";
    return false;
  }
}

// écoute de l'input et lancement de la fonction
conditionsInput.addEventListener("input", checkConditions);


// fonction servant à valider et soumettre le formulaire s'il est valide
function validate(e) {
  e.preventDefault();
  /* 
  appel de toutes les fonctions de vérification pour qu'un message d'erreur
  apparaisse sous CHAQUE input si nécessaire
  */
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthDate();
  checkQuantity();
  checkRadio();
  checkConditions();

      //  on vérifie que toutes les conditions sont remplies
      if (checkFirstName() 
        && checkLastName()  
        && checkEmail() 
        && checkBirthDate()
        && checkQuantity() 
        && checkRadio() 
        && checkConditions() == true) {
        // le formulaire disparaît et le message de confirmation apparaît
        let formData = document.getElementsByClassName("formData");
        for (let j = 0; j < formData.length; j++) {
          formData[j].style.display = "none";
        }
        submitButton.insertAdjacentHTML("beforebegin", '<p class ="confirmation2">Merci, votre réservation a bien été reçue !</p>');
        submitButton.style.display = "none";
        closeButton.style.display = "block";
        closeButton.addEventListener("click", closeModal);
       } else {
        return false;
          }
}





