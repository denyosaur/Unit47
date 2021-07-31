function insertionSort(arr) {
    let counter = 1

    function findPlace(index, lastNum) {
        if (lastNum < arr[index - 1]) {
            arr[index] = arr[index - 1]
            arr[index - 1] = lastNum
            if (index > 0) findPlace(index - 1, lastNum)
        }
    }

    while (counter < arr.length) {
        let lastNum = arr[counter]
        findPlace(counter, lastNum)
        counter++
    }

    return arr
}

module.exports = insertionSort;