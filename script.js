function generate() {
    const number = document.querySelector("#number")
    const amount = document.querySelector("#amount")
    const element = document.querySelector("#ird-invoice")
    element.innerHTML = `<div>IRD Invoice<br>The account number is ${number.value}<br>The amount due is ${amount.value}</div>`;
}