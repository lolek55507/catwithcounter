let kot = document.getElementById('kot');
let pies = document.getElementById('dog');
let card = document.getElementById('card');
let score = 0;
let tip = document.getElementById('timmer');
let timmer;
function stop () {
    kot.style.animationPlayState = "running";
}
  function countingDown() {
    timmer--;
    document.getElementById('timmer').innerText = timmer;
  }
  setInterval(countingDown(), 1000);
let i= 0;  
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32    
        
    )
    if (i === 0){
    kot.style.top = "0px";
    i++;
    
    } else if(i === 1) {
        kot.style.top = "200px";
        i--;
        score ++; 
    card.innerText = score; 
    }
  }
  function countingDown (){
    let sec = 60;
    timmer = setInterval(()=>{
        if (sec >= 1) {
        tip.innerText = + sec;
        sec--;} 
        else if(sec == 0){
            alert('your score was ' + score);
            sec = 60;
            score = 0;
            card.innerText = score; 
        }
    }, 1000)
    
  }
 