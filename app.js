var wrapperEle = document.body.querySelector(".box")

var list = [];


function renderList(){
    wrapperEle.innerHTML = "";
    var sum = 0;
    for(var i=0; i<list.length; i++){
        if(sum > 10){
            var ele2=document.createElement("div");
            ele2.innerHTML="You win!";
            wrapperEle.appendChild(ele2);
            break;
        }else if(sum < 10){
            var ele1=document.createElement("div");
            sum += list[i];
            ele1.innerHTML="Damage: " + sum;
            wrapperEle.appendChild(ele1);
        }
    }
}


document.body.querySelector(".fire_button").addEventListener("click", function(){
    var firePower = 1;
    list.push(firePower);
    renderList();
})


document.body.querySelector(".ice_button").addEventListener("click", function(){
    var icePower = 5;
    list.push(icePower);
    renderList();
})

document.body.querySelector(".poison_button").addEventListener("click", function(){
    var poisonPower = 7;
    list.push(poisonPower);
    renderList();
})

