a= document.getElementById('bb');
a.style.alignItem="center";
b=document.createElement('div');
b.innerHTML="Enter your lucky number";
b.style.fontSize="1.2rem";
a.appendChild(b);
s=document.createElement('input');
b.appendChild(s);
b.style.width="100px";
b.backgroundColor="red";
b.style.height="100px";
c=document.createElement('div');
t=document.createElement('input');
c.appendChild(t);

a.appendChild(c);
c.style.width="100px";
c.style.height="100px";
c.backgroundColor="brown";
d=document.createElement('div');
u=document.createElement('button');
d.appendChild(u);
a.appendChild(d);
u.innerHTML="Try your luck";
d.style.width="100px";
d.backgroundColor="green";
d.style.height="100px";
e=document.createElement('div');
e.innerHTML="Your Chances";
v=document.createElement('input');
e.appendChild(v);

a.appendChild(e);
e.style.width="100px";
e.backgroundColor="black";
e.style.height="100px";
 
f=document.createElement('div');
f.style.fontSize="3rem";
a.appendChild(f);
v.value=10;




 u.addEventListener("click", ()=>
    {
        min=1;
        max=100;
        x=0;
         x=Math.floor(Math.random() * (max - min + 1) + min);
        t.value=x;
    
         if (s.value=="")
         {
            s.value=" please enter number";
            
         }

        else if( s.value==t.value)
        {
          a.innerHTML="you are lucky";
          a.style.fontSize="5rem";
        } else {
            f.innerHTML="you are unlucky";
        }
          
        
        
       v.value-=1;
       if( v.value==0){
        a.innerHTML="your chances are done duduu...........";
        a.style.fontSize="5rem";
       }


      }   

 )

