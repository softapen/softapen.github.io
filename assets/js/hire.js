// Simple tab system for the Pricing Section

// Data for each category
const pricingData = {
  virtual: [
    {
      title: "Basic VA",
      price: "$25/hour",
      desc: "Ideal for administrative tasks, data entry, and email management.",
      features: ["Basic Support", "Flexible Hours", "Email Assistance"],
    },
    {
      title: "Advanced VA",
      price: "$35/hour",
      desc: "Great for project coordination, research, and client follow-ups.",
      features: ["Project Coordination", "Research & Reports", "Follow-ups"],
    },
  ],
  developer: [
    {
      title: "Junior Dev",
      price: "$30/hour",
      desc: "Perfect for simple coding tasks, bug fixes, and small projects.",
      features: ["Frontend Tweaks", "Bug Fixes", "Basic Feature Dev"],
    },
    {
      title: "Senior Dev",
      price: "$50/hour",
      desc: "Best for complex projects, integrations, and advanced coding needs.",
      features: ["Complex Integrations", "API Development", "Database Design"],
    },
  ],
  designer: [
    {
      title: "Junior Designer",
      price: "$28/hour",
      desc: "Handles basic graphics, layout updates, and social media creatives.",
      features: ["Social Media Designs", "Basic Branding", "Layout Tweaks"],
    },
    {
      title: "Senior Designer",
      price: "$45/hour",
      desc: "Expert in UI/UX, brand identity, and advanced creative direction.",
      features: ["Full Brand Identity", "UI/UX Expertise", "Illustrations"],
    },
  ],
  marketer: [
    {
      title: "Basic Marketer",
      price: "$25/hour",
      desc: "Manages simple campaigns, email marketing, and analytics reporting.",
      features: ["Email Campaigns", "Basic SEO", "Analytics Reports"],
    },
    {
      title: "Advanced Marketer",
      price: "$40/hour",
      desc: "Specialized in growth strategies, PPC campaigns, and content marketing.",
      features: ["Growth Strategy", "PPC Management", "Content Marketing"],
    },
  ],
};

// DOM elements
const tabButtons = document.querySelectorAll(".tab-btn");
const pricingCardsContainer = document.getElementById("pricing-cards");

// Function to generate card HTML
function generateCardHTML(plan) {
  return `
    <div class="price-card">
      <h3>${plan.title}</h3>
      <div class="price-amount">${plan.price}</div>
      <p class="price-description">${plan.desc}</p>
      <ul class="price-list">
        ${plan.features
          .map(
            (feature) =>
              `<li><i class="fas fa-check-circle"></i> ${feature}</li>`
          )
          .join("")}
      </ul>
      <a href="#" class="btn btn-outline">Hire Now</a>
    </div>
  `;
}

// Function to display a category
function displayCategory(category) {
  // Clear existing
  pricingCardsContainer.innerHTML = "";

  // Populate new cards
  const plans = pricingData[category];
  plans.forEach((plan) => {
    pricingCardsContainer.innerHTML += generateCardHTML(plan);
  });
}

// Event listeners for tab buttons
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active from all
    tabButtons.forEach((b) => b.classList.remove("active"));
    // Add active to this
    btn.classList.add("active");

    // Get category
    const category = btn.dataset.category;
    displayCategory(category);
  });
});

// Display default category on page load
window.addEventListener("DOMContentLoaded", () => {
  displayCategory("virtual"); // Default to Virtual Assistant
});

function displayCategory(category) {
  // Trigger fade-out effect
  pricingCardsContainer.classList.add("price-fade-out");

  // Wait for fade-out to complete before updating content
  setTimeout(() => {
    pricingCardsContainer.innerHTML = "";
    pricingData[category].forEach((plan) => {
      pricingCardsContainer.innerHTML += generateCardHTML(plan);
    });
    // Remove fade-out and add fade-in animation
    pricingCardsContainer.classList.remove("price-fade-out");
    pricingCardsContainer.classList.add("price-fade-in");

    // Remove the fade-in class after animation completes to allow re-triggering
    setTimeout(() => {
      pricingCardsContainer.classList.remove("price-fade-in");
    }, 600);
  }, 300);
}

// ------------------------------
// Scroll Animation using Intersection Observer
// ------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  scrollElements.forEach((el) => observer.observe(el));
});
