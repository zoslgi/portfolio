/* Open Index */
function openIndex() {
    window.location.href = '/portfolio/home.html';
}

/* Onload Html */
var main   = "";
var conCnt = 0;
var itsCnt = 1;
function onloadHtml(x) {
    main   = x;
    conCnt = document.getElementsByClassName('content').length;
    document.getElementById(x+itsCnt).style.display = "block";  
    moveWheel();
}

/* Move Content */
function moveSlide(x) {
    document.getElementById(main+itsCnt).style.display = "none";
    itsCnt = itsCnt + Number(x)
    document.getElementById(main+itsCnt).style.display = "block";

    (itsCnt != conCnt) ? document.getElementById('rMove').style.display = "block" : document.getElementById('rMove').style.display = "none";
    (itsCnt != 1) ? document.getElementById('lMove').style.display = "block" : document.getElementById('lMove').style.display = "none";
}

/* Move Wheel */
function moveWheel() {
    window.addEventListener('mousewheel', function(delta){
        var wheel = delta.wheelDelta;
        if(wheel > 0 && (itsCnt) == 1) return false;
        if(wheel < 0 && (itsCnt) == conCnt) return false;
   
        document.getElementById(main+itsCnt).style.display = "none";
        (wheel > 0) ? itsCnt-- : itsCnt++;
        document.getElementById(main+itsCnt).style.display = "block";
        
        (itsCnt != conCnt) ? document.getElementById('rMove').style.display = "block" : document.getElementById('rMove').style.display = "none";
        (itsCnt != 1) ? document.getElementById('lMove').style.display = "block" : document.getElementById('lMove').style.display = "none";
    });
}