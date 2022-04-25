function addUser(){
    var username = document.getElementById("userName").value;
    localStorage.setItem("USERNAME",username);
    window.location = "kwitter_room.html";
}