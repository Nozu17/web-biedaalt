// Products page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add Product Button - Open Modal
    const addProductBtn = document.getElementById('addProductBtn');
    const productModal = document.getElementById('productModal');
    const closeModalBtn = productModal?.querySelector('.close-button');
    const cancelBtn = productModal?.querySelector('.cancel-button');
    const productForm = document.getElementById('productForm');
    const modalTitle = document.getElementById('modalTitle');
    
    if (addProductBtn && productModal) {
        addProductBtn.addEventListener('click', function() {
            // Reset form
            if (productForm) productForm.reset();
            
            // Set modal title for adding new product
            if (modalTitle) modalTitle.textContent = 'Шинэ бүтээгдэхүүн нэмэх';
            
            // Show modal
            productModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close modal
    const closeProductModal = function() {
        if (productModal) {
            productModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeProductModal);
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeProductModal);
    }
    
    // Close modal when clicking outside
    if (productModal) {
        productModal.addEventListener('click', function(event) {
            if (event.target === productModal) {
                closeProductModal();
            }
        });
    }
    
    // Edit product buttons
    const editButtons = document.querySelectorAll('.edit-button');
    
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            
            if (productCard && productModal && productForm && modalTitle) {
                // Set modal title for editing
                modalTitle.textContent = 'Бүтээгдэхүүн засах';
                
                // Get product details from card
                const productName = productCard.querySelector('h3').textContent;
                const productCategory = productCard.querySelector('.product-category').textContent;
                const productPrice = productCard.querySelector('.product-price').textContent.replace('₮ ', '').replace(',', '');
                const productStock = productCard.querySelector('.product-stock').textContent.replace('Үлдэгдэл: ', '');
                
                // Fill form with product details
                document.getElementById('productName').value = productName;
                
                // Set category dropdown
                const categorySelect = document.getElementById('productCategory');
                for (let i = 0; i < categorySelect.options.length; i++) {
                    if (categorySelect.options[i].text === productCategory) {
                        categorySelect.selectedIndex = i;
                        break;
                    }
                }
                
                document.getElementById('productPrice').value = productPrice;
                document.getElementById('productStock').value = productStock;
                
                // Show modal
                productModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Delete product buttons with confirmation
    const deleteButtons = document.querySelectorAll('.delete-button');
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            if (confirm(`"${productName}" бүтээгдэхүүнийг устгахдаа итгэлтэй байна уу?`)) {
                // Animation for deleting
                productCard.style.opacity = '0';
                productCard.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    productCard.remove();
                }, 300);
            }
        });
    });
    
    // Form submission
    if (productForm) {
        productForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('productName').value;
            const category = document.getElementById('productCategory').options[document.getElementById('productCategory').selectedIndex].text;
            const price = document.getElementById('productPrice').value;
            const stock = document.getElementById('productStock').value;
            
            // Check if editing (modal title contains "засах")
            const isEditing = modalTitle && modalTitle.textContent.includes('засах');
            
            if (isEditing) {
                // Find the product card being edited
                const editButtons = document.querySelectorAll('.edit-button');
                let productCard;
                
                for (let button of editButtons) {
                    const card = button.closest('.product-card');
                    if (card.querySelector('h3').textContent === name) {
                        productCard = card;
                        break;
                    }
                }
                
                if (productCard) {
                    // Update product card
                    productCard.querySelector('h3').textContent = name;
                    productCard.querySelector('.product-category').textContent = category;
                    productCard.querySelector('.product-price').textContent = `₮ ${price}`;
                    productCard.querySelector('.product-stock').textContent = `Үлдэгдэл: ${stock}`;
                    
                    // Update stock tag
                    const stockTag = productCard.querySelector('.stock-tag');
                    if (parseInt(stock) === 0) {
                        stockTag.textContent = 'Дууссан';
                        stockTag.className = 'stock-tag out-of-stock';
                    } else if (parseInt(stock) <= 10) {
                        stockTag.textContent = 'Бага үлдэгдэлтэй';
                        stockTag.className = 'stock-tag low-stock';
                    } else {
                        stockTag.textContent = 'Байгаа';
                        stockTag.className = 'stock-tag in-stock';
                    }
                }
            } else {
                // Create new product card
                const productsGrid = document.querySelector('.products-grid');
                
                if (productsGrid) {
                    const stockStatus = parseInt(stock) === 0 ? 
                        '<span class="stock-tag out-of-stock">Дууссан</span>' : 
                        (parseInt(stock) <= 10 ? 
                            '<span class="stock-tag low-stock">Бага үлдэгдэлтэй</span>' : 
                            '<span class="stock-tag in-stock">Байгаа</span>');
                    
                    // Create new product card HTML
                    const newProduct = document.createElement('div');
                    newProduct.className = 'product-card';
                    newProduct.innerHTML = `
                        <div class="product-image">
                            <img src="images/new-product.jpg" alt="${name}">
                            ${stockStatus}
                        </div>
                        <div class="product-details">
                            <h3>${name}</h3>
                            <p class="product-category">${category}</p>
                            <div class="product-meta">
                                <p class="product-price">₮ ${price}</p>
                                <p class="product-stock">Үлдэгдэл: ${stock}</p>
                            </div>
                            <div class="product-actions">
                                <button class="edit-button">Засах</button>
                                <button class="delete-button">Устгах</button>
                            </div>
                        </div>
                    `;
                    
                    // Add to grid with animation
                    newProduct.style.opacity = '0';
                    newProduct.style.transform = 'scale(0.8)';
                    productsGrid.prepend(newProduct);
                    
                    setTimeout(() => {
                        newProduct.style.opacity = '1';
                        newProduct.style.transform = 'scale(1)';
                    }, 10);
                    
                    // Add event listeners to new buttons
                    const newEditButton = newProduct.querySelector('.edit-button');
                    const newDeleteButton = newProduct.querySelector('.delete-button');
                    
                    newEditButton.addEventListener('click', function() {
                        if (productModal && modalTitle) {
                            modalTitle.textContent = 'Бүтээгдэхүүн засах';
                            
                            document.getElementById('productName').value = name;
                            
                            const categorySelect = document.getElementById('productCategory');
                            for (let i = 0; i < categorySelect.options.length; i++) {
                                if (categorySelect.options[i].text === category) {
                                    categorySelect.selectedIndex = i;
                                    break;
                                }
                            }
                            
                            document.getElementById('productPrice').value = price;
                            document.getElementById('productStock').value = stock;
                            
                            productModal.style.display = 'block';
                            document.body.style.overflow = 'hidden';
                        }
                    });
                    
                    newDeleteButton.addEventListener('click', function() {
                        if (confirm(`"${name}" бүтээгдэхүүнийг устгахдаа итгэлтэй байна уу?`)) {
                            newProduct.style.opacity = '0';
                            newProduct.style.transform = 'scale(0.8)';
                            
                            setTimeout(() => {
                                newProduct.remove();
                            }, 300);
                        }
                    });
                }
            }
            
            // Close modal
            closeProductModal();
            
            // Show success message
            alert(isEditing ? 'Бүтээгдэхүүн амжилттай шинэчлэгдлээ.' : 'Шинэ бүтээгдэхүүн амжилттай нэмэгдлээ.');
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('searchProduct');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                const productName = card.querySelector('h3').textContent.toLowerCase();
                const productCategory = card.querySelector('.product-category').textContent.toLowerCase();
                
                if (productName.includes(searchTerm) || productCategory.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Category filter
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            const category = this.value.toLowerCase();
            const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                // Reset display from search filter
                card.style.display = 'block';
                
                if (category) {
                    const productCategory = card.querySelector('.product-category').textContent.toLowerCase();
                    
                    if (!productCategory.includes(category)) {
                        card.style.display = 'none';
                    }
                }
            });
        });
    }
    
    // Stock filter
    const stockFilter = document.getElementById('stockFilter');
    
    if (stockFilter) {
        stockFilter.addEventListener('change', function() {
            const filter = this.value;
            const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                // Reset display from previous filters
                card.style.display = 'block';
                
                if (filter) {
                    const stockTag = card.querySelector('.stock-tag');
                    const stockClass = stockTag.className;
                    
                    if (!stockClass.includes(filter)) {
                        card.style.display = 'none';
                    }
                }
            });
        });
    }
    
    // Sort products
    const sortProducts = document.getElementById('sortProducts');
    
    if (sortProducts) {
        sortProducts.addEventListener('change', function() {
            const sortType = this.value;
            const productsGrid = document.querySelector('.products-grid');
            const productCards = Array.from(document.querySelectorAll('.product-card'));
            
            if (productsGrid) {
                productCards.sort((a, b) => {
                    if (sortType === 'newest' || sortType === 'oldest') {
                        // For demo, we'll assume the order in the DOM is chronological
                        return sortType === 'newest' ? -1 : 1;
                    } else if (sortType === 'priceAsc' || sortType === 'priceDesc') {
                        const priceA = parseInt(a.querySelector('.product-price').textContent.replace('₮ ', '').replace(',', ''));
                        const priceB = parseInt(b.querySelector('.product-price').textContent.replace('₮ ', '').replace(',', ''));
                        
                        return sortType === 'priceAsc' ? priceA - priceB : priceB - priceA;
                    }
                    
                    return 0;
                });
                
                // Clear and re-append sorted cards with animation
                productCards.forEach(card => card.remove());
                
                productCards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    productsGrid.appendChild(card);
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 50);
                });
            }
        });
    }
});