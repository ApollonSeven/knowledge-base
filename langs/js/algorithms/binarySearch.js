function genSortedArr() {
    const arr = []
    let number = 0
    for (let i = 0; i < 10000; i++) {
        number += Math.floor(Math.random() * 10)
        arr.push(number)
    }
    return arr
}

function binarySearch(arr, item) {
    let start = 0,
        end = arr.length - 1,
        current,
        counter = 0,
        result
    while (!result) {
        current = Math.floor((start + end) / 2)
        const guess = arr[current]

        if (guess === item) {
            result = current
        } else if (guess < item) {
            start = current + 1
        } else if (guess > item) {
            end = current - 1
        }
        counter++
    }

    return result
}

const arr = genSortedArr()

console.log(binarySearch(arr, arr[574]))
