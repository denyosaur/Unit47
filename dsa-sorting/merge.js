function merge(arr1, arr2) {
    let newArr = []
    let arr1Counter = 0
    let arr2Counter = 0

    while (arr1Counter < arr1.length && arr2Counter < arr2.length) {
        if (arr1[arr1Counter] < arr2[arr2Counter]) {
            newArr.push(arr1[arr1Counter])
            arr1Counter++
        } else {
            newArr.push(arr2[arr2Counter])
            arr2Counter++
        }
    }

    while (arr1Counter < arr1.length) {
        newArr.push(arr1[arr1Counter])
        arr1Counter++
    }

    while (arr2Counter < arr2.length) {
        newArr.push(arr2[arr2Counter])
        arr2Counter++
    }
    return newArr
}

function mergeSort(arr) {
    let mid = Math.floor(arr.length / 2)
    if (arr.length > 1) {
        let left = mergeSort(arr.slice(0, mid))
        let right = mergeSort(arr.slice(mid))
        return merge(left, right)
    }
    return arr
}

module.exports = { merge, mergeSort };