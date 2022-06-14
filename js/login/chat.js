//忍術:全域變數
let group = document.querySelector(".friend-group")
let friendarray = []
let frienddetails = {}
//用來限制聊天框一次只能產出一個
let bool = true;

//代入好友名單(count)
let count = document.querySelector(".count");
//好友名單
let ul = document.querySelector(".friend-ul")
//用來做拖移改變好友列表寬度
let R = document.querySelector(".resizeR")
//好友列表裡的搜尋好友
let search = document.querySelector(".search")
//狀態欄
let li = document.querySelectorAll(".state-li")
//畫面左右側
let left = document.querySelector(".chat-left")
let right = document.querySelector(".chat-right")
//滑鼠右鍵的自定義選單
let rightmenu = document.getElementById('rightmenu');
//選單內選項
let addtype =document.querySelector(".add-type")
//群組分類
let modal = document.getElementById("myModal");
//modal的取消按紐
let cancel = document.querySelector(".cancel");
//modal的X
let span = document.querySelector(".close");
//modal的選擇好友區塊
let addblock = document.querySelector(".add")
//modal內的確認按鈕
let check = document.querySelector(".check") 
let friendgroup = document.querySelector(".friends")
//載入的時候判斷裝置，決定有什麼樣功能
window.onload = function(){
    Setnavbar(".container-fluid");
    if(screen.width > 768){
        computer()
    }
    else{
        phone()
    }
}
//產出好友清單
function getfriend(img,name,line){
    let clone = friendcard.content.cloneNode(true)
clone.querySelector("img").src = img
clone.querySelector("span").innerText = name
clone.querySelector("p").innerText = line
return clone;
}

//產出modal裡的好友清單
function getfriend2(img,name,line){
let clone = friendcard2.content.cloneNode(true)
clone.querySelector("img").src = img
clone.querySelector("span").innerText = name
clone.querySelector("p").innerText = line
return clone;
}


//控制狀態欄出現/消失
$(".user-span").click(function(){
$(".state-ul").toggle();
})

//改變上線狀態
li.forEach((item,index)=>{
item.addEventListener('click',function(){
    document.querySelector(".line").innerText = item.innerText
    $(".state-ul").toggle();
})
})

//產出對話框
function getcard(src,text){
let clone = message.content.cloneNode(true)
clone.querySelector("img").src = src
clone.querySelector("p").innerText = text
return clone
}

//產出群組分類
function tag(name){
let clone = friendtag.content.cloneNode(true)
clone.querySelector("p").innerText = name.innerText
clone.querySelector("span")
return clone
}

//調整好友列表寬度
R.onmousedown = function(e){
document.onmousemove = function(e1){
    left.style.width = e1.clientX - e.offsetX +"px" 
    search.style.width = e1.clientX - e.offsetX - 80+ "px" 
}
document.onmouseup = function(){
    document.onmousedown = null
    document.onmousemove = null
}
}

// 滑鼠點擊其他位置時隱藏自定義選單
document.onclick = function () {
rightmenu.style.display = 'none';
}
addtype.onclick = function(){
modal.style.display = "block";
}
//產出群組分類
function chooseFriend(){
var li2 = document.querySelectorAll(".friend-li2")
li2.forEach(item=>{
item.onclick = function(){
    var tagname = item.querySelector(".friend-name2")
    addblock.append(tag(tagname))
    item.style.display= 'none'
    var img = item.querySelector(".friend-img2").src
    var name = item.querySelector(".friend-name2").innerHTML
    var line = item.querySelector(".friend-line2").innerHTML
    frienddetails["img"] = img
    frienddetails["name"] = name
    frienddetails["line"] =line
    friendarray.push(frienddetails)
    frienddetails = {}
}
})
}

