// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let elementsWithClass = document.querySelectorAll("[class]")
for (let i = 0; i < elementsWithClass.length; i++) {
    const elementWithClass = elementsWithClass[i];
    console.log(elementWithClass.className.split(" "));
}