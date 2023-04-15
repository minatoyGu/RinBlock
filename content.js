const removeAds = () => {
  // Remove ads from video pages.
  const adElements = document.querySelectorAll('.ytd-sponsored-card-renderer, .ytd-display-ad-renderer, .video-ads');
  adElements.forEach(adElement => {
    const rect = adElement.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      adElement.remove();
    }
  });

  // Remove ads from video overlays.
  const overlayElements = document.querySelectorAll('.ytp-ad-overlay-container, .ytp-ad-image-overlay, .ytp-ad-overlay-slot, .ytp-ad-overlay-bottom-panel-container, .ytp-ad-skip-button-slot');
  overlayElements.forEach(overlayElement => {
    overlayElement.remove();
  });

  // Remove banner ads.
  const bannerElements = document.querySelectorAll('.ytp-ad-module');
  bannerElements.forEach(bannerElement => {
    bannerElement.remove();
  });

  // Remove ads from search results.
  const searchAdElements = document.querySelectorAll('ytd-promoted-sparkles-web-renderer, ytd-video-renderer > #thumbnail + * > #details > #badges > #badge');
  searchAdElements.forEach(searchAdElement => {
    searchAdElement.parentElement.parentElement.parentElement.parentElement.remove();
  });

  // Remove sidebar ads.
  const sidebarAdElements = document.querySelectorAll('#secondary-inner > .ytd-display-ad-renderer');
  sidebarAdElements.forEach(sidebarAdElement => {
    sidebarAdElement.remove();
  });

  // Show sidebar.
  const sidebarElements = document.querySelectorAll('#secondary');
  sidebarElements.forEach(sidebarElement => {
    sidebarElement.style.display = 'block';
  });
};

// Remove ads on page load and on AJAX navigation events.
removeAds();
document.addEventListener('yt-navigate-finish', removeAds);

// Remove unskippable ads.
const removeUnskippableAds = () => {
  const adElement = document.querySelector('.videoAdUiSkipButtonContainer');
  if (adElement) {
    adElement.parentElement.parentElement.remove();
  }
};

// Detect when an ad is added to the page and remove it.
document.addEventListener('DOMNodeInserted', removeUnskippableAds);
