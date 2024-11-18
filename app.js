const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: [40, Infinity] },
];

// IMC = poids en kg / taille² en m

//  Gérez les inputs, retrouvez leur valeur dans votre script quand on clique sur le bouton.
//  Faites une validation basique, empêchez le calcul si l'utilisateur laisse un ou deux inputs vides. 
// Montrez également un message pour l'informer de l'erreur (ex : "Veuillez remplir les inputs").
//  Calculez l'IMC avec les valeurs rentrées.
//  Calculez le rang de l'IMC par rapport à "IMCData"
//  Remplissez l'interface en fonction des résultats
  
  let form = document.querySelector("form");
  

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  imcCalc();
    });
    let inputs = document.querySelectorAll("input");
    let res = document.querySelector(`#result`);
   
  function imcCalc(){
    let poids = inputs[1].value;
    let taille = inputs[0].value;
    res.innerHTML = "";
    let isValid = true;
    inputs.forEach((input) =>{
      let val = input.value;
      let name = input.getAttribute("name");
      if (!val) {
        showError(`Le champ ${name} ne doit pas être vide`);
        isValid = false;
        }else if (val<=0){
        showError(`Le nombre dans le champ ${name} doit être positive`);
        isValid = false;
      }
      });
      if (!isValid){
        return;
      };
      // let poids = document.querySelector("#poids").value;
  // let taille = document.querySelector("#taille").value;
  // let imc = Math.floor(poids / ((taille / 100) ** 2)*10)/10;
  let imc = (poids/Math.pow(taille / 100, 2)).toFixed(1);
  // let bmirange = BMIData.map(value => value.range);
  
  let property = BMIData.find(value => 
    imc >= value.range[0] && imc < value.range[1]
  );
  if (property){
    res.textContent = `Votre IMC est ${imc}.  ${property.name}`;
    res.style.color = property.color;
  }
 };
 function showError(message){
  res.innerHTML +=` ${message} <br>`;
 }

   