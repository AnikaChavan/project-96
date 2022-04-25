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

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }