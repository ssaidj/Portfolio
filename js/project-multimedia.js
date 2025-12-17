      const multimediaModal = document.getElementById('multimedia-modal');
      const multimediaModalClose = document.getElementById('multimedia-modal-close');
      const multimediaThumbnail = document.getElementById('multimedia-thumbnail');
      if (multimediaThumbnail) {
        multimediaThumbnail.addEventListener('click', function() {
          multimediaModal.classList.add('active');
          showSlide(0);
        });
      }
      multimediaModalClose.addEventListener('click', function() {
        multimediaModal.classList.remove('active');
      });
      multimediaModal.addEventListener('click', function(e) {
        if (e.target === multimediaModal) {
          multimediaModal.classList.remove('active');
        }
      });
      let currentSlide = 0;
      const slides = multimediaModal.querySelectorAll('.carousel-slide');
      const indicators = multimediaModal.querySelectorAll('.indicator');
      const prevBtn = multimediaModal.querySelector('.carousel-prev');
      const nextBtn = multimediaModal.querySelector('.carousel-next');
      function showSlide(n) {
        if (n >= slides.length) currentSlide = 0;
        if (n < 0) currentSlide = slides.length - 1;
        else currentSlide = n;
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
      }
      prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
      nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
      });
      document.addEventListener('keydown', function(e) {
        if (multimediaModal.classList.contains('active')) {
          if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
          if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
          if (e.key === 'Escape') multimediaModal.classList.remove('active');
        }
      });
