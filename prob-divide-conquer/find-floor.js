findFloor([1, 2, 8, 10, 10, 12, 19], 9) // 8
findFloor([1, 2, 8, 10, 10, 12, 19], 20) // 19
findFloor([1, 2, 8, 10, 10, 12, 19], 0) // -1


function findFloor(arr, num) {
    let start = 0
    let end = arr.length - 1
    if (arr[start] > num) {
        return -1
    } else if (num > arr[end]) {
        return arr[end]
    }
    while (start <= end) {
        let mid = Math.floor((end + start) / 2)
        if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
            return arr[mid - 1]
        } else if (arr[mid] === num) {
            return arr[mid - 1]
        } else if (num < arr[mid]) {
            end = mid - 1
        } else if (num > arr[mid]) {
            start = mid + 1
        }
    }
}

module.exports = findFloor