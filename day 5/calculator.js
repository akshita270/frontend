let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenvalue=" ";
for( item of buttons)
{
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;
        console.log("Butoon Text is ",buttonText);
        if(buttonText=='X')
        {
            buttonText='*';
        screenvalue+=buttonText;
        screen.value= screenvalue;
        }
        else if (buttonText=='C')
    {
        screenvalue=" ";
        screen.value= screenvalue;
      
    }
    else if (buttonText=='=')
    {
       var x=solve();
       document.getElementById("screen")=x;
       function solve()
       {
        let m = document.getElementById("screen").value ;
        let y = eval(m);
        document.getElementById("screen").value=y;
       
       }
    }
    
    
    else
    {
        screenvalue+=buttonText;
        screen.value= screenvalue;
    }

    })
  }


