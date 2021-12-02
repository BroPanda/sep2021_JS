// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let bodyChildren = document.body.children;
let arr = [];

console.log(bodyChildren);


function rec(Children) {
    for (const Child of Children) {
        if (Child.className) {
            arr.push(Child.className);
            if (Child.children) {
                rec(Child.children)
            }
        }
    }
}

rec(bodyChildren);

console.log(arr);

