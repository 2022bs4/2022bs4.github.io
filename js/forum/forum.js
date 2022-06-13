var row = document.querySelector('#forum');
var rows = document.querySelector('.page-content');

var btn1 = document.querySelector('.row-cells');
btn1.addEventListener('click', function () {
    row.setAttribute("class", "container-fluid")
})

var btn2 = document.querySelector('.row-cells-dense');
btn2.addEventListener('click', function () {
    row.setAttribute("class", "container-fluid")

    row.classList.add("row-dense")
})
var btn3 = document.querySelector('.row-list');
btn3.addEventListener('click', function () {
    row.setAttribute("class", "container-fluid")

    row.classList.add("row-list")
})
var btn4 = document.querySelector('.row-table-list');
btn4.addEventListener('click', function () {
    row.setAttribute("class", "container-fluid")
    row.classList.add("row-table-list")
})
var temp = document.getElementsByTagName("template")[0];
for(var i=5;i<20;i++){
    var clon = temp.content.cloneNode(true);
    rows.appendChild(clon);
}
