const url = "/Productos.json";
fetch(url)
.then(res => res.json())
.then(data => mostrarProductos(data));


const contenedorProd = document.querySelector('#eco')

let carrito = [];

function mostrarProductos(productos){
  
   productos.forEach( prod => {
      
      let card = document.createElement('div');

      card.innerHTML = `<h3>${prod.nombre}</h3>
                        <img src="${prod.img}"/>
                        <h4>Precio: $${prod.precio}</h4>
                        <button class="btnAgregar" id="${prod.id}">Agregar</button>`
      contenedorProd.appendChild(card)
  
});

let btnAgregarCarrito = document.querySelectorAll( ".btnAgregar" );

for( let boton of btnAgregarCarrito) {

   boton.addEventListener("click", (e)=> agregarCarrito(e, productos))
  }
}



function agregarCarrito(e, productos) { 

   const productoElegido = productos.find ( el => el.id === parseInt(e.target.id));
   if (productoElegido) {
    carrito.push(productoElegido);
    mostrarCarrito();
    Toastify({
      text: `Producto Agregado: ${productoElegido.nombre}`,
    }).showToast();
  }
  
  
  function mostrarCarrito() {
   let tabla = document.getElementById("carro");
   tabla.innerHTML = "";

  carrito.forEach( producto => {

       let fila = document.createElement("tr");
       fila.innerHTML = `<td><img src="${producto.img}"></td>
                         <td><p>${producto.nombre}</p></td>
                         <td><h6>${producto.precio}</h6></td>
                         <td><button class="btn btnBorrar btn-danger">Borrar</button></td>`;
        tabla.append(fila);
        
  });
  }

   let btnBorrar = document.querySelectorAll(".btnBorrar");
   for (let btn of btnBorrar){
    btn.addEventListener("click", borrarProducto);
     }

     function borrarProducto(e){
  
      let borrar = e.target.parentNode.parentNode;
      let productoEliminar = borrar.querySelector("p").innerText;
       
      borrar.remove();
  
      function eliminarProductoCarrito( producto ){
          return producto.nombre != productoEliminar
      }
  
      let resultadoFilter = carrito.filter( eliminarProductoCarrito );
      carrito = resultadoFilter;
  
  }
  
  
  }