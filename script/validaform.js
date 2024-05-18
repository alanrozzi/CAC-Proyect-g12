//Validación de formulario


var formularioPrincipal = document.getElementById("formulario");
function Valida(formulario) 
{
  if ((formulario.nombre.value.length == 0) || (formulario.apellido.value.length == 0) || (formulario.pais.value.length ==0) || (formulario.email.value.length ==0) || (formulario.asunto.value.length ==0)) 
  {
    alert('falta informacion');
    return false
  }
  window.open("gracias.html", "gracias", "width=800, height=700")
  return true
  }