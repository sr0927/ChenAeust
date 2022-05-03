function clear(){
    item_list[0].classList.remove("previous-item");
    item_list[1].classList.remove("main-item");
    item_list[2].classList.remove("next-item");
}

function carousel(){
    item_list[0].classList.add("previous-item");
    item_list[1].classList.add("main-item");
    item_list[2].classList.add("next-item");
}

function click_previous(){
    clear();
    var item = item_list[2];
    item_list.pop();
    item_list.unshift(item);
    carousel();  
}

function click_next(){
    clear();
    var item = item_list[0];
    item_list.shift();
    item_list.push(item);
    carousel();  
}

function getScrollTop(){
    var bodyTop = 0;
    if (typeof window.pageYOffset != "undefined") {
      bodyTop = window.pageYOffset;
  
    } else if (typeof document.compatMode != "undefined"
               && document.compatMode != "BackCompat") {
      bodyTop = document.documentElement.scrollTop;
  
    } else if (typeof document.body != "undefined") {
      bodyTop = document.body.scrollTop;
    }
    if(bodyTop > 600){
        navbar.style.background = "rgba(20, 19, 19, 1)"
    }else{
        navbar.style.background = "rgba(20, 19, 19, 0.1)"
    }
}


carousel_item = document.querySelectorAll(".carousel-item");
navbar = document.querySelector("nav");
form_btn = document.querySelector("#form-btn");
item_list = Array.from(carousel_item);
carousel();
getScrollTop();
window.addEventListener("scroll",(e)=>{
    getScrollTop()
})

form_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let name = document.querySelector("#form-name").value;
    let email = document.querySelector("#form-email").value;
    let main = document.querySelector("#form-main").value;
    let message = document.querySelector("#form-message").value;
    fn = document.getElementById("form-name");
    fe = document.getElementById("form-email");
    fm1 = document.getElementById("form-main");
    fm2 = document.getElementById("form-message");
    var date = new Date();
    console.log(fn)
    if(fn.value == "" || fe.value == "" || fm1.value == "" || fm2.value == ""){
        swal({
            title: "送出失敗",
            text: "內容不可空白",
            icon: "error",
            button: "關閉",
        });
    }else{
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbx8-S3LBMFGeGzF5TFdxL2DNYJ03r_KKvfabPjKapyYnEcZTTs3kPNXFabRormAjRaT/exec",
            data: {
                "date": date,
                "name": name,
                "email": email,
                "main": main,
                "message": message
            },
            success: function(response) {
            if(response == "成功"){
                swal({
                    title: "成功送出",
                    text: "感謝你的聯絡",
                    icon: "success",
                    button: "關閉",
                });
            }else{
                swal({
                    title: "送出失敗",
                    icon: "error",
                    button: "關閉",
                });
            }
            },
        });    
    }
    document.getElementById("form-name").value = null;
    document.getElementById("form-email").value = null;
    document.getElementById("form-main").value = null;
    document.getElementById("form-message").value = null;
    
})

