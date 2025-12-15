// JavaScript spécifique pour project-details.html


      // Snake Carousel Modal functionality
      const snakeModal = document.getElementById('snake-modal');
      const snakeModalClose = document.getElementById('snake-modal-close');
      const snakeThumbnail = document.getElementById('snake-thumbnail');

      // Open Snake carousel modal when clicking thumbnail
      if (snakeThumbnail) {
        snakeThumbnail.addEventListener('click', function() {
          snakeModal.classList.add('active');
          // Reset to first slide when opening
          showSlide(0);
        });
      }

      // Close Snake carousel modal
      snakeModalClose.addEventListener('click', function() {
        snakeModal.classList.remove('active');
      });

      // Close modal when clicking outside the image or buttons
      snakeModal.addEventListener('click', function(e) {
        const isClickOnImage = e.target.tagName === 'IMG' || e.target.closest('.screenshot-img');
        const isClickOnButton = e.target.closest('.carousel-btn');
        const isClickOnIndicator = e.target.closest('.indicator');
        const isClickOnCloseButton = e.target.closest('.carousel-modal-close');
        
        if (!isClickOnImage && !isClickOnButton && !isClickOnIndicator && !isClickOnCloseButton) {
          snakeModal.classList.remove('active');
        }
      });

      // Snake Carousel functionality
      const snakeSlides = document.querySelectorAll('#snake-modal .carousel-slide');
      const snakePrevBtn = document.querySelector('#snake-modal .carousel-prev');
      const snakeNextBtn = document.querySelector('#snake-modal .carousel-next');
      const snakeIndicators = document.querySelectorAll('#snake-modal .indicator');
      let currentSlide = 0;

      // Function to show specific slide
      function showSlide(index) {
        snakeSlides.forEach(slide => slide.classList.remove('active'));
        snakeIndicators.forEach(indicator => indicator.classList.remove('active'));

        if (index >= snakeSlides.length) {
          currentSlide = 0;
        } else if (index < 0) {
          currentSlide = snakeSlides.length - 1;
        } else {
          currentSlide = index;
        }

        snakeSlides[currentSlide].classList.add('active');
        snakeIndicators[currentSlide].classList.add('active');
      }

      function nextSlide() {
        showSlide(currentSlide + 1);
      }

      function prevSlide() {
        showSlide(currentSlide - 1);
      }

      // Event listeners for Snake carousel buttons
      snakeNextBtn.addEventListener('click', () => {
        nextSlide();
      });

      snakePrevBtn.addEventListener('click', () => {
        prevSlide();
      });

      // Event listeners for Snake indicators
      snakeIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          showSlide(index);
        });
      });

      // Keyboard navigation for Snake carousel
      document.addEventListener('keydown', (e) => {
        if (snakeModal.classList.contains('active')) {
          if (e.key === 'ArrowLeft') {
            prevSlide();
          } else if (e.key === 'ArrowRight') {
            nextSlide();
          } else if (e.key === 'Escape') {
            snakeModal.classList.remove('active');
          }
        }
      });
