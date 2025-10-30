'use strict'
document.addEventListener('DOMContentLoaded', () => {

    const initCopyrightYear = () => {
        const yearElement = document.getElementById('current-year')
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear()
        }
    }

    const initMobileMenu = () => {
        const menuIcon = document.querySelector('#menu-icon')
        const navbar = document.querySelector('.navbar')
        const navLinks = document.querySelectorAll('header nav a')

        if (!menuIcon || !navbar || !navLinks) return

        menuIcon.onclick = () => {
            menuIcon.classList.toggle('fa-times')
            navbar.classList.toggle('active')
        }

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('fa-times')
                navbar.classList.remove('active')
            })
        })
    }

    const initScrollSpy = () => {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('header nav a')
        const header = document.querySelector('header')

        if (!sections.length || !navLinks.length || !header) return

        window.onscroll = () => {
            header.classList.toggle('sticky', window.scrollY > 100)

            const scrollY = window.scrollY
            let currentSectionId = ''

            sections.forEach(sec => {
                const offset = sec.offsetTop - 150
                const height = sec.offsetHeight
                const id = sec.getAttribute('id')

                if (scrollY >= offset && scrollY < offset + height) {
                    currentSectionId = id
                }
            })

            navLinks.forEach(link => {
                link.classList.remove('active')
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active')
                }
            })
        }
    }

    initCopyrightYear()
    initMobileMenu()
    initScrollSpy()

})