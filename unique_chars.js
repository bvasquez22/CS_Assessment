const hasUniqueChars = (str) => {
    strArr = [];
    for(let i = 0; i<str.length; i++) {
        strArr.push(str[i].toLowerCase())
    }

    let i = 0
    let z = i + 1
    while (i < strArr.length) {
        while (z < strArr.length) {
            if (strArr[i] == strArr[z]) {
                return false
            }
            z += 1
        }
    i += 1
    z = i + 1
    }
    return true
}

// runtime = 200 microseconds
console.log(hasUniqueChars("Uncopyrightable"))