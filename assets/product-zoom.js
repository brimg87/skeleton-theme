/**
 * Product Zoom Functionality
 * Handles image zoom modal for product pages
 */

class ProductZoom {
  constructor(sectionId) {
    this.sectionId = sectionId;
    this.productSection = document.querySelector(`#product-${sectionId}`);
    this.zoomButton = null;
    this.zoomModal = null;
    this.zoomImage = null;
    this.zoomClose = null;
    this.mainMediaContainer = null;
    
    this.init();
  }
  
  init() {
    console.log('ProductZoom: Initializing for section', this.sectionId);
    
    if (!this.productSection) {
      console.log('ProductZoom: Product section not found');
      return;
    }
    
    this.findElements();
    this.bindEvents();
  }
  
  findElements() {
    this.zoomButton = this.productSection.querySelector('.zoom-button');
    this.zoomModal = document.querySelector(`#zoom-modal-${this.sectionId}`);
    this.zoomImage = document.querySelector(`#zoom-image-${this.sectionId}`);
    this.zoomClose = this.zoomModal ? this.zoomModal.querySelector('.zoom-close') : null;
    this.mainMediaContainer = this.productSection.querySelector('.main-media-container');
    
    console.log('ProductZoom: Elements found:', {
      zoomButton: !!this.zoomButton,
      zoomModal: !!this.zoomModal,
      zoomImage: !!this.zoomImage,
      zoomClose: !!this.zoomClose,
      mainMediaContainer: !!this.mainMediaContainer
    });
  }
  
  bindEvents() {
    if (!this.zoomButton || !this.zoomModal || !this.zoomImage) {
      console.log('ProductZoom: Missing required elements, skipping event binding');
      return;
    }
    
    // Open zoom modal
    this.zoomButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.openZoom();
    });
    
    // Close zoom modal
    if (this.zoomClose) {
      this.zoomClose.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.closeZoom();
      });
    }
    
    // Close on background click
    this.zoomModal.addEventListener('click', (e) => {
      if (e.target === this.zoomModal) {
        this.closeZoom();
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.zoomModal.classList.contains('active')) {
        this.closeZoom();
      }
    });
    
    console.log('ProductZoom: Events bound successfully');
  }
  
  openZoom() {
    console.log('ProductZoom: Opening zoom');
    
    if (!this.mainMediaContainer) {
      console.log('ProductZoom: No main media container found');
      return;
    }
    
    const mainImage = this.mainMediaContainer.querySelector('img');
    if (!mainImage) {
      console.log('ProductZoom: No main image found');
      return;
    }
    
    const zoomSrc = mainImage.dataset.zoom || mainImage.src;
    console.log('ProductZoom: Using zoom image:', zoomSrc);
    
    this.zoomImage.src = zoomSrc;
    this.zoomImage.alt = mainImage.alt;
    this.zoomModal.classList.add('active');
    this.zoomModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  
  closeZoom() {
    console.log('ProductZoom: Closing zoom');
    this.zoomModal.classList.remove('active');
    this.zoomModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// Auto-initialize when DOM is ready
function initializeProductZoom() {
  // Find all product sections and initialize zoom for each
  const productSections = document.querySelectorAll('[id^="product-"]');
  
  productSections.forEach(section => {
    const sectionIdRaw = section.getAttribute('id') || '';
    if (!sectionIdRaw || !sectionIdRaw.includes('product-')) {
      console.log('ProductZoom: Skipping section without proper ID:', sectionIdRaw);
      return;
    }
    const sectionId = sectionIdRaw.replace('product-', '');
    console.log('ProductZoom: Initializing for section ID:', sectionId);
    new ProductZoom(sectionId);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeProductZoom);
} else {
  initializeProductZoom();
}

// Fallback initialization
setTimeout(initializeProductZoom, 1000); 