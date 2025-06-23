document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        // Если меню открыто - не выполняем скролл
        if (document.body.classList.contains('no-scroll')) {
            window.scrollTo(0, 0);
            return;
        }
        
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 80) { 
            header.classList.add('scrolled');
            if (scrollTop > lastScrollTop) {
                header.style.top = '-120px'; // Прячем меню
            } else {
                header.style.top = '0'; // Показываем меню
            }
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Кнопка мобильного меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.menu');
    const buttons = document.querySelector('.buttons');
    
    mobileMenuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
        buttons.classList.toggle('active');
        
        // Блокировка/разблокировка скролла
        if (menu.classList.contains('active')) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Закрытие меню при клике на ссылку
    const menuLinks = document.querySelectorAll('.menu-item a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            buttons.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    //Крутитца крутилка
    var gear = document.getElementById("shapes");
    window.addEventListener("scroll", function() {
    gear.style.transform = "rotate("+window.pageYOffset+"deg)";
    });
    //Оптимизация крутитца крутилка
    window.addEventListener("optimizedScroll", function() {
    ;(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
});
})

});