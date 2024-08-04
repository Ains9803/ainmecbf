const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch(`https://kitsu.io/api/edge/anime/${id}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }
    return response.json();
  })
  .then(data => {
    if (data && data.data) {
      const anime = data.data; 
      document.getElementById('title').textContent = anime.attributes.canonicalTitle;
      document.getElementById('details').innerHTML = `
        <img src="${anime.attributes.posterImage.original}" alt="${anime.attributes.canonicalTitle}" />
        <p>${anime.attributes.synopsis}</p>
      `;

      // Obtener el ID del video de YouTube
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
