function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    if (isNaN(amountNumber)) {
        amountNumber = 0;

        showSumPrice(price, amountNumber);
    }

    function showSumPrice(price = 1000, amountNumber = 1) {
        let showAmount = document.querySelector("span.show-amount");
        if (amountNumber > 10) {
            alert("Maximum 10 terméket vásárolhatsz!");
        } else if (amountNumber < 1) {
            alert("Minimum 1 terméket kell vásárolnod!");
        } else {
            let amount = amountNumber * price;
            showAmount.innerHTML = amount;
        }
    }
}