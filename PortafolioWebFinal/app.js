// Función para manejar el menú lateral
let menu_visible = false;
const menu = document.getElementById("nav");

function mostrarOcultarMenu() {
    menu.style.display = menu_visible ? "none" : "block";
    menu_visible = !menu_visible;
}

// Ocultar menú al seleccionar una opción
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.onclick = () => {
        menu.style.display = "none";
        menu_visible = false;
    };
});

// Crear barras de habilidades
function crearBarra(id_barra) {
    for (let i = 0; i <= 16; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Habilidades y contadores
const habilidades = ["html", "javascript", "wordpress", "photoshop", "php", "ilustrator"];
let contadores = [-1, -1, -1, -1, -1, -1];
let entro = false;

habilidades.forEach((habilidad, index) => {
    const elemento = document.getElementById(habilidad);
    crearBarra(elemento);
});

// Efecto de animación de habilidades
function efectoHabilidades() {
    const habilidadesElement = document.getElementById("habilidades");
    const distancia_skills = window.innerHeight - habilidadesElement.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !entro) {
        entro = true;
        habilidades.forEach((habilidad, index) => {
            let cantidad = index % 2 === 0 ? 16 : 11;
            const elemento = document.getElementById(habilidad);
            const interval = setInterval(() => {
                pintarBarra(elemento, cantidad, index, interval);
            }, 100);
        });
    }
}

// Pintar barra
function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    const x = contadores[indice];
    if (x < cantidad) {
        const elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(interval);
    }
}

// Detectar scroll para aplicar animaciones
window.onscroll = function () {
    efectoHabilidades();
};

// Cambio de color al pasar el mouse por el menú
listaMenu.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.color = "#ffcc00";
    });
    item.addEventListener("mouseout", () => {
        item.style.color = "";
    });
});

// API de la ISS
document.addEventListener("DOMContentLoaded", function() {
    const trendsContainer = document.getElementById("tech-trends");

    // Usar CORS Anywhere para evitar problemas con CORS
    const url = "https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json"; // API que devuelve la ubicación de la ISS

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

    // Contador de visitas
    if (!sessionStorage.getItem("visited")) {
        let visitCount = localStorage.getItem("visitCount");

        if (!visitCount) {
            visitCount = 1; // Primera visita
        } else {
            visitCount = parseInt(visitCount) + 1; // Incrementar el contador
        }

        localStorage.setItem("visitCount", visitCount); // Guardar el contador actualizado

        sessionStorage.setItem("visited", "true");
    }

    let visitCountDisplay = localStorage.getItem("visitCount");
    document.getElementById("visit-counter").textContent = `Visitas: ${visitCountDisplay}`;
});


// Manejar el envío del formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Nombre:", name);
    console.log("Correo Electrónico:", email);
    console.log("Mensaje:", message);

    alert(`Gracias por tu mensaje, ${name}. Pronto nos pondremos en contacto contigo.`);
});


