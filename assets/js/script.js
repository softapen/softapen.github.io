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


