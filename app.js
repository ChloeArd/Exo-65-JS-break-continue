let elements = document.getElementsByClassName('paragraphe');

for ( i = 0; i < elements.length; i++) {
    let paragraphe = elements[i];
    paragraphe.innerHTML = "la variable i vaut: " + i;

    if ((i + 1) % 2) {
        paragraphe.innerHTML = " ";
        continue;
    }

    if ( i === (elements.length - 1) ) {
        break;
    }
}