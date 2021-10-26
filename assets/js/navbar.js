const productsTitle = document.querySelector('.p-title');
const buttons = document.querySelectorAll('.btn');
console.log(buttons);

if (productsTitle) {
    productsTitle.textContent = localStorage.getItem("collection");
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        let collectionId = i;
        localStorage.setItem("collection", buttons[i].textContent);
        console.log(localStorage.getItem("collection"));
    }
}

console.log("js loaded");