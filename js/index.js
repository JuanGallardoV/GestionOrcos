const tropas = [];

const eliminartropa = async function () {
    let res = await Swal.fire({
        title:`Desea asesinar a la tropa ${tropas[this.nro].nombre}?`,
        showCancelButton: true,
        confirmButtonText: "Si, matar"
    });
    if(res.isConfirmed){
        tropas.splice(this.nro,1);
        cargartabla();
        Swal.fire("Tropa asesinada");
    }else {
        Swal.fire("Tropa salvada");
    }
}


const cargartabla=()=>{
let tbody = document.querySelector("#tabla-tbody");
tbody.innerHTML = "";
for(let i=0;i<tropas.length;++i){
    let t = tropas[i];
    let tr = document.createElement("tr");
    let tdNombre = document.createElement("td");
    tdNombre.innerText = t.nombre;
    let tdTipo = document.createElement("td");
    tdTipo.innerText = t.tipo;
    let tdNivel = document.createElement("td");
    tdNivel.innerText = t.nivel;
    let tdRango = document.createElement("td");
    tdRango.innerText = t.rango;
    let tdAcciones = document.createElement("td");
    let boton = document.createElement("button")
    boton.classList.add("btn","btn-danger");
    boton.innerText = "Asesinado por la aparición";
    tdAcciones.appendChild(boton);
    tdAcciones.classList.add("text-center");
    boton.nro = i;
    boton.addEventListener("click",eliminartropa);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdRango);
    tr.appendChild(tdNivel);
    tr.appendChild(tdAcciones);
    tbody.appendChild(tr);
 } 
};





document.querySelector("#registrar-btn").addEventListener("click", ()=>{
let nombre = document.querySelector("#nombre-txt").value;
let tipo = document.querySelector("#tipo-select").value;
let nivel = document.querySelector("#nivel-txt").value;
let rango = document.querySelector("#rango-select").value;
let tropa = {};
tropa.nombre = nombre;
tropa.tipo = tipo;
tropa.nivel = nivel;
tropa.rango = rango;
tropas.push(tropa);
cargartabla();
Swal.fire("Exito!","Tropa Registrada","success")
});