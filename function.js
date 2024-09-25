// normal id get
function getIdItem(id){
    return document.getElementById(id);
};
// normal id get



// // normal class get
// function getClassItem(clas) {
//     return document.getElementsByClassName(clas);
// };
// // normal class get


// inputValueInNumber
function getInputNumberValue(id) {
    
    const inputValue = document.getElementById(id).value;
    return Number(inputValue);
     
 };
 // inputValueInNumber
 

//createElements
function createElements(id, donateAmount, placeName) {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();


    const div = document.createElement('div');
    div.classList.add('mt-5', 'p-5', 'rounded-lg', 'bg-white');
    div.innerHTML=`
                         <h1 class="lg:text-xl font-semibold"> <span class="text-black font-black">${donateAmount}</span>  Taka is Donated for famine-2024 at <span class="text-black font-black">${placeName} </span>, Bangladesh</h1>
                         <div class="flex lg:gap-4 gap-2 items-center"> <p class="lg:font-light mt-3 text-lg lg:text-start text-center">Donation Date: ${date}  <p class="lg:font-light mt-3 text-lg lg:text-start text-center">Donation Time: ${time} </p> </p> </div>   
                        `
        getIdItem(id).appendChild(div);

        getIdItem('defouldText').classList.add('hidden')
}
//createElements

