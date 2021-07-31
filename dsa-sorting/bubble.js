function bubbleSort(arr) {
    let sorted = [...arr]
    for (let i = 0; i < sorted.length; i++) {
        let changed = false
        for (let j = 0; j < sorted.length - i; j++) {
            if (sorted[j] > sorted[j + 1]) {
                let temp = sorted[j]
                sorted[j] = sorted[j + 1]
                sorted[j + 1] = temp
                changed = true
            }
        }
        if (changed === false) break
    }
    return sorted
}

module.exports = bubbleSort;