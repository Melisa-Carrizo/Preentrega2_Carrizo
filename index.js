/*Pagina de alquileres para eventos*/

class producto {
    constructor (tipo, descripcion, tiempo, precio) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.tiempo = tiempo;
        this.precio = precio;
    }
}

let promoInflable = [
    {tipo: "Inflable", descripcion: "Inflable castillo Disney", tiempo: 5, precio: 5000},
    {tipo: "Inflable", descripcion: "Inflable Barco pirata", tiempo: 5, precio: 5500},
    {tipo: "Inflable", descripcion: "Inflable Pista de baile", tiempo: 4, precio: 4800},
    {tipo: "Inflable", descripcion: "Inflable Boca de monstruo", tiempo: 4, precio: 4500},
]

let promoTraje = [
    {tipo: "Traje", descripcion: "Traje Peppa Pig", tiempo: 2, precio: 3000},
    {tipo: "Traje", descripcion: "Traje Mickey Mouse", tiempo: 2, precio: 1500},
    {tipo: "Traje", descripcion: "Traje Princesa Sofia", tiempo: 2, precio: 2000},
    {tipo: "Traje", descripcion: "Traje LadyBug", tiempo: 2.5 , precio: 2500},
]

let promoMobiliario = [
    {tipo: "Mobiliario", descripcion: "Sillones individuales blancos", tiempo: 5, precio: 5000},
    {tipo: "Mobiliario", descripcion: "Sillas de exterior", tiempo: 3, precio: 6000},
    {tipo: "Mobiliario", descripcion: "Juego de mesa y sillas", tiempo: 5, precio: 5300},
    {tipo: "Mobiliario", descripcion: "Sillones grandes grises", tiempo: 4, precio: 5600},
]

function elegirProducto(){
    let tipo = prompt("Ingrese el n° de tipo de producto que desee 1: Inflable / 2: Traje / 3: Mobiliario");
    let descripcion = prompt("Ingrese especificaciones del producto ej: Inflable castillo disney / Sillones individuales blancos");
    let tiempo = parseInt(prompt("Ingrese la cantidad de horas por las que desea alquilar el producto"));
    let precio = parseInt(prompt("Ingrese el precio"));
    precio = (tiempo * 100) + precio;
    const nuevoProducto = new producto (tipo, descripcion, tiempo, precio, );
    arrCarrito.push(nuevoProducto);
    alert("Se ha añadido el producto al carrito");
}

function promocionInflable(){
    const promociones = promoInflable.filter((inflable)=> inflable.precio < 4900 )
    for (const promo of promociones) {
        alert(`La promocion disponible por el momento es de ${promo.descripcion} a $${promo.precio} por ${promo.tiempo} horas`);
    }
}

function promocionTraje(){
    const promociones = promoTraje.filter((traje)=> traje.precio < 2200 )
    for (const promo of promociones) {
        alert(`La promocion disponible por el momento es de ${promo.descripcion} a $${promo.precio} por ${promo.tiempo} horas`);
    }
}

function promocionMobiliario(){
    const promociones = promoMobiliario.filter((mobiliario)=> mobiliario.precio < 5600 )
        for (const promo of promociones) {
            alert(`La promocion disponible por el momento es de ${promo.descripcion} a $${promo.precio} por ${promo.tiempo} horas`);
        }
}

function verCarrito () {
    arrCarrito.forEach((producto) => {
        console.log(`Los productos añadidos al carrito son: ${producto.descripcion} por ${producto.tiempo} horas, al precio de ${producto.precio}`);
        }
    );   
}

function finalizarCompra(){
    const total = arrCarrito.reduce((acc, el) => acc + el.precio, 0);
    totalSeguro = total * 0.30 ;
    totalFinal = total + (total * 0.21) + totalSeguro;
    console.log(`El total de su compra sin impuestos es de $${total}, su total final es de $${totalFinal}. La devolución del seguro al finalizar el alquiler es de $${totalSeguro}`);
}

let arrCarrito = [];

let opcion = prompt("Ingrese una opción 1: Alquilar producto 2: Ver promocion de inflables 3: Ver promocion de Trajes 4: Ver promociones de Mobiliario 5: Ver carrito 7:Salir");

while ( opcion !== "7") {
    if ( opcion == "1") {
        elegirProducto(arrCarrito);
    }
    else if ( opcion == "2") {
        promocionInflable();
    }
    else if ( opcion == "3") {
        promocionTraje();
    }
    else if ( opcion == "4") {
        promocionMobiliario();
    }
    else if ( opcion == "5") {
        verCarrito();
    }
    else if ( opcion == "6") {
        finalizarCompra();
        alert("Gracias por su compra!")
    }
    opcion = prompt("Ingrese una opción 1: Seguir comprando 2: Ver promocion de inflables 3: Ver promocion de Trajes 4: Ver promociones de Mobiliario 5: Ver carrito 6: Finalizar compra 7: Salir")
}