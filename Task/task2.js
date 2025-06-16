// Remove Duplicates
// Given a list of integers, return a new list with duplicates removed.
// Example Input: [1, 2, 2, 3, 4, 4, 5]
// Expected Output: [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
    return [...new Set(arr)]
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 7, 4, 4, 3, 2]))