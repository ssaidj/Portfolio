      const webdocModal = document.getElementById('webdoc-modal');
      const webdocModalClose = document.getElementById('webdoc-modal-close');
      const webdocThumbnail = document.getElementById('webdoc-thumbnail');
      if (webdocThumbnail) {
        webdocThumbnail.addEventListener('click', function() {
          webdocModal.classList.add('active');
          showSlide(0);
        });
      }
      webdocModalClose.addEventListener('click', function() {
        webdocModal.classList.remove('active');
      });
      webdocModal.addEventListener('click', function(e) {
        const isClickOnImage = e.target.tagName === 'IMG' || e.target.closest('.screenshot-img');
        const isClickOnButton = e.target.closest('.carousel-btn');
        const isClickOnIndicator = e.target.closest('.indicator');
        const isClickOnCloseButton = e.target.closest('.carousel-modal-close');
        if (!isClickOnImage && !isClickOnButton && !isClickOnIndicator && !isClickOnCloseButton) {
          webdocModal.classList.remove('active');
        }
      });
      const webdocSlides = document.querySelectorAll('#webdoc-modal .carousel-slide');
      const webdocPrevBtn = document.querySelector('#webdoc-modal .carousel-prev');
      const webdocNextBtn = document.querySelector('#webdoc-modal .carousel-next');
      const webdocIndicators = document.querySelectorAll('#webdoc-modal .indicator');
      let currentSlide = 0;
      function showSlide(index) {
        webdocSlides.forEach(slide => slide.classList.remove('active'));
        webdocIndicators.forEach(indicator => indicator.classList.remove('active'));
        if (index >= webdocSlides.length) {
          currentSlide = 0;
        } else if (index < 0) {
          currentSlide = webdocSlides.length - 1;
        } else {
          currentSlide = index;
        }
        webdocSlides[currentSlide].classList.add('active');
        webdocIndicators[currentSlide].classList.add('active');
      }
      function nextSlide() {
        showSlide(currentSlide + 1);
      }
      function prevSlide() {
        showSlide(currentSlide - 1);
      }
      webdocNextBtn.addEventListener('click', () => {
        nextSlide();
      });
      webdocPrevBtn.addEventListener('click', () => {
        prevSlide();
      });
      webdocIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          showSlide(index);
        });
      });
      document.addEventListener('keydown', (e) => {
        if (webdocModal.classList.contains('active')) {
          if (e.key === 'ArrowLeft') {
            prevSlide();
          } else if (e.key === 'ArrowRight') {
            nextSlide();
          } else if (e.key === 'Escape') {
            webdocModal.classList.remove('active');
          }
        }
      });
