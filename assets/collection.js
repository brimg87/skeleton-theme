class CollectionFilters {
  constructor() {
    this.filterForm = document.getElementById('CollectionFiltersForm');
    this.sortSelect = document.getElementById('SortBy');
    this.bindEvents();
  }

  bindEvents() {
    // Handle filter clicks
    if (this.filterForm) {
      this.filterForm.addEventListener('click', (event) => {
        const filterLink = event.target.closest('.filter-link');
        if (filterLink) {
          event.preventDefault();
          this.handleFilterClick(filterLink);
        }
      });

      // Handle price filter forms - just add loading state, let form submit naturally
      const priceForms = this.filterForm.querySelectorAll('.price-range-form');
      priceForms.forEach(form => {
        form.addEventListener('submit', () => {
          document.body.classList.add('filters-loading');
        });
      });
    }

    // Handle sort changes
    if (this.sortSelect) {
      this.sortSelect.addEventListener('change', () => {
        this.handleSortChange();
      });
    }

    // Handle reset filters button
    const resetButton = this.filterForm?.querySelector('.filter-reset-button:not([type="submit"])');
    if (resetButton) {
      resetButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = resetButton.href;
      });
    }
  }

  handleFilterClick(filterLink) {
    if (filterLink.hasAttribute('disabled')) return;
    
    // Add loading state
    document.body.classList.add('filters-loading');
    
    // Navigate to the filter URL
    window.location.href = filterLink.href;
  }

  handleSortChange() {
    const url = new URL(window.location.href);
    url.searchParams.set('sort_by', this.sortSelect.value);
    window.location.href = url.toString();
  }
}

// Initialize collection filters
document.addEventListener('DOMContentLoaded', () => {
  new CollectionFilters();
}); 