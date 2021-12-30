let goods = document.forms.goods
let title = document.goods.title
let quantity = document.goods.quantity
let cost = document.goods.cost
let img = document.goods.img
let errorDiv = document.getElementsByClassName(`error`)[0];
errorDiv.style.color = `red`

let goodsArr = JSON.parse(localStorage.getItem('goods')) || []
goods.onsubmit = (e) => {
    e.preventDefault()
    if (title.value && quantity.value && cost.value && img.value !== '') {
        let goodItem = {}
        goodItem = {
            title: title.value,
            quantity: quantity.value,
            cost: cost.value,
            img: img.value,
        }
        goodsArr.push(goodItem)
        localStorage.setItem('goods', JSON.stringify(goodsArr))
        title.value = ''
        quantity.value = ''
        cost.value = ''
        img.value = ''
    } else {
        errorDiv.innerText = `не всі поля заповнені`
    }
}