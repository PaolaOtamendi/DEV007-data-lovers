import data from './data/rickandmorty/rickandmorty.js';
console.log(data.results);
import { filtrar1, filtrar2, isalfabeto, filtrarorigen, episodiosTotal } from './data.js';

/*----------------------------------------------------AQUÍ EMPIEZA MANEJO DE SECCIONES-------------------------------------------------*/
const seccion1 = document.getElementById("container");
const seccion2 = document.getElementById("seccion2");
const seccion3 = document.getElementById("seccion3");
const seccion4 = document.getElementById("seccion4");
const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");

//BOTONES HEADER 
const headerInicio = document.getElementById("headerInicio");
const headerPersonajes = document.getElementById("headerPersonajes");
const headerEpisodios = document.getElementById("headerEpisodios");
const headerMultiversos = document.getElementById("headerMultiversos");
//TERMINA BOTONES HEADER 

seccion2.style.display = 'none';
seccion3.style.display = 'none';
seccion4.style.display = 'none';
header2.style.display = 'none';


//INTERACCIÓN BOTONES HEADER 
headerInicio.addEventListener("click", () => {
  cerrarSeccion2()
  cerrarSeccion3()
  cerrarSeccion4()
});
headerPersonajes.addEventListener("click", () => {
  cerrarSeccion3()
  cerrarSeccion1()
  /*window.location.reload()*/
});
headerMultiversos.addEventListener("click", () => {
  abrirSeccion3()
});
headerEpisodios.addEventListener("click", () => {
  abrirSeccion4()
  mostrarEpisodios(episodiosTotal)
});
//TERMINA INTERACCIÓN BOTONES HEADER 


function cerrarSeccion1() {
  seccion1.style.display = 'none';
  seccion2.style.display = 'block';
  seccion3.style.display = 'none';
  seccion4.style.display = 'none'; 
  header2.style.display = 'block';
  header1.style.display = 'none';
}

function cerrarSeccion2() {
  seccion2.style.display = 'none';
  seccion1.style.display = 'flex';
  seccion3.style.display = 'none';
  seccion4.style.display = 'none';
  header1.style.display = 'flex';
  header2.style.display = 'none';
}

function abrirSeccion3() {
  seccion1.style.display = 'none';
  seccion2.style.display = 'none';
  seccion3.style.display = 'block';
  seccion4.style.display = 'none';
  header2.style.display = 'block';
  header1.style.display = 'none';
}

function cerrarSeccion3() {
  seccion2.style.display = 'none';
  seccion1.style.display = 'flex';
  seccion3.style.display = 'none';
  header1.style.display = 'flex';
  header2.style.display = 'none';
}

function abrirSeccion4() {
  seccion1.style.display = 'none';
  seccion2.style.display = 'none';
  seccion3.style.display = 'none';
  seccion4.style.display = 'block';
  header2.style.display = 'block';
  header1.style.display = 'none';
}

function cerrarSeccion4() {
  seccion2.style.display = 'none';
  seccion1.style.display = 'flex';
  seccion3.style.display = 'none';
  seccion4.style.display = 'none';
  header1.style.display = 'flex';
  header2.style.display = 'none';
}

/*----------------------------------------------------AQUÍ TERMINA MANEJO DE SECCIONES-------------------------------------------------*/

//CIERRA SECCIÓN 1 Y ABRE LA 2
const botonTodos = document.getElementById("botonTodos");
botonTodos.addEventListener("click", () => {
  cerrarSeccion1();
  mostrarTodo();
});

//CIERRA SECCIÓN 1 Y ABRE LA 3
const botonMultiversos = document.getElementById("botonMultiversos");
botonMultiversos.addEventListener("click", () => {
  abrirSeccion3();
  mostrarTodo();
});

/*----------------------------------------------------AQUÍ EMPIEZA MANEJO BUSCADORES-----------------------------------------------*/

//BUSCADORES
const buscador1 = document.getElementById("buscador1");
const resultado = document.querySelector('#resultado');
const espacioPersonajes = document.getElementById("personajes");

//DA INTERACCIÓN A LOS BUSCADORES
const botonBuscar = document.getElementById("botonBuscar");/*SECCIÓN-1*/
const botonBuscador = document.getElementById("botonBuscador");/*SECCIÓN-2*/
const buscadorDos = document.getElementById("buscadorDos");

botonBuscar.addEventListener("click", () => { /*SECCIÓN-1*/
  resultado.innerHTML = '';
  const texto1 = buscador1.value.toLowerCase();
  buscador1.value = '';
  cerrarSeccion1();
  mostrarBuscador(texto1)
})

botonBuscador.addEventListener("click", () => { /*SECCIÓN-2*/
  resultado.innerHTML = '';
  const texto2 = buscadorDos.value.toLowerCase();
  mostrarBuscador2(texto2)
  buscadorDos.value = '';
})

