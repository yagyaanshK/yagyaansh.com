const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");
const emptyState = document.getElementById("empty-state");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.dataset.filter;
    let visibleCount = 0;

    filters.forEach((item) => {
      const isSelected = item === filter;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });

    cards.forEach((card) => {
      const isVisible = selected === "all" || card.dataset.category === selected;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    emptyState.hidden = visibleCount !== 0;
  });
});
