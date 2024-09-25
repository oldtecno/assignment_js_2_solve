//
getIdItem('donateBtnEfect').addEventListener('click', function (e) {
    getIdItem('DonationSection').classList.remove('hidden');
    getIdItem('header').classList.remove('hidden');
    getIdItem('HistorySection').classList.add('hidden');

    getIdItem('fullMarkup').classList.remove('bg-[#dcdcdc]');
});

getIdItem('histryBtnEfect').addEventListener('click', function (e) {
    getIdItem('DonationSection').classList.add('hidden');
    getIdItem('HistorySection').classList.remove('hidden');
    getIdItem('header').classList.add('hidden');

    getIdItem('donateBtnEfect').classList.add('bg-[#9f9f9f]','hover:bg-[#e0e0e0]');

    getIdItem('fullMarkup').classList.add('bg-[#dcdcdc]')
});
// 


//value Storage
getIdItem('noakhaliDonateBtn').addEventListener('click', function (e) {
    const amount = getInputNumberValue('noakhaliDonateValue');
    localStorage.setItem('amount', amount)  
});
getIdItem('donateFeniBtn').addEventListener('click', function (e) {
    const amount = getInputNumberValue('feniDonateValue');
    localStorage.setItem('amount', amount)  
});
getIdItem('donateQuotaBtn').addEventListener('click', function (e) {
    const amount = getInputNumberValue('quotaDonateValue');
    localStorage.setItem('amount', amount)  
});
//value Storage



// btn1
getIdItem('noakhaliDonateBtn').addEventListener('click' ,function (e) {
    const curentBalance = Number(getIdItem('curentBalance').innerText);
    const donateAmount = getInputNumberValue('noakhaliDonateValue');   
    const reserve = Number(getIdItem('noakhaliReserve').innerText);

    
    if(typeof donateAmount === 'number' && donateAmount <= curentBalance && donateAmount > 0){
        
        const total = (donateAmount + reserve);
        getIdItem('noakhaliReserve').textContent= total;
        const updateCurentBalance = getIdItem('curentBalance').textContent=(curentBalance - donateAmount);//
        getIdItem('histryInbalance').textContent=(curentBalance - donateAmount);

        if (updateCurentBalance < curentBalance) {
            localStorage.setItem('updateCurentBalance', updateCurentBalance);
        };

        getIdItem('histrycurentBalanceForPhone').textContent=(curentBalance - donateAmount);
        getIdItem('curentBalanceForPhone').textContent=(curentBalance - donateAmount);
        getIdItem('noakhaliDonateValue').value='';

        createElements('donateHistryCards', donateAmount, 'Noakhali' );

        getIdItem('SuccessfulAlert').classList.remove('hidden');
        getIdItem('blur').classList.add('blur-sm');
    }
    else{   
        const updateCurentBalance = curentBalance;
        localStorage.setItem('updateCurentBalance', updateCurentBalance);
     
        alert('Opps! Somthing is wrong');
    };
});
//btn1


//bnt2
getIdItem('donateFeniBtn').addEventListener('click' ,function (e) {
    const curentBalance = Number(getIdItem('curentBalance').innerText);
    const donateAmount = getInputNumberValue('feniDonateValue');    
    const reserve = Number(getIdItem('feniReserve').innerText);


    if(typeof donateAmount === 'number' && donateAmount <= curentBalance && donateAmount > 0){

        const total = (donateAmount + reserve);

        getIdItem('feniReserve').textContent= total;
        const updateCurentBalance = getIdItem('curentBalance').textContent=(curentBalance - donateAmount);

        if (updateCurentBalance < curentBalance) {
            localStorage.setItem('updateCurentBalance', updateCurentBalance);
        };

        getIdItem('histryInbalance').textContent=(curentBalance - donateAmount);
        getIdItem('histrycurentBalanceForPhone').textContent=(curentBalance - donateAmount);
        getIdItem('curentBalanceForPhone').textContent=(curentBalance - donateAmount);
        getIdItem('feniDonateValue').value='';

        createElements('donateHistryCards', donateAmount, 'Feni' );

        getIdItem('SuccessfulAlert').classList.remove('hidden');
        getIdItem('blur').classList.add('blur-sm');
    }
    else{
        const updateCurentBalance = curentBalance;
        localStorage.setItem('updateCurentBalance', updateCurentBalance);
        alert('Opps! Somthing is wrong');
    }
});
//bt2


//btn3
getIdItem('donateQuotaBtn').addEventListener('click' ,function (e) {
    const curentBalance = Number(getIdItem('curentBalance').innerText);
    const donateAmount = getInputNumberValue('quotaDonateValue');    
    const reserve = Number(getIdItem('quotaReserve').innerText);


    if(typeof donateAmount === 'number' && donateAmount <= curentBalance && donateAmount > 0){

        const total = (donateAmount + reserve);

        getIdItem('quotaReserve').textContent= total;
        const updateCurentBalance = getIdItem('curentBalance').textContent=(curentBalance - donateAmount);
        
        if (updateCurentBalance < curentBalance) {
            localStorage.setItem('updateCurentBalance', updateCurentBalance);
        };

        getIdItem('histryInbalance').textContent=(curentBalance - donateAmount);
        getIdItem('histrycurentBalanceForPhone').textContent=(curentBalance - donateAmount);
        getIdItem('curentBalanceForPhone').textContent=(curentBalance - donateAmount);
        getIdItem('quotaDonateValue').value='';

        createElements('donateHistryCards', donateAmount, 'Aid for Injured in the Quota Movement' );

        getIdItem('SuccessfulAlert').classList.remove('hidden');
        getIdItem('blur').classList.add('blur-sm');

    }
    else{
        const updateCurentBalance = curentBalance;
        localStorage.setItem('updateCurentBalance', updateCurentBalance);
        alert('Opps! Somthing is wrong');
    }
});
//btn3




// Successful alert
getIdItem('successfulBtn').addEventListener('click', function (e) {
    getIdItem('SuccessfulAlert').classList.add('hidden');
    getIdItem('blur').classList.remove('blur-sm');
});
// Successful alert




// go blog phone
getIdItem('phoneBlog').addEventListener('click',function (e) {
    window.location.href="./ans.html"    
});
// go blog phone


// go hidden blog phone
getIdItem('hiddenPhoneBlog').addEventListener('click',function (e) {
    window.location.href="./ans.html"    
});
// go hidden blog phone


// go blog
getIdItem('blogBtn').addEventListener('click',function (e) {
    window.location.href="./ans.html"    
});
// go blog


// go blog
getIdItem('histryBlogBtn').addEventListener('click', function (e) {
    window.location.href="./ans.html";   
});
// go blog