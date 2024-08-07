const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

function truncateText(text, wordLimit) {
  const words = text.split(' '); 
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...'; 
  }
  return text; 
}

fetch(`https://kitsu.io/api/edge/anime/${id}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); 
    if (data && data.data) {
      const anime = data.data; 
      document.getElementById('title').textContent = anime.attributes.canonicalTitle;

      document.getElementById('details').innerHTML = `
        <img src="${anime.attributes.posterImage.original}" alt="${anime.attributes.canonicalTitle}" />        
        <p>Tipo: <b>${anime.attributes.subtype || 'Desconocido'}</b></p>
        <p>Estreno: <b>${anime.attributes.startDate ? new Date(anime.attributes.startDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Desconocido'}</b></p>
        <p>Episodios: <b>${anime.attributes.episodeCount || 'Desconocido'}</b></p>
        <p>Género: <b>${anime.relationships.genres && anime.relationships.genres.data ? anime.relationships.genres.data.map(genre => genre.attributes.name).join(', ') : 'Desconocido'}</b></p>        
        <p><b>Sinopsis: </b>${truncateText(anime.attributes.synopsis, 50)}</p>
        
      `;

      
      const youtubeVideoId = anime.attributes.youtubeVideoId; 
      if (youtubeVideoId) {
        const videoContainer = document.querySelector('.videos');
        const trailerIframe = document.createElement('iframe');
        trailerIframe.src = `https://www.youtube.com/embed/${youtubeVideoId}`; 
        trailerIframe.width = "560";
        trailerIframe.height = "315";
        trailerIframe.frameBorder = "0";
        trailerIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        trailerIframe.allowFullscreen = true;
        videoContainer.appendChild(trailerIframe);
      } else {
        console.log('No hay video disponible para este anime.');
      }
    } else {
      console.error('No se encontraron detalles.');
    }
  })
  .catch(error => console.error('Error fetching details:', error));