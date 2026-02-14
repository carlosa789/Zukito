const modal = document.getElementById("modal");

function openModal() {
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

function closeOnBackdrop(e) {
  if (e.target === modal) {
    closeModal();
  }
}
