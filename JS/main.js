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

//CREO INFO OGGETTI DEL TEAM

const myListContainer = document.querySelector("ul");
//CREO UN ARRAY DI OGGETTI 


let listTeam = [
    {
        nome: "Angela Carroll",
        ruolo: "Cheif Editor",
        foto: `<img src="./IMG/angela-caroll-chief-editor.jpg">`
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: ''

    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: ''

    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: ''

    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: ''

    },
    {
        nome: "Wayne Barnett",
        ruolo: "Founder Ceo",
        foto: ''

    }
]

console.log(listTeam)

for (let i = 0; i < listTeam.length; i++) {
    for (let chiave in listTeam[i]) {
        console.log(listTeam[i][chiave])
    }

}


