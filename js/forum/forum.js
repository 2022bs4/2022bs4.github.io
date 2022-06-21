var main = document.querySelector('main');
var content = document.querySelector('#page-content');

var btn1 = document.querySelector('.row-large-btn');
btn1.addEventListener('click', function () {
    main.setAttribute("class", "container-fluid")
})

var btn2 = document.querySelector('.row-cells-btn');
btn2.addEventListener('click', function () {
    main.setAttribute("class", "container-fluid")
    main.classList.add("row-cells")
})
var btn3 = document.querySelector('.row-list-btn');
btn3.addEventListener('click', function () {
    main.setAttribute("class", "container-fluid")
    main.classList.add("row-list")
})
var temp = document.getElementsByTagName("template")[0];
for (var i = 5; i < 20; i++) {
    var clon = temp.content.cloneNode(true);
    content.appendChild(clon);
}

