// JavaScript spécifique pour project-web.html


      // Lightbox functionality
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const lightboxClose = document.getElementById('lightbox-close');
      const screenshots = document.querySelectorAll('.screenshot-img:not(.carousel-slide img)');

      screenshots.forEach(img => {
        img.addEventListener('click', function() {
          lightbox.classList.add('active');
          lightboxImg.src = this.src;
          lightboxImg.alt = this.alt;
        });
      });

      lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
      });

      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
          lightbox.classList.remove('active');
        }
      });

      // Fermer avec la touche Escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          lightbox.classList.remove('active');
          carouselModal.classList.remove('active');
        }
      });

      // Carousel Modal functionality
      const carouselModal = document.getElementById('carousel-modal');
      const carouselModalClose = document.getElementById('carousel-modal-close');
      const acf2lThumbnail = document.getElementById('acf2l-thumbnail');

      // Open carousel modal when clicking thumbnail
      if (acf2lThumbnail) {
        acf2lThumbnail.addEventListener('click', function() {
          carouselModal.classList.add('active');
          // Reset to first slide when opening
          showSlide(0);
        });
      }

      // Close carousel modal
      carouselModalClose.addEventListener('click', function() {
        carouselModal.classList.remove('active');
      });

      // Close modal when clicking outside the image or buttons
      carouselModal.addEventListener('click', function(e) {
        // Check if click is on modal background, carousel content, or carousel container
        // But NOT on the image, buttons, or indicators
        const isClickOnImage = e.target.tagName === 'IMG' || e.target.closest('.screenshot-img');
        const isClickOnButton = e.target.closest('.carousel-btn');
        const isClickOnIndicator = e.target.closest('.indicator');
        const isClickOnCloseButton = e.target.closest('.carousel-modal-close');
        
        // Close modal if click is not on interactive elements
        if (!isClickOnImage && !isClickOnButton && !isClickOnIndicator && !isClickOnCloseButton) {
          carouselModal.classList.remove('active');
        }
      });

      // Carousel functionality
      const carouselSlides = document.querySelectorAll('#carousel-modal .carousel-slide');
      const prevBtn = document.querySelector('#carousel-modal .carousel-prev');
      const nextBtn = document.querySelector('#carousel-modal .carousel-next');
      const indicators = document.querySelectorAll('#carousel-modal .indicator');
      let currentSlide = 0;

      // Function to show specific slide
      function showSlide(index) {
        // Remove active class from all slides and indicators
        carouselSlides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Handle wrap around
        if (index >= carouselSlides.length) {
          currentSlide = 0;
        } else if (index < 0) {
          currentSlide = carouselSlides.length - 1;
        } else {
          currentSlide = index;
        }

        // Add active class to current slide and indicator
        carouselSlides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
      }

      // Next slide
      function nextSlide() {
        showSlide(currentSlide + 1);
      }

      // Previous slide
      function prevSlide() {
        showSlide(currentSlide - 1);
      }

      // Event listeners for buttons
      nextBtn.addEventListener('click', () => {
        nextSlide();
      });

      prevBtn.addEventListener('click', () => {
        prevSlide();
      });

      // Event listeners for indicators
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          showSlide(index);
        });
      });

      // Keyboard navigation for ACF2L carousel
      document.addEventListener('keydown', (e) => {
        if (carouselModal.classList.contains('active')) {
          if (e.key === 'ArrowLeft') {
            prevSlide();
          } else if (e.key === 'ArrowRight') {
            nextSlide();
          }
        }
      });

      // ============================================
      // SUSHI'S PARADISE CAROUSEL MODAL
      // ============================================
      const sushiModal = document.getElementById('sushi-modal');
      const sushiModalClose = document.getElementById('sushi-modal-close');
      const sushiThumbnail = document.getElementById('sushi-thumbnail');

      // Open Sushi carousel modal when clicking thumbnail
      if (sushiThumbnail) {
        sushiThumbnail.addEventListener('click', function() {
          sushiModal.classList.add('active');
          // Reset to first slide when opening
          showSushiSlide(0);
        });
      }

      // Close Sushi carousel modal
      sushiModalClose.addEventListener('click', function() {
        sushiModal.classList.remove('active');
      });

      // Close modal when clicking outside the image or buttons
      sushiModal.addEventListener('click', function(e) {
        const isClickOnImage = e.target.tagName === 'IMG' || e.target.closest('.screenshot-img');
        const isClickOnButton = e.target.closest('.carousel-btn');
        const isClickOnIndicator = e.target.closest('.indicator');
        const isClickOnCloseButton = e.target.closest('.carousel-modal-close');
        
        if (!isClickOnImage && !isClickOnButton && !isClickOnIndicator && !isClickOnCloseButton) {
          sushiModal.classList.remove('active');
        }
      });

      // Sushi Carousel functionality
      const sushiSlides = document.querySelectorAll('#sushi-modal .carousel-slide');
      const sushiPrevBtn = document.querySelector('#sushi-modal .carousel-prev');
      const sushiNextBtn = document.querySelector('#sushi-modal .carousel-next');
      const sushiIndicators = document.querySelectorAll('#sushi-modal .indicator');
      let currentSushiSlide = 0;

      // Function to show specific slide in Sushi carousel
      function showSushiSlide(index) {
        sushiSlides.forEach(slide => slide.classList.remove('active'));
        sushiIndicators.forEach(indicator => indicator.classList.remove('active'));

        if (index >= sushiSlides.length) {
          currentSushiSlide = 0;
        } else if (index < 0) {
          currentSushiSlide = sushiSlides.length - 1;
        } else {
          currentSushiSlide = index;
        }

        sushiSlides[currentSushiSlide].classList.add('active');
        sushiIndicators[currentSushiSlide].classList.add('active');
      }

      function nextSushiSlide() {
        showSushiSlide(currentSushiSlide + 1);
      }

      function prevSushiSlide() {
        showSushiSlide(currentSushiSlide - 1);
      }

      // Event listeners for Sushi carousel buttons
      sushiNextBtn.addEventListener('click', () => {
        nextSushiSlide();
      });

      sushiPrevBtn.addEventListener('click', () => {
        prevSushiSlide();
      });

      // Event listeners for Sushi indicators
      sushiIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          showSushiSlide(index);
        });
      });

      // Keyboard navigation for Sushi carousel
      document.addEventListener('keydown', (e) => {
        if (sushiModal.classList.contains('active')) {
          if (e.key === 'ArrowLeft') {
            prevSushiSlide();
          } else if (e.key === 'ArrowRight') {
            nextSushiSlide();
          }
        }
      });

      // Update Escape key handler to close both modals
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          lightbox.classList.remove('active');
          carouselModal.classList.remove('active');
          sushiModal.classList.remove('active');
        }
      });
