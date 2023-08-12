const isPangram = (str) => {
    str = str.replace(/\s+/g, '');
    strArr = [];
    for (let i = 0; i < str.length; i++) {
        strArr.push(str[i].toLowerCase())
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    return alphabet.every(letter => strArr.includes(letter));
}

// runtime = 400 microseconds?
console.log(isPangram("The five boxing wizards jump quickly"))