//桌機能用的功能
function computer(){
AllFriends.forEach((item,index)=>{
    count.innerText = index +1
    let choose = document.querySelector(".choose-friend")
    ul.append(getfriend(item.img,item.name,item.line))
    //modal加入好友
    choose.append(getfriend2(item.img,item.name,item.line))
    chooseFriend()
        check.onclick = function(){
            let k = 0;
            if(groupname.value == ''){
                groupname.style.border = '1px solid #FF0000'
                groupname.value = "請輸入群組名稱"
                groupname.style.color = '#FF0000'
                groupname.onclick = function(){
                    groupnameReset()
                }
            }
            else{
                let span = document.createElement("span")
                span.setAttribute("class","friends-span w-100 pl-2 py-2 d-block user-select-none")
                let group = document.createElement("div")
                group.append(span)
                group.setAttribute("class","friend-group w-100")
                let div = document.createElement("div")
                div.setAttribute("class",`friend-ul w-100`)
                friendarray.forEach(item=>{
                    k++
                    //自定義群組名稱
                    span.innerText = `${groupname.value}(${k})`
                    div.append(getfriend(item.img,item.name,item.line))
                    group.append(div)
                })
                friendarray = []
                friendgroup.append(group)
                modal.style.display = 'none'
                addblock.innerHTML = ' '
                choose.innerHTML = ' '
                groupname.value = ' '
                AllFriends.forEach(item=>{
                    choose.append(getfriend2(item.img,item.name,item.line))
                    chooseFriend()
                })
                let allgrouop = document.querySelectorAll(".friend-group")
                allgrouop.forEach(item=>{
                    item.style.cursor = 'pointer'
                    let span = item.querySelector(".friends-span")
                    let list = item.querySelector(".friend-ul")
                    span.onclick = function(){
                        $(list).toggle()
                    }
                })
                
            }
        }
            
            //關閉modal的話，復原全部好友
            span.onclick = function() {
                modalReset()
                li2.forEach(item => {
                    item.style.display = 'flex'
                });
                groupnameReset()
            }
            cancel.onclick = function(){
                modalReset()
                li2.forEach(item => {
                    item.style.display = 'flex'
                });
                groupnameReset()
            }
        })
    let friend = document.querySelectorAll(".friend-li")
    friend.forEach((item=>{
        item.setAttribute("draggable",true)
        item.onmousedown = function(e){
            if(e.which == 3){
                //自定義滑鼠右鍵展開的菜單
            item.oncontextmenu = function (e1) { 
                var e1 = e1 || window.event;
                e1.preventDefault();  //阻止系統右鍵選單
                // 顯示自定義的選單調整位置
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;// 獲取垂直滾動條位置
                let scrollLeft =document.documentElement.scrollLeft || document.body.scrollLeft;// 獲取水平滾動條位置
                rightmenu.style.display = 'block';
                rightmenu.style.left = e1.clientX + scrollLeft + 'px';
                rightmenu.style.top = e1.clientY + scrollTop + 'px';
            }

        }
            //滑鼠放開時
            document.ondragend = function(e2){
                //如果將目標拖移至右側，則展開與該目標的對話畫面
                if(e2.clientX > 250 && bool == true){
                    bool = false
                    let img = item.querySelector("img").src
                    let name = item.querySelector(".friend-name").innerText
                    right.append(getcard(img,name))
                    
                    let show = document.querySelector(".show")
                    //點擊X後關閉聊天視窗
                    let close = document.querySelector(".close")
                    close.addEventListener('click',function(){
                        right.innerHTML = " "
                        bool = true
                    })
                    //按下enter鍵後送出對話
                    $("#text").keypress(function(e){
                        if (e.which == 13){
                            let text = document.getElementById("text")
                            let p = document.createElement("p")
                            let div = document.createElement("div")
                            p.setAttribute("class","content px-2 py-2 my-1")
                            p.innerText = text.value
                            text.value = ' '
                            div.append(p)
                            show.append(div)
                        }
                    })
                    //上傳圖片
                    upload.addEventListener('change',function(e){
                        let img = document.createElement("img")
                        var [file] = upload.files
                        if(file){
                            img.style.display = "block"
                            img.style.maxWidth = "100px"
                            img.src = URL.createObjectURL(file)
                            show.append(img)
                        }
                    })
                }
            }
        }
    }))
// })
}
//手機能用的功能
function phone(){
AllFriends.forEach(item=>{
    count.innerText = i +1
    i++
    ul.append(getfriend(item.img,item.name,item.line))
    
})
let friend = document.querySelectorAll(".friend-li")
friend.forEach((item,index)=>{
    item.addEventListener('click',function(){
        LRctrl()
        var img = item.querySelector("img").src
        var name = item.querySelector(".friend-name").innerText
        right.append(getcard(img,name))
        let title = document.querySelector(".message-title")
        title.style.width = '100%'
        let show = document.querySelector(".show")
        //點擊X後關閉聊天視窗
        let close = document.querySelector(".close")
        close.addEventListener('click',function(){
                bool = false
                right.innerHTML = " "
                LRctrl()
            })
        let send = document.querySelector(".input-group-text")
        send.addEventListener('click',function(){
            let text = document.getElementById("text")
            let p = document.createElement("p")
            let div = document.createElement("div")
            p.setAttribute("class","content px-2 py-2 my-1")
            p.innerText = text.value
            text.value = ' '
            div.append(p)
            show.append(div)
        })
        //上傳圖片
        upload.addEventListener('change',function(e){
            let img = document.createElement("img")
            var [file] = upload.files
            if(file){
                img.style.display = "block"
                img.style.maxWidth = "100px"
                img.src = URL.createObjectURL(file)
                show.append(img)
            }
        })
    })
})
}
//重置
function groupnameReset(){
groupname.value = ''
groupname.style.color = '#000'
groupname.style.border = 'none'
}
function modalReset(){
modal.style.display = "none";
addblock.innerText = ' '
}
//控制左右側顯現/消失
function LRctrl(){
$(".chat-right").toggle();
$(".chat-left").toggle();
}