// Problem 1
function checkIfAdult(age) {
  return age >= 18 ? "La persona es un adulto." : "La persona es un menor.";
}

function checkAge() {
  let userAge = parseInt(document.getElementById("ageInput").value);
  let result = checkIfAdult(userAge);
  console.log(result);
  document.getElementById("result").textContent = result;
}

// Problem 2

function calculateFinalGrade() {
  let name = document.getElementById("name").value;
  let studentId = document.getElementById("studentId").value;
  let exam = parseFloat(document.getElementById("exam").value);
  let assignments = parseFloat(document.getElementById("assignments").value);
  let attendance = parseFloat(document.getElementById("attendance").value);
  let research = parseFloat(document.getElementById("research").value);

  let finalGrade =
    exam * 0.2 + assignments * 0.4 + attendance * 0.1 + research * 0.3;

  console.log(finalGrade);
  document.getElementById("output").innerHTML = `
  Nombre del estudiante: ${name} <br>
  ID del estudiante: ${studentId} <br>
  Calificación final: ${finalGrade.toFixed(2)} <br>
`;
}

// Problem 3
function calculateSalaryIncrease() {
  const employeeName = document.getElementById("employeeName").value;
  const salary = parseFloat(document.getElementById("salary").value);
  const category = document.getElementById("category").value;

  let increase;

  switch (category) {
    case "A":
      increase = 0.15;
      break;
    case "B":
      increase = 0.3;
      break;
    case "C":
      increase = 0.1;
      break;
    case "D":
      increase = 0.2;
      break;
    default:
      document.getElementById("increaseResult").innerText = "Invalid category.";
      return;
  }

  const salaryIncrease = salary * increase;
  const finalSalary = salary + salaryIncrease;
  console.log(finalSalary);
  document.getElementById("increaseResult").innerHTML = `
                  Nombre del empleado: ${employeeName} <br>
                  Salario original: ${salary.toFixed(2)} $ <br>
                  Categoría: ${category} <br>
                  Aumento de salario: ${salaryIncrease.toFixed(2)} $ <br>
                  Salario final: ${finalSalary.toFixed(2)} $              `;
}

// Problem 4

function compareNumbers() {
  const number1 = parseInt(document.getElementById("number1").value);
  const number2 = parseInt(document.getElementById("number2").value);

  let numberResult;

  if (number1 > number2) {
    numberResult = `El número mayor es el primer número: ${number1}`;
  } else if (number2 > number1) {
    numberResult = `El número mayor es el segundo número: ${number2}`;
  } else {
    numberResult = `Ambos números son iguales: ${number1} = ${number2}`;
  }
  console.log(numberResult);
  document.getElementById("numberResult").innerText = numberResult;
}

// Problem 5

function calculateDiscount() {
  const car = document.getElementById("car").value;
  let discount;
  switch (car) {
    case "Ford Fiesta":
      discount = 0.05;
      break;
    case "Ford Focus":
      discount = 0.1;
      break;
    case "Ford Escape":
      discount = 0.2;
      break;
    default:
      discount = 0;
  }
  const discountPercentage = discount * 100;
  console.log(discountPercentage);
  document.getElementById(
    "discountResult"
  ).innerText = `El coche seleccionado es: ${car}. El descuento es: ${discountPercentage}%.`;
}

//  Problem 6

function calculateTravelDiscount() {
  const origin = document.getElementById("origin").value;
  const destination = document.getElementById("destination").value;
  let traveldiscount;

  if (origin === "Ciudad de Palma") {
    switch (destination) {
      case "La costa del Sol":
        traveldiscount = 0.05;
        break;
      case "Panchimalco":
        traveldiscount = 0.1;
        break;
      case "Puerto el Triunfo":
        traveldiscount = 0.15;
        break;
      default:
        traveldiscount = 0;
    }
  } else {
    traveldiscount = 0;
  }

  const discountPercentage = traveldiscount * 100;
  console.log(discountPercentage);
  document.getElementById(
    "destinationResult"
  ).innerText = `El destino seleccionado es: ${destination}. El descuento es: ${discountPercentage}%.`;
}

// Problem 7

function analyzeNumbers() {
  let negativeCount = 0;
  let positiveCount = 0;
  let multiplesOf15 = 0;
  let evenSum = 0;

  for (let j = 11; j <= 20; j++) {
    const countnumber = parseInt(document.getElementById("number" + j).value);
    console.log(j);
    console.log("Number", j, ":", countnumber);

    if (countnumber < 0) {
      negativeCount++;
    } else if (countnumber > 0) {
      positiveCount++;
    }

    if (countnumber % 15 === 0) {
      multiplesOf15++;
    }

    if (countnumber % 2 === 0) {
      evenSum += countnumber;
    }
  }

  document.getElementById("numberCountResult").innerHTML = `
      Número de valores negativos: ${negativeCount}<br>
      Número de valores positivos: ${positiveCount}<br>
      Número de múltiplos de 15: ${multiplesOf15}<br>
      Suma de números pares: ${evenSum}
  `;
}

// Problem 8

function generateMultiplicationTable() {
  const multNumber = parseInt(document.getElementById("multnumber").value);
  let multresult = "";

  for (let i = 1; i <= 10; i++) {
    multresult += `${multNumber} x ${i} = ${multNumber * i}<br>`;
  }

  console.log(multresult);
  document.getElementById("multresult").innerHTML = multresult;
}

//  Problem 9

function convertTemperature() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  const fahrenheit = (celsius * 9) / 5 + 32;
  let message = "";

  if (fahrenheit >= 14 && fahrenheit < 32) {
    message = "Temperatura baja";
  } else if (fahrenheit >= 32 && fahrenheit < 68) {
    message = "Temperatura adecuada";
  } else if (fahrenheit >= 68 && fahrenheit < 96) {
    message = "Temperatura alta";
  } else {
    message = "Temperatura desconocida";
  }

  document.getElementById("tempresult").innerHTML = `
      <p>${celsius}°C = ${fahrenheit.toFixed(2)}°F</p>
      <p>${message}</p>
  `;
}

// Problem 10

function calculateAverages() {
  let morningSum = 0;
  let afternoonSum = 0;
  let nightSum = 0;

  for (let i = 1; i <= 5; i++) {
    morningSum += parseInt(document.getElementById("morning" + i).value) || 0;
  }
  let morningAverage = morningSum / 5;

  for (let i = 1; i <= 6; i++) {
    afternoonSum +=
      parseInt(document.getElementById("afternoon" + i).value) || 0;
  }
  let afternoonAverage = afternoonSum / 6;

  for (let i = 1; i <= 11; i++) {
    nightSum += parseInt(document.getElementById("night" + i).value) || 0;
  }
  let nightAverage = nightSum / 11;

  let highestAverage = "Unknown";
  if (morningAverage > afternoonAverage && morningAverage > nightAverage) {
    highestAverage = "Turno de la mañana";
  } else if (
    afternoonAverage > morningAverage &&
    afternoonAverage > nightAverage
  ) {
    highestAverage = "Turno de la tarde";
  } else if (nightAverage > morningAverage && nightAverage > afternoonAverage) {
    highestAverage = "Turno de la noche";
  }

  document.getElementById("averageResult").innerHTML = `
      Promedio de edad del turno de la mañana: ${morningAverage.toFixed(2)}<br>
      Promedio de edad del turno de la tarde: ${afternoonAverage.toFixed(2)}<br>
      Promedio de edad del turno de la noche: ${nightAverage.toFixed(2)}<br>
      Turno con el mayor promedio de edad: ${highestAverage}<br>
  `;
}
