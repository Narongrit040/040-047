var app_fireBase ={};

(function(){
// Initialize firebase


  var config = {
    apiKey: "AIzaSyAp4U0gXysuiHEdLNqQQqZ6IA3Na03-pgQ",
    authDomain: "foodrestaurant-48011.firebaseapp.com",
    databaseURL: "https://foodrestaurant-48011.firebaseio.com",
    projectId: "foodrestaurant-48011",
    storageBucket: "foodrestaurant-48011.appspot.com",
    messagingSenderId: "485680702233"
  };


firebase.initializeApp(config);
app_fireBase = firebase;

})()