
function TotalAPagar (CantTickets, Categoria){
    console.log("hola");
    const ValorTicket = 200;
    let Total = CantTickets * ValorTicket;

    switch (Categoria) {
        case "Estudiante":
            Total = Total - Total * 80 / 100
            break;
        case "Trainee":
            Total = Total - Total * 50 / 100
            break
        case "Junior":
            Total = Total - Total * 15 / 100
            break;
    }
    
    return Total
}

let boton = document.getElementById("TotalAPagar")

boton.addEventListener ("click", function TotalAPagar()  {
    let cantidad = document.getElementById ("inputCantidad").value;
    let categoria = document.getElementById ("Categoria").value;
    
    let valor = TotalAPagar(cantidad,categoria);

    let divMensaje = document.getElementById("ValorTotal");
    divMensaje.textcontent = "Total a pagar: $" + valor;

}
)