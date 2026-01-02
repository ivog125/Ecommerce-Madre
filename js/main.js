document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // VARIABLES
    // ===============================
    const galeria = document.querySelector(".galeria");
    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-titulo");
    const descripcion = document.getElementById("modal-descripcion");
    const consumo = document.getElementById("modal-consumo");
    const closeBtn = document.querySelector(".close");
    const buscador = document.getElementById("buscador");

    let productosTienda = []; // productos cargados desde JSON
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // ===============================
    // FUNCION MOSTRAR PRODUCTOS
    // ===============================
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

    // ===============================
    // FUNCION AGREGAR AL CARRITO
    // ===============================
    function agregarAlCarrito(id) {
        const producto = productosTienda.find(p => p.id === id);
        if (!producto) return;

        const item = carrito.find(p => p.id === id);

        if (item) {
            item.cantidad++;
        } else {
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: Number(producto.precio),
                imagen: producto.imagen,
                cantidad: 1
            });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarContador();
    }

    // ===============================
    // FUNCION ACTUALIZAR CONTADOR
    // ===============================
    function actualizarContador() {
        const contador = document.querySelector(".contadorCarrito");
        if (!contador) return;

        const total = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
        contador.textContent = total;
    }

    actualizarContador();

    // ===============================
    // CARGAR PRODUCTOS DESDE JSON
    // ===============================
    fetch('../productos.json')
        .then(res => res.json())
        .then(productos => {

            // ORDEN ALFABETICO A–Z
            productosTienda = productos.sort((a, b) =>
                a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" })
            );

            mostrarProductos(productosTienda);

            // ===============================
            // BUSCADOR
            // ===============================
            buscador.addEventListener("input", (e) => {
                const texto = e.target.value.toLowerCase();

                const productosFiltrados = productosTienda.filter(producto =>
                    producto.nombre.toLowerCase().includes(texto)
                );

                mostrarProductos(productosFiltrados);
            });
        })
        .catch(err => console.error("No se pudieron cargar los productos:", err));

    // ===============================
    // MODAL Y BOTONES
    // ===============================
    galeria.addEventListener("click", (e) => {

        // Modal "Saber más"
        if (e.target.classList.contains("btn-saber-mas")) {
            const btn = e.target;
            titulo.textContent = btn.dataset.titulo;
            descripcion.textContent = btn.dataset.descripcion;
            consumo.textContent = btn.dataset.consumo;
            modal.style.display = "block";
        }

        // Botón "Comprar"
        if (e.target.classList.contains("btnComprar")) {
            const id = e.target.dataset.id;
            agregarAlCarrito(id);
        }
    });

    // ===============================
    // CERRAR MODAL
    // ===============================
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });

});