function verify() {
    console.log("A")
    let A = parseInt(elementA.innerText);
    console.log(A)

    if (A < 62) {
        result = A**2 + 4 + 5;
        document.getElementById("result").innerText =  result;
    }
    else {
        result = 1/(A**2) + 4*A + 5;
        document.getElementById("result").innerText =  result;
    }
}

const elementA = document.getElementById("A");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
