
document.addEventListener("DOMContentLoaded", () => {
    navigate("muro");
});


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
            <p>Aquí podrían ir fotos del usuario.</p>
        `;
    } else if (section === "boxes") {
        content.innerHTML = `
            <h2>Boxes</h2>
            <p>Sección de cajas con contenido de ejemplo.</p>
        `;
    }
}


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

