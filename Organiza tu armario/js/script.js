import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js" 


const appSettings = {
    databaseURL: "https://organiza-tu-ropa-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const l1 = ref(baseDades, "Look 1 ");



onValue(l1, function(snapshot) {
    console.log(snapshot)
    if (snapshot.exists()){

        let resultats = Object.entries(snapshot.val())

        for (let i = 0; i < resultats.length; i++) {
            let current = resultats[i]
            console.log(current)
            addElement(current)
        } 
  
    }

   

})

function addElement(e){
    let titol = document.createElement("h1");
    titol.textContent=e[0]
    let show = document.createElement("img");
    show.src = e[1]

    let c = document.getElementById("l1");
    c.appendChild(titol);
    c.appendChild(show);


}


