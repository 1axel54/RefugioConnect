// Configuración Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Funciones globales
const firebaseApp = {
    uploadFile: async (file, path) => {
        const ref = storage.ref(`${path}/${Date.now()}_${file.name}`);
        await ref.put(file);
        return await ref.getDownloadURL();
    },
    
    getData: async (collection) => {
        const snapshot = await db.collection(collection).get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
};