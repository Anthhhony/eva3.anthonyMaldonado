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
        let inputs = document.getElementsByClassName("classinput")
        let cambio = a.target.checked;
        console.log(cambio)
        if(cambio == true){
            idicon.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i>'
            document.body.classList.remove("tamaniopeque");
            document.body.classList.add("tamaniobig");
            for (let index = 0; index < inputs.length; index++) {
                const element = inputs[index];
                element.classList.remove("tamaniopeque");
                element.classList.add("tamaniobig");
                element.style.padding = "25px"

            }
        }
        else{
            idicon.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i>'
            document.body.classList.remove("tamaniobig");
            document.body.classList.add("tamaniopeque");
            for (let index = 0; index < inputs.length; index++) {
                const element = inputs[index];
                element.classList.remove("tamaniobig");
                element.classList.add("tamaniopeque");
                element.style.padding = "5px"
            }
        }
    })

    document.getElementById("btnRegistrar").addEventListener("click",validacion)
})

//verifica los return de todas las funciones

const validacion = ()=>{
    const v1 = validarnombre("nombre");
    const v2 = validartelefono("telefono");
    const v3 = validaremail("email");
    const v4 = validaredad("edad");
    const v5 = validarcontraseña("password");
    const v6 = validaradio("oscuro","claro");
    const v7 = validarselect("seleccion")
    const v8 = validarcomentario("comentario")
    contador = 0
    for(i=0; 8; i++){
        console.log(v+i)
    }
}

const validacionDeEnvio = ()=>{
    
}

//<---------------------------------------Validaciones primarias--------------------------------------------------->


function validarnombre(campo){
    let idnombre = document.getElementById("i"+campo);
    let nparrafo = document.getElementById("c"+campo);
    let vnombre = idnombre.value;
    if(validarvacio(idnombre,nparrafo,vnombre)==true){
        if(validarletra(idnombre,nparrafo,vnombre)==true){
            return true
        }
        else{
            return false
        }
        
    }
    else{
        return false
    }
}

