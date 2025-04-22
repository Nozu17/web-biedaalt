// Orders page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // View order buttons - Show order details modal
    const viewButtons = document.querySelectorAll('.view-button');
    const orderModal = document.getElementById('orderModal');
    const closeModalBtn = orderModal?.querySelector('.close-button');
    
    if (viewButtons && orderModal) {
        viewButtons.forEach(button => {
            button.addEventListener('click', function() {
                const orderId = this.getAttribute('data-id');
                
                // Update modal with order details
                if (orderId) {
                    loadOrderDetails(orderId);
                }
                
                // Show modal
                orderModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
    }
    
    // Close modal
    const closeOrderModal = function() {
        if (orderModal) {
            orderModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeOrderModal);
    }
    
    // Close modal when clicking outside
    if (orderModal) {
        orderModal.addEventListener('click', function(event) {
            if (event.target === orderModal) {
                closeOrderModal();
            }
        });
    }
    
    // Simulated function to load order details
    function loadOrderDetails(orderId) {
        // In a real application, this would fetch data from a server
        // For demo, we'll use a switch case with hardcoded data
        
        let orderData;
        
        switch(orderId) {
            case '001234':
                orderData = {
                    id: '#001234',
                    date: '2025-04-13 14:25:30',
                    status: 'Хүргэлтэд',
                    statusClass: 'pending',
                    paymentMethod: 'Карт',
                    customer: {
                        name: 'Болормаа.Б',
                        email: 'bolormaa@example.com',
                        phone: '9911-2233',
                        address: 'Улаанбаатар, Баянзүрх дүүрэг, 15-р хороо, 34-р байр, 56 тоот'
                    },
                    products: [
                        {
                            name: 'Cushion',
                            price: '220,000',
                            quantity: 1,
                            total: '220,000',
                            image: 'images/cushion.jpg'
                        },
                        {
                            name: 'Refill',
                            price: '30,000',
                            quantity: 1,
                            total: '30,000',
                            image: 'images/refill.jpg'
                        }
                    ],
                    summary: {
                        subtotal: '250,000',
                        shipping: '5,000',
                        tax: '25,000',
                        total: '280,000'
                    }
                };
                break;
                
            case '001235':
                orderData = {
                    id: '#001235',
                    date: '2025-04-12 09:15:45',
                    status: 'Төлбөр хүлээгдэж байна',
                    statusClass: 'awaiting',
                    paymentMethod: 'Данс',
                    customer: {
                        name: 'Мөнхсаран.Д',
                        email: 'munkhsaran@example.com',
                        phone: '9922-3344',
                        address: 'Эрдэнэт, 3-р хороолол, 5-р байр, 12 тоот'
                    },
                    products: [
                        {
                            name: 'Primer',
                            price: '50,000',
                            quantity: 1,
                            total: '50,000',
                            image: 'images/primer.jpg'
                        }
                    ],
                    summary: {
                        subtotal: '50,000',
                        shipping: '8,000',
                        tax: '5,000',
                        total: '63,000'
                    }
                };
                break;
                
            case '001236':
                orderData = {
                    id: '#001236',
                    date: '2025-04-11 16:40:10',
                    status: 'Амжилттай',
                    statusClass: 'completed',
                    paymentMethod: 'Карт',
                    customer: {
                        name: 'Батбаяр.С',
                        email: 'batbayar@example.com',
                        phone: '9933-4455',
                        address: 'Дархан, 6-р баг, 10-р гудамж, 5 тоот'
                    },
                    products: [
                        {
                            name: 'Foundation',
                            price: '75,000',
                            quantity: 1,
                            total: '75,000',
                            image: 'images/foundation.jpg'
                        }
                    ],
                    summary: {
                        subtotal: '75,000',
                        shipping: '8,000',
                        tax: '7,500',
                        total: '90,500'
                    }
                };
                break;
                
            default:
                // Default data for other IDs
                orderData = {
                    id: `#${orderId}`,
                    date: '2025-04-09 12:30:00',
                    status: 'Амжилттай',
                    statusClass: 'completed',
                    paymentMethod: 'Карт',
                    customer: {
                        name: 'Хэрэглэгч',
                        email: 'user@example.com',
                        phone: '9900-0000',
                        address: 'Улаанбаатар'
                    },
                    products: [
                        {
                            name: 'Бүтээгдэхүүн',
                            price: '100,000',
                            quantity: 1,
                            total: '100,000',
                            image: 'images/product.jpg'
                        }
                    ],
                    summary: {
                        subtotal: '100,000',
                        shipping: '5,000',
                        tax: '10,000',
                        total: '115,000'
                    }
                };
        }
        
        // Update modal with order data
        document.getElementById('modalOrderId').textContent = orderData.id;
        document.getElementById('modalOrderDate').textContent = orderData.date;
        
        const statusElement = document.getElementById('modalOrderStatus');
        statusElement.textContent = orderData.status;
        statusElement.className = `info-value status ${orderData.statusClass}`;
        
        document.getElementById('modalPaymentMethod').textContent = orderData.paymentMethod;
        
        // Customer info
        document.getElementById('modalCustomerName').textContent = orderData.customer.name;
        document.getElementById('modalCustomerEmail').textContent = orderData.customer.email;
        document.getElementById('modalCustomerPhone').textContent = orderData.customer.phone;
        document.getElementById('modalCustomerAddress').textContent = orderData.customer.address;
        
        // Products
        const productsContainer = document.querySelector('.ordered-products');
        productsContainer.innerHTML = '';
        
        orderData.products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'ordered-product-item';
            productElement.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <p>${product.quantity} x ₮ ${product.price}</p>
                </div>
                <div class="product-total">₮ ${product.total}</div>
            `;
            
            productsContainer.appendChild(productElement);
        });
        
        // Summary
        const summaryRows = document.querySelectorAll('.summary-row');
        summaryRows[0].querySelector('span:last-child').textContent = `₮ ${orderData.summary.subtotal}`;
        summaryRows[1].querySelector('span:last-child').textContent = `₮ ${orderData.summary.shipping}`;
        summaryRows[2].querySelector('span:last-child').textContent = `₮ ${orderData.summary.tax}`;
        summaryRows[3].querySelector('span:last-child').textContent = `₮ ${orderData.summary.total}`;
    }
    
    // Search functionality
    const searchInput = document.getElementById('searchOrders');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const orderRows = document.querySelectorAll('.orders-table tbody tr');
            
            orderRows.forEach(row => {
                const orderId = row.cells[0].textContent.toLowerCase();
                const productName = row.cells[2].textContent.toLowerCase();
                const customerName = row.cells[1].textContent.toLowerCase();
                
                if (orderId.includes(searchTerm) || productName.includes(searchTerm) || customerName.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
    
    // Status filter
    const statusFilter = document.getElementById('statusFilter');
    
    if (statusFilter) {
        statusFilter.addEventListener('change', function() {
            const status = this.value.toLowerCase();
            const orderRows = document.querySelectorAll('.orders-table tbody tr');
            
            orderRows.forEach(row => {
                row.style.display = '';
                
                if (status) {
                    const statusSelect = row.querySelector('.status-select');
                    const currentStatus = statusSelect.value;
                    
                    if (currentStatus !== status) {
                        row.style.display = 'none';
                    }
                }
            });
        });
    }
    
    // Date filter
    const dateFilter = document.getElementById('dateFilter');
    
    if (dateFilter) {
        dateFilter.addEventListener('change', function() {
            const filter = this.value;
            const orderRows = document.querySelectorAll('.orders-table tbody tr');
            
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            
            const weekStart = new Date(today);
            weekStart.setDate(weekStart.getDate() - weekStart.getDay());
            
            const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
            
            orderRows.forEach(row => {
                row.style.display = '';
                
                if (filter !== 'all') {
                    const dateCell = row.cells[4].textContent;
                    const orderDate = new Date(dateCell);
                    orderDate.setHours(0, 0, 0, 0);
                    
                    switch(filter) {
                        case 'today':
                            if (orderDate.getTime() !== today.getTime()) {
                                row.style.display = 'none';
                            }
                            break;
                            
                        case 'yesterday':
                            if (orderDate.getTime() !== yesterday.getTime()) {
                                row.style.display = 'none';
                            }
                            break;
                            
                        case 'week':
                            if (orderDate < weekStart) {
                                row.style.display = 'none';
                            }
                            break;
                            
                        case 'month':
                            if (orderDate < monthStart) {
                                row.style.display = 'none';
                            }
                            break;
                    }
                }
            });
        });
    }
    
    // Export orders button
    const exportBtn = document.getElementById('exportBtn');
    
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            alert('Захиалгын жагсаалт амжилттай экспортлогдлоо.');
        });
    }
    
    // Status update button in modal
    const updateStatusButton = document.querySelector('.update-status-button');
    
    if (updateStatusButton) {
        updateStatusButton.addEventListener('click', function() {
            const statusElement = document.getElementById('modalOrderStatus');
            const currentStatus = statusElement.textContent;
            
            // Show status options in a simple dialog
            const newStatus = prompt(
                'Захиалгын төлөв сонгоно уу:', 
                'Хүргэлтэд, Төлбөр хүлээгдэж байна, Амжилттай, Цуцлагдсан'
            );
            
            if (newStatus) {
                // Map status text to class
                let statusClass = '';
                if (newStatus.includes('Хүргэлтэд')) {
                    statusClass = 'pending';
                } else if (newStatus.includes('Төлбөр')) {
                    statusClass = 'awaiting';
                } else if (newStatus.includes('Амжилттай')) {
                    statusClass = 'completed';
                } else if (newStatus.includes('Цуцлагдсан')) {
                    statusClass = 'cancelled';
                }
                
                // Update modal status
                statusElement.textContent = newStatus;
                statusElement.className = `info-value status ${statusClass}`;
                
                // Show success message
                alert('Захиалгын төлөв амжилттай шинэчлэгдлээ.');
            }
        });
    }
    
    // Print invoice button
    const printInvoiceButton = document.querySelector('.print-invoice-button');
    
    if (printInvoiceButton) {
        printInvoiceButton.addEventListener('click', function() {
            alert('Баримт хэвлэх процесс эхэллээ.');
        });
    }
    
    // Cancel order button
    const cancelOrderButton = document.querySelector('.cancel-order-button');
    
    if (cancelOrderButton) {
        cancelOrderButton.addEventListener('click', function() {
            if (confirm('Захиалгыг цуцлахдаа итгэлтэй байна уу?')) {
                const statusElement = document.getElementById('modalOrderStatus');
                
                // Update status to cancelled
                statusElement.textContent = 'Цуцлагдсан';
                statusElement.className = 'info-value status cancelled';
                
                alert('Захиалга амжилттай цуцлагдлаа.');
            }
        });
    }
});