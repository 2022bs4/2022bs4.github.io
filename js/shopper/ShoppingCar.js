$(document).ready(function(){
    $('.DelAllItem').click(function(){
        $('.Spopping-Select').html(' ')
        $('.Shpopping-Price').text('')
    })
})

window.onload=function(){
    for(let i = 0 ;i<4 ;i++)
    {
        ShoppingTemplate()

    }
    Setnavbar("#ShoppingCart");
    MainScreen("#ShoppingCart")
}
//選單
//全域
let searchbtn = document.querySelector(".search-form-btn");
let hiddenbtn = document.querySelector(".header-box-nav-content-collapse");
let sidenavbar = document.querySelector(".header-box-nav-content");
let logo = document.querySelector(".logo");
let sidenavbaropen = document.querySelector(".sidebar-toggler");
//傳入內容區塊做畫面效果
//傳入內容區塊做畫面效果
function Setnavbar(content) {
    Addtoggle();//添加選單開關
    AddNavClick();//添加選單的click效果

    function Addtoggle() {
        const toggler = document.querySelector('.nav-toggler');
        const navbar = document.querySelector('.header-box');
        toggler.addEventListener("click", () => {
            navbar.classList.toggle("open");
            document.querySelector(content).classList.toggle("open-section");
        })
    }
    function AddNavClick() {
        const list = document.querySelectorAll('.header-box-nav-content-tours>li');
        function ActiveLink() {
            for (var item of list) {
                item.classList.remove("active");
                this.classList.add("active");
            }
        }
        for (var item of list) {
            item.addEventListener("click", ActiveLink);
        }
    }
}
//input點擊後射出來
searchbtn.addEventListener('click',function(){
    document.querySelector(".form-control").classList.toggle("form-control-open")
    logo.classList.toggle("logomove")
});
//隱藏左邊導覽列
hiddenbtn.addEventListener('click',function(){
    sidenavbar.classList.toggle("closenav");
    document.querySelector(".nav-toggler").style = "display:none";
    sidenavbaropen.style="display:flex";

})
//讓左邊導覽列顯示出來
sidenavbaropen.addEventListener('click',function(){
    sidenavbar.classList.toggle("closenav");
    sidenavbaropen.style="visibility: hidden;";
    document.querySelector(".nav-toggler").style = "display:flex";
});


// 之後要動態產生
function ShoppingTemplate(){
    let Spopping_Select = document.querySelector('.Spopping-Select')
    let boxClone1 = Spopping_Select_Template.content.cloneNode(true)
    let item = boxClone1.querySelector('.Game-Shopping-Item')
    let boxImg = boxClone1.querySelector('img')
    let boxText = boxClone1.querySelector('.Game-Price')
    let btn = boxClone1.querySelector('button');
    btn.addEventListener('click',function(){
        Spopping_Select.removeChild(item)
    })
    boxText.classList.add('Game-Price')
    boxImg.classList.add("First_Template_img")
    Spopping_Select.append(boxClone1)
    // return boxClone1
}
//推薦Template
function RecommendTemplate(){
    let pic = ["https://cdn.cloudflare.steamstatic.com/steam/apps/597180/capsule_184x69_tchinese.jpg?t=1654230486","https://cdn.cloudflare.steamstatic.com/steam/apps/597180/capsule_184x69_tchinese.jpg?t=1654230486"]
    let Recommend_Box = document.querySelector('.Shopping-Recommend')
        pic.forEach((item)=>{
            let boxClone = Shopping_Recommend.content.cloneNode(true)
            boxClone.querySelector('img').src=item
            Recommend_Box.append(boxClone)
        })
}

//自行添加調整視窗
function MainScreen(Main){
    let MainScreen = document.querySelector(Main)
    let footer =document.querySelector('footer')
    hiddenbtn.addEventListener('click',function(){
        MainScreen.classList.toggle('MainScreen')
        footer.classList.add("MainScreen")
    })
    sidenavbaropen.addEventListener('click',function(){
        MainScreen.classList.remove('MainScreen')
        footer.classList.remove('MainScreen')
    })
}