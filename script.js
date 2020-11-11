// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  addClasses();
  removeElements();
  generateList();
  addDisabled();
}

function addClasses() {
  const elementoSeleccionado = document.getElementsByClassName("selected")[0];
  const list = elementoSeleccionado.parentNode.parentNode;
  const hijos = [...list.children];
  hijos.forEach((child, index) => {
    targetElement = child.firstChild;
    targetElement.classList.add("element-" + (index + 1));
  });
}

function removeElements() {
  const primeraLista = document.getElementById("list1");
  const elementosParaEliminar = document.querySelectorAll(
    "#list1>li:nth-of-type(even)"
  );
  elementosParaEliminar.forEach(el => primeraLista.removeChild(el));
}

function generateList() {
  const primeraListaHijos = [...document.getElementById("list1").children];
  const siguienteLista = document.getElementById("list2");

  primeraListaHijos.forEach(el => {
    const elHijo = el.firstChild;
    const item = document.createElement("li");
    const boton = document.createElement("button");
    const text = document.createTextNode(elHijo.textContent);
    boton.className = elHijo.className;
    boton.appendChild(text);
    item.appendChild(boton);
    siguienteLista.appendChild(item);
  });
}

function addDisabled() {
  const ultimoBoton = document.querySelector("#list2>li:last-of-type>button");
  ultimoBoton.disabled = true;
}
