const sectionCards = document.getElementById('achievementsCards');

export async function getAchievementsList(response) {
    for (let i = 0; i < response.results.length; i++) {

        // Création cards
        const achievementsCard = document.createElement("div");
        achievementsCard.classList.add("achievementsCard");
        sectionCards.append(achievementsCard);

        // Affichage nom
        const achievementsName = document.createElement("h2");
        achievementsName.classList.add("achievementsName");
        achievementsCard.append(achievementsName);
        achievementsName.textContent = response.results[i].name;

        // Affichage divider
        const divider = document.createElement("div");
        divider.classList.add("divDivider");
        achievementsCard.append(divider);

        // Affichage description
        const achievementsDescription = document.createElement("p");
        achievementsDescription.classList.add("achievementsDescription");
        achievementsCard.append(achievementsDescription);
        achievementsDescription.textContent = response.results[i].description;
    }
}