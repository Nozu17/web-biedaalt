// Admin button actions
document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product-card');
        alert('Засах товч дарлаа: ' + product.querySelector('h3').innerText);
        // Та энд өөрийн edit popup эсвэл form-г харуулах код нэмээрэй
    });
});

document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product-card');
        if (confirm('Та ' + product.querySelector('h3').innerText + ' бүтээгдэхүүнийг устгахдаа итгэлтэй байна уу?')) {
            product.remove(); // Устгах
        }
    });
});
