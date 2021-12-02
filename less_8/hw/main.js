// Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let textIdContent = document.getElementById('content');
console.log(`task 1:\n${textIdContent.innerText}`);

// -- отримує текст з блоку з id "rules"
let textIdRules = document.getElementById('rules');
console.log(`task 2:\n${textIdRules.innerText}`);

// -- замініть текст параграфа з id 'content' на будь-який інший
textIdContent.innerText = 'замініть текст параграфа з id \'content\' на будь-який інший'

// -- замініть текст параграфа з id 'rules' на будь-який інший
textIdRules.innerText = 'замініть текст параграфа з id \'rules\' на будь-який інший'

// -- змініть кожному елементу колір фону на червоний
let bodyChildren = document.body.children;
console.log(bodyChildren);
for (const bodyChild of bodyChildren) {
    bodyChild.style.background = 'red';
}
// -- змініть кожному елементу колір тексту на синій
for (const bodyChild of bodyChildren) {
    bodyChild.style.background = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(textIdRules.classList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc_rulesClassAll = document.getElementsByClassName('fc_rules');
console.log(fc_rulesClassAll);
for (const fcRulesClassAllElement of fc_rulesClassAll) {
    fcRulesClassAllElement.style.color = 'red';
}