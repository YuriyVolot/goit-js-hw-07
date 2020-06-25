const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listReference = document.querySelector('#ingredients');

function creatElement(arr) {
    let itemsArr = [];
    arr.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemsArr.push(listItem);
    });
    return listReference.prepend(...itemsArr);
}
creatElement(ingredients);
