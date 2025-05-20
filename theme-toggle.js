document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
  });

  // Optional: set default theme
  if (!body.classList.contains("light") && !body.classList.contains("dark")) {
    body.classList.add("light");
  }
});
