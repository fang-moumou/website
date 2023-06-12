        // 导航块js
        const nav = document.querySelector('.nav')
        window.addEventListener('scroll', fixNav)

        function fixNav() {
            if (window.scrollY > nav.offsetHeight + 150) {
                nav.classList.add('active')
            } else {
                nav.classList.remove('active')
            }
        }
        // 底部评价块js
            const ratings = document.querySelectorAll('.rating')
            const ratingsContainer = document.querySelector('.ratings-container')
            const sendBtn = document.querySelector('#send')
            const panel = document.querySelector('#panel')
            let selectedRating = 'Satisfied'

            ratingsContainer.addEventListener('click', (e) => {
                if (e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
                    removeActive()
                    e.target.parentNode.classList.add('active')
                    selectedRating = e.target.nextElementSibling.innerHTML
                } else if (
                    e.target.parentNode.classList.contains('rating') &&
                    e.target.previousSibling &&
                    e.target.previousElementSibling.nodeName === 'IMG'
                ) {
                    removeActive()
                    e.target.parentNode.classList.add('active')
                    selectedRating = e.target.innerHTML
                }

            })

            sendBtn.addEventListener('click', (e) => {
                panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
`
            })

            function removeActive() {
                for (let i = 0; i < ratings.length; i++) {
                    ratings[i].classList.remove('active')
                }
            }
        // 返回顶部显示js
        const backTop=document.querySelector('.backTop')
        if(scrollTop>=500){
            backTop.style.display="block"
        }else if(scrollTop<500){
            backTop.style.display="none"
        }
