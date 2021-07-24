/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (nums.length === i) return 1
  return nums[i] * product(nums, i + 1)
}

/** longest: return the length of the longest word in an array of words. */
["word", "length", "anotherword", "shortword", "letters"]
function longest(words, i = 0, longestLength = 0) {
  if (i === words.length) return longestLength
  if (words[i].length > longestLength) {
    return longest(words, i + 1, words[i].length)
  } else {
    return longest(words, i + 1, longestLength)
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  let arr = str.split("")
  while (i < str.length) {
    return arr[i] + everyOther(str, i + 2)
  }
  return ""
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = str.length - 1, flipped = "") {
  let arr = str.split("")
  if (i < 0) return flipped === str
  return isPalindrome(str, i - 1, flipped += arr[i])
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr[i] === val) {
    return i
  } else if (i > arr.length) {
    return -1
  }
  return findIndex(arr, val, i + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, flipped = "") {
  let arr = str.split("")
  if (i < 0) return flipped
  return revString(str, i - 1, flipped += arr[i])
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = []
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      arr.push(...gatherStrings(obj[key]))
    } else if (typeof obj[key] === "string") {
      arr.push(obj[key])
    }
  }
  return arr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

binarySearch([1, 2, 3, 4], 4)

function binarySearch(arr, val, start = 0, end = arr.length) {
  let mid = Math.floor((start + end) / 2)

  if (start > end) {
    return -1
  } else if (val === arr[mid]) {
    return mid
  }

  if (val < arr[mid]) {
    return binarySearch(arr, val, start = 0, mid - 1)
  } else {
    return binarySearch(arr, val, mid + 1, end)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
