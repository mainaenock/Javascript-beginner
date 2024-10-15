const input = document.getElementById("input");

function check() {
    const value = input.value;
    const count = (value.length)
    let myName = '';
    let reverseName = '';


    for(i = 0; i < count; i++) {
        myName += value[i];
    }
    for(i = count - 1; i >= 0; i--) {
        reverseName += value[i];
    }
    if (myName === reverseName) {
        alert('is a palindrome')
    }
    else{
        alert('is not a palindrome')
    }
    input.value = "";
    return;
}

function check2() {
    const value = input.value;
    const reverseName = value.split("").reverse().join("");
    if (value === reverseName) {
        alert('Is a palindrome')
    }
    else{
        alert('not a palindrome')
    }
    input.value = "";
}

