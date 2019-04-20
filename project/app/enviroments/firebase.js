import firebase from 'firebase';
// import '@firebase/auth';

const config ={
  apiKey: "AIzaSyCcLHA5FYcCJeM21rt3r4yutOGs8ybxdfw",
  authDomain: "fir-demo-e9197.firebaseapp.com",
  databaseURL: "https://fir-demo-e9197.firebaseio.com",
  projectId: "fir-demo-e9197",
  storageBucket: "fir-demo-e9197.appspot.com",
  messagingSenderId: "305839940027"
};

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      this.db = this.app.database();
      this.auth = this.app;
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;
