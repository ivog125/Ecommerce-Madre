// ===============================
//      CARRITO DE COMPRAS
// ===============================

// Obtener carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar carrito
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContador();
}

// Agregar producto
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    const itemEnCarrito = carrito.find(p => p.id === id);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: Number(producto.precio),
            cantidad: 1
        });
    }

    guardarCarrito();
}

// Contador flotante
function actualizarContador() {
    const contador = document.querySelector(".contadorCarrito");
    if (!contador) return;

    const total = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    contador.textContent = total;
}

// Render carrito (solo carrito.html)
function mostrarCarrito() {
    const contenedor = document.querySelector(".mainCarrito");
    if (!contenedor) return;

    if (carrito.length === 0) {
        contenedor.innerHTML = `
            <h1>Tu carrito</h1>
            <p>Tu carrito está vacío 🛒</p>
            <a href="./tienda.html" class="btnComprar">Seguir comprando</a>
        `;
        return;
    }

    let total = 0;

    contenedor.innerHTML = "<h1>Tu carrito</h1>";

    carrito.forEach(prod => {
        const subtotal = prod.precio * prod.cantidad;
        total += subtotal;

        contenedor.innerHTML += `
            <div class="itemCarrito">
                <h3>${prod.nombre}</h3>
                <p>Precio: $${prod.precio}</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <p>Subtotal: $${subtotal}</p>
            </div>
        `;
    });

    contenedor.innerHTML += `
        <h2>Total: $${total}</h2>
        <a href="./tienda.html" class="btnComprar">Seguir comprando</a>
    `;
}

// Inicializar
actualizarContador();
mostrarCarrito();