function mostrarBuscador(texto1) { /*SECCIÓN-1*/
  resultado.innerHTML = '';
  const personajes = filtrar1(texto1);
  if (personajes.length > 0) {
    personajes.forEach(personaje => {
      resultado.innerHTML += `
        <div class="tarjetaP" id="tarjetaP"> 
        <div class="cardCompleta" id="cardCompleta">
        <div class="tarjetaFrente" id="tarjetaFrente">
        <div class="bg"></div>
        <div class="body_tarjetaFrente" id="body_tarjetaFrente">
        <img class="imagenTarjeta" src="${personaje.image}"></img> <br>
        <h4 class="titulotarjetas">${personaje.name}</h4>
        </div>
        </div>
        <div class="tarjetaAtras" id="tarjetaAtras">
        <div class="body_tarjetaAtras" id="body_tarjetaAtras">
        <p class="textoTarjeta">
        Estatus: ${personaje.status} <br>
        Especie: ${personaje.species} <br>
        Tipo: ${personaje.type} <br>
        Genero: ${personaje.gender} <br>
        Origen: ${personaje.origin.name} <br>
        Locación: ${personaje.location.name}
        </p>
        </div>
        </div>
        </div>
        </div>
        `
      espacioPersonajes.style.display = 'none'
    })
  } else {
    resultado.innerHTML += `
        <li>Personaje no encontrado</li>
        `
  }
}

function mostrarBuscador2(texto2) { /*SECCIÓN-2*/
  const personajes = filtrar2(texto2);
  if (personajes.length > 0) {
    personajes.forEach(personaje => {
      resultado.innerHTML += `
        <div class="tarjetaP" id="tarjetaP"> 
        <div class="cardCompleta" id="cardCompleta">
        <div class="tarjetaFrente" id="tarjetaFrente">
        <div class="bg"></div>
        <div class="body_tarjetaFrente" id="body_tarjetaFrente">
        <img class="imagenTarjeta" src="${personaje.image}"></img> <br>
        <h4 class="titulotarjetas">${personaje.name}</h4>
        </div>
        </div>
        <div class="tarjetaAtras" id="tarjetaAtras">
        <div class="body_tarjetaAtras" id="body_tarjetaAtras">
        <p class="textoTarjeta">
        Estatus: ${personaje.status} <br>
        Especie: ${personaje.species} <br>
        Tipo: ${personaje.type} <br>
        Genero: ${personaje.gender} <br>
        Origen: ${personaje.origin.name} <br>
        Locación: ${personaje.location.name}
        </p>
        </div>
        </div>
        </div>
        </div>
        `
      espacioPersonajes.style.display = 'none';
    })

  } else {
    resultado.innerHTML += `
        <li>Personaje no encontrado</li>
        `
  }
}

/*----------------------------------------------------AQUÍ TERMINA MANEJO BUSCADORES-----------------------------------------------*/


//MOSTRAR TODOS LOS PERSONAJES SIN FILTRO
function mostrarTodo() {
  for (const todos of data.results) {
    espacioPersonajes.innerHTML += `
        <div class="tarjetaP" id="tarjetaP"> 
        <div class="cardCompleta" id="cardCompleta">
        <div class="tarjetaFrente" id="tarjetaFrente">
        <div class="bg"></div>
        <div class="body_tarjetaFrente" id="body_tarjetaFrente">
        <img class="imagenTarjeta" src="${todos.image}"></img> <br>
        <h4 class="titulotarjetas">${todos.name}</h4>
        </div>
        </div>
        <div class="tarjetaAtras" id="tarjetaAtras">
        <div class="body_tarjetaAtras" id="body_tarjetaAtras">
        <p class="textoTarjeta">
        Estatus: ${todos.status} <br>
        Especie: ${todos.species} <br>
        Tipo: ${todos.type} <br>
        Genero: ${todos.gender} <br>
        Origen: ${todos.origin.name} <br>
        Locación: ${todos.location.name}
        </p>
        </div>
        </div>
        </div>
        </div>
        `
  }
}


