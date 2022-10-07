 setInterval(()=>{
    var hour =document.getElementById("hours");
    var minute =document.getElementById("minutes");
    var second =document.getElementById("seconds");
    
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    
    hour.innerText=h;
    minute.innerText=m;
    second.innerText=s
 })



