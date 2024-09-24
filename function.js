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
    const day = new Date().getDate();
    let mongth = new Date().getMonth();
    mongth+=1;
    const years = new Date().getFullYear();
    const hours = new Date().getHours();
    const minit = new Date().getMinutes();

    const div = document.createElement('div');
    div.classList.add('mt-5', 'p-5', 'rounded-lg', 'bg-white');
    div.innerHTML=`
                         <h1 class="lg:text-xl font-semibold"> <span class="text-black font-bold">${donateAmount}</span>  Taka is Donated for famine-2024 at <span class="text-black font-bold">${placeName} </span>, Bangladesh</h1>
                         <div class="flex lg:gap-4 gap-2 items-center"> <p class="lg:font-light mt-3 text-lg lg:text-start text-center"> ${day}/${mongth}/${years}  <p class="lg:font-light mt-3 text-lg lg:text-start text-center"> Time: ${hours}:${minit} </p> </p> </div>   
                        `
        getIdItem(id).appendChild(div);

        getIdItem('defouldText').classList.add('hidden')
}
//createElements