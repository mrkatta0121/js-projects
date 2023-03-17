// function n1(){
//  document.getElementById('ip').value=1

// }
// function n2(){
//     document.getElementById('ip').value=2
// }
// function n3(){
//     document.getElementById('ip').value=3
// }
// function n4(){
//     document.getElementById('ip').value=4
// }
// function n5(){
//     document.getElementById('ip').value=5
// }
// function n6(){
//     document.getElementById('ip').value=6
// }
// function n7(){
//     document.getElementById('ip').value=7
// }
// function n8(){
//     document.getElementById('ip').value=8
// }
// function n9(){
//     document.getElementById('ip').value=9
// }
// function n0(){
//     document.getElementById('ip').value=0
// }
// function non(){
//     document.getElementById('ip').value=0;
// }
// function noff(){
//     document.getElementById('ip').value=" ";
// }

//   function add(){
  
//   }
//   function sub(){
  
// }
// function div(){
  
// }
// function mul(){
  
// }
// function mod(){
  
// }
//let string="";
// button=document.getElementById('n1');
// button.addEventListener('click', (e)=> {
// string = string+e.target.innerText;
// document.getElementById('ip').value=string;
// console.log(string); 
// });
let string="";
let keys=document.querySelectorAll('button');
console.log(keys);
for(i=0;i<keys.length;i++){
    keys[i].addEventListener("click",calci);
}
function calci(event){
    ele=event.target.innerText;
    if(ele=="ON")
    {
        document.getElementById('ip').style.opacity="1";
        document.getElementById('ip').value="";
        string="";
    }
     else if(ele=="AC"){
      string="";
      document.getElementById('ip').value=string;
    }
    else if( ele=="="){
        document.getElementById('ip').value=eval(string);
        string="";
    }
    else if (ele=="OFF"){
        document.getElementById('ip').style.opacity="0.3";
        document.getElementById('ip').value="";
        string="";
    }   else  {
        string+=ele;
        document.getElementById('ip').value=string;
    }

}