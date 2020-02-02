/* Open Index */
function openIndex() {
    window.location.href = '/portfolio/home.html';
}

/* Include Header */
/* Show First Content */
function includeHtml() {
    /* Content */
    showContent(document);
    /* wheel Event */
    moveWheel(document);

    return;
}

/* Content */
var cnt     = 0;
var slide   = "";
function showContent() {
    slide = document.getElementsByClassName('slide');
    if(slide.length =="0") return;
    slide[cnt].style.display = "block";
}

/* Move Slide */
function moveSlide(x) {
    if(slide.length =="0") return;
    
    cnt += Number(x); 
    if(cnt > slide.length-1) cnt = 0;
    if(cnt < 0) cnt = slide.length-1;

    for(var i=0; i<slide.length; i++) { slide[i].style.display = "none"; }
    slide[cnt].style.display = "block";
}

/* Move koreEduPopup */
function popUpCuk() {
    window.open('http://grad.cuk.edu/index.do');
}

/* Move Potfolio */
function popUpPo() {
    window.open('http://hongsi.x-y.net/2017_ui6/zsg_c/');
}

/* wheel Event */
function moveWheel(x) {
    window.addEventListener('mousewheel', function(delta) {
        if(slide.length =="0") return;

        var wheel = delta.wheelDelta;
        (wheel > 0) ? cnt-- : cnt++;

        if(cnt < 0 && wheel > 0) cnt = slide.length-1;
        if(cnt == slide.length && wheel < 0) cnt = 0;

        for(var i=0; i<slide.length; i++) { slide[i].style.display = "none"; }
        slide[cnt].style.display = "block";
    });
}