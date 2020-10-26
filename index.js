function fibonacciGenerator () {
    var x = prompt("Enter the number: ");
    var result = [];

    if (x <= 0 ) {
   }
     else if (x == 1) {
              result = [0];
    }
     else if (x == 2){
              result = [0,1];
    }
    else {
        result = [0,1];
        for (var i = 2; i < x; i++){
            result.push(result[result.length - 2] +
            result[result.length - 1]);
        }
    }

    return result;
}
result = fibonacciGenerator ();
alert(result);
