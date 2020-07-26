function time(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var timeFormat= 'AM';
    if(hours===0){
        hours=12;
       
    }if(hours>12){
        hours=hours-12;
        timeFormat='PM';
    }
    else{
        timeFormat='AM';
    }
    
    if(hours<10){
        hours = '0'+hours;
    }
    if(minutes<10){
        minutes = '0'+minutes;
    }if(seconds<10){
        seconds= '0'+seconds;
    }
    var exactTime =`${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerText= exactTime;
    document.querySelector('span').innerText= timeFormat;
    setInterval(time,1000);
}
time();