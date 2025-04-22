// Main JavaScript for Admin Dashboard

document.addEventListener('DOMContentLoaded', function() {
    // Mobile sidebar toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = mobileToggle && mobileToggle.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnToggle && window.innerWidth <= 576 && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });
    
    // Notifications dropdown
    const notifyBtn = document.getElementById('notifyBtn');
    const notifyDropdown = document.getElementById('notifyDropdown');
    
    if (notifyBtn && notifyDropdown) {
        notifyBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            notifyDropdown.style.display = notifyDropdown.style.display === 'block' ? 'none' : 'block';
            
            // Close profile dropdown if open
            if (profileDropdown) {
                profileDropdown.style.display = 'none';
            }
        });
    }
    
    // User profile dropdown
    const userProfile = document.querySelector('.user-profile');
    const profileDropdown = document.getElementById('profileDropdown');
    
    if (userProfile && profileDropdown) {
        userProfile.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
            
            // Close notifications dropdown if open
            if (notifyDropdown) {
                notifyDropdown.style.display = 'none';
            }
        });
    }
    
    // Close dropdowns when clicking elsewhere
    document.addEventListener('click', function() {
        if (notifyDropdown) {
            notifyDropdown.style.display = 'none';
        }
        if (profileDropdown) {
            profileDropdown.style.display = 'none';
        }
    });
    
    // Modal functionality
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const closeBtns = document.querySelectorAll('.close-button, .cancel-button');
    const modals = document.querySelectorAll('.modal');
    
    // Open modal
    modalTriggers.forEach(trigger => {
        const modalId = trigger.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        
        if (trigger && modal) {
            trigger.addEventListener('click', () => {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        }
    });
    
    // Close modal with buttons
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Custom tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Remove active class from all buttons
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Show selected tab
            document.getElementById(`${tabId}-tab`).classList.add('active');
            
            // Add active class to clicked button
            button.classList.add('active');
        });
    });
    
    // Add view-button behavior for modals
    const viewButtons = document.querySelectorAll('.view-button');
    const orderModal = document.getElementById('orderModal');
    
    if (viewButtons && orderModal) {
        viewButtons.forEach(button => {
            button.addEventListener('click', () => {
                orderModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
    }
    
    // Add view-user-button behavior for user modals
    const viewUserButtons = document.querySelectorAll('.view-user-button');
    const userModal = document.getElementById('userModal');
    
    if (viewUserButtons && userModal) {
        viewUserButtons.forEach(button => {
            button.addEventListener('click', () => {
                userModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
    }

    // Status select
    const statusSelects = document.querySelectorAll('.status-select');
    
    statusSelects.forEach(select => {
        select.addEventListener('change', function() {
            // Remove all classes
            select.classList.remove('completed', 'pending', 'awaiting', 'cancelled');
            // Add the selected class
            select.classList.add(this.value);
        });
    });
});