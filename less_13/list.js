let goodsDiv = document.getElementsByClassName(`goods`)[0];
let goodsData = JSON.parse(localStorage.getItem(`goods`));
let deleteAllBtn = document.createElement(`button`);
deleteAllBtn.innerText = `delete all`
goodsDiv.append(deleteAllBtn)

goodsData.map((value, index) => {
    let divItem = document.createElement(`div`);
    let deleteBtn = document.createElement(`button`);

    deleteBtn.innerText = `delete`;


    divItem.className = 'item'
    divItem.innerHTML =
        `<p>${value.title}<p/> <p>${value.quantity}<p/> <p>${value.cost}<p/> <img src=${value.img} alt="">`;

    deleteBtn.onclick = () => {
        goodsData.splice(index, 1)
        localStorage.setItem('goods', JSON.stringify(goodsData))
        location.reload()
    }

    divItem.append(deleteBtn)
    goodsDiv.append(divItem);
})

deleteAllBtn.onclick = () => {
    localStorage.setItem('goods', JSON.stringify([]))
    location.reload()
}



