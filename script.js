const contactEmail = "johannachristinecollit@gmail.com";

const revealNodes = document.querySelectorAll(".section, .service-card, .skill-list article, .process-grid article");

revealNodes.forEach((node) => node.classList.add("reveal"));
document.querySelector(".hero")?.classList.add("is-visible");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealNodes.forEach((node) => observer.observe(node));

const form = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

if (formNote && contactEmail === "your-email@example.com") {
  formNote.textContent = "Update the email address in script.js before using this form.";
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (contactEmail === "your-email@example.com") {
    if (formNote) {
      formNote.textContent = "Add your real email address in script.js first, then try again.";
    }
    return;
  }

  const data = new FormData(form);
  const name = data.get("name")?.toString().trim() ?? "";
  const email = data.get("email")?.toString().trim() ?? "";
  const message = data.get("message")?.toString().trim() ?? "";

  const subject = encodeURIComponent(`Virtual Assistant Inquiry from ${name || "Client"}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nSupport Needed:\n${message}\n`
  );

  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
});
