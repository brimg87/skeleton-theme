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
    }

    // Handle sort changes
    if (this.sortSelect) {
      this.sortSelect.addEventListener('change', () => {
        this.handleSortChange();
      });
    }

    // Handle price range inputs
    const priceInputs = document.querySelectorAll('.price-range-inputs input');
    priceInputs.forEach(input => {
      input.addEventListener('change', () => {
        this.handlePriceFilter(input);
      });
    });

    // Handle reset filters button
    const resetButton = this.filterForm?.querySelector('.filter-reset-button');
    if (resetButton) {
      resetButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = resetButton.href;
      });
    }
  }

  handleFilterClick(filterLink) {
    if (filterLink.hasAttribute('disabled')) return;
    
    // Get the filter URL from the link
    const filterUrl = filterLink.href;
    
    // Add loading state
    document.body.classList.add('filters-loading');
    
    // Navigate to the filter URL
    window.location.href = filterUrl;
  }

  handleSortChange() {
    const url = new URL(window.location.href);
    url.searchParams.set('sort_by', this.sortSelect.value);
    this.updateURL(url);
  }

  handlePriceFilter(input) {
    const minInput = document.querySelector(`input[name="${input.name.replace('max', 'min')}"]`);
    const maxInput = document.querySelector(`input[name="${input.name.replace('min', 'max')}"]`);
    
    if (minInput && maxInput) {
      const minValue = minInput.value;
      const maxValue = maxInput.value;
      
      if (minValue || maxValue) {
        const url = new URL(window.location.href);
        if (minValue) url.searchParams.set(minInput.name, minValue);
        if (maxValue) url.searchParams.set(maxInput.name, maxValue);
        this.updateURL(url);
      }
    }
  }

  updateURL(url) {
    // Add loading state
    document.body.classList.add('filters-loading');
    
    // Update URL and reload
    window.location.href = url.toString();
  }
}

// Initialize collection filters
document.addEventListener('DOMContentLoaded', () => {
  new CollectionFilters();
}); 