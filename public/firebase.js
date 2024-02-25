// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAYie8WM7Rst5OiUUxdckc30K4NsLJAaZo",
  authDomain: "livewiremashariki-14998.firebaseapp.com",
  projectId: "livewiremashariki-14998",
  storageBucket: "livewiremashariki-14998.appspot.com",
  messagingSenderId: "926105896293",
  appId: "1:926105896293:web:8e0870c75eaa4561b44d8c",
  measurementId: "G-ZZEXHC9NKE"
};
  
var app = firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore(app);
var storage = firebase.storage(app);