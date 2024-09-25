const urlApi =
  'https://youtube-v31.p.rapidapi.com/search?channelId=UCLjhW-Y-i4gEWuJaScv5Ufg&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'c0610cc86fmshe9ebe7fadf236d7p1ff1c5jsn9fbb3e647a42',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(urlApi);
    console.log('Videos', videos);

    let view = `
    ${videos.items
      .map(
        video => `
      <div class="video-item">
        <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
          <img src="${video.snippet.thumbnails.high.url}" alt="Video 1">
        </a>
          <h3>${video.snippet.title}</h3>
          <h3>${video.snippet.description}</h3>
      </div>
    `
      )
      .join('')}
    `;
    content.innerHTML = view;
  } catch (err) {
    console.log('Error', err);
    alert('Oops! No se puede llevar a cabo la solicitud.');
  }
})();
