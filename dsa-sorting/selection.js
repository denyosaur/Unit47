// function selectionSort(arr) {
//     let index = 0

//     while (index < arr.length) {
//         let smallest = arr[index]
//         let smallestIndex = index

//         for (let i = index; i < arr.length; i++) {
//             if (smallest > arr[i]) {
//                 smallestIndex = i
//                 smallest = arr[i]
//             }
//         }

//         if (smallestIndex != index) {
//             arr[smallestIndex] = arr[index]
//             arr[index] = smallest
//         }

//         index++
//     }

//     return arr
// }

//recursive
function selectionSort(arr) {
    function sort(idx) {
        let smallest = arr[idx]
        let smallestIndex = idx
        for (let i = idx; i < arr.length; i++) {
            if (smallest > arr[i]) {
                smallest = arr[i]
                smallestIndex = i
            }
        }
        if (smallestIndex != idx) {
            arr[smallestIndex] = arr[idx]
            arr[idx] = smallest
        }
        if (idx < arr.length) sort(idx + 1)
    }
    sort(0)
    return arr
}

module.exports = selectionSort;