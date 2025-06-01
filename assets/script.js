document.addEventListener('DOMContentLoaded', function() {

    console.log("Starside Armory UI Initialized. Systems Nominal. Location: Gresham, Oregon.");

    // --- 1. Global Site Functionalities ---

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

    // Quantity Selector Buttons
    const quantityInput = document.getElementById('quantity');
    // Scope buttons to the product data area to avoid conflicts if .qty-btn is used elsewhere
    const productDataArea = document.querySelector('.product-data');
    if (quantityInput && productDataArea) {
        const qtyDecreaseButtons = productDataArea.querySelectorAll('.qty-btn[data-action="decrease"]');
        const qtyIncreaseButtons = productDataArea.querySelectorAll('.qty-btn[data-action="increase"]');

        if (qtyDecreaseButtons.length > 0 && qtyIncreaseButtons.length > 0) {
            qtyDecreaseButtons.forEach(button => {
                button.addEventListener('click', function() {
                    let currentValue = parseInt(quantityInput.value);
                    if (currentValue > parseInt(quantityInput.min)) {
                        quantityInput.value = currentValue - 1;
                    }
                });
            });

            qtyIncreaseButtons.forEach(button => {
                button.addEventListener('click', function() {
                    let currentValue = parseInt(quantityInput.value);
                    // Check against max attribute if it exists, otherwise allow increase
                    const maxVal = quantityInput.hasAttribute('max') ? parseInt(quantityInput.max) : Infinity;
                    if (currentValue < maxVal) {
                        quantityInput.value = currentValue + 1;
                    }
                });
            });
        }
    }

}); // End of DOMContentLoaded