function validartelefono(campo){
    let idtell = document.getElementById("i"+campo);
    let nparrafo = document.getElementById("c"+campo);
    let vtell = idtell.value;
    if(validarvacio(idtell,nparrafo,vtell)==true){
        if(validarnum(idtell,nparrafo,vtell)==true){
            if(validarLongitudFijo(idtell,nparrafo,vtell,9)==true){
                return true
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}
function validaremail(campo){
    let idemail = document.getElementById("i"+campo);
    let nparrafo = document.getElementById("c"+campo);
    let vemail = idemail.value;
    if(validarvacio(idemail,nparrafo,vemail)==true){
        if(validarContenidoEmail(idemail,nparrafo,vemail)==true){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}

function validaredad(campo){
    let idedad = document.getElementById("i"+campo);
    let nparrafo = document.getElementById("c"+campo);
    let vedad = idedad.value;
    if(validarvacio(idedad,nparrafo,vedad)==true){
        if(validarnum(idedad,nparrafo,vedad)==true){
            if(validarLongitudVariado(idedad,nparrafo,vedad,3)==true){//Se realiza una funcion propia ya que la funcion de longitud de telefono tiene una longitud fija, en cambio la edad no
                if(validarcantidad(idedad,nparrafo,vedad,campo)==true){
                    return true
                }
                else{
                    return false
                }
            }
            else{
                return false
            }
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}

function validarcontraseña(campo){
    let idpass = document.getElementById("i"+campo);
    let nparrafo = document.getElementById("c"+campo);
    let vpass = idpass.value;
    if(validarvacio(idpass,nparrafo,vpass)==true){
        return true
    }
    else{
        return false
    }
}

function validaradio(campo1,campo2){
    let idradio1 = document.getElementById("itema"+campo1);
    let idradio2 = document.getElementById("itema"+campo2);
    let nparrafo = document.getElementById("cradio");
    let vradio1 = idradio1.checked;
    let vradio2 = idradio2.checked;
    console.log(vradio1);
    console.log(vradio2);
    if(vradio1 == false && vradio2 == false){
        nparrafo.innerText = "Debes ingresar una opcion"
        nparrafo.style.display = "block"
        return false
    }
    else{
        nparrafo.style.display = "none"
        return true
    }
}

function validarselect(campo){
    let idselect = document.getElementById("i"+campo);
    let nparrafo = document.getElementById("c"+campo);
    let vselect = idselect.value;
    console.log(vselect)
    if(validarOpSelection(idselect,nparrafo,vselect)==true){
        return true
    }
    else{
        return false
    }
    
}

function validarcomentario(campo){
    let idcom = document.getElementById("i"+campo);
    let nparrafo = document.getElementById("c"+campo);
    let vcom = idcom.value;
    if(validarvacio(idcom,nparrafo,vcom)==true){
        return true
    }
    else{
        return false
    }
}


//<---------------------------------------Validaciones segundarias--------------------------------------------------->


function validarOpSelection(id,parrafo,valor){
    if(valor=="nin"){
        id.style.border = "red solid 4px"
        parrafo.innerText = "Tienes que ingresar una opcion"
        parrafo.style.display = "block"
        return false
    }
    else{
        id.style.border = "green solid 4px"
        parrafo.style.display = "none"
        return true
    }
}

function validarLongitudVariado(id,parrafo,valor,limite){
    if(valor.trim().length>=1 && valor.trim().length<=3){
        id.style.border = "green solid 4px"
        parrafo.style.display = "none"
        return true
    }
    else if(valor.trim().length>limite){
        id.style.border = "red solid 4px"
        parrafo.innerText = "Ingresaste demaciados numeros, porfavor intenta denuevo"
        parrafo.style.display = "block"
        return false
    }
    else{
        id.style.border = "red solid 4px"
        parrafo.innerText = "La longitud de numeros debe ser igual a "+limite+", porfavor intenta denuevo"
        parrafo.style.display = "block"
        return false
    }

}

function validarcantidad(id,parrafo,valor,nombreValor){
    if(valor>=200){
        id.style.border = "red solid 4px"
        parrafo.innerText = "Su "+nombreValor+" es demaciado alto, ingrese un valor valido"
        parrafo.style.display = "block"
        return false
    }
    else if(valor<=0){
        id.style.border = "red solid 4px"
        parrafo.innerText = "Su "+nombreValor+" es muy bajo, ingrese un valor valido"
        parrafo.style.display = "block"
        return false
    }
    else{
        id.style.border = "green solid 4px"
        parrafo.style.display = "none"
        return true
    }
}

function validarContenidoEmail(id,parrafo,valor){
    let expreg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if(expreg.test(valor)==true){
        id.style.border = "green solid 4px"
        parrafo.style.display = "none"
        return true
    }
    else{
        id.style.border = "red solid 4px"
        parrafo.innerText = "El correo que ingresaste no es valido, ingresa otro correo"
        parrafo.style.display = "block"
        return false
    }
}

function validarletra(id,parrafo,valor){
    if (isNaN(valor.trim()) == true){
        id.style.border = "green solid 4px"
        parrafo.style.display = "none"
        return true
    }
    else{
        id.style.border = "red solid 4px"
        parrafo.innerText = "Debes ingresar solo letras"
        parrafo.style.display = "block"
        return false
    }
}
function validarvacio(id,parrafo,valor){
    if(valor.trim().length == 0){
        id.style.border = "red solid 4px"
        parrafo.innerText = "El campo esta vacio"
        parrafo.style.display = "block"
        return false
    }
    else{
        id.style.border = "green solid 4px"
        parrafo.style.display = "none"
        return true
    }
}
function validarLongitudFijo(id,parrafo,valor,limite){
    if(valor.trim().length==limite){
        id.style.border = "green solid 4px"
        parrafo.style.display = "none"
        return true
    }
    else if(valor.trim().length>limite){
        id.style.border = "red solid 4px"
        parrafo.innerText = "Ingresaste demaciados numeros, porfavor intenta denuevo"
        parrafo.style.display = "block"
        return false
    }
    else{
        id.style.border = "red solid 4px"
        parrafo.innerText = "La longitud de numeros debe ser igual a "+limite+", porfavor intenta denuevo"
        parrafo.style.display = "block"
        return false
    }

}
function validarnum(id,parrafo,valor){
    if(isNaN(valor)==true){
        id.style.border = "red solid 4px"
        parrafo.innerText = "Ingresa solo datos que sean numeros"
        parrafo.style.display = "block"
        return false
    }
    else{
        id.style.border = "green solid 4px"
        parrafo.style.display = "none"
        return true
    }
}