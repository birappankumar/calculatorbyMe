let string = "";
let buttons = document.querySelectorAll('.button');
let num=false;let dot=true;
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
      //after evaluation their wont be dot till operator
      dot=false;
      
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
      num=false;
      //after C dot will work atomatically
      dot=true;
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
    if(e.target.innerHTML=='+'||e.target.innerHTML=='-'||e.target.innerHTML=='/'||e.target.innerHTML=='*'){
        if(num){
            string = string + e.target.innerHTML;
            //maintaining the over flow of operator
            num=false;
            //maintaining the over flow of dot in same string
            dot=true;
        }
    }
    //code for hanling the over flow of dot char
    else if(e.target.innerHTML=='.'){
      if(dot){
        string = string + e.target.innerHTML;
        dot=false;
      }
    }
    else{
    string = string + e.target.innerHTML;
    num=true;
      
    }
      document.querySelector('input').value = string;
    }
  })
})