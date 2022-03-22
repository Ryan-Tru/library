const addBtn = document.querySelector('.add-btn');
const popUp = document.querySelector('.pop-up-form');



addBtn.addEventListener('click', () => {
    if(popUp.classList.contains('display-form')) {
        popUp.classList.remove('display-form');
    } else {
        popUp.classList.add('display-form');
    }
});