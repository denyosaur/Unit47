function sortedFrequency(arr, num) {
    let length = arr.length - 1
    let startIdx = findStart(arr, 0, length, num)
    let endIdx = findEnd(arr, 0, length, num)

    if (startIdx === -1 && endIdx === -1) {
        return -1
    }

    return ((endIdx + 1) - startIdx)
}

function findStart(arr, start, end, num) {
    if (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if ((mid === 0 || arr[mid - 1] <= (num - 1)) && arr[mid] === num) {
            return mid
        } else if ((arr[mid] > num) || ((arr[mid + 1] === num || arr[mid + 1] === num + 1) && (arr[mid] === num))) {
            return findStart(arr, start, (mid - 1), num)
        } else if (arr[mid] < num) {
            return findStart(arr, (mid + 1), end, num)
        }
    }
    return -1
}

function findEnd(arr, start, end, num) {
    if (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if ((mid === 6 || arr[mid + 1] > num) && arr[mid] === num) {
            return mid
        } else if ((arr[mid - 1] <= num) && (arr[mid] === num)) {
            return findEnd(arr, (mid + 1), end, num)
        } else if (arr[mid] > num) {
            return findEnd(arr, start, (mid - 1), num)
        } else if (arr[mid] < num) {
            return findEnd(arr, (mid + 1), end, num)
        }
    }
    return -1
}

module.exports = sortedFrequency