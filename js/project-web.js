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
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          lightbox.classList.remove('active');
          carouselModal.classList.remove('active');
        }
      });
      const carouselModal = document.getElementById('carousel-modal');
      const carouselModalClose = document.getElementById('carousel-modal-close');
      const acf2lThumbnail = document.getElementById('acf2l-thumbnail');
      if (acf2lThumbnail) {
        acf2lThumbnail.addEventListener('click', function() {
          carouselModal.classList.add('active');
          showSlide(0);
        });
      }
      carouselModalClose.addEventListener('click', function() {
        carouselModal.classList.remove('active');
      });
      carouselModal.addEventListener('click', function(e) {
        const isClickOnImage = e.target.tagName === 'IMG' || e.target.closest('.screenshot-img');
        const isClickOnButton = e.target.closest('.carousel-btn');
        const isClickOnIndicator = e.target.closest('.indicator');
        const isClickOnCloseButton = e.target.closest('.carousel-modal-close');
        if (!isClickOnImage && !isClickOnButton && !isClickOnIndicator && !isClickOnCloseButton) {
          carouselModal.classList.remove('active');
        }
      });
      const carouselSlides = document.querySelectorAll('#carousel-modal .carousel-slide');
      const prevBtn = document.querySelector('#carousel-modal .carousel-prev');
      const nextBtn = document.querySelector('#carousel-modal .carousel-next');
      const indicators = document.querySelectorAll('#carousel-modal .indicator');
      let currentSlide = 0;
      function showSlide(index) {
        carouselSlides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        if (index >= carouselSlides.length) {
          currentSlide = 0;
        } else if (index < 0) {
          currentSlide = carouselSlides.length - 1;
        } else {
          currentSlide = index;
        }
        carouselSlides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
      }
      function nextSlide() {
        showSlide(currentSlide + 1);
      }
      function prevSlide() {
        showSlide(currentSlide - 1);
      }
      nextBtn.addEventListener('click', () => {
        nextSlide();
      });
      prevBtn.addEventListener('click', () => {
        prevSlide();
      });
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          showSlide(index);
        });
      });
      document.addEventListener('keydown', (e) => {
        if (carouselModal.classList.contains('active')) {
          if (e.key === 'ArrowLeft') {
            prevSlide();
          } else if (e.key === 'ArrowRight') {
            nextSlide();
          }
        }
      });
      const sushiModal = document.getElementById('sushi-modal');
      const sushiModalClose = document.getElementById('sushi-modal-close');
      const sushiThumbnail = document.getElementById('sushi-thumbnail');
      if (sushiThumbnail) {
        sushiThumbnail.addEventListener('click', function() {
          sushiModal.classList.add('active');
          showSushiSlide(0);
        });
      }
      sushiModalClose.addEventListener('click', function() {
        sushiModal.classList.remove('active');
      });
      sushiModal.addEventListener('click', function(e) {
        const isClickOnImage = e.target.tagName === 'IMG' || e.target.closest('.screenshot-img');
        const isClickOnButton = e.target.closest('.carousel-btn');
        const isClickOnIndicator = e.target.closest('.indicator');
        const isClickOnCloseButton = e.target.closest('.carousel-modal-close');
        if (!isClickOnImage && !isClickOnButton && !isClickOnIndicator && !isClickOnCloseButton) {
          sushiModal.classList.remove('active');
        }
      });
      const sushiSlides = document.querySelectorAll('#sushi-modal .carousel-slide');
      const sushiPrevBtn = document.querySelector('#sushi-modal .carousel-prev');
      const sushiNextBtn = document.querySelector('#sushi-modal .carousel-next');
      const sushiIndicators = document.querySelectorAll('#sushi-modal .indicator');
      let currentSushiSlide = 0;
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
      sushiNextBtn.addEventListener('click', () => {
        nextSushiSlide();
      });
      sushiPrevBtn.addEventListener('click', () => {
        prevSushiSlide();
      });
      sushiIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          showSushiSlide(index);
        });
      });
      document.addEventListener('keydown', (e) => {
        if (sushiModal.classList.contains('active')) {
          if (e.key === 'ArrowLeft') {
            prevSushiSlide();
          } else if (e.key === 'ArrowRight') {
            nextSushiSlide();
          }
        }
      });
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          lightbox.classList.remove('active');
          carouselModal.classList.remove('active');
          sushiModal.classList.remove('active');
        }
      });
