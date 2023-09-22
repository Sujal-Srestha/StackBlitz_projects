/* Iteration 4: Make the Canvas App Functional */

//  Code for changing Faceplate color
const imgfaceplate = document.getElementById("face-plate");

const buttonFacePlate = document.getElementById("buttonfaceplate");

buttonFacePlate.oninput = () =>{

  imgfaceplate.style.fill = buttonFacePlate.value;
  
}

//  Code for changing Helmet color
const imghelmetplate = document.getElementById("helmet");

const buttonHelmetPlate = document.getElementById("buttonhelmet");

buttonHelmetPlate.oninput = () =>{

  imghelmetplate.style.fill = buttonHelmetPlate.value;

}

//  Code for changing Eyes color
const imgeyesplate = document.getElementById("eyes");

const buttonEyesPlate = document.getElementById("buttoneyes");

buttonEyesPlate.oninput = () =>{

  imgeyesplate.style.fill = buttonEyesPlate.value;

}

//  Code for changing Backgroung color
const imgbackgroundplate = document.getElementById("background");

const buttonBackgroundPlate = document.getElementById("buttonbackground");

buttonBackgroundPlate.oninput = () =>{

  imgbackgroundplate.style.fill = buttonBackgroundPlate.value;

}