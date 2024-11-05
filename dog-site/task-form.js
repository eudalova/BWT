function verify() {
    const A = parseInt(document.getElementById("A").value);
    let result;

    if (A < 62) {
        result =  A**2 + 4 + 5;
    } else {
        result = 1/(A**2) + 4*A + 5;
    }
    
    document.getElementsByName('result')[0].value = result; 
}

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
