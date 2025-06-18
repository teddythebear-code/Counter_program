const nam = document.getElementById("name");
const add = document.getElementById("add");
const reset = document.getElementById("reset");
const delet = document.getElementById("delet");

let ans = 0;

add.onclick = function(){
    ans++;
    nam.textContent = ans;
}

reset.onclick = function(){
    ans = 0 ;
    nam.textContent = ans;
}

delet.onclick = function(){
    ans--;
    nam.textContent = ans;
}