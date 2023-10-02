

let tratamientos = [
    { nombre: "Abrillantado", precio: 20000 },
    { nombre: "Acrilico", precio: 32000 },
    { nombre: "Ceramico", precio: 52000 }
];


function BuscarTratamientos(e){

let nombreTratamiento = e.target.textContent;
let tratamientoSeleccionado = tratamientos.find(tratamiento => tratamiento.nombre === nombreTratamiento);

    if (tratamientoSeleccionado) {
         precioTratamiento = tratamientoSeleccionado.precio;
    } else {
  
    precioTratamiento = 0;
    }

calcularCuotaTratamiento();

} 

//total = (subtotal * recargo) / cuotasSeleccionadas

function calcularCuotaTratamiento() {

  let subtotal = precioTratamiento;
  let total;

  if (cuotasSeleccionadas == 3) {
    total = subtotal + (subtotal * 0.2);
  } else if (cuotasSeleccionadas == 6) {
    total = subtotal + (subtotal * 0.5);
  } else if (cuotasSeleccionadas == 12) {
    total = subtotal + (subtotal * 0.8);
  } else {
    total = subtotal / cuotasSeleccionadas;
  }


  
    document.getElementById("subtotal").textContent = subtotal;
    document.getElementById("cuotaSeleccionada").textContent = cuotasSeleccionadas;
    document.getElementById("total").textContent = total;


  }
  
  // ---- VARIABLES ---- //
  let cuotasSeleccionadas = 0;
  let precioTratamiento = 0;
  
  console.log("Bienvendios a CarDetaling");
  
// DOM
  let btnTratamiento = document.querySelectorAll(".botonTratamiento");
  let btnPago = document.querySelectorAll(".metodoPago");
  console.log(btnTratamiento);
  console.log(btnPago);



  //EVENTOS
  for (let boton of btnTratamiento) {
    boton.addEventListener("click", BuscarTratamientos);
}


for( let boton of btnPago ){

  boton.addEventListener("click" , () => {
  cuotasSeleccionadas = parseInt(boton.value);
  calcularCuotaTratamiento();
});
}
 

document.getElementById("ImpTicket").addEventListener("click", () => {
  if (precioTratamiento > 0) {
      alert(`Ticket de compra:\nTratamiento: ${precioTratamiento}\nCuotas: ${cuotasSeleccionadas}\nTotal: $${document.getElementById("total").textContent}`);
  } else {
      alert("Seleccione un tratamiento antes de imprimir el ticket.");
  }
 });