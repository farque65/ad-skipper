// Define the selectors for different websites
const selectors = {
    'youtube.com': '.ytp-skip-ad-button',
    // Add more websites and their skip button selectors here
    'netflix.com': '.default-ltr-cache'
  };
  
  function getSelectorForCurrentSite() {
    const hostname = window.location.hostname;
    for (const site in selectors) {
      if (hostname.includes(site)) {
        return selectors[site];
      }
    }
    return null;
  }
  
  function skipAds(selector) {
    const skipButton = document.querySelector(selector);
    if (skipButton) {
      skipButton.click();
    }
  }
  
  const selector = getSelectorForCurrentSite();
  
  if (selector) {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          skipAds(selector);
        }
      }
    });
  
    observer.observe(document, {
      childList: true,
      subtree: true
    });
  
    // Initial check in case the ad is already present
    skipAds(selector);
  }
  