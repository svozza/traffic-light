
// Setting Variables
var allLights = document.getElementsByClassName("light")
var yellowID = document.getElementById('yellow');
var greenID = document.getElementById('green');
var redID = document.getElementById('red');


// Adding click event listeners to each traffic light color id
for (var i = 0; i < allLights.length; i++){
  allLights[i].addEventListener("click", displayLight);
}

// This function turns off current light (all lights) and turns on only the selected light
function displayLight(e){
  lightsOff();

  if (e.target.id === 'red'){

    console.log('red clicked');
    redID.classList.add('light-visible');

  } else if (e.target.id === 'yellow'){

    console.log('yellow clicked');
    yellowID.classList.add('light-visible');

  } else {

    console.log('green clicked');
    greenID.classList.add('light-visible');
  }
}

// Helper function to turn off lights
function lightsOff(){
  for (var i = 0; i < allLights.length; i++) {
    allLights[i].classList.remove("light-visible");
  }
}
