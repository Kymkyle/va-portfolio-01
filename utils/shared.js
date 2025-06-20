// Disable image dragging
export function disableImageDragging() {
  document.querySelectorAll('img, svg').forEach(el => {
    el.setAttribute('draggable', 'false');
  });
}

// Block dev tools and view-source shortcuts
export function blockDevToolsShortcuts() {
  document.addEventListener('keydown', function (e) {
    const key = e.key.toUpperCase();
    if (
      (e.ctrlKey && key === 'U') ||             // Ctrl+U
      key === 'F12' ||                          // F12
      (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(key)) // Ctrl+Shift+I/C/J
    ) {
      e.preventDefault();
    }
  });
}

// Preloader fade out and reveal main content on load
export function handlePreloader(preloaderId = "preloader", contentClass = "main-content") {
  window.addEventListener("load", function () {
    const preloader = document.getElementById(preloaderId);
    const mainContent = document.querySelector(`.${contentClass}`);

    if (preloader && mainContent) {
      preloader.classList.add("fade-out");

      setTimeout(() => {
        preloader.style.display = "none";
        mainContent.style.visibility = "visible";
      }, 500);
    }
  });
}
