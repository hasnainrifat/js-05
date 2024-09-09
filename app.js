let section = document.querySelector('section');
let a = 0;
window.addEventListener('scroll' ,function(){
    console.log("a:" + "/" + 'b:' + this.window.scrollY)
    if( a > this.window.scrollY){
        section.classList.add('active');

    }else{
        section.classList.remove('active');
    }
    a = this.window.scrollY;
}
)


let body = document.querySelector('body');
let scrollPage = document.querySelector('.scroll');
let sub = document.querySelector('.sub');
window.addEventListener('scroll' , function(){
    let totalHeight = body.clientHeight;
    let scrollToTop = this.window.scrollY;
    let innerHeight = this.window.innerHeight;
    let countHeight = totalHeight - innerHeight;
    let rslt = Math.round((100 / countHeight ) * scrollToTop);
    scrollPage.style.background = `conic-gradient(red, red ${rslt}%, green ${rslt}%)`;
    sub.innerHTML = rslt;

}
)