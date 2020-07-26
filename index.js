const squareArray = (array) => {

   const newArray = array.map(element => Math.pow(element ,2));
   
 return newArray;

   }
    
 console.log(squareArray([4,6,7]))