// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let bodyChildren = document.body.children;
let arr = [];

console.log(bodyChildren);


function rec(Children) {
    for (const Child of Children) {
        if (Child.classList.value) {
            arr.push(Child.classList.value);
            if (Child.children) {
                for (const c of Child.children) {
                    console.log('aaaaaaa')

                }
            }
        }
    }
}

rec(bodyChildren);

console.log(arr);

