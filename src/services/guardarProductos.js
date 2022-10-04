import {db} from '../../firebase/config';
import {query, collection} from "firebase/firestore";

const algoritmoGuardadoAutomatico = async () => {
    try {
        const coleccion = query(collection(db, "Products"));
        console.log(coleccion);
    } catch (error) {
        console.log(algoritmoGuardadoAutomatico);
    }
}









/* const docRef = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan"
});
console.log("Document written with ID: ", docRef.id); */