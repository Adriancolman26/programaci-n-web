function agregarElementos() {
  const input = document.getElementById("input").value;
  const lista = document.getElementById("lista");

  // Pasos para crear elementos y asignar un valor de texto
  const elementoLista = document.createElement("li"); // Primer paso appendChild del elemento hijo
  elementoLista.textContent = input; // Segundo paso appendChild del elemento hijo
  lista.appendChild(elementoLista); // Tercer paso appendChild del elemento hijo

  const button = document.createElement("button");
  button.textContent = "borrar";
  elementoLista.appendChild(button);

  button.onclick = function () {
    lista.removeChild(elementoLista);
  };
}
