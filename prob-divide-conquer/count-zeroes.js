function countZeroes(arr) {
    let start = 0
    let end = arr.length - 1
    let startIdx = arr.length

    while (start <= end) {
        let midIdx = Math.floor((start + end) / 2)
        let midVal = arr[midIdx]

        if ((midIdx === 0 || arr[midIdx - 1] === 1) && midVal === 0) {
            startIdx = midIdx
            start = end + 1
        } else if (midVal === 1) {
            start = midIdx + 1
        } else {
            end = midIdx - 1
        }
    }

    return (arr.length) - startIdx
}

module.exports = countZeroes

[1, 0, 0]