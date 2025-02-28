let enregistrer = document.getElementById('button');
let baliseCitation = document.getElementById('textCitation');
let baliseNom = document.getElementById('nomAuteur');

enregistrer.addEventListener("click", () => {
    let  citation = baliseCitation.value;
    let author = baliseNom.value;
    console.log(citation + author);
})
