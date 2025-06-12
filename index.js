const ar = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
 function change(){
    let col = '#';
    for(let i = 0;i<6;i++){
            col += ar[Math.floor(Math.random()*16)];
    }
    document.getElementById("box").style.backgroundColor = col;
    document.getElementById("text").innerHTML = col;
    document.getElementById("text").style.color = col;
    document.getElementById("bt").style.backgroundColor = col;
}

window.onload = change;

setInterval(change, 1000);