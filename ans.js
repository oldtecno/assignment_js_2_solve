function getIdItem(id){
    return document.getElementById(id);
};

getIdItem('homeBtn').addEventListener('click',function (e) {
    window.location.href="./index.html"    
});