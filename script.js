const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
    const trigerBtn = window.innerHeight /5*4;
    boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
        if(boxTop < trigerBtn){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
});
