document.addEventListener('DOMContentLoaded', function() {

    console.log("Starside Armory UI Initialized. Systems Nominal. Location: Gresham, Oregon.");

    // --- 1. Global Site Functionalities ---

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const siteHeader = document.querySelector('.site-header');
    
    if (mobileMenuToggle && siteHeader) {
        mobileMenuToggle.addEventListener('click', function() {
            const isOpen = siteHeader.classList.contains('mobile-menu-open');
            
            if (isOpen) {
                siteHeader.classList.remove('mobile-menu-open');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                // Close any open dropdowns
                document.querySelectorAll('.has-dropdown.dropdown-open').forEach(item => {
                    item.classList.remove('dropdown-open');
                });
            } else {
                siteHeader.classList.add('mobile-menu-open');
                mobileMenuToggle.setAttribute('aria-expanded', 'true');
            }
        });

        // Handle dropdown toggles in mobile menu
        const mobileDropdownItems = document.querySelectorAll('.main-nav .has-dropdown > .nav-link');
        mobileDropdownItems.forEach(link => {
            link.addEventListener('click', function(e) {
                // Only prevent default if we're in mobile view
                if (window.innerWidth <= 989) {
                    e.preventDefault();
                    const parentItem = this.closest('.has-dropdown');
                    const isOpen = parentItem.classList.contains('dropdown-open');
                    
                    // Close all other dropdowns
                    document.querySelectorAll('.has-dropdown.dropdown-open').forEach(item => {
                        if (item !== parentItem) {
                            item.classList.remove('dropdown-open');
                        }
                    });
                    
                    // Toggle current dropdown
                    if (isOpen) {
                        parentItem.classList.remove('dropdown-open');
                    } else {
                        parentItem.classList.add('dropdown-open');
                    }
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!siteHeader.contains(e.target) && siteHeader.classList.contains('mobile-menu-open')) {
                siteHeader.classList.remove('mobile-menu-open');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                // Close any open dropdowns
                document.querySelectorAll('.has-dropdown.dropdown-open').forEach(item => {
                    item.classList.remove('dropdown-open');
                });
            }
        });

        // Close mobile menu on window resize if it gets too wide
        window.addEventListener('resize', function() {
            if (window.innerWidth > 989 && siteHeader.classList.contains('mobile-menu-open')) {
                siteHeader.classList.remove('mobile-menu-open');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                // Close any open dropdowns
                document.querySelectorAll('.has-dropdown.dropdown-open').forEach(item => {
                    item.classList.remove('dropdown-open');
                });
            }
        });
    }

    // Desktop Dropdown Hover Functionality (Dawn style)
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    dropdownItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown-menu');
        if (!dropdown) return;
        
        let timeout;
        
        item.addEventListener('mouseenter', () => {
            // Only apply hover behavior on desktop
            if (window.innerWidth > 989) {
                clearTimeout(timeout);
                dropdown.style.display = 'block';
                setTimeout(() => dropdown.style.opacity = '1', 10);
            }
        });
        
        item.addEventListener('mouseleave', () => {
            // Only apply hover behavior on desktop
            if (window.innerWidth > 989) {
                timeout = setTimeout(() => {
                    dropdown.style.opacity = '0';
                    setTimeout(() => dropdown.style.display = 'none', 200);
                }, 100);
            }
        });
    });

    // Smooth Scroll for Anchor Links (excluding tab controls)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            // Ensure it's a valid internal page link and not just "#" or a tab control
            if (hrefAttribute.length > 1 && !hrefAttribute.startsWith('#tab-') && document.querySelector(hrefAttribute)) {
                e.preventDefault();
                document.querySelector(hrefAttribute).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 2. Homepage / Product Card Specific Functionalities ---
    const productCards = document.querySelectorAll('.product-card');
    if (productCards.length > 0) {
        productCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Placeholder for any hover effects on product cards
                // console.log('Hovering over product card:', card.querySelector('.product-name')?.textContent);
            });
        });
    }

    // --- 3. Hero Section Loader (Homepage - typically in index-hero-banner.liquid) ---
    const loaderOverlay = document.getElementById('hero-loader-overlay');
    const heroBannerContent = document.querySelector('.hero-section .hero-content'); // Content within the hero banner

    if (loaderOverlay && heroBannerContent) {
        // The .initially-hidden class should be set on .hero-content in your HTML/Liquid
        // to hide it before the loader finishes.

        const totalLoaderScreenTime = 1900; // milliseconds (1.9 seconds). Adjust for desired speed.
        const heroContentRevealDelay = totalLoaderScreenTime - 400; // Content starts fading in slightly before loader is fully gone.

        // Schedule hero content reveal
        setTimeout(() => {
            heroBannerContent.classList.add('revealed');
            // The 'initially-hidden' class can remain; 'revealed' should override opacity.
        }, heroContentRevealDelay);

        // Schedule loader overlay hide
        setTimeout(() => {
            loaderOverlay.classList.add('hidden');

            // Optional: Remove the loader from the DOM entirely after its fade-out transition completes.
            // The CSS transition for #hero-loader-overlay opacity is 0.5s (500ms).
            // setTimeout(() => {
            //     if (loaderOverlay.parentNode) {
            //         loaderOverlay.parentNode.removeChild(loaderOverlay);
            //     }
            // }, 500);
        }, totalLoaderScreenTime);

    } else {
        // Fallback: If the loader overlay isn't found, but hero content might be initially hidden,
        // ensure hero content becomes visible.
        if (heroBannerContent && heroBannerContent.classList.contains('initially-hidden')) {
            heroBannerContent.classList.remove('initially-hidden');
            heroBannerContent.classList.add('revealed'); // Ensure it's visible
        }
    }

    // --- 4. Product Detail Page Specific Functionalities ---

    // Image Gallery
    const primaryProductImage = document.getElementById('primaryProductImage');
    const productThumbnails = document.querySelectorAll('.thumbnail-img');

    if (primaryProductImage && productThumbnails.length > 0) {
        productThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                primaryProductImage.src = this.dataset.src;
                productThumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Tab Functionality
    // Using a more specific selector to ensure we only target product page tabs
    const productDataTabsContainer = document.querySelector('.product-data-tabs');
    if (productDataTabsContainer) {
        const productTabLinks = productDataTabsContainer.querySelectorAll('.tab-link');
        const productTabContents = productDataTabsContainer.querySelectorAll('.tab-content');

        if (productTabLinks.length > 0 && productTabContents.length > 0) {
            productTabLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault(); // Prevent default for button elements if any
                    const tabId = this.dataset.tab;

                    productTabLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');

                    productTabContents.forEach(content => {
                        if (content.id === tabId) {
                            content.classList.add('active');
                        } else {
                            content.classList.remove('active');
                        }
                    });
                });
            });
        }
    }

    // Quantity Selector Buttons (Product Page)
    // Use a more flexible approach to find quantity inputs with dynamic IDs
    const productDataArea = document.querySelector('.product-data');
    if (productDataArea) {
        const qtyDecreaseButtons = productDataArea.querySelectorAll('.qty-btn[data-action="decrease"]');
        const qtyIncreaseButtons = productDataArea.querySelectorAll('.qty-btn[data-action="increase"]');

        if (qtyDecreaseButtons.length > 0 && qtyIncreaseButtons.length > 0) {
            qtyDecreaseButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Find the quantity input in the same quantity-selector container
                    const quantityInput = this.parentNode.querySelector('.quantity-input');
                    if (!quantityInput) return;
                    
                    let currentValue = parseInt(quantityInput.value) || 1;
                    const minVal = parseInt(quantityInput.min) || 1;
                    if (currentValue > minVal) {
                        quantityInput.value = currentValue - 1;
                    }
                });
            });

            qtyIncreaseButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Find the quantity input in the same quantity-selector container
                    const quantityInput = this.parentNode.querySelector('.quantity-input');
                    if (!quantityInput) return;
                    
                    let currentValue = parseInt(quantityInput.value) || 1;
                    // Check against max attribute if it exists, otherwise allow increase
                    const maxVal = quantityInput.hasAttribute('max') ? parseInt(quantityInput.max) : Infinity;
                    if (currentValue < maxVal) {
                        quantityInput.value = currentValue + 1;
                    }
                });
            });
        }
    }

    // --- 5. Cart Page Quantity Controls ---
    // Cart quantity control functionality
    const cartQuantityButtons = document.querySelectorAll('.btn-qty');
    
    if (cartQuantityButtons.length > 0) {
        cartQuantityButtons.forEach(button => {
            button.addEventListener('click', function() {
                const key = this.dataset.key;
                const input = document.querySelector(`input[data-key="${key}"]`);
                const isIncrease = this.classList.contains('qty-increase');
                
                if (!input) return;
                
                let currentValue = parseInt(input.value) || 0;
                
                if (isIncrease) {
                    currentValue++;
                } else {
                    currentValue = Math.max(0, currentValue - 1);
                }
                
                input.value = currentValue;
                
                // Auto-submit form after quantity change
                setTimeout(() => {
                    const form = input.closest('form');
                    if (form) {
                        form.submit();
                    }
                }, 300);
            });
        });
    }
    
    // Auto-submit on cart quantity input change
    const cartQuantityInputs = document.querySelectorAll('.quantity-input');
    if (cartQuantityInputs.length > 0) {
        cartQuantityInputs.forEach(input => {
            let timeout;
            input.addEventListener('input', function() {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    const form = this.closest('form');
                    if (form) {
                        form.submit();
                    }
                }, 1000);
            });
        });
    }

    // --- 6. Product Page Functionality ---
    // Simple quantity selector functionality for product pages
    const qtyButtons = document.querySelectorAll('.qty-btn');
    qtyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action;
            const input = this.parentNode.querySelector('.quantity-input');
            if (!input) return;
            
            let value = parseInt(input.value) || 1;
            
            if (action === 'increase') {
                value++;
                if (input.max && value > parseInt(input.max)) {
                    value = parseInt(input.max);
                }
            } else if (action === 'decrease' && value > 1) {
                value--;
            }
            
            input.value = value;
        });
    });
    
    // Form submission with loading state
    const productForms = document.querySelectorAll('form[data-type="add-to-cart-form"]');
    productForms.forEach(form => {
        form.addEventListener('submit', function() {
            const addButton = this.querySelector('[type="submit"]');
            if (addButton) {
                addButton.classList.add('loading');
                addButton.disabled = true;
            }
        });
    });
    
    // Media gallery functionality
    const thumbnailButtons = document.querySelectorAll('.thumbnail-btn');
    const mainMediaContainers = document.querySelectorAll('.main-media-container');
    
    thumbnailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const galleryContainer = this.closest('.product-media-gallery');
            if (!galleryContainer) return;
            
            const galleryThumbnails = galleryContainer.querySelectorAll('.thumbnail-btn');
            const mainMediaContainer = galleryContainer.querySelector('.main-media-container');
            
            if (!mainMediaContainer) return;
            
            // Remove active class from all thumbnails in this gallery
            galleryThumbnails.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            
            // Update main media
            const mediaType = this.dataset.mediaType;
            const mediaId = this.dataset.mediaId;
            
            if (mediaType === 'image') {
                const newSrc = this.dataset.src;
                const newSrcset = this.dataset.srcset;
                const mainImage = mainMediaContainer.querySelector('img');
                
                if (mainImage) {
                    mainImage.src = newSrc;
                    if (newSrcset) {
                        mainImage.srcset = newSrcset;
                    }
                    
                    // Update zoom data if zoom is enabled
                    if (this.dataset.zoom) {
                        mainImage.dataset.zoom = this.dataset.zoom;
                    }
                }
            } else if (mediaType === 'video') {
                // Handle video switching
                const videoHtml = this.dataset.videoHtml;
                if (videoHtml) {
                    const mediaContainer = mainMediaContainer.querySelector('.product-media');
                    if (mediaContainer) {
                        mediaContainer.innerHTML = videoHtml;
                    }
                }
            } else if (mediaType === 'external_video') {
                // Handle external video switching
                const externalVideoHtml = this.dataset.externalVideoHtml;
                if (externalVideoHtml) {
                    const mediaContainer = mainMediaContainer.querySelector('.product-media');
                    if (mediaContainer) {
                        mediaContainer.innerHTML = externalVideoHtml;
                    }
                }
            } else if (mediaType === 'model') {
                // Handle 3D model switching
                const modelHtml = this.dataset.modelHtml;
                if (modelHtml) {
                    const mediaContainer = mainMediaContainer.querySelector('.product-media');
                    if (mediaContainer) {
                        mediaContainer.innerHTML = modelHtml;
                    }
                }
            }
            
            // Update media container data attribute
            const mediaContainer = mainMediaContainer.querySelector('.product-media');
            if (mediaContainer) {
                mediaContainer.dataset.mediaId = mediaId;
                mediaContainer.dataset.mediaType = mediaType;
            }
        });
    });

}); // End of DOMContentLoaded