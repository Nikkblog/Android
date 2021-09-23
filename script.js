setInterval(() =>{
    const time = document.querySelector("#time");
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    if(hrs > 12){
        hrs = hrs - 12;
    }
    if(min < 10){
        min = "0" + min;
    }
    time.textContent = hrs + ":" + min;
});


const BatteryLevel = document.querySelector(".setBatteryLevel");
navigator.getBattery().then((bat)=>{
    const setBatteryLevel = ()=>{
        const level = bat.level*100;
        BatteryLevel.textContent=level + "%";
    }
    setBatteryLevel();
    bat.ondischargingtimechange = () =>{
        setBatteryLevel();
    }
    bat.onchargingtimechange = () =>{
        setBatteryLevel();
    }
})