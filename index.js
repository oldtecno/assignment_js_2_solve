getIdItem('donateBtnEfect').addEventListener('click', function (e) {
    getIdItem('DonationSection').classList.remove('hidden');
    getIdItem('header').classList.remove('hidden');
    getIdItem('HistorySection').classList.add('hidden');
});

getIdItem('histryBtnEfect').addEventListener('click', function (e) {
    getIdItem('DonationSection').classList.add('hidden');
    getIdItem('HistorySection').classList.remove('hidden');
    getIdItem('header').classList.add('hidden');

    getIdItem('donateBtnEfect').classList.add('bg-[#9f9f9f]','hover:bg-[#e0e0e0]');
});





getIdItem('noakhaliDonateBtn').addEventListener('click' ,function (e) {
    const curentBalance = Number(getIdItem('curentBalance').innerText);
    const donateAmount = getInputNumberValue('noakhaliDonateValue');    
    const reserve = Number(getIdItem('noakhaliReserve').innerText);


    if(typeof donateAmount === 'number' && donateAmount <= curentBalance && donateAmount > 0){

        const total = (donateAmount + reserve);

        getIdItem('noakhaliReserve').textContent= total;
        getIdItem('curentBalance').textContent=(curentBalance - donateAmount);
        getIdItem('histryInbalance').textContent=(curentBalance - donateAmount);
        getIdItem('histrycurentBalanceForPhone').textContent=(curentBalance - donateAmount);
        getIdItem('curentBalanceForPhone').textContent=(curentBalance - donateAmount);
        getIdItem('noakhaliDonateValue').value='';
    }
    else{
        alert('Opps! Somthing is wrong');
    }
});

getIdItem('donateFeniBtn').addEventListener('click' ,function (e) {
    const curentBalance = Number(getIdItem('curentBalance').innerText);
    const donateAmount = getInputNumberValue('feniDonateValue');    
    const reserve = Number(getIdItem('feniReserve').innerText);


    if(typeof donateAmount === 'number' && donateAmount <= curentBalance && donateAmount > 0){

        const total = (donateAmount + reserve);

        getIdItem('feniReserve').textContent= total;
        getIdItem('curentBalance').textContent=(curentBalance - donateAmount);
        getIdItem('histryInbalance').textContent=(curentBalance - donateAmount);
        getIdItem('histrycurentBalanceForPhone').textContent=(curentBalance - donateAmount);
        getIdItem('curentBalanceForPhone').textContent=(curentBalance - donateAmount);
        getIdItem('feniDonateValue').value='';
    }
    else{
        alert('Opps! Somthing is wrong');
    }
});

getIdItem('donateQuotaBtn').addEventListener('click' ,function (e) {
    const curentBalance = Number(getIdItem('curentBalance').innerText);
    const donateAmount = getInputNumberValue('quotaDonateValue');    
    const reserve = Number(getIdItem('quotaReserve').innerText);


    if(typeof donateAmount === 'number' && donateAmount <= curentBalance && donateAmount > 0){

        const total = (donateAmount + reserve);

        getIdItem('quotaReserve').textContent= total;
        getIdItem('curentBalance').textContent=(curentBalance - donateAmount);
        getIdItem('histryInbalance').textContent=(curentBalance - donateAmount);
        getIdItem('histrycurentBalanceForPhone').textContent=(curentBalance - donateAmount);
        getIdItem('curentBalanceForPhone').textContent=(curentBalance - donateAmount);
        getIdItem('quotaDonateValue').value='';
    }
    else{
        alert('Opps! Somthing is wrong');
    }
});