//MOSTRAR FILTRO ABC
function mostrarFiltrado(orden) {
  const dataFiltrado = isalfabeto();
  const dataFiltradoReverso = isalfabeto().reverse();
  espacioPersonajes.innerHTML = ""
  if (orden === "descendente") {
    for (const todos of dataFiltradoReverso) {
      espacioPersonajes.innerHTML += `
            <div class="tarjetaP" id="tarjetaP"> 
        <div class="cardCompleta" id="cardCompleta">
        <div class="tarjetaFrente" id="tarjetaFrente">
        <div class="bg"></div>
        <div class="body_tarjetaFrente" id="body_tarjetaFrente">
        <img class="imagenTarjeta" src="${todos.image}"></img> <br>
        <h4 class="titulotarjetas">${todos.name}</h4>
        </div>
        </div>
        <div class="tarjetaAtras" id="tarjetaAtras">
        <div class="body_tarjetaAtras" id="body_tarjetaAtras">
        <p class="textoTarjeta">
        Estatus: ${todos.status} <br>
        Especie: ${todos.species} <br>
        Tipo: ${todos.type} <br>
        Genero: ${todos.gender} <br>
        Origen: ${todos.origin.name} <br>
        Locación: ${todos.location.name}
        </p>
        </div>
        </div>
        </div>
        </div>
            `
    }
  } else {
    for (const todos of dataFiltrado) {
      espacioPersonajes.innerHTML += `
            <div class="tarjetaP" id="tarjetaP"> 
        <div class="cardCompleta" id="cardCompleta">
        <div class="tarjetaFrente" id="tarjetaFrente">
        <div class="bg"></div>
        <div class="body_tarjetaFrente" id="body_tarjetaFrente">
        <img class="imagenTarjeta" src="${todos.image}"></img> <br>
        <h4 class="titulotarjetas">${todos.name}</h4>
        </div>
        </div>
        <div class="tarjetaAtras" id="tarjetaAtras">
        <div class="body_tarjetaAtras" id="body_tarjetaAtras">
        <p class="textoTarjeta">
        Estatus: ${todos.status} <br>
        Especie: ${todos.species} <br>
        Tipo: ${todos.type} <br>
        Genero: ${todos.gender} <br>
        Origen: ${todos.origin.name} <br>
        Locación: ${todos.location.name}
        </p>
        </div>
        </div>
        </div>
        </div>
            `
    }
  }
}


//SELECTOR A-Z Y Z-A
const selectorAbc = document.getElementById("selector1");
selectorAbc.addEventListener("change", function () {
  const seleccionado = selectorAbc.value;
  console.log(selectorAbc.value);
  if (seleccionado === "ascendente") {
    return mostrarFiltrado("ascendente");
  }
  if (seleccionado === "descendente") {
    return mostrarFiltrado("descendente");
  }
});


//FUNCION PARA EL CARRUSEL 
const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener('click', () => {

    const posicion = i
    const operacion = posicion * -22

    grande.style.transform = `translateX(${operacion}%)`

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove('activo')
    })
    punto[i].classList.add('activo')
  })
})


//FILTRA PERSONAJES POR MULTIVERSOS
const tarjetamultiverso = document.querySelectorAll(".tarjetamultiverso");
const personajesmulti = document.getElementById("personajesMulti")

tarjetamultiverso.forEach(element => {
  element.addEventListener('click', function (e) {
    const origen1 = e.target.alt;
    personajesmulti.innerHTML = ""
    const personajesFiltrados = filtrarorigen(data, origen1);
    personajesFiltrados.forEach(personaje => {
      personajesmulti.innerHTML += `
            <div class="tarjetaP" id="tarjetaP"> 
            <div class="cardCompleta" id="cardCompleta">
            <div class="tarjetaFrente" id="tarjetaFrente">
            <div class="bg"></div>
            <div class="body_tarjetaFrente" id="body_tarjetaFrente">
            <img class="imagenTarjeta" src="${personaje.image}"></img> <br>
            <h4 class="titulotarjetas">${personaje.name}</h4>
            </div>
            </div>
            <div class="tarjetaAtras" id="tarjetaAtras">
            <div class="body_tarjetaAtras" id="body_tarjetaAtras">
            <p class="textoTarjeta">
            Estatus: ${personaje.status} <br>
            Especie: ${personaje.species} <br>
            Tipo: ${personaje.type} <br>
            Genero: ${personaje.gender} <br>
            Origen: ${personaje.origin.name} <br>
            Locación: ${personaje.location.name}
            </p>
            </div>
            </div>
            </div>
            </div>
        `
    });
  });
});


//MUESTRA LOS EPISODIOS POR PERSONAJE
function mostrarEpisodios(data) {
  const tarjetasEpisodios = document.getElementById("tarjetasEpisodios");

  data.forEach((personaje) => {
    tarjetasEpisodios.innerHTML += `
    <div class="tarjetaP" id="tarjetaP"> 
    <div class="cardCompleta" id="cardCompleta">
    <div class="tarjetaFrente" id="tarjetaFrente">
    <div class="bg"></div>
    <div class="body_tarjetaFrente" id="body_tarjetaFrente">
    <img class="imagenTarjeta" src="${personaje.imagen}"></img> <br>
    <h4 class="titulotarjetasEpisodios">${personaje.nombre}</h4> 
    </div>
    </div>
    <div class="tarjetaAtras" id="tarjetaAtras">
    <div class="body_tarjetaAtras" id="body_tarjetaAtras">
    <p class="textotarjetaepisodios">
    Apariciones en la serie:
    ${personaje.apariciones}
    </p>
    </div>
    </div>
    </div>
    </div>
    `
  });
}

