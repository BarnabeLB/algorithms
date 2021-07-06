for (var i=1; i<101; i++){
  if(i%15==0){
  console.log(i + ' fizzBuzz')
     }else if(i%5==0){
        console.log(i+ ' buzz');
        }else if (i%3==0){
          console.log(i + (' fizz'));
          }else{
            console.log(i);
  }
 }


______________________________________________________________
var output = [];
var count = 1;

function fizzbuzz(){

  while(count<=100){
   
    if(count%15 == 0){
      output.push('Fizz Buzz');
    }else if(count%5 == 0){
      output.push('Buzz');
    } else if(count%3 == 0){
      output.push('Fizz');
    }
    else{
     output.push(count);
    }

    count++;
   console.log(output);
    
    
  }


    
  }
