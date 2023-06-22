const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCBG3pvXhocK7_GjeIx2sUeg&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('video-content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6803c12013msha3e295986f94084p121503jsn5fdcdf4de513',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const info = await response.json();
    return info;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group">
        <div
          class="w-full">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
        </div>
        <div class="title-video">
          <h3>
            <span></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
        `).slice(0, 4).join('')}`;
        content.innerHTML = view;
    }
    catch (error) {
        console.log(error);
    }
})();

// const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

// const content = null || document.getElementsByClassName('video-content');

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
//   }
// };

// async function fetchData(urlApi) {
//   const response = await fetch(urlApi, options);
//   const data = await response.json();
//   return data;
// }

// (async () => {
//   try {
//     const videos = await fetchData(API);
//     let view = `
//     ${videos.items.map(video => `
//       <div class="group">
//         <div
//           class="w-full">
//           <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
//         </div>
//         <div class="tittle-video">
//           <h3>
//             <span></span>
//             ${video.snippet.title}
//           </h3>
//         </div>
//       </div>
//     `).slice(0, 4).join('')}
//     `;
//     content.innerHTML = view;
//   } catch (error) {
//     console.log(error);
//   }
// })();