const superSecretChars = [['a', '@'], ['s', '$'], ['o', '0'], ['h', '5'], ['x', '*']];



function secret(password) {
    const superSecretObj = {
        "a": "@",
        's': '$',
        'o': '0',
        'h': '5',
        'x': '*'
    }

    let secretPassword = ""

    //go through each letter
    for (let i = 0; i < password.length; i++) {
        const letter = password[i]
        //lookup lowercase letter in object
        const swap = superSecretObj[letter.toLowerCase()]
        
        //replace letter if found, if not, add letter
        if (swap){
            secretPassword += swap
        }
        else {
            secretPassword += letter
        }
    }
    //On

    return secretPassword
}

function secret2(password) {

    //go through each letter
    return password.split("").map(letter => {
        //lookup lowercase letter in object
        const swap = superSecretObj[letter.toLowerCase()]
        return ( swap ? swap : letter )
    }).join("")
}


console.log(secret2("SUPER SECRET PASSWORD SIXXX HALVES"))