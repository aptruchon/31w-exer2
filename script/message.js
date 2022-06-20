(function(){
    let elmBoite__modale
    let elmBoite__x
    let elmBoite__contenu

    let elmOK = document.querySelector('#mon_bouton');
    let elmBody = document.querySelector("body");

    function creer_boite_modale(){
        elmBoite__modale = document.createElement("div");
        elmBoite__contenu = document.createElement("div");
        elmBoite__x = document.createElement("button");

        elmBoite__modale.classList.add("boite__modale");
        elmBoite__contenu.classList.add("elmBoite__contenu");
        elmBoite__x.classList.add("boite__x");

        elmBody.appendChild(elmBoite__modale);
        elmBoite__modale.appendChild(elmBoite__contenu);
        elmBoite__modale.appendChild(elmBoite__x);

        elmBoite__x.innerHTML = "X";
        elmBoite__contenu.innerHTML = "Ceci est un test";
    }
    
    creer_boite_modale();
    console.log(elmBoite__modale);

    elmOK.addEventListener('mousedown', function(){
        console.log('Bravo, le script fonctionne!');
        elmBoite__modale.classList.add("boite__modale__ouvrir");
    })

    elmBoite__x.addEventListener("mousedown", function(){
        elmBoite__modale.classList.remove("boite__modale__ouvrir")
    })
})()