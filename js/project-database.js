// JavaScript spécifique pour project-database.html


      // Database Carousel Modal functionality
      const databaseModal = document.getElementById('database-modal');
      const databaseModalClose = document.getElementById('database-modal-close');
      const databaseThumbnail = document.getElementById('database-thumbnail');

      // Open database carousel modal when clicking thumbnail
      if (databaseThumbnail) {
        databaseThumbnail.addEventListener('click', function() {
          databaseModal.classList.add('active');
          // Reset to first slide when opening
          showDatabaseSlide(0);
        });
      }

      // Close database carousel modal
      databaseModalClose.addEventListener('click', function() {
        databaseModal.classList.remove('active');
      });

      // Close modal when clicking outside the image or buttons
      databaseModal.addEventListener('click', function(e) {
        const isClickOnImage = e.target.tagName === 'IMG' || e.target.closest('.screenshot-img');
        const isClickOnButton = e.target.closest('.carousel-btn');
        const isClickOnIndicator = e.target.closest('.indicator');
        const isClickOnCloseButton = e.target.closest('.carousel-modal-close');
        
        if (!isClickOnImage && !isClickOnButton && !isClickOnIndicator && !isClickOnCloseButton) {
          databaseModal.classList.remove('active');
        }
      });

      // Database Carousel functionality
      const databaseSlides = document.querySelectorAll('#database-modal .carousel-slide');
      const databasePrevBtn = document.querySelector('#database-modal .carousel-prev');
      const databaseNextBtn = document.querySelector('#database-modal .carousel-next');
      const databaseIndicators = document.querySelectorAll('#database-modal .indicator');
      let currentDatabaseSlide = 0;

      // Function to show specific slide in database carousel
      function showDatabaseSlide(index) {
        databaseSlides.forEach(slide => slide.classList.remove('active'));
        databaseIndicators.forEach(indicator => indicator.classList.remove('active'));

        if (index >= databaseSlides.length) {
          currentDatabaseSlide = 0;
        } else if (index < 0) {
          currentDatabaseSlide = databaseSlides.length - 1;
        } else {
          currentDatabaseSlide = index;
        }

        databaseSlides[currentDatabaseSlide].classList.add('active');
        databaseIndicators[currentDatabaseSlide].classList.add('active');
      }

      function nextDatabaseSlide() {
        showDatabaseSlide(currentDatabaseSlide + 1);
      }

      function prevDatabaseSlide() {
        showDatabaseSlide(currentDatabaseSlide - 1);
      }

      // Event listeners for database carousel buttons
      databaseNextBtn.addEventListener('click', () => {
        nextDatabaseSlide();
      });

      databasePrevBtn.addEventListener('click', () => {
        prevDatabaseSlide();
      });

      // Event listeners for database indicators
      databaseIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          showDatabaseSlide(index);
        });
      });

      // Keyboard navigation for database carousel
      document.addEventListener('keydown', (e) => {
        if (databaseModal.classList.contains('active')) {
          if (e.key === 'ArrowLeft') {
            prevDatabaseSlide();
          } else if (e.key === 'ArrowRight') {
            nextDatabaseSlide();
          } else if (e.key === 'Escape') {
            databaseModal.classList.remove('active');
          }
        }
      });
