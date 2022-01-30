    
    /*Q.1 - Write a programme to print the nth fibnacci number . take
                user input.*/

    var num = parseInt(prompt("Enter a number"));
    var count  = 2;
    var a = 0;
    var b = 1;
    var sum = 0;
    if(num == 1){
        alert(0);
    }
    if(num == 2){
        alert(1);
    }
    
    while(count < num){
        sum =   a + b;
             a = b;
             b = sum;
             count++;
    }

    alert(sum);



   