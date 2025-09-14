// Al cargar, mostrar muro por defecto
document.addEventListener("DOMContentLoaded", () => {
    navigate("muro");
});

// Función para navegar entre secciones
function navigate(section) {
    const content = document.getElementById("content");

    if (section === "muro") {
        loadWall(content);
    } else if (section === "info") {
        content.innerHTML = `
            <h2>Información</h2>
            <p><strong>Email:</strong> kevin.florez02@unicatolica.edu.co</p>
            <p><strong>Teléfono:</strong> 3123104233</p>
            <p><strong>Intereses:</strong> Programar, leer, música</p>
        `;
    } else if (section === "fotos") {
        content.innerHTML = `
            <h2>Fotos</h2>
            <div class="gallery">
                <div class="photo"></div>
                <div class="photo"></div>
                <div class="photo"></div>
                <div class="photo"></div>
                <div class="photo"></div>
                <div class="photo"></div>
            </div>
        `;
    } else if (section === "boxes") {
        content.innerHTML = `
            <h2>Boxes</h2>
            <p>Sección de cajas con contenido de ejemplo.</p>
        `;
    }
}

// Sección del muro con publicaciones
function loadWall(content) {
    content.innerHTML = `
        <h2>Muro</h2>
        <textarea id="postInput" placeholder="Escribe algo..."></textarea>
        <br>
        <button onclick="addPost()">Compartir</button>
        <div id="posts"></div>
    `;
    showPosts();
}

// Guardar y mostrar publicaciones con localStorage
function addPost() {
    let input = document.getElementById("postInput");
    let text = input.value.trim();

    if (text) {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.unshift({ user: "Mi Nombre", text });
        localStorage.setItem("posts", JSON.stringify(posts));
        input.value = "";
        showPosts();
    }
}

function showPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    posts.forEach(post => {
        postsDiv.innerHTML += `
            <div class="post">
                <strong>${post.user}</strong>
                <p>${post.text}</p>
            </div>
        `;
    });
}
