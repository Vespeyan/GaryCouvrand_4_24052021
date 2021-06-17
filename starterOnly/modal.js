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
}

// close modal event
closeF.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

// lancement de l'événement de vérification et de soumission du formulaire
submitButton.addEventListener("click", validation);



// fonction vérifiant si un prénom de plus de deux caractères a bien été rentré
function checkFirstName () {
  let firstName = document.getElementById("firstname").value;
  if (firstName.length < 2) {
  document.getElementById("error_firstname").style.display = "inline";
  return false; 
} else { 
    document.getElementById("error_firstname").style.display = "none";
    return true;
  }
}

// écoute de l'input et lancement de la fonction
firstNameInput.addEventListener("focusout", checkFirstName);


// fonction vérifiant si un nom de plus de deux caractères a bien été rentré
function checkLastName () {
  let lastName = document.getElementById("lastname").value;
  if (lastName.length < 2) {
  document.getElementById("error_lastname").style.display = "inline";
  return false;
} else {
    document.getElementById("error_lastname").style.display = "none";
    return true;
  }
}

// écoute de l'input et lancement de la fonction
lastNameInput.addEventListener("focusout", checkLastName);

// fonction vérifiant si un email a bien été rentré, ainsi que sa conformité
function checkEmail () {
  let email = document.getElementById("email").value;
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
  document.getElementById("error_email").style.display = "none";
  return true;
} else {
    document.getElementById("error_email").style.display = "inline";
    return false;
  }
}

// écoute de l'input et lancement de la fonction
emailInput.addEventListener("focusout", checkEmail);

// fonction vérifiant si une date de naissance a été rentrée, ainsi que sa conformité
function checkBirthDate () {
  let birthDate = document.getElementById("birthdate").value;
  if (birthDate == "") {
  document.getElementById("error_birthdate").style.display = "inline";
  return false;
} else {
    document.getElementById("error_birthdate").style.display = "none";
    return true;
  }
}

// écoute de l'input et lancement de la fonction
birthDateInput.addEventListener("focusout", checkBirthDate);

// fonction vérifiant si un nombre a été saisi dans la case des tournois
function checkQuantity () {
  let quantity = document.getElementById("quantity").value;
  if (quantity == "") {
  document.getElementById("error_quantity").style.display = "inline";
  return false;
} else {
    document.getElementById("error_quantity").style.display = "none";
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

/* 
fonction servant à empêcher la soumission automatique du formulaire, 
sans quoi la page se rafraîchit de suite, et empêche l'apparition du message de validation
*/
function validate() {
  return false;
}

// fonction servant à valider et soumettre le formulaire s'il est valide
function validation() {
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
      if (checkFirstName() == true 
      && checkLastName() == true  
      && checkEmail() == true 
      && checkBirthDate() == true 
      && checkQuantity() == true 
      && checkRadio() == true 
      && checkConditions() == true) {
        // le formulaire disparaît et le message de confirmation apparaît
        modalbg.style.display = "none";
        confirmation.style.display = "block";
        // après 2 secondes, le message de confirmation disparaît, et le formulaire est soumis
        setTimeout(function() {
          confirmation.style.display = "none";
          formulaire.submit();
        }, 2000);
        } else {
        return false;
          }
}




