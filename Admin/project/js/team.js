// Team page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add Team Member Button - Open Modal
    const addTeamMemberBtn = document.getElementById('addTeamMemberBtn');
    const teamMemberModal = document.getElementById('teamMemberModal');
    const closeModalBtn = teamMemberModal?.querySelector('.close-button');
    const cancelBtn = teamMemberModal?.querySelector('.cancel-button');
    const teamMemberForm = document.getElementById('teamMemberForm');
    const modalTitle = document.getElementById('modalTitle');
    
    if (addTeamMemberBtn && teamMemberModal) {
        addTeamMemberBtn.addEventListener('click', function() {
            // Reset form
            if (teamMemberForm) teamMemberForm.reset();
            
            // Set modal title for adding new team member
            if (modalTitle) modalTitle.textContent = 'Шинэ гишүүн нэмэх';
            
            // Show modal
            teamMemberModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close modal
    const closeTeamMemberModal = function() {
        if (teamMemberModal) {
            teamMemberModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeTeamMemberModal);
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeTeamMemberModal);
    }
    
    // Close modal when clicking outside
    if (teamMemberModal) {
        teamMemberModal.addEventListener('click', function(event) {
            if (event.target === teamMemberModal) {
                closeTeamMemberModal();
            }
        });
    }
    
    // View member buttons - Show member details modal
    const viewMemberButtons = document.querySelectorAll('.view-member');
    const memberDetailModal = document.getElementById('memberDetailModal');
    const closeMemberDetailBtn = memberDetailModal?.querySelector('.close-button');
    
    if (viewMemberButtons && memberDetailModal) {
        viewMemberButtons.forEach(button => {
            button.addEventListener('click', function() {
                const memberId = this.getAttribute('data-id');
                
                // Update modal with member details
                if (memberId) {
                    loadMemberDetails(memberId);
                }
                
                // Show modal
                memberDetailModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
    }
    
    // Close member detail modal
    const closeMemberDetailModal = function() {
        if (memberDetailModal) {
            memberDetailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
    
    if (closeMemberDetailBtn) {
        closeMemberDetailBtn.addEventListener('click', closeMemberDetailModal);
    }
    
    // Close modal when clicking outside
    if (memberDetailModal) {
        memberDetailModal.addEventListener('click', function(event) {
            if (event.target === memberDetailModal) {
                closeMemberDetailModal();
            }
        });
    }
    
    // Simulated function to load member details
    function loadMemberDetails(memberId) {
        // In a real application, this would fetch data from a server
        // For demo, we'll use a switch case with hardcoded data
        
        let memberData;
        
        switch(memberId) {
            case '1':
                memberData = {
                    id: 1,
                    name: 'Батболд.Ц',
                    role: 'Гүйцэтгэх захирал',
                    email: 'batbold@example.com',
                    phone: '9900-1122',
                    department: 'Удирдлага',
                    bio: 'Батболд нь 10 гаруй жилийн туршлагатай мэргэжилтэн бөгөөд косметик бүтээгдэхүүний салбарт өндөр мэдлэг, чадвартай удирдагч юм. Тэрээр манай компанийг өнгөрсөн 5 жилийн хугацаанд амжилттай удирдаж, зах зээлийн хувь хэмжээг 2 дахин нэмэгдүүлсэн. Дотоод болон гадаад хамтын ажиллагааг өргөжүүлж, шинэ бүтээгдэхүүн гаргахад голлох үүрэг гүйцэтгэдэг.',
                    stats: {
                        years: '5 жил',
                        projects: '15',
                        team: '8'
                    },
                    image: 'images/ceo.jpg'
                };
                break;
                
            case '2':
                memberData = {
                    id: 2,
                    name: 'Оюунбилэг.С',
                    role: 'Маркетингийн захирал',
                    email: 'oyunbileg@example.com',
                    phone: '9900-2233',
                    department: 'Маркетинг',
                    bio: 'Оюунбилэг нь маркетинг, брэндинг чиглэлээр 8 жилийн туршлагатай мэргэжилтэн юм. Тэрээр манай брэндийн үнэ цэнийг нэмэгдүүлж, нийгмийн сүлжээний маркетингийн стратегийг амжилттай хэрэгжүүлсэн. Тэрээр маркетингийн 12 гишүүнтэй багийг удирдаж, бүтээгдэхүүний танилцуулга, борлуулалтын өсөлтөд онцгой хувь нэмэр оруулдаг.',
                    stats: {
                        years: '4 жил',
                        projects: '22',
                        team: '12'
                    },
                    image: 'images/director1.jpg'
                };
                break;
                
            case '3':
                memberData = {
                    id: 3,
                    name: 'Ганболд.Д',
                    role: 'Үйл ажиллагааны захирал',
                    email: 'ganbold@example.com',
                    phone: '9900-3344',
                    department: 'Үйл ажиллагаа',
                    bio: 'Ганболд нь үйл ажиллагааны удирдлагын чиглэлээр 7 жилийн туршлагатай мэргэжилтэн юм. Тэрээр үйлдвэрлэлийн процессыг оновчлох, хэрэгжүүлэх, компанийн үйл ажиллагааны үр ашгийг сайжруулах чиглэлээр тэргүүлдэг. Ганболд нь манай үйлдвэрлэлийн зардлыг 15%-иар бууруулж, бүтээгдэхүүний чанарыг сайжруулсан.',
                    stats: {
                        years: '3 жил',
                        projects: '8',
                        team: '25'
                    },
                    image: 'images/director2.jpg'
                };
                break;
                
            default:
                // Default data for other IDs
                memberData = {
                    id: memberId,
                    name: 'Ажилтан',
                    role: 'Албан тушаал',
                    email: 'staff@example.com',
                    phone: '9900-0000',
                    department: 'Хэлтэс',
                    bio: 'Ажилтны товч танилцуулга.',
                    stats: {
                        years: '2 жил',
                        projects: '5',
                        team: '0'
                    },
                    image: 'images/user.jpg'
                };
        }
        
        // Update modal with member data
        document.getElementById('detailMemberName').textContent = memberData.name;
        document.getElementById('detailMemberRole').textContent = memberData.role;
        document.getElementById('detailMemberEmail').textContent = memberData.email;
        document.getElementById('detailMemberPhone').textContent = memberData.phone;
        document.getElementById('detailMemberDepartment').textContent = memberData.department;
        document.getElementById('detailMemberBio').textContent = memberData.bio;
        document.getElementById('detailMemberImage').src = memberData.image;
        
        // Update stats
        const statValues = document.querySelectorAll('.member-stat-card .stat-value');
        statValues[0].textContent = memberData.stats.years;
        statValues[1].textContent = memberData.stats.projects;
        statValues[2].textContent = memberData.stats.team;
    }
    
    // Form submission for adding new team member
    if (teamMemberForm) {
        teamMemberForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('memberName').value;
            const role = document.getElementById('memberRole').value;
            const email = document.getElementById('memberEmail').value;
            const phone = document.getElementById('memberPhone').value;
            const department = document.getElementById('memberDepartment').options[document.getElementById('memberDepartment').selectedIndex].text;
            
            // Get the appropriate org level based on department
            let targetLevel;
            
            if (department.includes('Удирдлага')) {
                targetLevel = document.querySelector('.org-level.directors');
            } else {
                targetLevel = document.querySelector('.org-level.managers');
            }
            
            if (targetLevel) {
                // Create new member card
                const newMember = document.createElement('div');
                newMember.className = 'org-card';
                
                // Add border color based on department
                if (department.includes('Маркетинг')) {
                    newMember.style.borderTop = '4px solid #2196F3';
                } else if (department.includes('Үйл ажиллагаа')) {
                    newMember.style.borderTop = '4px solid #4CAF50';
                } else if (department.includes('Санхүү')) {
                    newMember.style.borderTop = '4px solid #FF9800';
                } else if (department.includes('Бүтээгдэхүүн')) {
                    newMember.style.borderTop = '4px solid #00BCD4';
                } else if (department.includes('Борлуулалт')) {
                    newMember.style.borderTop = '4px solid #E91E63';
                } else if (department.includes('Хэрэглэгчийн харилцаа')) {
                    newMember.style.borderTop = '4px solid #673AB7';
                } else if (department.includes('Хангамж')) {
                    newMember.style.borderTop = '4px solid #795548';
                } else {
                    newMember.style.borderTop = '4px solid #607D8B';
                }
                
                newMember.innerHTML = `
                    <div class="member-photo">
                        <img src="images/new-member.jpg" alt="${name}">
                    </div>
                    <div class="member-info">
                        <h3>${name}</h3>
                        <p class="member-role">${role}</p>
                        <div class="member-contact">
                            <p>${email}</p>
                            <p>${phone}</p>
                        </div>
                        <div class="member-actions">
                            <button class="view-member" data-id="new">Дэлгэрэнгүй</button>
                        </div>
                    </div>
                `;
                
                // Add to org chart with animation
                newMember.style.opacity = '0';
                newMember.style.transform = 'scale(0.8)';
                targetLevel.appendChild(newMember);
                
                setTimeout(() => {
                    newMember.style.opacity = '1';
                    newMember.style.transform = 'scale(1)';
                }, 10);
                
                // Add event listener to new view button
                const newViewButton = newMember.querySelector('.view-member');
                
                newViewButton.addEventListener('click', function() {
                    if (memberDetailModal) {
                        // Create default details for new member
                        const newMemberData = {
                            id: 'new',
                            name: name,
                            role: role,
                            email: email,
                            phone: phone,
                            department: department,
                            bio: 'Шинээр нэмэгдсэн гишүүн.',
                            stats: {
                                years: '0 жил',
                                projects: '0',
                                team: '0'
                            },
                            image: 'images/new-member.jpg'
                        };
                        
                        // Update modal with member data
                        document.getElementById('detailMemberName').textContent = newMemberData.name;
                        document.getElementById('detailMemberRole').textContent = newMemberData.role;
                        document.getElementById('detailMemberEmail').textContent = newMemberData.email;
                        document.getElementById('detailMemberPhone').textContent = newMemberData.phone;
                        document.getElementById('detailMemberDepartment').textContent = newMemberData.department;
                        document.getElementById('detailMemberBio').textContent = newMemberData.bio;
                        document.getElementById('detailMemberImage').src = newMemberData.image;
                        
                        // Update stats
                        const statValues = document.querySelectorAll('.member-stat-card .stat-value');
                        statValues[0].textContent = newMemberData.stats.years;
                        statValues[1].textContent = newMemberData.stats.projects;
                        statValues[2].textContent = newMemberData.stats.team;
                        
                        // Show modal
                        memberDetailModal.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                    }
                });
            }
            
            // Close modal
            closeTeamMemberModal();
            
            // Show success message
            alert('Шинэ гишүүн амжилттай нэмэгдлээ.');
        });
    }
    
    // Send email button in detail modal
    const sendEmailButton = document.querySelector('.send-email-button');
    
    if (sendEmailButton) {
        sendEmailButton.addEventListener('click', function() {
            const memberName = document.getElementById('detailMemberName').textContent;
            const memberEmail = document.getElementById('detailMemberEmail').textContent;
            
            alert(`${memberName}-д и-мэйл илгээх (${memberEmail})`);
        });
    }
    
    // Edit member button in detail modal
    const editMemberButton = document.querySelector('.edit-member-button');
    
    if (editMemberButton && teamMemberModal && teamMemberForm && modalTitle) {
        editMemberButton.addEventListener('click', function() {
            // Get current member details
            const name = document.getElementById('detailMemberName').textContent;
            const role = document.getElementById('detailMemberRole').textContent;
            const email = document.getElementById('detailMemberEmail').textContent;
            const phone = document.getElementById('detailMemberPhone').textContent;
            const department = document.getElementById('detailMemberDepartment').textContent;
            
            // Fill form with member details
            document.getElementById('memberName').value = name;
            document.getElementById('memberRole').value = role;
            document.getElementById('memberEmail').value = email;
            document.getElementById('memberPhone').value = phone;
            
            // Set department dropdown
            const departmentSelect = document.getElementById('memberDepartment');
            for (let i = 0; i < departmentSelect.options.length; i++) {
                if (departmentSelect.options[i].text === department) {
                    departmentSelect.selectedIndex = i;
                    break;
                }
            }
            
            // Set modal title
            modalTitle.textContent = 'Гишүүний мэдээлэл засах';
            
            // Close detail modal
            closeMemberDetailModal();
            
            // Show edit modal
            teamMemberModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Add hover animation effect to org cards
    const orgCards = document.querySelectorAll('.org-card');
    
    orgCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    });
});