// Settings page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Settings navigation
    const settingsLinks = document.querySelectorAll('.settings-nav a');
    const settingsSections = document.querySelectorAll('.settings-section');
    
    settingsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active link
            settingsLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            settingsSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
            
            // Scroll to top of section
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Account Form Submission
    const accountForm = document.getElementById('accountForm');
    
    if (accountForm) {
        accountForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate password if changing
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (currentPassword || newPassword || confirmPassword) {
                if (!currentPassword) {
                    alert('Одоогийн нууц үгээ оруулна уу.');
                    return;
                }
                
                if (newPassword !== confirmPassword) {
                    alert('Шинэ нууц үг таарахгүй байна.');
                    return;
                }
                
                if (newPassword.length < 8) {
                    alert('Шинэ нууц үг доод тал нь 8 тэмдэгт байх ёстой.');
                    return;
                }
            }
            
            // If validation passes
            alert('Хэрэглэгчийн мэдээлэл амжилттай шинэчлэгдлээ.');
            
            // Clear password fields
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
        });
    }
    
    // Site Settings Form Submission
    const siteSettingsForm = document.getElementById('siteSettingsForm');
    
    if (siteSettingsForm) {
        siteSettingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Сайтын тохиргоо амжилттай хадгалагдлаа.');
        });
    }
    
    // Notifications Form Submission
    const notificationsForm = document.getElementById('notificationsForm');
    
    if (notificationsForm) {
        notificationsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Мэдэгдлийн тохиргоо амжилттай хадгалагдлаа.');
        });
    }
    
    // Cancel buttons
    const cancelButtons = document.querySelectorAll('.cancel-button');
    
    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const form = this.closest('form');
            
            if (form) {
                // Ask for confirmation
                if (confirm('Өөрчлөлтийг хадгалахгүйгээр буцах уу?')) {
                    if (form.id === 'accountForm') {
                        // Reset account form
                        form.reset();
                        document.getElementById('currentPassword').value = '';
                        document.getElementById('newPassword').value = '';
                        document.getElementById('confirmPassword').value = '';
                    } else {
                        form.reset();
                    }
                }
            }
        });
    });
    
    // Change Photo Button
    const changePhotoButton = document.querySelector('.change-photo-button');
    
    if (changePhotoButton) {
        changePhotoButton.addEventListener('click', function() {
            // Create a file input
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            
            // Trigger click on the file input
            fileInput.click();
            
            // Listen for file selection
            fileInput.addEventListener('change', function() {
                if (this.files && this.files[0]) {
                    // Preview the selected image
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        const profileImage = document.querySelector('.profile-image img');
                        if (profileImage) {
                            profileImage.src = e.target.result;
                        }
                    };
                    
                    reader.readAsDataURL(this.files[0]);
                    
                    alert('Профайл зураг өөрчлөгдлөө. Өөрчлөлтөө хадгалахын тулд "Хадгалах" товчийг дарна уу.');
                }
            });
        });
    }
    
    // Upload Logo/Favicon Buttons
    const uploadButtons = document.querySelectorAll('.upload-button');
    
    uploadButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Create a file input
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            
            // Trigger click on the file input
            fileInput.click();
            
            // Listen for file selection
            fileInput.addEventListener('change', function() {
                if (this.files && this.files[0]) {
                    // Preview the selected image
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        const targetImage = button.previousElementSibling;
                        if (targetImage) {
                            targetImage.src = e.target.result;
                        }
                    };
                    
                    reader.readAsDataURL(this.files[0]);
                    
                    alert('Зураг өөрчлөгдлөө. Өөрчлөлтөө хадгалахын тулд "Хадгалах" товчийг дарна уу.');
                }
            });
        });
    });
    
    // Color pickers for theme
    const primaryColor = document.getElementById('primaryColor');
    const secondaryColor = document.getElementById('secondaryColor');
    
    if (primaryColor) {
        primaryColor.addEventListener('input', function() {
            document.documentElement.style.setProperty('--primary', this.value);
            document.documentElement.style.setProperty('--primary-dark', adjustColor(this.value, -20));
            document.documentElement.style.setProperty('--primary-light', adjustColor(this.value, 20));
        });
    }
    
    if (secondaryColor) {
        secondaryColor.addEventListener('input', function() {
            document.documentElement.style.setProperty('--secondary', this.value);
        });
    }
    
    // Helper function to adjust color brightness
    function adjustColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => {
            const colorVal = Math.min(255, Math.max(0, parseInt(color, 16) + amount));
            return colorVal.toString(16).padStart(2, '0');
        });
    }
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkMode');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.style.setProperty('--background', '#1a1a1a');
                document.documentElement.style.setProperty('--card-bg', '#2a2a2a');
                document.documentElement.style.setProperty('--text-primary', '#f0f0f0');
                document.documentElement.style.setProperty('--text-secondary', '#b0b0b0');
                document.documentElement.style.setProperty('--text-light', '#808080');
                document.documentElement.style.setProperty('--border', '#404040');
            } else {
                document.documentElement.style.setProperty('--background', '#f4f6f9');
                document.documentElement.style.setProperty('--card-bg', '#ffffff');
                document.documentElement.style.setProperty('--text-primary', '#333333');
                document.documentElement.style.setProperty('--text-secondary', '#666666');
                document.documentElement.style.setProperty('--text-light', '#888888');
                document.documentElement.style.setProperty('--border', '#e0e0e0');
            }
        });
    }
    
    // Two-factor authentication toggle
    const twoFactorToggle = document.getElementById('twoFactorAuth');
    
    if (twoFactorToggle) {
        twoFactorToggle.addEventListener('change', function() {
            if (this.checked) {
                alert('Хоёр үе шаттай баталгаажуулалт идэвхжүүлэхэд QR кодыг уншуулах шаардлагатай.');
                // In a real application, this would show a QR code setup
            }
        });
    }
});