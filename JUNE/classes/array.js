let n = parseInt(prompt('Enter the number you want to check for:'))

function checkPrime(num) {

    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= n / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

checkPrime(n) ? console.log('true') : console.log('false');
console.log(checkPrime(n));