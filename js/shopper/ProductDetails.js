
$(document).ready(function(){
    GameSmapleIntroduce();
    BtnFunction()
    adClear()
})

window.onload= function(){
    //選單
    Setnavbar("#CommodityDetials");
    //
    MainScreen("#CommodityDetials")
    //
    CloneGame()
    //
    GameSlideshow()
    //
    RecommendTemplate()
    //
    SysClone("Min-Cnfigure","最低配備 :")
    SysClone("Suggest-Configure","建議配置 :")
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



//圖文簡介
function GameSmapleIntroduce(){
    $('h2').text('Crusader KingIII')
    $(".Game-Introduce").find('img').attr("src","https://cdn.cloudflare.steamstatic.com/steam/apps/1158310/header.jpg?t=1653385552")
    $(".Game-Introduce").find('p').text('愛戀、爭鬥、計謀並成就偉大。在《Crusader Kings III》這款大型戰略遊戲裡決定您的貴族家族的命運。在這個豐富、宏偉的中世紀模擬遊戲中，引領您的王朝血脈，死亡只是開始。')
}
//金錢加載
function BtnFunction(){
    let GamePrice = `<p class="m-0 pl-0">售價: NT$ ${9527}</p>`;
    $('.Game-Price').append(GamePrice)
}

// 以下為幻燈片動態
function GameSlideshow(){
    const urlGame = "/json/shopper/text.json";
    fetch(urlGame)
        .then(response=>response.json())
        .then(result=>{
            GameArray=result
            setSliders(result)
            InitializeSwiper()
        })
    let mainphoto,thumbs
    function setSliders(namesArray) {
        mainphoto = $("#mainphoto");
        thumbs = $("#thumbs")    
        namesArray.forEach((item,index)=>{
            let slideDiv = $("<div></div>")
            slideDiv.addClass("swiper-slide")
            let img= $("<img>");
            img.attr("src",`${item}`)
            img.attr("class",'w-100 ')
            slideDiv.append(img);
            let $clon1 = slideDiv.clone();
            let $clon2 = slideDiv.clone();
            mainphoto.append($clon1);
            thumbs.append($clon2);
        })
    }
    function InitializeSwiper() {
        var swiper = new Swiper(".mySwiper2", {
            spaceBetween: 4,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            autoHeight: true, 
        });
        var swiper2 = new Swiper(".mySwiper1", {
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
            autoHeight: true, 
        })
    }
}

//詳細圖文介紹區之動態產生
function CloneGame(){
    let GameDatails = document.querySelector('.Game-Datails')
    let GameClone = GamePictureText.content.cloneNode(true)
    GameClone.querySelector('img').src="https://cdn.cloudflare.steamstatic.com/steam/apps/1158310/extras/2s.gif?t=1653385552"
    GameClone.querySelector('h4').innerText ='血脈開始'
    GameClone.querySelector('p').innerHTML =' 仔細研究中世紀，掌握您的家族並擴展您的王朝。</br>始於西元 867 或 1066 年，獲得領土、頭銜與附庸國，鞏固配得上您皇室血脈的王國。無論您的離世是否在計劃之內，都不影響大局，您的血統會由新的可遊玩角色所繼承。'
    GameDatails.append(GameClone);
}

// 配置
function SysClone(configure,configureText){
    let Min_Cnfigure = document.querySelector(`.${configure}`)
    let MinClone = GameSystem.content.cloneNode(true)
    let System_box = MinClone.querySelector('.System-box')
    MinClone.querySelector('span').innerText=configureText
    MinClone.querySelector('.bit').innerText='需要 64 位元的處理器及作業系統'
    MinClone.querySelector('.Stytem').innerText= "Windows® 8.1 64 bit / Windows® 10 Home 64 bit"
    MinClone.querySelector('.Processor').innerText ="Intel® Core™ i3-2120 / AMD® FX 6350"
    MinClone.querySelector('.Memory').innerText =" 6 GB 記憶體"
    MinClone.querySelector('.GraphicsCard').innerText=' Nvidia® GeForce™ GTX 660 (2GB) / AMD® Radeon™ HD 7870 (2GB) / Intel® Iris Pro™ 580 / Intel® Iris® Plus G7 / AMD® Radeon™ Vega 11'
    MinClone.querySelector('.Storage').innerText =" 8 GB 可用空間"
    Min_Cnfigure.append(MinClone)
    System_box.classList.add("Template-box")
    return MinClone
}

//推薦Template
function RecommendTemplate(){
    let box = document.querySelector('.Recommend')
    for(let i =0 ;i<2;i++){
        let boxClone = Shopping_Recommend.content.cloneNode(true)
        box.append(boxClone)
    }
}
//廣告清除
function adClear(){
    $('.Video-Clear').click(function(){
        $('.Video-Area').hide()
    })
}
//自行添加調整視窗
function MainScreen(Main){
    let MainScreen = document.querySelector(Main)
    let footer =document.querySelector('footer')
    hiddenbtn.addEventListener('click',function(){
        MainScreen.classList.add('MainScreen')
        footer.classList.add("MainScreen")
    })
    sidenavbaropen.addEventListener('click',function(){
        MainScreen.classList.remove('MainScreen')
        footer.classList.remove('MainScreen')
    })
}

