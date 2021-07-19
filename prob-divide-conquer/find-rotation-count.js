findRotationCount([7, 9, 11, 12, 5])

function findRotationCount(arr) {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] > arr[end]) {
            start = mid + 1
        } else if (arr[mid] > arr[start]) {
            end = mid - 1
        } else {
            return mid
        }
    }

}

module.exports = findRotationCount