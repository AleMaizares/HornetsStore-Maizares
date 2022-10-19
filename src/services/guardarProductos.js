import {db} from '../../firebase/config';
import {query, collection} from "firebase/firestore";

const algoritmoGuardadoAutomatico = async () => {
    try {
        const coleccion = query(collection(db, "Products"));
    } catch (error) {
        algoritmoGuardadoAutomatico
    }
}