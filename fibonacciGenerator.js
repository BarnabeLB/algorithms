function fibonacciGenerator(n){
var fibonacciList = [0,1];

for (var i = 0; i<=n-3; i++){

fibonacciList.push(fibonacciList[i]+(fibonacciList[i+1]));
     }
 return fibonacciList;
 }

fibonacciGenerator(10);

