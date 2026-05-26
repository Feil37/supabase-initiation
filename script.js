function renderClientsOpinions(opinions) {
    let sectionOpinions = document.createElement("section");
    let titreSectionOpinions = document.createElement("h2");
    let opinionsGrid = document.createElement("div");

    titreSectionOpinions.textContent = "Ils nous ont fait confiance :";
    
    opinions.forEach(opinion => {
        opinionsGrid.appendChild(createClientOpinionCard(opinion));
    });

    opinionsGrid.className = "opinions-flex-wrap";
    sectionOpinions.classList.add("container");

    sectionOpinions.appendChild(titreSectionOpinions);
    sectionOpinions.appendChild(opinionsGrid);
    document.body.appendChild(sectionOpinions);
}

function createClientOpinionCard(opinion) {
    let card = document.createElement("div");
    let clientName = document.createElement("p");
    let review = document.createElement("p");
    let prestation = document.createElement("h3");
    let noteBox = document.createElement("div");

    // Add content from distant data
    clientName.textContent = opinion.prenom_client;
    review.textContent = opinion.commentaire;
    prestation.textContent = opinion.prestation;
    let note = opinion.note;
    for (let i=0; i<5; i++) {
        noteBox.appendChild(renderStar(i, note));
    }

    // Add class on every element
    card.className = "opinion-card";

    // Append all element in DOM
    card.appendChild(prestation);
    card.appendChild(noteBox);
    card.appendChild(review);
    card.appendChild(clientName);

    return card;
}

function renderStar(j, note) {
    const star = document.createElement("img");
    star.className = "tde";
    star.src = "assets/star.svg";
    star.alt = "Etoile";
    star.id = `tde_${j}`;
    if (j>note-1) {
        star.style.filter = "grayscale(100%)";
    }

    return star;
}

fetch('http://localhost:3000/avis_clients')
.then(async (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}).then((res)=> {
    renderClientsOpinions(res);
})


fetch('http://localhost:3000/prestations')
.then(async (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}).then((res)=> {
    console.log(res);
    
})