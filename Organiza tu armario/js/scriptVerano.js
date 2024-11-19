import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js" 


const appSettings = {
    databaseURL: "https://organiza-tu-ropa-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const l4 = ref(baseDades, "Verano Look 1");
const l5 = ref(baseDades, "Verano Look 2");
const l6 = ref(baseDades, "Verano Look 3 ");


onValue(l4, function(snapshot) {
  
    if (snapshot.exists()){

        let resultats = Object.entries(snapshot.val())

        for (let i = 0; i < resultats.length; i++) {
            let current = resultats[i]
            
            addElement(current, "l4")
        } 
    }
})


onValue(l5, function(snapshot) {

    if (snapshot.exists()){

        let resultats = Object.entries(snapshot.val())

        for (let i = 0; i < resultats.length; i++) {
            let current = resultats[i]
         
            addElement(current, "l5")
        } 
    }
})


onValue(l6, function(snapshot) {

    if (snapshot.exists()){

        let resultats = Object.entries(snapshot.val())

        for (let i = 0; i < resultats.length; i++) {
            let current = resultats[i]
      
            addElement(current, "l6")
        } 
    }
})

function addElement(e, look){
    let link = document.createElement("a");
    link.href = e[1].LINK;
    let cont = document.createElement("div");
    cont.classList += look

    let titol = document.createElement("h1");
    titol.textContent=e[0]
    let show = document.createElement("img");
    show.src = e[1].IMG 

    let c = document.getElementById("lista");
    cont.appendChild(titol);
    cont.appendChild(show);
    cont.hidden = true;
    link.appendChild(cont)
    c.appendChild(link)
    
    
}


document.getElementById("mod1").addEventListener("click", function(){
    let el = document.getElementsByClassName("l4");
    for(let i = 0; i<=el.length; i++){
        el[i].hidden = false;
    }
    
});


document.getElementById("mod2").addEventListener("click", function(){
    let el = document.getElementsByClassName("l5");
    for(let i = 0; i<=el.length; i++){
        el[i].hidden = false;
    }
    
});

document.getElementById("mod3").addEventListener("click", function(){
    let el = document.getElementsByClassName("l6");
    for(let i = 0; i<=el.length; i++){
        el[i].hidden = false;
    }
    
});
