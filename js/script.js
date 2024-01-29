document.getElementById('check-btn').addEventListener('click',function(){
    checkInputValue();
});

function checkInputValue() {
    let inputText = document.getElementById('text-input').value;
    let resultElement = document.getElementById('result');

    if (inputText === '') {
        alert('Please input a value')
        return false;// Return false to indicate the error condition
    }
    
     // Remove non-alphanumeric characters and convert to lowercase for comparison
     const cleanedText = inputText.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
     let reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText === reversedText) {
        resultElement.textContent = inputText + ' is a palindrome';
    } else {
        resultElement.textContent = inputText + ' is not a palindrome';
    }

}