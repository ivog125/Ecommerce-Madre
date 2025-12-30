document.addEventListener("DOMContentLoaded", () => {

    const galeria = document.querySelector(".galeria");
    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-titulo");
    const descripcion = document.getElementById("modal-descripcion");
    const consumo = document.getElementById("modal-consumo");
    const closeBtn = document.querySelector(".close");

    function mostrarProductos(productos) {
        galeria.innerHTML = "";

        productos.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("producto");

            div.innerHTML = `
                <img src="${producto.imagen}" class="imagenProducto" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <div class="accionesProducto">
                    <button class="btn-saber-mas"
                        data-titulo="${producto.nombre}"
                        data-descripcion="${producto.descripcion}"
                        data-consumo="${producto.consumo}">
                        Saber más
                    </button>
                    <button class="btnComprar" data-id="${producto.id}">
                        Comprar
                    </button>
                </div>
            `;
            galeria.appendChild(div);
        });
    }

    mostrarProductos(productos);

    // BUSCADOR

    const buscador = document.getElementById("buscador");

buscador.addEventListener("input", (e) => {
    const texto = e.target.value.toLowerCase();

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    mostrarProductos(productosFiltrados);
});

    // MODAL
    galeria.addEventListener("click", (e) => {

        if (e.target.classList.contains("btn-saber-mas")) {
            const btn = e.target;
            titulo.textContent = btn.dataset.titulo;
            descripcion.textContent = btn.dataset.descripcion;
            consumo.textContent = btn.dataset.consumo;
            modal.style.display = "block";
        }

        if (e.target.classList.contains("btnComprar")) {
            const id = e.target.dataset.id;
            agregarAlCarrito(id);
        }

    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });

});