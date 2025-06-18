document.addEventListener('DOMContentLoaded', function() {

    console.log("Starside Armory UI Initialized. Systems Nominal. Location: Gresham, Oregon.");

    // --- 1. Global Site Functionalities ---

    // Search Interface Toggle
    const searchToggle = document.querySelector('.search-toggle');
    const searchInterface = document.getElementById('searchInterface');
    const searchInput = searchInterface?.querySelector('.search-input');
    const searchCloseBtn = searchInterface?.querySelector('.search-close-btn');

    console.log('Search elements found:', {
        searchToggle: !!searchToggle,
        searchInterface: !!searchInterface,
        searchInput: !!searchInput,
        searchCloseBtn: !!searchCloseBtn
    });

    if (searchToggle && searchInterface) {
        // Open search interface
        function openSearchInterface() {
            // Close mobile menu if open
            if (siteHeader && siteHeader.classList.contains('mobile-menu-open')) {
                siteHeader.classList.remove('mobile-menu-open');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                // Close any open dropdowns
                document.querySelectorAll('.has-dropdown.dropdown-open').forEach(item => {
                    item.classList.remove('dropdown-open');
                });
            }
            
            searchInterface.classList.add('active');
            searchInterface.setAttribute('aria-hidden', 'false');
            searchToggle.setAttribute('aria-expanded', 'true');
            document.body.classList.add('search-active');
            
            // Focus the search input after a brief delay to ensure transition
            setTimeout(() => {
                if (searchInput) {
                    searchInput.focus();
                }
            }, 100);
        }

        // Close search interface
        function closeSearchInterface() {
            searchInterface.classList.remove('active');
            searchInterface.setAttribute('aria-hidden', 'true');
            searchToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('search-active');
            
            // Clear search input value when closing
            if (searchInput) {
                searchInput.value = '';
            }
        }

        // Toggle search interface
        searchToggle.addEventListener('click', function() {
            console.log('Search toggle clicked');
            const isOpen = searchInterface.classList.contains('active');
            if (isOpen) {
                console.log('Closing search interface');
                closeSearchInterface();
            } else {
                console.log('Opening search interface');
                openSearchInterface();
            }
        });

        // Close search with close button
        if (searchCloseBtn) {
            searchCloseBtn.addEventListener('click', function() {
                console.log('Search close button clicked');
                closeSearchInterface();
            });
        }

        // Close search on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchInterface.classList.contains('active')) {
                closeSearchInterface();
            }
        });

        // Close search when clicking outside
        document.addEventListener('click', function(e) {
            if (searchInterface.classList.contains('active') && 
                !searchInterface.contains(e.target) && 
                !searchToggle.contains(e.target)) {
                closeSearchInterface();
            }
        });

        // Functions are now handled via event listeners, no need for global scope
    }

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
                // Close search interface if open
                if (searchInterface && searchInterface.classList.contains('active')) {
                    closeSearchInterface();
                }
                
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
    // (Quantity functionality handled above in product-specific section)
    
    // --- 6. Add to Cart Functionality ---
    // Enhanced add-to-cart with AJAX and proper error handling
    const productForms = document.querySelectorAll('form[data-type="add-to-cart-form"]');
    productForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            const addButton = this.querySelector('[type="submit"]');
            const addButtonText = this.querySelector('.btn-text');
            const formData = new FormData(this);
            
            // Show loading state
            if (addButton) {
                addButton.classList.add('loading');
                addButton.disabled = true;
                if (addButtonText) {
                    addButtonText.dataset.originalText = addButtonText.textContent;
                    addButtonText.textContent = '[PROCESSING...]';
                }
            }
            
            // Get the current variant ID from variant selector (more reliable than hidden input)
            let variantId = null;
            const variantSelects = form.querySelector('variant-selects');
            
            if (variantSelects && variantSelects.currentVariant) {
                variantId = variantSelects.currentVariant.id;
                console.log('[ADD TO CART] Got variant ID from variant selector:', variantId);
            } else {
                // Fallback to hidden input
                variantId = formData.get('id');
                console.log('[ADD TO CART] Fallback to hidden input variant ID:', variantId);
            }
            
            const quantity = parseInt(formData.get('quantity')) || 1;
            
            console.log('[ADD TO CART] Form data:', Object.fromEntries(formData.entries()));
            console.log('[ADD TO CART] Attempting to add variant:', variantId, 'quantity:', quantity);
            
            // Debug both sources
            const hiddenInput = form.querySelector('input[name="id"]');
            console.log('[ADD TO CART] Hidden input value:', hiddenInput?.value);
            console.log('[ADD TO CART] Variant selector current variant:', variantSelects?.currentVariant);
            
            if (!variantId) {
                console.error('[ADD TO CART] No variant ID found!');
                showAddToCartError(addButton, addButtonText, 'No variant selected');
                if (addButton) {
                    addButton.classList.remove('loading');
                    addButton.disabled = false;
                }
                return;
            }
            
            // Make AJAX request to add item to cart
            fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: [{
                        id: parseInt(variantId),
                        quantity: quantity
                    }]
                })
            })
            .then(response => {
                console.log('[ADD TO CART] Response status:', response.status);
                return response.json();
            })
            .then(data => {
                console.log('[ADD TO CART] Response data:', data);
                
                if (data.status && data.status === 422) {
                    // Handle errors (out of stock, etc.)
                    console.error('[ADD TO CART] Error 422:', data);
                    throw new Error(data.description || data.message || 'Unable to add item to cart');
                }
                
                if (data.items && data.items.length > 0) {
                    console.log('[ADD TO CART] Successfully added items:', data.items);
                    // Success - update cart count and show feedback
                    updateCartCount();
                    showAddToCartSuccess(addButton, addButtonText);
                    
                    // Open cart drawer after successful add
                    openCartDrawer();
                } else {
                    console.warn('[ADD TO CART] Unexpected response format:', data);
                    // Still try to update cart count
                    updateCartCount();
                    showAddToCartSuccess(addButton, addButtonText);
                }
            })
            .catch(error => {
                console.error('Add to cart error:', error);
                showAddToCartError(addButton, addButtonText, error.message);
            })
            .finally(() => {
                // Remove loading state
                if (addButton) {
                    addButton.classList.remove('loading');
                    addButton.disabled = false;
                }
            });
        });
    });
    
    // Helper function to update cart count
    function updateCartCount() {
        fetch('/cart.js')
            .then(response => response.json())
            .then(cart => {
                console.log('[CART UPDATE] Current cart:', cart);
                
                // Update cart count in header
                const cartCountElements = document.querySelectorAll('.cart-count');
                cartCountElements.forEach(element => {
                    element.textContent = cart.item_count;
                    if (cart.item_count > 0) {
                        element.style.display = 'inline-flex';
                        element.classList.add('cart-updated');
                        setTimeout(() => {
                            element.classList.remove('cart-updated');
                        }, 1000);
                    } else {
                        element.style.display = 'none';
                    }
                });
                
                // If we're on the cart page, refresh it to show updated items
                if (window.location.pathname === '/cart') {
                    setTimeout(() => {
                        window.location.reload();
                    }, 500);
                }
            })
            .catch(error => {
                console.error('Error updating cart count:', error);
            });
    }
    
    // Show success feedback
    function showAddToCartSuccess(button, buttonText) {
        if (buttonText) {
            buttonText.textContent = '[ADDED_TO_INVENTORY]';
            setTimeout(() => {
                if (buttonText.dataset.originalText) {
                    buttonText.textContent = buttonText.dataset.originalText;
                }
            }, 2000);
        }
    }
    
    // Show error feedback  
    function showAddToCartError(button, buttonText, errorMessage) {
        if (buttonText) {
            buttonText.textContent = '[ERROR_ADDING_ITEM]';
            setTimeout(() => {
                if (buttonText.dataset.originalText) {
                    buttonText.textContent = buttonText.dataset.originalText;
                }
            }, 3000);
        }
        
        // You could also show a toast notification here
        console.error('Add to cart failed:', errorMessage);
    }
    
    // Media gallery functionality
    const thumbnailButtons = document.querySelectorAll('.thumbnail-btn');
    
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
                const mainImage = mainMediaContainer.querySelector('img');
                if (mainImage) {
                    mainImage.src = this.dataset.src;
                    mainImage.srcset = this.dataset.srcset || '';
                    mainImage.alt = this.querySelector('img')?.alt || '';
                    if (this.dataset.zoom) {
                        mainImage.dataset.zoom = this.dataset.zoom;
                    }
                }
            } else if (mediaType === 'video') {
                mainMediaContainer.innerHTML = this.dataset.videoHtml;
            } else if (mediaType === 'external_video') {
                mainMediaContainer.innerHTML = this.dataset.externalVideoHtml;
            } else if (mediaType === 'model') {
                mainMediaContainer.innerHTML = this.dataset.modelHtml;
            }
        });
    });

    // --- 7. Social Sharing Functionality ---
    // Copy to clipboard functionality for social sharing
    const copyButtons = document.querySelectorAll('.share-copy');
    
    if (copyButtons.length > 0) {
        copyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const url = this.dataset.url;
                
                // Use modern clipboard API if available
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(url).then(() => {
                        showCopyFeedback(this);
                    }).catch(() => {
                        fallbackCopyToClipboard(url, this);
                    });
                } else {
                    // Fallback for older browsers or non-secure contexts
                    fallbackCopyToClipboard(url, this);
                }
            });
        });
    }
    
    // Helper function to show copy feedback
    function showCopyFeedback(button) {
        const label = button.querySelector('.share-label');
        if (label) {
            const originalText = label.textContent;
            label.textContent = '[LINK_COPIED]';
            setTimeout(() => {
                label.textContent = originalText;
            }, 2000);
        }
    }
    
    // Fallback copy function for older browsers
    function fallbackCopyToClipboard(text, button) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            showCopyFeedback(button);
        } catch (err) {
            console.error('Failed to copy to clipboard:', err);
        }
        
        document.body.removeChild(textArea);
    }

    // === CART DRAWER FUNCTIONALITY ===
    
    // Cart Drawer Functions
    function openCartDrawer() {
        console.log('[CART DRAWER] Opening cart drawer');
        
        // Create and show cart drawer if it doesn't exist
        let cartDrawer = document.getElementById('cart-drawer');
        if (!cartDrawer) {
            createCartDrawer();
            cartDrawer = document.getElementById('cart-drawer');
        }
        
        // Fetch latest cart data and update drawer content
        fetchCartAndUpdateDrawer();
        
        // Show the drawer
        cartDrawer.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    function closeCartDrawer() {
        console.log('[CART DRAWER] Closing cart drawer');
        const cartDrawer = document.getElementById('cart-drawer');
        if (cartDrawer) {
            cartDrawer.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }
    
    function createCartDrawer() {
        const drawerHTML = `
            <div id="cart-drawer" class="cart-drawer">
                <div class="cart-drawer-overlay" onclick="closeCartDrawer()"></div>
                <div class="cart-drawer-content">
                    <div class="cart-drawer-header">
                        <h2 class="cart-drawer-title">[INVENTORY_CORE]</h2>
                        <button class="cart-drawer-close" onclick="closeCartDrawer()" aria-label="Close cart">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <div class="cart-drawer-body">
                        <div class="cart-drawer-loading">Loading inventory...</div>
                    </div>
                    <div class="cart-drawer-footer">
                        <div class="cart-drawer-actions">
                            <button class="btn btn-secondary" onclick="closeCartDrawer()">[CONTINUE_SHOPPING]</button>
                            <a href="/cart" class="btn btn-primary">[VIEW_FULL_CART]</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', drawerHTML);
        
        // Add event listener for ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeCartDrawer();
            }
        });
    }
    
    function fetchCartAndUpdateDrawer() {
        fetch('/cart.js')
            .then(response => response.json())
            .then(cart => {
                console.log('[CART DRAWER] Cart data:', cart);
                updateCartDrawerContent(cart);
            })
            .catch(error => {
                console.error('[CART DRAWER] Error fetching cart:', error);
                updateCartDrawerContent({ items: [], total_price: 0, item_count: 0 });
            });
    }
    
    function updateCartDrawerContent(cart) {
        const cartBody = document.querySelector('.cart-drawer-body');
        if (!cartBody) return;
        
        if (cart.items.length === 0) {
            cartBody.innerHTML = `
                <div class="cart-drawer-empty">
                    <p>Your inventory is empty</p>
                    <p>Add items to your tactical loadout</p>
                </div>
            `;
        } else {
            let itemsHTML = '<div class="cart-drawer-items">';
            cart.items.forEach(item => {
                itemsHTML += `
                    <div class="cart-drawer-item" data-key="${item.key}">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.title}" loading="lazy">
                        </div>
                        <div class="cart-item-details">
                            <h4 class="cart-item-title">${item.product_title}</h4>
                            ${item.variant_title && item.variant_title !== 'Default Title' ? `<p class="cart-item-variant">${item.variant_title}</p>` : ''}
                            <div class="cart-item-debug" style="font-size: 0.8em; color: #888; margin: 4px 0;">
                                <span>Variant ID: ${item.variant_id}</span>
                            </div>
                            <div class="cart-item-quantity">
                                <span>Qty: ${item.quantity}</span>
                            </div>
                        </div>
                        <div class="cart-item-price">
                            <span class="price">${formatMoney(item.final_line_price)}</span>
                            <button class="cart-item-remove" onclick="removeCartItem('${item.key}')" aria-label="Remove item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                `;
            });
            itemsHTML += '</div>';
            
            itemsHTML += `
                <div class="cart-drawer-summary">
                    <div class="cart-total">
                        <span>Total: ${formatMoney(cart.total_price)}</span>
                    </div>
                </div>
            `;
            
            cartBody.innerHTML = itemsHTML;
        }
        
        // Update drawer footer based on cart content
        updateCartDrawerFooter(cart);
    }
    
    function updateCartDrawerFooter(cart) {
        const cartFooter = document.querySelector('.cart-drawer-footer .cart-drawer-actions');
        if (!cartFooter) return;
        
        if (cart.items.length === 0) {
            cartFooter.innerHTML = `
                <button class="btn btn-primary" onclick="closeCartDrawer()">[CONTINUE_SHOPPING]</button>
            `;
        } else {
            cartFooter.innerHTML = `
                <button class="btn btn-secondary" onclick="closeCartDrawer()">[CONTINUE_SHOPPING]</button>
                                        <a href="/cart" class="btn btn-primary">[INITIATE_CHECKOUT]</a>
            `;
        }
    }
    
    function removeCartItem(key) {
        console.log('[CART DRAWER] Removing item with key:', key);
        
        fetch('/cart/change.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: key,
                quantity: 0
            })
        })
        .then(response => response.json())
        .then(cart => {
            console.log('[CART DRAWER] Item removed, updated cart:', cart);
            updateCartCount();
            updateCartDrawerContent(cart);
        })
        .catch(error => {
            console.error('[CART DRAWER] Error removing item:', error);
        });
    }
    
    // Helper function to format money
    function formatMoney(cents) {
        if (typeof window.Shopify !== 'undefined' && window.Shopify.formatMoney) {
            return window.Shopify.formatMoney(cents);
        }
        // Fallback formatting
        return '$' + (cents / 100).toFixed(2);
    }
    
    // Make functions globally available
    window.openCartDrawer = openCartDrawer;
    window.closeCartDrawer = closeCartDrawer;
    window.removeCartItem = removeCartItem;
    
    // Debug function for testing variant selection
    window.debugVariantSelection = function() {
        const currentVariant = getCurrentVariant();
        console.log('Current variant:', currentVariant);
        
        const variantSelect = document.querySelector('select[name="id"]');
        console.log('Variant select element:', variantSelect);
        console.log('Selected value:', variantSelect ? variantSelect.value : 'No select found');
        
        return currentVariant;
    };

}); // End of DOMContentLoaded