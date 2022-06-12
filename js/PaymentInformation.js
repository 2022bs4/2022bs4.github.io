let MonthData = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",]

let YeatData = [ "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043", "2044", "2045", "2046", "2047"]
//國家json
const CountryUrl = "/Json/Coutnry.json"
//
window.onload = function () {
    Setnavbar("#Payment-Information")
    MainScreen("#Payment-Information")
    VisaSelect(MonthData,YeatData)
    CoutryFetch()
    //


    Check_Buy_Btn= document.querySelector('.Check-Buy-Btn')
    VisaCard = document.querySelectorAll('.Visa-Card')
    Visa_Safety = document.querySelector('#Visa_Safety')
    Month_Input = document.querySelector(".Month-Input")
    Year_Input = document.querySelector(".Year-Input")
    Input_Information = document.querySelectorAll(".Input-Information")
    inputbox = document.querySelectorAll('input')
    Check_Buy_Btn.addEventListener("click",DataInput)
    inputbox.forEach((item,index)=>{
        item.addEventListener("click",function(){
            item.classList.remove("Erro")
            item.setAttribute("placeholder","")
        })
    })
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


function VisaSelect(MonthData,YeatData) {
    MonthData.forEach(item => {
        var MonthSelect = $(`<option class="Month-Input">${item}</option>`)
        $('#Visa_Month').append(MonthSelect)
    })
    YeatData.forEach(item => {
        let YearSelect = $(`<option class="Year-Input">${item}</option>`)
        $('#Visa_Year').append(YearSelect)
    })
    DropDown(`.Month-Input`,`#Visa_Month`,`.Month-Box`)
    DropDown(`.Year-Input`,`#Visa_Year`,`.Year-Box`)
}
function CoutryFetch() {
    fetch(CountryUrl)
        .then(response => response.json())
        .then(items => {
            items.forEach(item => {
                $('#Visa-Countey').append($(`<option class="Country-Input">${item}</option>`))
                DropDown(`.Country-Input`,`#Visa-Countey`,`.Country-Box`)
            })
        })
}
function DropDown(box,select,div){
    $(`${select}`).attr('size','5')
    $(`${box}`).click(function(){
        $(`${select}`).attr('style','display:block')
    })
    $(`${select}`).change(function(){
        var option = this.options[this.selectedIndex];
        $(`${box}`).attr("value",`${option.innerText}`) 
        $(`${select}`).attr('style',"display:none")
    })
    $(`${div}`).mouseleave(function(){
        $(`${select}`).attr('style',"display:none")
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












//
let Check_Buy_Btn
let VisaCard,Visa_Safety
let Month_Input,Year_Input
let Input_Information
let inputbox,VisaNumberPass,VisDatePass,MemberDatePass


//判斷是否能下一步
function DataInput(){
    VisaNumber()
    VisDate()
    MemberDate()
    if(VisaNumberPass===true&&VisDatePass===true&&MemberDatePass===true){
        Check_Buy_Btn.setAttribute("href","/ShoppingCart.html")
    }
    else{
        swal("請輸入正確資料", "", "error", {button: "關閉"})
        
    }
}
//Visa Number
function VisaNumber(){
    VisaCard.forEach((item,idex)=>{
        if(item.value.length==4&&Visa_Safety.value.length==3)
        { 
            VisaNumberPass=true
        }
        if(Visa_Safety.value.length!==3)
        {
            Visa_Safety.classList.add("Erro")
            Visa_Safety.setAttribute("placeholder","輸入錯誤")
            VisaNumberPass=false
        }
        if(item.value.length!==4)
        {
            item.classList.add("Erro")
            item.setAttribute("placeholder","輸入錯誤")
            VisaNumberPass=false

        }
    })

}

//Vis Date
function VisDate(){
    if(Month_Input.value !="" && Year_Input.value !="")
    {
        VisDatePass=true
    }
    if(Month_Input.value=="")
    {
        Month_Input.classList.add("Erro")
        Month_Input.setAttribute("placeholder","輸入錯誤")
        VisDatePass=false

    }
    if(Year_Input.value==""){
        Year_Input.classList.add("Erro")
        Year_Input.setAttribute("placeholder","輸入錯誤")
        VisDatePass=false

    }   
}

//MemberDate
function MemberDate(){
    Input_Information.forEach((item,index)=>{
        if(item.value!=""){
            MemberDatePass=true
        }
        else{
            item.classList.add("Erro")
            item.setAttribute("placeholder","輸入錯誤")
            MemberDatePass=false
        }
    })
}


