(function () {
    const square = document.querySelector('.skill__skills');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {

        const entrySquares = entry.target.querySelectorAll('.loading');

        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
        
        entrySquares.forEach(entrySquare => {
            if (entry.isIntersecting) {
                entrySquare.classList.add('square-animation');
                return;
            }
            entrySquare.classList.remove('square-animation');
        })
  
      });
    });
  
    observer.observe(square);
})();
