const findLongestWord = (list) => {
    const sortedList = list.sort((a, b) => b.length - a.length)
    console.log(sortedList)
    return sortedList[0].length
}

// runtime = 200 microseconds
console.log(findLongestWord(["hey", "hello", "hi", "brycen", "dazzlement"]))