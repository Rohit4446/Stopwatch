
const stop = document.querySelector("#stop");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
let fullTime = document.getElementById('fullTime');
let hours="00";
let seconds="00";
let minutes="00";

let timer = false
let sec ="00";
let min ="00";
let hr = "00";
let time = `${hr}:${min}:${sec}`;
fullTime.innerText = time;
console.log(time);

start.addEventListener('click' , startTheWatch);
 stop.addEventListener('click' , stopTheWatch);
 pause.addEventListener('click' , pauseTheWatch);

function startTheWatch (){
  timer = true;
  stopWatch()
    start.setAttribute("disabled" , "");
    stop.removeAttribute("disabled" , "")
    pause.removeAttribute("disabled" , "")
}


function stopTheWatch (){
  timer = false; sec =0; min =0;  hr = 0;
  stopWatch();
  start.removeAttribute("disabled" , "")
  pause.setAttribute("disabled" , "");
  stop.setAttribute("disabled" , "")
  pause.innerHTML = "pause";
  hours="00";
 seconds="00";
 minutes="00";
  fullTime.innerText =`${hours}:${minutes}:${seconds}`;
   

}



function pauseTheWatch () {
  
      let text = pause.innerHTML;
     if(text ==  "continue") {
      timer = true;
      stopWatch();
      pause.innerHTML = "pause";
    }
  else {
    pause.innerText = "continue"
    timer = false;
    stopWatch();

  }
}


function stopWatch (){
  if(timer == true){
    sec = ++sec;
     
    if(sec == 60){
      min = ++min
      sec =0;
      if(min < 10){
        minutes = "0" +min;
      }else{
        minutes = min;
      }
      
    }

    if(min == 60){
      hr = ++hr
      min =0;
      if(hr < 10){
        hours = "0" + hr;
      }else{
        hours = hr;
      }
      
    }


    if(sec < 10){
      seconds = '0'+sec;
    }else{
    seconds = sec;

    }
  fullTime.innerText = `${hours}:${minutes}:${seconds}`;
    ///time = `${hours}:${minutes}:${seconds}`;
    setTimeout("stopWatch()" , 1000);
  }
  
     
}



// start.addEventListener('click' , () => {

//     // enable or desable
//   	stop.removeAttribute("disabled");
//     pause.removeAttribute("disabled");
//     start.setAttribute("disabled" , "");	

// // timer
// let min = document.getElementById("minutes").innerHTML;
// console.log(min);
// min = get


// })

// function pause(){

//    let cont = document.getElementById("pause").innerHTML;
//   if(cont ==  "continue") {
//    document.getElementById("pause").innerHTML = "pause";
//   }
//   else {
//     document.getElementById("pause").innerHTML = "continue";

//   }
    
// }


// function stop(){
//     document.getElementById("pause").setAttribute("disabled" , "");	
//     document.getElementById("stop").setAttribute("disabled" , "");	
//    document.getElementById("start").removeAttribute("disabled");

// }


// Array.prototype.comtains = function (val){
//   return this.some(string => JSON.stringify(string) === JSON.string(val));
// }




// function reverseWords(str){
//         var a =str.split().map(w => w.split('').reverse().join('')).join('');

//         console.log(a);
//   }



// let closerFunc = function (a) {
//     debugger
//   return function (b) {
//     if (b) {
//       return closerFunc(a + b);
//     }
//     return a;
//   };
// };
// let raw = closerFunc(5)(10)(55)(30)
// console.log(raw());
