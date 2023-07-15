

const firebaseConfig = {
  apiKey: "AIzaSyDYDp3CGij5j_OXpqS0iyeANmK0fFTr6Qc",
  authDomain: "content-management-tool-92c4e.firebaseapp.com",
  projectId: "content-management-tool-92c4e",
  storageBucket: "content-management-tool-92c4e.appspot.com",
  messagingSenderId: "584338689330",
  appId: "1:584338689330:web:c3a604551c299158909b2b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
