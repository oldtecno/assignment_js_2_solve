//normal id get
function getIdItem(id){
    return document.getElementById(id);
};
//normal id get


// home btn
getIdItem('homeBtn').addEventListener('click',function (e) {
    window.location.href="./index.html"   
});
// home btn


// home btn phone
getIdItem('phoneBlogBtn').addEventListener('click',function (e) {
    window.location.href="./index.html"    
});
// home btn phone

 
// block BDT update
    const update = localStorage.getItem('updateCurentBalance');
    const curentBalance = getIdItem('curentBalance').innerText = update;
    const blockBalances = getIdItem('blockBalances').innerText = update;
// // block BDT update


