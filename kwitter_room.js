const config = {
  apiKey: "AIzaSyC2MOaXxpmSqvdU_Meo8CSshubMEFUnxVw",
  authDomain: "kwitter-project-848b9.firebaseapp.com",
  projectId: "kwitter-project-848b9",
  storageBucket: "kwitter-project-848b9.appspot.com",
  messagingSenderId: "757231597071",
  appId: "1:757231597071:web:5f2c4ffb86278c8ad7d57a",
  measurementId: "G-H0D03483DB"
};

  firebase.initializeApp(config);

  user_name = localStorage.getItem("user_name")

function logout(){
  window.location = "index.html";
  document.getElementById("userName").innerHTML= "";
  localStorage.removeItem("USERNAME")
}

var getuser = localStorage.getItem("USERNAME");
document.getElementById("user_name").innerHTML = "Hello There " +getuser+"!";

function addRoom(){
     var roomName = document.getElementById("roomName").value;
     localStorage.setItem("ROOMNAME" ,roomName);
     firebase.database().ref("/").child(roomName).update({
           purpose:"adding room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location="kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {
     childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});

}
getData();

