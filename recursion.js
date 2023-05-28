/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  // at the end of the array, return 1
  if(i === nums.length) return 1;
  // return value of nums[i] * value of nums[i + 1]
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  // base case
  if(i === words.length) return;
  // normal case
  let letterCount = 0;
  // each word in array
  for(let w of words){
    // word is longer than longest found so far
  if(w.length > letterCount) {
    // update letterCount
    letterCount = w.length;
  }
  // call function and increment i
  longest(words, i + 1)
}
// return longest word length
  return letterCount;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // holds output string
  let out = "";
  // helper recursion
  function _everyOther(str, j){
    // base case
    if(j === str.length) return;
    // normal case
    if(j % 2 === 0) { // index is even?
      // concat character at index j to out
      out += str[j];
    }
    // increment j and call again
    _everyOther(str, j + 1);
  }
  // call helper recursion function
  _everyOther(str, 0);
  // return new string
  return out;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0, j = str.length - 1) {
  // base case
  if(i > j) return; // surpassed the middle index?

  // normal case
  if(str[i] !== str[j]) { //value at each index is not equal?
    return false;
  }
  // values are equal, call again with i moving forward and j moving backwards  
  isPalindrome(str, i + 1, j - 1)

  return true;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  // base case
  if(i === arr.length) return -1;

  // normal case
  if(arr[i] === val) {
    return i;
  }
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // holds output string
  let reversedStr = "";
  // helper recursion
  function _revString(str, j){
    // base case
    if(j < 0) return; //surpassed beginning of string?
    // normal case
    reversedStr += str[j]; // concat current index value to reversedStr
    // call function again, but decrement j
    _revString(str, j - 1); 
  }
  // first call to helper recursion sets j = last index in str
  _revString(str, str.length - 1)
  // return the reversed string
  return reversedStr;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, i=0) { 
  // accumulates string values
  let out = [];

  // helper recursion
  function _gatherStrings(obj, j){
    // turn object values into iterable array
    let objValues = Object.values(obj)
    // base case
    if(j === objValues.length) return; // past the end of the array
    // normal case
    for(let val of objValues){ // iterate values in array
      // is val a string?
      if(typeof val === 'string') {
        // push the val to out array
        out.push(val);
        // is val an object?
      } else if(typeof val === 'object') {
        // call function recursively on this val object
        _gatherStrings(val, 0); // set index back to 0 in call
      } else {
        // call again and increment index
        _gatherStrings(val, j + 1)
      }
    }
  }
  // call recursive helper function
  _gatherStrings(obj, 0)
  return out;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  // if indexes have not crossed
  if(low <= high){
    // get middle index
    let mid = low + Math.floor((high - low) / 2);
    // middle index = val?
    if(arr[mid] === val){
      //return the index
      return mid;
      // middle value is less than target val?
    } else if(arr[mid] < val) {
      // value is on right side, call recrusively and move low index
      return binarySearch(arr, val, mid + 1, high);
      // middle value is larger than target val
    } else {
      // value is on left side, call recrusively and move high index
      return binarySearch(arr, val, low, mid - 1);
    }
  }
  // did not find val in array
  return -1;
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
