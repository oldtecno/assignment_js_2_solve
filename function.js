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
 

//createElements
function createElements(id, donateAmount, placeName) {

    const div = document.createElement('div');
    div.classList.add('mt-5', 'p-5', 'rounded-lg', 'bg-white');
    div.innerHTML=`
                         <h1 class="lg:text-xl font-semibold"> <span class="text-black font-bold">${donateAmount}</span>  Taka is Donated for famine-2024 at <span class="text-black font-bold">${placeName} </span>, Bangladesh</h1>
                         <p class="lg:font-light mt-3 lg:text-start text-center">12/4/2004</p>    
                        `
        getIdItem(id).appendChild(div);

        getIdItem('defouldText').classList.add('hidden')
}
//createElements