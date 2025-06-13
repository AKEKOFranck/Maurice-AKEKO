// Sélectionne le premier élément avec la classe 'btnav' (notez qu'il ne faut pas mettre le point dans getElementsByClassName)
btnav = document.getElementsByClassName('btnav')[0];
// Sélectionne le premier élément nav
nav = document.getElementsByTagName('nav')[0];

function hamburger() {
    // Bascule la visibilité du nav
    if(nav.style.visibility === 'hidden') {
        nav.style.visibility = 'visible';
    } else {
        nav.style.visibility = 'hidden';
    }
}

// Ajoute l'événement click au bouton
btnav.addEventListener('click', hamburger);