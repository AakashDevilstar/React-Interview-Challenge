(function(){
    var hours=document.querySelector(".hours");
    var minutes=document.querySelector(".minutes");
    var seconds=document.querySelector(".secs");

    var startBtn=document.querySelector(".start");
    var stopBtn=document.querySelector(".stop");
    var resetBtn=document.querySelector(".reset");

    var countDownTimer=null;
    startBtn.addEventListener("click",function(){
        console.log('I am clicked');
        if(hours.value == 0 && minutes.value == 0 && seconds.value == 0){
            return;
        }
        function set(){
            startBtn.style.display="none";
            stopBtn.style.display="initial";
            countDownTimer=setInterval(()=>{
                timer();
            },1000);
        }
        set();
    });

    function stopinterval(state){
        startBtn.innerHTML =state === "pause"?"Continue":"Start";
        startBtn.style.display="initial";
        stopBtn.style.display="none";
        clearInterval(countDownTimer);
    }

    function timer(){
        if(seconds.value>60){
            minutes.value++;
            seconds.value=seconds.value-59;
        }
        if(minutes.value>60){
            hours.value++;
            minutes.value=minutes.value-59;
        }
        if(hours.value == 0 && minutes.value == 0 && seconds.value == 0){
            stopinterval();
        }
        else if(seconds.value!=0){
            seconds.value=`${seconds.value<=10 ? "0": ""}${seconds.value-1}`;
        }
        else if(minutes.value!=0 && seconds.value ==0){
            seconds.value=59;
            minutes.value=`${minutes.value<=10 ? "0": ""}${minutes.value-1}`;
        }
        else if(hours.value!=0 && minutes.value ==0){
            minutes.value=59;
            hours.value=`${hours.value<=10 ? "0": ""}${hours.value-1}`;
        }
    }
    stopBtn.addEventListener('click',function(){
        stopinterval('pause');
    })
    resetBtn.addEventListener('click',function(){
        hours.value="";
        minutes.value="";
        seconds.value="";
        stopinterval();
    })
})();