// variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10

// Generar objeto
const datosBusqueda = {
        marca: '',
        year: '',
        minimo: '',
        maximo: '',
        puertas: '',
        transmision: '',
        color: '',
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
        mostrarAutos(autos);

        llenarSelect();
})

// Events Listeners para Select
marca.addEventListener('change', e => {
        datosBusqueda.marca  = e.target.value;

        filtrarAuto();
})

year.addEventListener('change', e => {
        datosBusqueda.year  = parseInt( e.target.value );

        filtrarAuto();
})

minimo.addEventListener('change', e => {
        datosBusqueda.minimo  = e.target.value;
})

maximo.addEventListener('change', e => {
        datosBusqueda.maximo  = e.target.value;
})

puertas.addEventListener('change', e => {
        datosBusqueda.puertas  = e.target.value;
})

transmision.addEventListener('change', e => {
        datosBusqueda.transmision  = e.target.value;
})

color.addEventListener('change', e => {
        datosBusqueda.color  = e.target.value;

        console.log(datosBusqueda);
})


// Funciones
function mostrarAutos(autos){
        
        limpiarHTML();

        autos.forEach(auto => {

             const {marca, modelo, year, puertas, transmision, precio, color} = auto;
             const autoHTML = document.createElement('p');
             autoHTML.textContent = `
                ${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmisión ${transmision} - Precio: ${precio}
                - ${color} 
             `;

             // Insertar en HTML
             resultado.appendChild(autoHTML);
        });
}

// Limpiar HTML
function limpiarHTML(){
        while(resultado.firstChild){
                resultado.removeChild(resultado.firstChild);

        }
}

// Genera los años
function llenarSelect(){
        for( let i = max; i > min ; i--){
                const option = document.createElement('option');
                option.value = i;
                option.textContent = i;
                year.appendChild(option);
        }
}

// Filtro

function filtrarAuto(){
        const resultado = autos.filter( filtrarMarca ).filter (filtrarYear);
        console.log(resultado);

        mostrarAutos(resultado);
}

function filtrarMarca(auto){
        const {marca} = datosBusqueda;
        if(datosBusqueda.marca){
                return auto.marca === marca;
        }
        return auto;
}

function filtrarYear(auto){
        const {year} = datosBusqueda;
        if(datosBusqueda.year){
                return auto.year === year;
        }
        return auto;
}