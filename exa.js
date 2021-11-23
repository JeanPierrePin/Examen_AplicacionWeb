const formulario = document.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input');


const expresiones = {
    codigo: /^[a-zA-Z0-9\_\-]{1,5}$/,
    marca: /^[a-zA-Z0-9\_\-]{1,50}$/,
    modelo:/^[a-zA-Z0-9\_\-]{1,30}$/,
    año: /^[a-zA-Z0-9\_\-]{1,4}$/,
    fechaini: /^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/,
    fechafin: /^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/,
}

const campos = {
	codigo: false,
    marca: false,
    modelo:false,
    año: false,
    fechaini: false,
    fechafin: false,
}

const ValidarFormulario =(e)=>{
 
switch(e.target.name) {
	case "codigo":
		if(expresiones.codigo.test(e.target.value)){
			document.querySelector('#grupo__codigo .formulario__input-error').classList.remove('formulario__input-error-activo');
			document.getElementById('codigo').classList.remove('controls-error');
			document.getElementById('codigo').classList.add('controls');
			campos['codigo'] = true;
			console.log(campos['codigo']);
		}else{
			document.getElementById('codigo').classList.remove('controls');
			document.getElementById('codigo').classList.add('controls-error');
			document.querySelector('#grupo__codigo .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['codigo'] = false;
			console.log(campos['codigo']);
		}
		break;
		case "marca":
		if(expresiones.marca.test(e.target.value)){
			document.querySelector('#grupo__marca .formulario__input-error').classList.remove('formulario__input-error-activo');
			document.getElementById('marca').classList.remove('controls-error');
			document.getElementById('marca').classList.add('controls');
			campos['marca'] = true;
			console.log(campos['marca']);
		}else{
			document.getElementById('marca').classList.remove('controls');
			document.getElementById('marca').classList.add('controls-error');
			document.querySelector('#grupo__marca .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['marca'] = false;
			console.log(campos['marca']);
		}
		break;
		case "modelo":
		if(expresiones.modelo.test(e.target.value)){
			document.querySelector('#grupo__modelo .formulario__input-error').classList.remove('formulario__input-error-activo');
			document.getElementById('modelo').classList.remove('controls-error');
			document.getElementById('modelo').classList.add('controls');
			campos['modelo'] = true;
			console.log(campos['modelo']);
		}else{
			document.getElementById('modelo').classList.remove('controls');
			document.getElementById('modelo').classList.add('controls-error');
			document.querySelector('#grupo__modelo .formulario__input-error').classList.add('formulario__input-error-activo');
			campos['modelo'] = false;
			console.log(campos['modelo']);
		}
		break;
	    	case "año":
			if(expresiones.año.test(e.target.value)){
				document.querySelector('#grupo__año .formulario__input-error').classList.remove('formulario__input-error-activo');
				document.getElementById('año').classList.remove('controls-error');
				document.getElementById('año').classList.add('controls');
				campos['año'] = true;
			}else{
				document.getElementById('año').classList.remove('controls');
				document.getElementById('año').classList.add('controls-error');
				document.querySelector('#grupo__año .formulario__input-error').classList.add('formulario__input-error-activo');
				campos['año'] = false;
			}
			break;
	
	};
}
function ConvertirStringToDate(fechaString)
{
var fechas = fechaString.split('/');
if (fechas.length != 3)
    fechas = fechaString.split('-');

var tipoDate = new Date(fechas[2], fechas[1], fechas[0]);


return tipoDate;
}


function ValidarFiltroDeFechas(stringFechaDesde, stringFechaHasta) {
    
        var codigo =campos.codigo;
        var marca =campos.marca;
        var modelo=campos.modelo;
        var año=campos.año;
        
        console.log(codigo);
      
        console.log(marca);
        console.log(modelo);
    
        console.log(año);
    
          if( codigo!=false && marca!=false && modelo!=false && año!=false ){
            
        alert('Imgresado pero aún faltan las fechas ');
    
        }else{
            alert('Faltan campos minimos ');	
            
        }
        

    stringFechaDesde=document.getElementById(stringFechaDesde).value;
    stringFechaHasta=document.getElementById(stringFechaHasta).value;

    Validador = { Estado: true, Mensaje: '' };

    if (stringFechaDesde == "") {
        alert("Debe ingresar una fecha de inicio.");

    }

    if (stringFechaHasta == "") {
        alert("Debe ingresar una fecha de término.");

    }

    var dateDesde = ConvertirStringToDate(stringFechaDesde);
    var dateHasta = ConvertirStringToDate(stringFechaHasta);

    if (dateDesde > dateHasta) {
        alert("La fecha de inicio no puede ser mayor a la de término.");
    }
}




function descripcions(){
	if(document.getElementById("comentarios").value==0){
		return false;
	}else{
		return true;
	}
}
inputs.forEach((input) => {
	input.addEventListener('keyup',ValidarFormulario);
	input.addEventListener('blur', ValidarFormulario);
});

formulario.addEventListener('submit',(e) =>{
e.preventDefault();
});



