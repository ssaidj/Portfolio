// JavaScript spécifique pour project-design.html


      // ============================================
      // MIX EN COULISSES CAROUSEL MODAL
      // ============================================
      const mixModal = document.getElementById('mix-modal');
      const mixModalClose = document.getElementById('mix-modal-close');
      const mixThumbnail = document.getElementById('mix-thumbnail');

      // Open MIX carousel modal when clicking thumbnail
      if (mixThumbnail) {
        mixThumbnail.addEventListener('click', function() {
          mixModal.classList.add('active');
          // Reset to first slide when opening
          showMixSlide(0);
        });
      }

      // Close MIX carousel modal
      mixModalClose.addEventListener('click', function() {
        mixModal.classList.remove('active');
      });

      // Close modal when clicking outside the image or buttons
      mixModal.addEventListener('click', function(e) {
        const isClickOnImage = e.target.tagName === 'IMG' || e.target.closest('.screenshot-img');
        const isClickOnButton = e.target.closest('.carousel-btn');
        const isClickOnIndicator = e.target.closest('.indicator');
        const isClickOnCloseButton = e.target.closest('.carousel-modal-close');
        
        if (!isClickOnImage && !isClickOnButton && !isClickOnIndicator && !isClickOnCloseButton) {
          mixModal.classList.remove('active');
        }
      });

      // MIX Carousel functionality
      const mixSlides = document.querySelectorAll('#mix-modal .carousel-slide');
      const mixPrevBtn = document.querySelector('#mix-modal .carousel-prev');
      const mixNextBtn = document.querySelector('#mix-modal .carousel-next');
      const mixIndicators = document.querySelectorAll('#mix-modal .indicator');
      let currentMixSlide = 0;

      // Function to show specific slide in MIX carousel
      function showMixSlide(index) {
        mixSlides.forEach(slide => slide.classList.remove('active'));
        mixIndicators.forEach(indicator => indicator.classList.remove('active'));

        if (index >= mixSlides.length) {
          currentMixSlide = 0;
        } else if (index < 0) {
          currentMixSlide = mixSlides.length - 1;
        } else {
          currentMixSlide = index;
        }

        mixSlides[currentMixSlide].classList.add('active');
        mixIndicators[currentMixSlide].classList.add('active');
      }

      function nextMixSlide() {
        showMixSlide(currentMixSlide + 1);
      }

      function prevMixSlide() {
        showMixSlide(currentMixSlide - 1);
      }

      // Event listeners for MIX carousel buttons
      mixNextBtn.addEventListener('click', () => {
        nextMixSlide();
      });

      mixPrevBtn.addEventListener('click', () => {
        prevMixSlide();
      });

      // Event listeners for MIX indicators
      mixIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          showMixSlide(index);
        });
      });

      // Keyboard navigation for MIX carousel
      document.addEventListener('keydown', (e) => {
        if (mixModal.classList.contains('active')) {
          if (e.key === 'ArrowLeft') {
            prevMixSlide();
          } else if (e.key === 'ArrowRight') {
            nextMixSlide();
          } else if (e.key === 'Escape') {
            mixModal.classList.remove('active');
          }
        }
      });

      // ============================================
      // SATURNE E-COMMERCE CAROUSEL MODAL
      // ============================================
      const saturneModal = document.getElementById('saturne-modal');
      const saturneModalClose = document.getElementById('saturne-modal-close');
      const saturneThumbnail = document.getElementById('saturne-thumbnail');

      // Open Saturne carousel modal when clicking thumbnail
      if (saturneThumbnail) {
        saturneThumbnail.addEventListener('click', function() {
          saturneModal.classList.add('active');
          // Reset to first slide when opening
          showSaturneSlide(0);
        });
      }

      // Close Saturne carousel modal
      saturneModalClose.addEventListener('click', function() {
        saturneModal.classList.remove('active');
      });

      // Close modal when clicking outside the image or buttons
      saturneModal.addEventListener('click', function(e) {
        const isClickOnImage = e.target.tagName === 'IMG' || e.target.closest('.screenshot-img');
        const isClickOnButton = e.target.closest('.carousel-btn');
        const isClickOnIndicator = e.target.closest('.indicator');
        const isClickOnCloseButton = e.target.closest('.carousel-modal-close');
        
        if (!isClickOnImage && !isClickOnButton && !isClickOnIndicator && !isClickOnCloseButton) {
          saturneModal.classList.remove('active');
        }
      });

      // Saturne Carousel functionality
      const saturneSlides = document.querySelectorAll('#saturne-modal .carousel-slide');
      const saturnePrevBtn = document.querySelector('#saturne-modal .carousel-prev');
      const saturneNextBtn = document.querySelector('#saturne-modal .carousel-next');
      const saturneIndicators = document.querySelectorAll('#saturne-modal .indicator');
      let currentSaturneSlide = 0;

      // Function to show specific slide in Saturne carousel
      function showSaturneSlide(index) {
        saturneSlides.forEach(slide => slide.classList.remove('active'));
        saturneIndicators.forEach(indicator => indicator.classList.remove('active'));

        if (index >= saturneSlides.length) {
          currentSaturneSlide = 0;
        } else if (index < 0) {
          currentSaturneSlide = saturneSlides.length - 1;
        } else {
          currentSaturneSlide = index;
        }

        saturneSlides[currentSaturneSlide].classList.add('active');
        saturneIndicators[currentSaturneSlide].classList.add('active');
      }

      function nextSaturneSlide() {
        showSaturneSlide(currentSaturneSlide + 1);
      }

      function prevSaturneSlide() {
        showSaturneSlide(currentSaturneSlide - 1);
      }

      // Event listeners for Saturne carousel buttons
      saturneNextBtn.addEventListener('click', () => {
        nextSaturneSlide();
      });

      saturnePrevBtn.addEventListener('click', () => {
        prevSaturneSlide();
      });

      // Event listeners for Saturne indicators
      saturneIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          showSaturneSlide(index);
        });
      });

      // Keyboard navigation for Saturne carousel
      document.addEventListener('keydown', (e) => {
        if (saturneModal.classList.contains('active')) {
          if (e.key === 'ArrowLeft') {
            prevSaturneSlide();
          } else if (e.key === 'ArrowRight') {
            nextSaturneSlide();
          } else if (e.key === 'Escape') {
            saturneModal.classList.remove('active');
          }
        }
      });
