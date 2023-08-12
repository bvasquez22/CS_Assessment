const addToZero = (arr) => {
    let i = 0
    let z = i + 1
    while (i < arr.length) {
        while (z < arr.length) {
            if (arr[i] + arr[z] === 0) {
                return true
            }
            z += 1
        }
    i += 1
    z = i + 1
    }
    return false
}

// runtime = 100 microseconds
console.log(addToZero([1, 2, 3, 4, 5, -6, 3, 2, 1]))