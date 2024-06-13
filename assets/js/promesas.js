import {db} from "./firebase.js";
import {addDoc, collection, getDocs, doc, updateDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export const registrarUsuario = async(usuario)=>{
    console.log(usuario)
    const docref = await addDoc(collection(db, "registro"),usuario);
}

export const recuperarUsuario = async() =>{
    const ref = collection(db,"registro");
    const qSnap = await getDocs(ref);
    let lista = []
    qSnap.forEach((doc) => {
        lista.push({...doc.data(),id:doc.id})
    });
    return lista
}

export const actualizarUsuario = async(usuario,id)=>{
    console.log(id)
    const ref = doc(db,"registro",id)
    await updateDoc(ref,usuario)
}

export const eliminarUsuario = async(id)=>{
    const ref = doc(db,"registro",id);
    await deleteDoc(ref)
}