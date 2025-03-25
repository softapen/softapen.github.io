document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        answer.style.height = answer.scrollHeight + "px"; 
        setTimeout(() => {
          answer.style.height = "0px";
        }, 10);
        item.classList.remove("active");
      } else {
        faqItems.forEach((faq) => {
          faq.classList.remove("active");
          faq.querySelector(".faq-answer").style.height = "0px";
        });

        item.classList.add("active");
        answer.style.height = "auto"; 
        let height = answer.scrollHeight + "px";
        answer.style.height = "0px"; 
        setTimeout(() => {
          answer.style.height = height;
        }, 10);
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});





// marketing-page-js
// Intersection Observer for fade-in animations
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in-up");

  const appearOptions = {
    threshold: 0.15, // how much of the element is in view
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  // Stat counters
  const statValues = document.querySelectorAll(".stat-value");
  const speed = 10; // lower = faster

  const animateCounter = (el) => {
    const target = +el.getAttribute("data-target");
    let count = 0;

    const updateCount = () => {
      if (count < target) {
        count += 1; // increment
        el.innerText = count + (target > 24 ? "+" : "");
        setTimeout(updateCount, speed);
      } else {
        el.innerText = target + (target > 24 ? "+" : "");
      }
    };
    updateCount();
  };

  // Trigger counters once stats-row is visible
  const statsRow = document.querySelector(".stats-row");
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      statValues.forEach((stat) => animateCounter(stat));
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.3 });

  if (statsRow) {
    statsObserver.observe(statsRow);
  }
});


// graphic page code 

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  /* ==============================
     FADE-IN ON SCROLL
  ============================== */
  const faders = document.querySelectorAll(".fade-in-up");
  const appearOptions = { threshold: 0.15 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  /* ==============================
     TESTIMONIAL AUTO-SLIDER
  ============================== */
  const slider = document.getElementById("graphic-page-testimonial-slider");
  if (slider) {
    let index = 0;
    const slides = slider.querySelectorAll(".graphic-page-testimonial-card");

    // Duplicate first slide to the end for a seamless loop (optional)
    // Or we can simply cycle the transform
    setInterval(() => {
      index++;
      if (index >= slides.length) {
        index = 0;
      }
      slider.style.transform = `translateX(-${index * 100}%)`;
    }, 4000); // 4-second interval
  }

  /* ==============================
     FAQ ACCORDION
  ============================== */
  const faqItems = document.querySelectorAll(".graphic-page-faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".graphic-page-faq-question");
    questionBtn.addEventListener("click", () => {
      // Close other open items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      // Toggle current item
      item.classList.toggle("active");
    });
  });
});
