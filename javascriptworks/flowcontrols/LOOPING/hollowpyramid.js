var  n=10, i, j;
   
   for(i = 1; i<=n; i++)
    {
      for(j = 1; j<=(n-i); j++)
      { //print the blank spaces before star
         console.log("");
      }
      if(i == 1 || i == n)
      { //for the first and last line, print the stars continuously
         for(j = 1; j<=i; j++) 
         {
            console.log("*");
         }
      } 
      else 
      {
         console.log("*"); //in each line star at start and end position
         for(j = 1; j<=2*i-3; j++)
          { //print space to make hollow
        console.log("");
         }
         console.log("*");
      }
      let str="";
   }
