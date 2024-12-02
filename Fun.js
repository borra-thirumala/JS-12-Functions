//write a function to check if a input number is even or odd
function input(z){
    if(z%2==0){
        console.log("even number")
    }
    else{
        console.log("odd number")
    }
}
input(12);




// Function to check the largest number among three numbers
function LargestNumber(num1, num2, num3) {
    
 
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } 
  
    else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } 
  
    else {
        return num3;
    }
  }
  
  console.log("The largest number is: " + LargestNumber(10, 25, 15)); 

//input string is palindrome or not
  function isPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
      
      if (str[i] !== str[str.length - 1-i]) {
        return false;
      }
    }
  
   
    return true;
  }
  
  console.log(isPalindrome("mom"));   


  
