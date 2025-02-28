let enregistrer = document.getElementById('button');
let baliseCitation = document.getElementById('textCitation');
let baliseNom = document.getElementById('nomAuteur');

enregistrer.addEventListener("click", () => {
    let  text  = baliseCitation.value;
    let author = baliseNom.value;
    addQuote(text, author);
})

function addQuote(quote, author){
    let quoteElem = document.createElement('p');
    quoteElem.classList.add("text");
    quoteElem = document.createTextNode(quote); //Ajout d'un text node, quote n'est pas considéré comme un objet
    // quoteElem.appendChild(node); // association de la constante node à quoteElem

    let auteurElem = document.createElement('p');
    auteurElem.classList.add("author");
    auteurElem  = document.createTextNode(author); //Ajout d'un text node, quote n'est pas considéré comme un objet
    //auteurElem.appendChild(nodeAuthor);

    let newDiv = document.createElement('div');
    newDiv.classList.add('quote');
    newDiv.appendChild(quoteElem);
    newDiv.appendChild(auteurElem);
    
    let quoteDiv = document.getElementById('quote-list');
    quoteDiv.appendChild(newDiv);
}