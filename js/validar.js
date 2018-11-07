
function validar(){
    var descripcion, lugar,fecha;

    descripcion = document.getElementById("descripcion").value;
    lugar = document.getElementById("lugar").value;
    fecha = document.getElementById("fecha").value;

    if(descripcion == "" || lugar == "" || fecha ==""){
        alert("Debe llenar todos los campos");
        return false;
    }else if(descripcion.lenght()>300){
        alert("La descripcion debe tener una longitud maxima de 300");
        return false;
    }else if (lugar.lenght()>300){
        alert("El lugar debe tener una longitud maxima de 300");
        return false;
    }
    

}