function flattenArray(arr) {
    let result = []

    function recurse(array) {
        for (const item of array) {
            if (Array.isArray(item)) {
                recurse(item);
            } else {
                result.push(item);
            }
        }
    }

    recurse(arr)

    return result
}

console.log(flattenArray([[1, 2, [3]], [4, 5], [6]]))
