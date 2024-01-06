// theme change button
let x=document.querySelector(".theme");
let theme_icon=document.querySelector(".icon");
let d=document.querySelector(".designation");
let s=document.querySelector(".summary");
let m=document.querySelector(".anchor");
let mi=document.querySelectorAll(".menuicon");
let count=0;
let bg=document.body;
x.onclick=()=>{
    
    if(count===0){
        theme_icon.setAttribute("src","https://cdn-icons-png.flaticon.com/512/4623/4623236.png");
        theme_icon.style.width="23px";
        theme_icon.style.height="23px";
        bg.classList.add("lightmode");
        d.classList.add("lightmode");
        s.classList.add("lightmode");
        m.classList.add("lightmode");
        for(i of mi){
            i.classList.add("lightmodeicon");
        }
        m.style.backgroundColor="transparent";
        x.style.backgroundColor="#eee";

        count=1;
    }
    else{
        theme_icon.setAttribute("src","https://cdn-icons-png.flaticon.com/512/12363/12363731.png");
        theme_icon.style.width="34px";
        theme_icon.style.height="34px";

        bg.classList.remove("lightmode");
        d.classList.remove("lightmode");
        s.classList.remove("lightmode");
        m.classList.remove("lightmode");
        for(i of mi){
            i.classList.remove("lightmodeicon");
        }
        x.style.backgroundColor="#444";

        count=0;
    
    }
}
