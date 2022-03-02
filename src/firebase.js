import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore} from '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAycgjVLGTJS45TzKs1yT1oyfSg8_YX3LM",
    authDomain: "galaxy-clone.firebaseapp.com",
    databaseURL: "https://galaxy-clone-default-rtdb.firebaseio.com",
    projectId: "galaxy-clone",
    storageBucket: "galaxy-clone.appspot.com",
    messagingSenderId: "55904613250",
    appId: "1:55904613250:web:880f512d2cd473e42c159b",
    measurementId: "G-S4THEWD6GN"
})

export const auth = app.auth()
export const db = getFirestore(app)
export default firebase