totop = document.getElementById("totop");
    totop.addEventListener("click", (e)=>{
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
    })
});