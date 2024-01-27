function generar() {
    // Generamos el palo con un array y un random
    let palo = ["♦", "♥", "♠", "♣"];
    let paloRandom = palo[Math.floor(Math.random() * palo.length)];
    // Generamos el numero con un array y un random
    let numero = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    let numeroRandom = numero[Math.floor(Math.random() * numero.length)];
    // Cambiamos el color de los palos
    let color = document.getElementById("color");
    // Cambiamos el contenido de los elementos
    document.querySelector(".icono").innerHTML = paloRandom;
    document.querySelector(".icono2").innerHTML = paloRandom;
    document.querySelector(".carta").innerHTML = numeroRandom;
    color.className =
      (color.className === paloRandom) == "♦" || paloRandom == "♥"
        ? "text-danger"
        : "text-dark";
  }
  
  // Revisado el proyecto para ver los comentarios de la academia, mando ultima nueva version apara estar seguros que reciben la correcta.
  