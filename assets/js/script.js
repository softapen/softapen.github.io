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
