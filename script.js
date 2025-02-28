let enregistrer = document.getElementById('button');
let baliseCitation = document.getElementById('textCitation');
let baliseNom = document.getElementById('nomAuteur');

enregistrer.addEventListener("click", () => {
    let  text  = baliseCitation.value;
    let author = baliseNom.value;
    console.log(text + author);
})
