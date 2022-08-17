fetch("https://nbu.uz/uz/exchange-rates/json/")
.then(res => res.json())
.then(data => renderMony(data));

const elChoose = document.querySelector(".choose");
const elTemplate = document.querySelector("#template").content;

function renderMony(array) {
    const elFragment = document.createDocumentFragment();

    for (const item of array) {
        const elTemplateClone = elTemplate.cloneNode(true);

        elTemplateClone.querySelector(".mony__title").textContent = item.title;
        elTemplateClone.querySelector(".mony__name").textContent = item.cb_price;
        elTemplateClone.querySelector(".mony__data").textContent = item.date;
        elFragment.appendChild(elTemplateClone);
    }
    elChoose.appendChild(elFragment);
}