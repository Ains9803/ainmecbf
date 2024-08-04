let currentPage = 1; 
const pageSize = 20; 
let isLoading = false; 

async function getAnimeData(subtype, searchTerm = "") {
    if (isLoading) return; 
    isLoading = true; 

    const url = `https://kitsu.io/api/edge/anime?page[limit]=${pageSize}&page[offset]=${(currentPage - 1) * pageSize}&filter[subtype]=${subtype}&filter[text]=${searchTerm}`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json'
            }
        });
        
        if (!response.ok) {
            const errorMessage = await response.text(); // Obtener el mensaje de error
            throw new Error(`Error en la respuesta de la API: ${errorMessage}`);
        }

        const data = await response.json();
        displayAnime(data.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        isLoading = false; 
    }
}

function displayAnime(animeList) {
    const animeCardsContainer = document.querySelector('.anime-cards');

    if (!animeList || animeList.length === 0) {
        animeCardsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
        return;
    }

    animeList.forEach(anime => {
        const article = document.createRange().createContextualFragment(/*html*/`

            <div class="anime-card">
                <img src="${anime.attributes.posterImage.small}" alt="${anime.attributes.canonicalTitle}" loading="lazy">
                <h3>${anime.attributes.canonicalTitle}</h3>
                <span>${anime.attributes.status}</span>
            </div>  
        `);
        animeCardsContainer.append(article);
    });
}

// Manejo de búsqueda
document.getElementById('search').addEventListener('input', (event) => {
    const searchTerm = event.target.value;
    currentPage = 1; 
    document.querySelector('.anime-cards').innerHTML = ''; 
    getAnimeData(document.body.dataset.subtype, searchTerm); 
});

// Cargar datos iniciales
getAnimeData(document.body.dataset.subtype); 

// Manejo de scroll para paginación
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isLoading) { // Ajusta el umbral
        currentPage++;
        getAnimeData(document.body.dataset.subtype); 
    }
});
