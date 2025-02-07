// Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu() {
    if (!menu_visible) {
        menu.style.display = "block";
        menu_visible = true;
    } else {
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Ocultar menú al seleccionar una opción
let links = document.querySelectorAll("nav a");
for (let x = 0; x < links.length; x++) {
    links[x].onclick = function () {
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Crear barras de habilidades
function crearBarra(id_barra) {
    for (let i = 0; i <= 16; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Seleccionar todas las barras
let habilidades = ["html", "javascript", "wordpress", "photoshop", "php", "ilustrator"];
let contadores = [-1, -1, -1, -1, -1, -1];
let entro = false;

habilidades.forEach((habilidad, index) => {
    let elemento = document.getElementById(habilidad);
    crearBarra(elemento);
});

// Efecto de animación de habilidades
function efectoHabilidades() {
    let habilidadesElement = document.getElementById("habilidades");
    let distancia_skills = window.innerHeight - habilidadesElement.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !entro) {
        entro = true;
        habilidades.forEach((habilidad, index) => {
            let cantidad = index % 2 === 0 ? 16 : 11;
            let elemento = document.getElementById(habilidad);
            const interval = setInterval(() => {
                pintarBarra(elemento, cantidad, index, interval);
            }, 100);
        });
    }
}

// Pintar barra
function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    let x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(interval);
    }
}

// Detectar scroll para aplicar animaciones
window.onscroll = function () {
    efectoHabilidades();
};

// Obtener el botón y escuchar el evento de clic
const btnModoOscuro = document.getElementById('btn-modo-oscuro');


// Cambio de color al pasar el mouse por el menú
let listaMenu = document.querySelectorAll("nav a");
listaMenu.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.color = "#ffcc00";
    });
    item.addEventListener("mouseout", () => {
        item.style.color = "";
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const trendsContainer = document.getElementById("tech-trends");
    
        const url = "http://api.open-notify.org/iss-now.json"; // API que devuelve la ubicación de la ISS
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const { latitude, longitude } = data.iss_position;
            
            let html = `
                <h2>Ubicación de la Estación Espacial Internacional (ISS)</h2>
                <p>La ISS se encuentra actualmente en:</p>
                <p><strong>Latitud:</strong> ${latitude}</p>
                <p><strong>Longitud:</strong> ${longitude}</p>
            `;
            
            trendsContainer.innerHTML = html;
        })
        .catch(error => {
            console.error("Error al cargar la información de la ISS.", error);
            trendsContainer.innerHTML = "<p>Error al cargar la información.</p>";
        });
        

// Si la visita ya está registrada en la sesión, no incrementar el contador.
if (!sessionStorage.getItem("visited")) {
    // Si es la primera vez que se visita, incrementamos el contador en localStorage.
    let visitCount = localStorage.getItem("visitCount");

    if (!visitCount) {
        visitCount = 1; // Primera visita
    } else {
        visitCount = parseInt(visitCount) + 1; // Incrementar el contador
    }

    localStorage.setItem("visitCount", visitCount); // Guardar el contador actualizado

    // Marcar que esta sesión ya ha visitado la página
    sessionStorage.setItem("visited", "true");
}

// Mostrar el contador en el div
let visitCountDisplay = localStorage.getItem("visitCount");
document.getElementById("visit-counter").textContent = `Visitas: ${visitCountDisplay}`;
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Capturar los datos del formulario
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Mostrar los datos en la consola (puedes almacenarlos o enviarlos a un servidor)
    console.log("Nombre:", name);
    console.log("Correo Electrónico:", email);
    console.log("Mensaje:", message);

    // Mostrar un mensaje de confirmación
    alert("Gracias por tu mensaje, " + name + ". Pronto nos pondremos en contacto contigo.");

    
});


    
});
