import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC45-FAmoal4CaBemce1Awsovp0GiNFbNs",
    authDomain: "kodeday-blog.firebaseapp.com",
    projectId: "kodeday-blog",
    storageBucket: "kodeday-blog.appspot.com",
    messagingSenderId: "478517277755",
    appId: "1:478517277755:web:11e286dda3ff015f6d581e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
