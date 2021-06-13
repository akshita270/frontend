//to check whether its an array or not
var e="hello i m akshita";
var x= [1,2,3];
console.log(Array.isArray(e));
console.log(Array.isArray(x)); 

//cloning
a1=[11,12,13,14,15];
console.log(a1.map(item=>item=10));
console.log(a1);

// convert into a string
x=["red","green","white", "black"];
console.log(x.join(','));
console.log(x.join('+')); 

//to get first n elements
var m=[11,12,13,14,15];
console.log(m.slice(0,4));
console.log(m.slice(0,3)); 



 /*a1=[10,20,10,10,30,10,40];
var max_freq=0;
var m=1;
for(var i=0; i<a1.length; i++)
{
    for(var j=i; j<a1.length; j++)
    {
        if(max_freq<m)
        {
            
        }

    }
} */



