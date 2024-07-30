
function isPalindrome(str){
     const cleanStr=str.toLowerCase().replace(/[^a-z0-9]/g,'');
    
    const reverseStr=cleanStr.split('').reverse().join('');
    if (cleanStr === reverseStr)
      return true;
}

function palindromeChecker(){
    const inputtext=document.getElementById('inputtext');
    const result=document.getElementById('result');
    if(isPalindrome(inputtext.value)){
      result.textContent=`"${inputtext.value}" is a palindrome :>`;
    }
    else{
        result.textContent=`"${inputtext.value}" is not a palindrome :<`;
    }
    inputtext.value='';
}

document.getElementById('checkButton').
addEventListener("click",palindromeChecker);
