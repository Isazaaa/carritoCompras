let carrito = [];
let ventasTotales = 0;

const productosDisponibles = [
    { id: 1, nombre: "Mandingas", Descripcion: "Salchipapas con salsa de la Casa", Precio: 7000, cantidad: 10 },
    { id: 2, nombre: "CocaCola", Descripcion: "Gaseosa", Precio: 3000, cantidad: 15 },
    { id: 3, nombre: "Burguer", Descripcion: "Hamburguesa especial con carne y tocineta", Precio: 16000, cantidad: 10 },
    { id: 4, nombre: "Limonada", Descripcion: "Bebida Natural", Precio: 4000, cantidad: 10 },
    { id: 5, nombre: "Arepa Especial", Descripcion: "Arepa rellena con todo", Precio: 10000, cantidad: 10 },
]

function mostrarMenu() {
    console.log("Bienvenido al carrito de compras: ")
    console.log("1. Agregar producto al carrito");
    console.log("2. Ver carrito");
    console.log("3. Ver total de la compra");
    console.log("4. Ver cantidad total de productos");
    console.log("5. Ver ventas totales del día");
    console.log("6. Salir");
}


function agregarProducto() {
    console.log("Productos disponibles:");
    productosDisponibles.forEach((producto, index) => {
        console.log(`${index + 1}). ${producto.nombre} - $${producto.Precio} - ${producto.Descripcion} - Cantidad disponible: ${producto.cantidad}`);
    });

    let opcionProducto = parseInt(prompt("Seleccione el numero del producto que desea agregar:"));
    if (opcionProducto < 1 || opcionProducto > productosDisponibles.length) {
        console.log("Cantidad inválida. Por favor, ingrese una cantidad válida.");
        return;
    }


    let cantidadProducto = parseInt(prompt("Ingrese la cantidad de productos que desea agregar:"));
    if (isNaN(cantidadProducto) || cantidadProducto <= 0) {
        console.log("Cantidad inválida. Por favor, ingrese una cantidad válida.");
        return;
    }


    let productoSeleccionado = productosDisponibles[opcionProducto - 1]
    let indexProductoEnCarrito = carrito.findIndex(productoEnCarrito => productoEnCarrito.id === productoSeleccionado.id)
    if (indexProductoEnCarrito !== -1) {
        carrito[indexProductoEnCarrito].cantidad += cantidadProducto;
    } else {
        carrito.push({ productoSeleccionado, cantidad: cantidadProducto })

    }

    console.log(`Se han agregado ${cantidadProducto} ${productoSeleccionado.nombre} al carrito de compras. `)
    ventasTotales++;
}


function verCarrito() {
    console.log("Productos en el carrito")
    if (carrito.length === 0) {
        console.log("El carrito esta vacío")
    } else {
        carrito.forEach((producto, index) => {
            console.log(`${index + 1}, ${producto.nombre} - Cantidad ${producto.cantidad}`);
        })
    }
}

function verTotalCompra() {
    let totalCompra = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    console.log(`Total de compras ${totalCompra}`)
}

function verCantidadTotalProductos() {
    let cantidadTotal = carrito.reduce((total, producto) => total + producto.cantidad, 0)
    console.log(`Cantidad total de productos en el carrito: ${cantidadTotal}`)
}

function verVentasTotales(){
    console.log(`Ver ventas totales del dia ${ventasTotales}`)
}


function ejecutarCarrito() {
    let opcion;
    do {
        mostrarMenu();
        opcion = parseInt(prompt("Seleccione una opción"));
        switch (opcion) {
            case 1:
                agregarProducto()
                break;
            case 2:
                verCarrito()
                break;
            case 3:
                verTotalCompra()
                break;
            case 4:
                verCantidadTotalProductos()
                break;
            case 5:
                verVentasTotales()
                break;
            case 6:
                console.log("Gracias por usar el carrito de compras.");
                break;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== 6);
}

ejecutarCarrito()