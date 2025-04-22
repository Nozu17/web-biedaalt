// Users page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // View user buttons - Show user details modal
    const viewUserButtons = document.querySelectorAll('.view-user-button');
    const userModal = document.getElementById('userModal');
    const closeModalBtn = userModal?.querySelector('.close-button');
    
    if (viewUserButtons && userModal) {
        viewUserButtons.forEach(button => {
            button.addEventListener('click', function() {
                const userId = this.getAttribute('data-id');
                
                // Update modal with user details
                if (userId) {
                    loadUserDetails(userId);
                }
                
                // Show modal
                userModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
    }
    
    // Close modal
    const closeUserModal = function() {
        if (userModal) {
            userModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeUserModal);
    }
    
    // Close modal when clicking outside
    if (userModal) {
        userModal.addEventListener('click', function(event) {
            if (event.target === userModal) {
                closeUserModal();
            }
        });
    }
    
    // Tab switching in user modal
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab content
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Simulated function to load user details
    function loadUserDetails(userId) {
        // In a real application, this would fetch data from a server
        // For demo, we'll use a switch case with hardcoded data
        
        let userData;
        
        switch(userId) {
            case '1':
                userData = {
                    id: 1,
                    name: 'Болормаа.Б',
                    email: 'bolormaa@example.com',
                    phone: '9911-2233',
                    status: 'Идэвхтэй',
                    statusClass: 'active',
                    joinDate: '2024-01-15',
                    address: 'Улаанбаатар, Баянзүрх дүүрэг, 15-р хороо',
                    lastLogin: '2025-04-13 16:45:22',
                    stats: {
                        orderCount: 12,
                        totalSpent: '₮ 1,250,000',
                        avgOrder: '₮ 104,166',
                        lastOrder: '2025-04-13'
                    },
                    image: 'images/user1.jpg'
                };
                break;
                
            case '2':
                userData = {
                    id: 2,
                    name: 'Мөнхсаран.Д',
                    email: 'munkhsaran@example.com',
                    phone: '9922-3344',
                    status: 'Идэвхтэй',
                    statusClass: 'active',
                    joinDate: '2024-02-20',
                    address: 'Эрдэнэт, 3-р хороолол',
                    lastLogin: '2025-04-12 10:30:15',
                    stats: {
                        orderCount: 8,
                        totalSpent: '₮ 850,000',
                        avgOrder: '₮ 106,250',
                        lastOrder: '2025-04-12'
                    },
                    image: 'images/user2.jpg'
                };
                break;
                
            case '3':
                userData = {
                    id: 3,
                    name: 'Батбаяр.С',
                    email: 'batbayar@example.com',
                    phone: '9933-4455',
                    status: 'Идэвхтэй',
                    statusClass: 'active',
                    joinDate: '2024-03-10',
                    address: 'Дархан, 6-р баг',
                    lastLogin: '2025-04-11 14:20:05',
                    stats: {
                        orderCount: 5,
                        totalSpent: '₮ 620,000',
                        avgOrder: '₮ 124,000',
                        lastOrder: '2025-04-11'
                    },
                    image: 'images/user3.jpg'
                };
                break;
                
            case '4':
                userData = {
                    id: 4,
                    name: 'Энхжаргал.Г',
                    email: 'enkhjargal@example.com',
                    phone: '9944-5566',
                    status: 'Идэвхтэй',
                    statusClass: 'active',
                    joinDate: '2024-03-22',
                    address: 'Улаанбаатар, Чингэлтэй дүүрэг',
                    lastLogin: '2025-04-10 09:15:30',
                    stats: {
                        orderCount: 3,
                        totalSpent: '₮ 450,000',
                        avgOrder: '₮ 150,000',
                        lastOrder: '2025-04-10'
                    },
                    image: 'images/user4.jpg'
                };
                break;
                
            case '5':
                userData = {
                    id: 5,
                    name: 'Нямдорж.Ц',
                    email: 'nyamdorj@example.com',
                    phone: '9955-6677',
                    status: 'Идэвхгүй',
                    statusClass: 'inactive',
                    joinDate: '2024-04-05',
                    address: 'Улаанбаатар, Хан-Уул дүүрэг',
                    lastLogin: '2025-04-09 11:40:50',
                    stats: {
                        orderCount: 1,
                        totalSpent: '₮ 180,000',
                        avgOrder: '₮ 180,000',
                        lastOrder: '2025-04-09'
                    },
                    image: 'images/user5.jpg'
                };
                break;
                
            default:
                // Default data for other IDs
                userData = {
                    id: userId,
                    name: 'Хэрэглэгч',
                    email: 'user@example.com',
                    phone: '9900-0000',
                    status: 'Идэвхтэй',
                    statusClass: 'active',
                    joinDate: '2024-01-01',
                    address: 'Улаанбаатар',
                    lastLogin: '2025-04-01 12:00:00',
                    stats: {
                        orderCount: 0,
                        totalSpent: '₮ 0',
                        avgOrder: '₮ 0',
                        lastOrder: '-'
                    },
                    image: 'images/user.jpg'
                };
        }
        
        // Update modal with user data
        document.getElementById('modalUserImage').src = userData.image;
        document.getElementById('modalUserName').textContent = userData.name;
        document.getElementById('modalUserEmail').textContent = userData.email;
        document.getElementById('modalUserPhone').textContent = userData.phone;
        
        const statusElement = document.getElementById('modalUserStatus');
        statusElement.textContent = userData.status;
        statusElement.className = `user-status ${userData.statusClass}`;
        
        document.getElementById('modalJoinDate').textContent = userData.joinDate;
        document.getElementById('modalAddress').textContent = userData.address;
        document.getElementById('modalLastLogin').textContent = userData.lastLogin;
        
        // Update stats
        document.getElementById('modalOrderCount').textContent = userData.stats.orderCount;
        document.getElementById('modalTotalSpent').textContent = userData.stats.totalSpent;
        document.getElementById('modalAvgOrder').textContent = userData.stats.avgOrder;
        document.getElementById('modalLastOrder').textContent = userData.stats.lastOrder;
        
        // Reset to first tab
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        document.querySelector('.tab-button[data-tab="orders"]').classList.add('active');
        document.getElementById('orders-tab').classList.add('active');
    }
    
    // Search functionality
    const searchInput = document.getElementById('searchUsers');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const userRows = document.querySelectorAll('.users-table tbody tr');
            
            userRows.forEach(row => {
                const userName = row.cells[1].textContent.toLowerCase();
                const userEmail = row.cells[2].textContent.toLowerCase();
                const userPhone = row.cells[3].textContent.toLowerCase();
                
                if (userName.includes(searchTerm) || userEmail.includes(searchTerm) || userPhone.includes(searchTerm)) {
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
            const userRows = document.querySelectorAll('.users-table tbody tr');
            
            userRows.forEach(row => {
                row.style.display = '';
                
                if (status) {
                    const userStatus = row.querySelector('.user-status').className;
                    
                    if (!userStatus.includes(status)) {
                        row.style.display = 'none';
                    }
                }
            });
        });
    }
    
    // Sort users
    const sortUsers = document.getElementById('sortUsers');
    
    if (sortUsers) {
        sortUsers.addEventListener('change', function() {
            const sortType = this.value;
            const tableBody = document.querySelector('.users-table tbody');
            const userRows = Array.from(document.querySelectorAll('.users-table tbody tr'));
            
            if (tableBody) {
                userRows.sort((a, b) => {
                    if (sortType === 'newest' || sortType === 'oldest') {
                        const dateA = new Date(a.cells[4].textContent);
                        const dateB = new Date(b.cells[4].textContent);
                        
                        return sortType === 'newest' ? dateB - dateA : dateA - dateB;
                    } else if (sortType === 'most-orders') {
                        const ordersA = parseInt(a.cells[5].textContent);
                        const ordersB = parseInt(b.cells[5].textContent);
                        
                        return ordersB - ordersA;
                    } else if (sortType === 'most-spent') {
                        const spentA = parseInt(a.cells[6].textContent.replace('₮ ', '').replace(',', ''));
                        const spentB = parseInt(b.cells[6].textContent.replace('₮ ', '').replace(',', ''));
                        
                        return spentB - spentA;
                    }
                    
                    return 0;
                });
                
                // Clear and re-append sorted rows
                userRows.forEach(row => row.remove());
                
                userRows.forEach(row => {
                    tableBody.appendChild(row);
                });
            }
        });
    }
    
    // Export users button
    const exportUsersBtn = document.getElementById('exportUsersBtn');
    
    if (exportUsersBtn) {
        exportUsersBtn.addEventListener('click', function() {
            alert('Хэрэглэгчдийн жагсаалт амжилттай экспортлогдлоо.');
        });
    }
    
    // Add note functionality
    const addNoteButton = document.querySelector('.add-note-button');
    
    if (addNoteButton) {
        addNoteButton.addEventListener('click', function() {
            const noteTitle = document.getElementById('noteTitle').value;
            const noteText = document.getElementById('noteText').value;
            
            if (noteTitle && noteText) {
                const noteList = document.querySelector('.note-list');
                const today = new Date().toISOString().split('T')[0];
                
                const noteItem = document.createElement('div');
                noteItem.className = 'note-item';
                noteItem.innerHTML = `
                    <div class="note-header">
                        <h4>${noteTitle}</h4>
                        <span>${today}</span>
                    </div>
                    <p>${noteText}</p>
                `;
                
                noteList.prepend(noteItem);
                
                // Clear form
                document.getElementById('noteTitle').value = '';
                document.getElementById('noteText').value = '';
                
                // Show success message
                alert('Шинэ тэмдэглэл амжилттай нэмэгдлээ.');
            } else {
                alert('Гарчиг болон тэмдэглэлийн мэдээллийг оруулна уу.');
            }
        });
    }
    
    // User action buttons in modal
    const sendEmailButton = document.querySelector('.send-email-button');
    const editUserButton = document.querySelector('.edit-user-button');
    const blockUserButton = document.querySelector('.block-user-button');
    
    if (sendEmailButton) {
        sendEmailButton.addEventListener('click', function() {
            alert('И-мэйл илгээх цонх нээгдлээ.');
        });
    }
    
    if (editUserButton) {
        editUserButton.addEventListener('click', function() {
            alert('Хэрэглэгчийн мэдээллийг засах цонх нээгдлээ.');
        });
    }
    
    if (blockUserButton) {
        blockUserButton.addEventListener('click', function() {
            const userName = document.getElementById('modalUserName').textContent;
            const statusElement = document.getElementById('modalUserStatus');
            const isCurrentlyActive = statusElement.textContent === 'Идэвхтэй';
            
            if (confirm(`${userName} хэрэглэгчийг ${isCurrentlyActive ? 'блоклох' : 'идэвхжүүлэх'} үү?`)) {
                if (isCurrentlyActive) {
                    statusElement.textContent = 'Идэвхгүй';
                    statusElement.className = 'user-status inactive';
                    blockUserButton.textContent = 'Идэвхжүүлэх';
                } else {
                    statusElement.textContent = 'Идэвхтэй';
                    statusElement.className = 'user-status active';
                    blockUserButton.textContent = 'Блоклох';
                }
                
                alert(`Хэрэглэгч амжилттай ${isCurrentlyActive ? 'блоклогдлоо' : 'идэвхжүүлэгдлээ'}.`);
            }
        });
    }
});