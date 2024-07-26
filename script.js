    document.addEventListener('DOMContentLoaded', function () {
        // Dropdown Menu
        const dropdownToggle = document.getElementById('dropdown-toggle');
        const dropdownMenu = document.getElementById('dropdown-menu');

        dropdownToggle.addEventListener('click', function (e) {
            e.preventDefault();
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Fechar o menu se clicar fora dele
        window.addEventListener('click', function (e) {
            if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.style.display = 'none';
            }
        });

        // Fechar o menu ao clicar em um item
        const dropdownItems = dropdownMenu.querySelectorAll('a');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function () {
                dropdownMenu.style.display = 'none';
            });
        });

        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Scroll to Top Button
        const scrollToTopButton = document.getElementById('scrollToTop');

        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });
        scrollToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
        scrollToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Desativa o menu de contexto e outras ações
        document.body.addEventListener('contextmenu', function (e) {
            e.preventDefault(); // Desativa o menu de contexto (botão direito do mouse)
        });

        document.body.addEventListener('copy', function (e) {
            e.preventDefault(); // Desativa a cópia
        });

        document.body.addEventListener('cut', function (e) {
            e.preventDefault(); // Desativa o recorte
        });

        document.body.addEventListener('paste', function (e) {
            e.preventDefault(); // Desativa a colagem
        });
    });
