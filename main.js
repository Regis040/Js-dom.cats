// Créez en HTML trois "cartes" avec une image, un texte et un bouton (caché par défaut)
// En JS, sélectionnez les "cartes" créées en HTML
// Pour chaque carte, faites un event listener sur le click
// Sélectionnez dans la carte cliquée, le bouton masqué
// Affichez le bouton

const cats = document.querySelectorAll('.cat');


cats.forEach((cat) => {
    cat.addEventListener ("click", () => {
        const heIsHere = cat.querySelector(".btn");
       heIsHere.style.display = "block";
    }) 
})

