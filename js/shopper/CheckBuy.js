let checkbox = document.querySelector('.User-Protocol input')
window.onload=function(){
    Setnavbar("#Check-Buy") 
    // 以下測試用，之後有資料會改用一個function
    ShoppingTemplate()            
    ShoppingTemplate()  
    ShoppingTemplate()            
    ShoppingTemplate()            
    ShoppingTemplate()  
    //以上測試用

    TotalPrice()
    
    checkbox.addEventListener('click',AgreeBuy)  
    MainScreen("#Check-Buy")
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

//之後代資料
function ShoppingTemplate(){
    let Spopping_Select = document.querySelector('.Spopping-Select')
    let boxClone1 = Spopping_Select_Template.content.cloneNode(true)
    let boxImg = boxClone1.querySelector('img')
    let boxText = boxClone1.querySelector('.Game-Price')
    let boxBgC = boxClone1.querySelector('.Game-Item')
    boxBgC.classList.add("Game-Item")
    Spopping_Select.append(boxClone1)
}

//計算總金額，目前先一個框架
function TotalPrice(){
    $('.Totoal-Price').html(`<p class="Sum-Price";>合計 : NT$ ${4000}</p>`)
}
//判別沒有勾選同意不能購買
function AgreeBuy(){
    if(checkbox.checked == true){
        $('.Btn_Buy').removeAttr("disabled")
        $('.Btn_Buy').css("cursor","pointer")
    }
    else{
        $('.Btn_Buy').attr("disabled","disabled")
        $('.Btn_Buy').css("cursor","default")
    }
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