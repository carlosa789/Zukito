const API_KEY = "AIzaSyD-2GVQuFWte6JvxqMZGARJ7ENVoSC0VS0";
const FEED = document.querySelector(".feed");

// Trending videos
fetch(
  `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=10&key=${API_KEY}`
)
  .then(res => res.json())
  .then(data => {
    FEED.innerHTML = "";
    data.items.forEach(video => {
      const card = document.createElement("div");
      card.className = "video-card";

      card.innerHTML = `
        <img src="${video.snippet.thumbnails.high.url}">
        <div class="video-info">
          <h3>${video.snippet.title}</h3>
          <p>${Number(video.statistics.viewCount).toLocaleString()} views</p>
        </div>
      `;

      card.onclick = () => openVideo(video.id);
      FEED.appendChild(card);
    });
  });

function openVideo(id) {
  document.body.innerHTML = `
    <div style="padding:12px">
      <iframe 
        width="100%" 
        height="220"
        src="https://www.youtube.com/embed/${id}?autoplay=1"
        frameborder="0"
        allowfullscreen>
      </iframe>

      <button onclick="location.reload()" 
        style="margin-top:12px;background:#272727;color:#fff;border:none;padding:10px 14px;border-radius:8px">
        ← Back
      </button>
    </div>
  `;
}
