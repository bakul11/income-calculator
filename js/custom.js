//Handle Calculate Button Function
document.getElementById('calculateBtn').addEventListener('click', function () {
    const foodInput = document.getElementById('foodInput').value;
    const foodNumber = parseInt(foodInput);

    const rentInput = document.getElementById('rentInput').value;
    const rentNumber = parseInt(rentInput);

    const clothInput = document.getElementById('clothInput').value;
    const clothNumber = parseInt(clothInput);

    if (foodNumber > 0 && rentNumber > 0 && clothNumber > 0) {
        //Total Expensive Cost
        const totalCost = foodNumber + rentNumber + clothNumber;
        document.getElementById('totalExpensive').innerText = totalCost;

        // Total Balance
        const incomeInput = document.getElementById('incomeInput').value;
        const incomeNumber = parseInt(incomeInput);
        const totalBalance = document.getElementById('totalBalance');

        const totalBalanceCost = incomeNumber - totalCost;
        totalBalance.innerText = totalBalanceCost;

    }
    else {
        document.getElementById('inputError').innerText = "Please fillUp top all Filed & Give me positive value..Try aggain";
    }
})




//Handle Saving Button
document.getElementById('saveBtn').addEventListener('click', function () {
    const foodInput = document.getElementById('foodInput').value;
    const foodNumber = parseInt(foodInput);

    const rentInput = document.getElementById('rentInput').value;
    const rentNumber = parseInt(rentInput);

    const clothInput = document.getElementById('clothInput').value;
    const clothNumber = parseInt(clothInput);

    //Total Expensive Cost
    const totalCost = foodNumber + rentNumber + clothNumber;
    document.getElementById('totalExpensive').innerText = totalCost;

    // Total Balance
    const incomeInput = document.getElementById('incomeInput').value;
    const incomeNumber = parseInt(incomeInput);
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceCost = incomeNumber - totalCost;
    totalBalance.innerText = totalBalanceCost;

    const saveInput = document.getElementById('saveInput').value;
    const savingNumber = parseInt(saveInput);
    const incomeValue = document.getElementById('incomeInput').value;
    const incomeNum = parseInt(incomeValue);

    //Saving Amount
    const savingCost = (incomeNum * savingNumber) / 100;
    document.getElementById('savingAmount').innerText = savingCost;


    //Set Final Balance
    const finalTotalBalance = totalBalanceCost - savingCost;
    document.getElementById('remainingBalance').innerText = finalTotalBalance;


})