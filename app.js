//1
document.getElementById("timestamp").innerText = Date.now().toString();

//2
const today = new Date();
document.getElementById("localDate").innerText = today.toLocaleDateString();

//3
document.getElementById("localTime").innerText = today.toLocaleTimeString();

//4
let todayFutur = new Date();
todayFutur.setDate(todayFutur.getDate()+2)
todayFutur.setHours(todayFutur.getHours()+6);
console.log("Exo 4 ->        " + todayFutur.toLocaleTimeString() + " " +todayFutur.toLocaleDateString());