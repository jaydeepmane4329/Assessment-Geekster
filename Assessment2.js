
    /* Write a programme to print all prime numbers in range 1 to n. take n
        from the user.*/
     
        var num = parseInt(prompt("enter a number"));
        var count  = 0;
        
        for(var i = 1;i <= num; i++){
             for(var j=2 ;j < i ;j++){
                 if(i%j==0){
                    count++;
                 }
             }
             if(count == 0){
                console.log(i);
             }else{
                 count = 0;   
             }
        }




