function showSubCategory(subCategory) {
  const popupContainer = document.getElementById('popupContainer');
  const popupOverlay = document.getElementById('popupOverlay'); // Get the overlay
  const closeButton = document.getElementById('popupCloseBtn');
  const selectedSubTile = document.getElementById(subCategory);
  const popupContent = selectedSubTile.querySelector('.sub-category-content');

  selectedSubTile.style.display = 'block';
  popupContainer.style.display = 'flex';
  popupOverlay.style.display = 'block'; // Show the overlay when the popup is shown

  closeButton.addEventListener('click', closePopup);
  popupOverlay.addEventListener('click', closePopup); // Close on overlay click

  function closePopup(event) {
    if (event.target === popupContainer || event.target === closeButton || event.target === popupOverlay) {
      selectedSubTile.style.display = 'none';
      popupContainer.style.display = 'none';
      popupOverlay.style.display = 'none'; // Hide the overlay
      closeButton.removeEventListener('click', closePopup);
      popupOverlay.removeEventListener('click', closePopup);
      popupContent.removeEventListener('scroll', stopPropagation);
    }
  }

  popupContent.addEventListener('scroll', stopPropagation);
}

function stopPropagation(e) {
  e.stopPropagation();
}

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const button = document.querySelector(".container");

  if (menu.style.display === "block") {
      menu.style.display = "none";
      button.classList.remove("change");
  } else {
      menu.style.display = "block";
      button.classList.add("change");
  }
}