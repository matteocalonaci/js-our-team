// CONSEGNA
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//     MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite(in allegato zip).

//     MILESTONE 1:
// Stampare su console, per ogni membro del team: il nome e il ruolo.

//     MILESTONE 2:
// Stampare in pagina, per ogni membro del team:
//nome, ruolo e immagine, come semplici stringhe.
// Svolgere questa milestone grazie a una funzione può semplificarvi il lavoro.
//BONUS
//La funzione riceve un oggetto e restituisce una stringa di HTML.



//CREO UN ARRAY DI OGGETTI 



let listTeam = [
    { nome: "Wayne Barnett", ruolo: "Founder & CEO", immagine: "wayne-barnett-founder-ceo.jpg", },
    { nome: "Angela Caroll", ruolo: "Chief Editor", immagine: "angela-caroll-chief-editor.jpg", },
    { nome: "Walter Gordon", ruolo: "Office Manager", immagine: "walter-gordon-office-manager.jpg", },
    { nome: "Angela Lopez", ruolo: "Social Media Manager", immagine: "angela-lopez-social-media-manager.jpg", },
    { nome: "Scott Estrada", ruolo: "Developer", immagine: "scott-estrada-developer.jpg", },
    { nome: "Barbara Ramos", ruolo: "Graphic Designer", immagine: "barbara-ramos-graphic-designer.jpg", }


]
console.log(listTeam)

const container = document.getElementById("container");

for (let i = 0; i < listTeam.length; i++) {
    let membro = listTeam[i]

    container.innerHTML += `<div class="card">
                            <img src="./img/${membro.immagine}"></img>
                            <h2>${membro.nome}</h2>
                            <p>Ruolo: ${membro.ruolo}</p>
                            </div>`
}



