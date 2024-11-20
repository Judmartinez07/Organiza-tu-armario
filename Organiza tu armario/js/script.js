import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js" 


const appSettings = {
    databaseURL: "https://organiza-tu-ropa-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(appSettings);
const baseDades = getDatabase(app);
const l1 = ref(baseDades, "Look 1 ");
const l2 = ref(baseDades, "Look 2");
const l3 = ref(baseDades, "Look 3");


onValue(l1, function(snapshot) {

    if (snapshot.exists()){

        let resultats = Object.entries(snapshot.val())

        for (let i = 0; i < resultats.length; i++) {
            let current = resultats[i]
   
            addElement(current,"l1")
        } 
    }
})


onValue(l2, function(snapshot) {

    if (snapshot.exists()){

        let resultats = Object.entries(snapshot.val())

        for (let i = 0; i < resultats.length; i++) {
            let current = resultats[i]

            addElement(current,"l2")
        } 
    }
})
onValue(l3, function(snapshot) {

    if (snapshot.exists()){

        let resultats = Object.entries(snapshot.val())

        for (let i = 0; i < resultats.length; i++) {
            let current = resultats[i]

            addElement(current,"l3")
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
    let el = document.getElementsByClassName("l1");
    for(let i = 0; i<=el.length; i++){

        if(el[i].hidden == true){
            el[i].hidden = false;
        }else{
            el[i].hidden = true;
        }
        

    }
    
});




document.getElementById("mod2").addEventListener("click", function(){
    let el = document.getElementsByClassName("l2");
    for(let i = 0; i<=el.length; i++){

        if(el[i].hidden == true){
            el[i].hidden = false;
        }else{
            el[i].hidden = true;
        }
        

    }
    
});

document.getElementById("mod3").addEventListener("click", function(){
    let el = document.getElementsByClassName("l3");
    for(let i = 0; i<=el.length; i++){

        if(el[i].hidden == true){
            el[i].hidden = false;
        }else{
            el[i].hidden = true;
        }
        

    }
    
});



