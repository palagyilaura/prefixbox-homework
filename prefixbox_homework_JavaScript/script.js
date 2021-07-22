const checkbox = document.querySelector(".sale");
const products = document.querySelector(".products");
const productsData = document.getElementsByClassName("product-data");

function showSale() {

    if (checkbox.checked == true) {
        // console.log("checked");
        for (let i in productsData) {

            if (productsData[i].children.length !== 3) {
                productsData[i].parentElement.setAttribute("style", "display: none");

            }
        }
    }
    else {
        // console.log("unchecked");

        for (let i in productsData) {
            if (productsData[i].children.length !== 3) {
                productsData[i].parentElement.setAttribute("style", "display: null");

            }
        }
    }

}

function sortProducts() {
    const selectBox = document.querySelector(".order");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;

    switch (selectedValue) {
        //Ár szerint növekvő
        case "0":
            sortPrice();
            break;
        //Ár szerint csökkenő
        case "1":
            sortPriceReverse();
            break;
        //ABC növekvő
        case "2":
            sortAlph();
            break;
        //ABC csökkenő
        case "3":
            sortAlphReverse();
            break;
        default:
            sortPrice();
    }
}

function sortAlph() {

    [].slice.call(products.children)
        .sort(function (a, b) {
            return a.innerHTML == b.innerHTML
                ? 0
                : (getName(a) > getName(b) ? 1 : -1);
        }).forEach(function (ele) {
            products.appendChild(ele);
        });
}
function sortAlphReverse() {

    [].slice.call(products.children)
        .sort(function (a, b) {
            return a.innerHTML == b.innerHTML
                ? 0
                : (getName(a) < getName(b) ? 1 : -1);
        }).forEach(function (ele) {
            products.appendChild(ele);
        });
}

function sortPrice() {

    [].slice.call(products.children)
        .sort(function (a, b) {
            return getPrice(a) - getPrice(b);
        }).forEach(function (ele) {
            products.appendChild(ele);
        });

}

function sortPriceReverse() {

    [].slice.call(products.children)
        .sort(function (a, b) {
            return getPrice(b) - getPrice(a);
        }).forEach(function (ele) {
            products.appendChild(ele);
        });
}

function getName(ele) {
    return String(ele
        .querySelector('.product-name')
        .textContent);
}

function getPrice(ele) {
    return Number(ele
        .querySelector('.product-price')
        .textContent.
        replace(/[^0-9.-]+/g, "").split('.').join(''));
}