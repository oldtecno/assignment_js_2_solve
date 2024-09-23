

// normal id get
function getIdItem(id){
    return document.getElementById(id);
};
// normal id get



// normal class get
function getClassItem(clas) {
    return document.getElementsByClassName(clas);
};
// normal class get




// inputValueInNumber
function getInputNumberValue(id) {
    
    const inputValue = document.getElementById(id).value;
    return Number(inputValue);
     
 };
 // inputValueInNumber
 



 // hiddAllShow1
function hiddAllShow1(classs, num) {
    const className = getClassItem(classs);

    for (let i = 0; i < className.length; i++) {
        className[i].classList.add('hidden');
    };
    
    className[num].classList.remove('hidden');
};
// hiddAllShow1
