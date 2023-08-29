/* function suma(x,y){
    return c=x+y;
}
function mult(x,y){
    return c=x*y;
}
function divs(x,y){
    return c=x/y;
}
function resta(x,y){
    return c=x-y;
} */
var a = document.getElementsByTagName('main')[0].getElementsByTagName('h2')[0]
numAcu=[];


let ac=0


function seprar(){
for(const valores of a.textContent.substring()){
 
    
    if(Number(valores) == valores){

         if (numAcu[ac]===undefined)
         {
           numAcu[ac]=''}
        numAcu[ac]=Number(numAcu[ac]+valores)
       
        
            /* resultado[0] = resultado[0] + valores */
    }else{ 
        
        
        
    if(valores == "+"){
        /* resultado[0] = resultado[0] + valores */
    ++ac
        if (numAcu[ac]===undefined){numAcu[ac]=''}
        numAcu[ac]=numAcu[ac]+(String(valores))
        ++ac
    } 
    if(valores == "-"){
        /* resultado[0] = resultado[0] + valores */
        ++ac
        if (numAcu[ac]===undefined){numAcu[ac]=''}
        numAcu[ac]=numAcu[ac]+(String(valores))
        ++ac
    } if(valores == "/"){
        /* resultado[0] = resultado[0] + valores */
        ++ac
        if (numAcu[ac]===undefined){numAcu[ac]=''}
        numAcu[ac]=numAcu[ac]+(String(valores))
        ++ac
    } if(valores == "*"){
        /* resultado[0] = resultado[0] + valores */
        ++ac
        if (numAcu[ac]===undefined){numAcu[ac]=''}
        numAcu[ac]=numAcu[ac]+(String(valores))
        ++ac
    }
      
    
      
        
       
}

}

document.getElementsByTagName('main')[0].getElementsByTagName('h1')[0].textContent ="";
document.getElementsByTagName('main')[0].getElementsByTagName('h1')[0].textContent = eval(String(numAcu).replaceAll(',',""))

ac=0
numAcu =[]
}


/* document.addEventListener('keydown', (event) => {

    var keyValue = event.key;
  
    var codeValue = event.code;
  
    console.log("keyValue: " + keyValue);
  
    console.log("codeValue: " + codeValue);
  
  }, false);
 */


