window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    // Kiểm tra xem vị trí cuộn của trang có lớn hơn 46px không
    if (scrollPosition > 46) {
        navbar.classList.remove('navbar-remove-bg');
    } else {
        navbar.classList.add('navbar-remove-bg'); 
    }
});
