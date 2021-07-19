findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)

function findRotatedIndex(arr, num) {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if ((mid === 0 || arr[mid] === num)) {
            return mid
        } else if (arr[start] === num) {
            return start
        } else if (arr[end] === num) {
            return end
        }
        else if (num > arr[0] && num < arr[mid]) {
            end = mid - 1
        } else if (num < arr[end]) {
            start = mid + 1
        } else {
            return -1
        }
    }
    return -1
}

module.exports = findRotatedIndex