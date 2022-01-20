function popup(){
    window.alert("Programação Web");
  }

  function randomNum(){
    let min = 0;
    let max = 50;
    let num = Math.floor(Math.random() * (max - min) + min);
    document.getElementById("box1").innerHTML = num;
  }

  function openLinkImdb(){
    window.open("http://www.imdb.com/%22")
  }

  function changeStatus(){
    window.status = "Janeiro de 2022";
    alert(window.status);
  }

  function changeTitle(){
    document.title="PW 2021/2022";
  }
  function restoDivisao(){
    let num1 = 25;
    let num2 = 3;
    let restoDivisao = num1 % num2
    document.getElementById("box2").innerHTML = restoDivisao;
  }

  function changeFocus(){
    var x = document.getElementById("box3");
    if(x.value === "Sem focus"){
      x.value = "Com focus"
    }else if(x.value === "Com focus"){
      x.value = "Sem focus"
    }
  }
function CalculoNumero(){
    var x = document.getElementById("box4");
    if(x.value >= 0 && x.value < 10){
        window.alert("Insuficiente")
    }else if(x.value >= 10 && x.value < 14){
        window.alert("Bom")
    }else{
        window.alert("Muito Bom")
    }

function VerParametro(numero){

    let box = document.getElementById("box6"); 
    let x = numero;
    for(i = 0; i <=x;i++){
        box.value += "pw" + i;
    }

}

}