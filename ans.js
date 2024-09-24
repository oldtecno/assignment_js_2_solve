//normal id get
function getIdItem(id){
    return document.getElementById(id);
};
//normal id get


// block btn
getIdItem('homeBtn').addEventListener('click',function (e) {
    window.location.href="./index.html"    
});
// block btn

// block btn hidden
getIdItem('phoneBlogBtn').addEventListener('click',function (e) {
    window.location.href="./index.html"    
});


// block btn hidden
const valueitems = getIdItem('curentBalance');
const value = Number(valueitems.innerText);
const amount = Number(localStorage.getItem('amount'));
const ans = value - amount
valueitems.innerText= ans;
// block btn hidden


const blockBalances = Number(getIdItem('blockBalances').innerHTML);
const blockBalancesvalu = Number(localStorage.getItem('amount'));
blockBalances.innerHTML=blockBalances-blockBalancesvalu;
console.log(blockBalances.innerHTML=blockBalances-blockBalancesvalu);

