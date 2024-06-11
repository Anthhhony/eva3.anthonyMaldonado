window.addEventListener("load",()=>{
    document.getElementById("luna").addEventListener("click",a=>{
        let idicon = document.getElementById("idluna");
        let cambio = a.target.checked;
        console.log(cambio)
        if(cambio == true){
            idicon.innerHTML = '<i class="fa-regular fa-sun"></i>'
            document.body.classList.remove("cambioclaro");
            document.body.classList.add("cambiodark");
        }
        else{
            idicon.innerHTML = '<i class="fa-regular fa-moon"></i>'
            document.body.classList.remove("cambiodark");
            document.body.classList.add("cambioclaro");
        }
    })
    document.getElementById("tamanio").addEventListener("click",a=>{
        let idicon = document.getElementById("idtamanio");
        let cambio = a.target.checked;
        console.log(cambio)
        if(cambio == true){
            idicon.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i>'
            document.body.classList.remove("tamaniopeque");
            document.body.classList.add("tamaniobig");
        }
        else{
            idicon.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i>'
            document.body.classList.remove("tamaniobig");
            document.body.classList.add("tamaniopeque");
        }
    })

    document.getElementById("btnRegistrar").addEventListener("click",validacion)
})

function validacion(){
    validarnombre("nombre")
    validarapellido("apellido")
    validartelefono("telefono")
}

function validarnombre(campo){
    let idnombre = document.getElementById("i"+campo);
    let nparrafo = document.getElementById("c"+campo);
    let vnombre = idnombre.value;
    if(validarvacio(idnombre,nparrafo,vnombre)==true){
        validarletra(idnombre,nparrafo,vnombre)
    }
}

function validarapellido(campo){
    let idapellido = document.getElementById("i"+campo);
    let nparrafo = document.getElementById("c"+campo);
    let vapellido = idapellido.value;

    if(validarvacio(idapellido,nparrafo,vapellido)==true){
        validarletra(idapellido,nparrafo,vapellido)
    }
}

function validartelefono(campo){
    let idtell = document.getElementById("i"+campo);
    let nparrafo = document.getElementById("c"+campo);
    let vtell = idnombre.value;
    //if(validarvacio(idapellido,nparrafo,vapellido)==true){
    //    validarnum(idapellido,nparrafo,vapellido)
    //}
}

function validarletra(id,parrafo,valor){
    if (isNaN(valor.trim()) == true){
        id.style.border = "green solid 4px"
        parrafo.style.display = "none"
    }
    else{
        id.style.border = "red solid 4px"
        parrafo.innerText = "Debes ingresar solo letras"
        parrafo.style.display = "block"
    }
}
function validarvacio(id,parrafo,valor){
    if(valor.trim().length == 0){
        id.style.border = "red solid 4px"
        parrafo.innerText = "El campo esta vacio"
        parrafo.style.display = "block"
    }
    else{
        id.style.border = "green solid 4px"
        parrafo.style.display = "none"
        return true
    }
}
//function validarnum()