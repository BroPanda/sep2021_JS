// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

// let form1 = document.createElement('form');
// let inpName = document.createElement('input');
// let inpAge = document.createElement('input');
// let submit = document.createElement('button');
//
// inpName.type = 'text';
// inpAge.type = 'number';
// submit.innerText = 'submit'
//
// form1.append(inpName, inpAge, submit)
// document.body.append(form1)
//
// submit.onclick = () => {
//     let user = {
//         name: inpName.value,
//         age: inpAge.value
//     }
//     localStorage.setItem(`user`, JSON.stringify(user));
// }


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let model = document.forms.carForm.model;
// let type = document.forms.carForm.type;
// let volume = document.forms.carForm.volume;
// let btn = document.getElementById('btn');
//
// btn.onclick = () => {
//     let newArr = JSON.parse(localStorage.getItem(item)) || [];
//
//     newArr.push({model: model.value,type: type.value,volume: volume.value})
//     localStorage.setItem(`car`, JSON.stringify(newArr));
// }



