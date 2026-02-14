const filters = document.querySelectorAll(".filter");
const videos = document.querySelectorAll(".video");
const searchInput = document.getElementById("searchInput");

function filterVideos() {
  const activeFilter = document.querySelector(".filter.active").dataset.filter;
  const searchText = searchInput.value.toLowerCase();

  videos.forEach(video => {
    const category = video.dataset.category;
    const title = video.dataset.title.toLowerCase();

    const matchesFilter =
      activeFilter === "all" || category === activeFilter;

    const matchesSearch =
      title.includes(searchText);

    if (matchesFilter && matchesSearch) {
      video.style.display = "block";
    } else {
      video.style.display = "none";
    }
  });
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    filterVideos();
  });
});

searchInput.addEventListener("input", filterVideos);
