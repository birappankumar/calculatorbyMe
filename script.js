let string = "";
let buttons = document.querySelectorAll('.button');
let num=false;
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'M+'){
       let currentValue = parseFloat(document.getElementById("result").innerHTML);
        memoryValue += currentValue;
        document.getElementById("memory").innerHTML = "M+";
    }
    else if(e.target.innerHTML == 'M-'){
        let currentValue = parseFloat(document.getElementById("result").innerHTML);
         memoryValue += currentValue;
         document.getElementById("memory").innerHTML = "M-";
     }
     else if(e.target.innerHTML == 'Mr'){
        document.getElementById("result").innerHTML = memoryValue.toString();
     }

    else{ 
    console.log(e.target)
    if(e.target=='+'||e.target=='-'||e.target=='/'||e.target=='*'||e.target=='.'){
        if(num){
            string = string + e.target.innerHTML;
        }
        num=false;
    }
    else{
    string = string + e.target.innerHTML;
    num=true;
    }
      
      document.querySelector('input').value = string;
    }
  })
})