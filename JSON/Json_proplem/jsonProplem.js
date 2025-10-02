
// proplem Name: 2727. Is Object Empty

// Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.
 

// Constraints:

// obj is a valid JSON object or array
// 2 <= JSON.stringify(obj).length <= 105

// ------------------------------


// - Approach 1: Using JSON.stringify
//    - Time complexity: O(n), where n is the size of object
//    - Space complexity: O(n), where n is the size of object

var isEmpty = function(obj) {

// stringify: Convert a JavaScript object or value to a JSON string

// If the length of the string is less than or equal to 2, it means the object is empty

    if(JSON.stringify(obj).length <= 2){ // لو طول السترينج أقل من او يساوي 2 
        return true  // يبقي الاوبجكت فاضي
    }
    else {return false} // لو لا يبقي الاوبجكت مش فاضي
};
// ودا عشان ان {} طولها 2 و [] طولها 2 بردو



// Approach 3: Using loop

// Complexity Analysis:
// The time and space is O(1) because we are just checking if we can enter the loop or not.
//  - Time complexity: O(1)
//  - Space complexity: O(1)

var isEmpty = function(obj) {
    // loop through the object
    // حلقة تكرار بتمر علي كل المفاتيح الموجودة في الكائن وأول ما تلاقي مفتاح تدخل جوه الحلقه
    for (const _ in obj){ 
        return false; // لو لقت مفتاح في الكائن يبقي مش فاضي
    }
    return true;   // لو ملاقاش مفاتيح في الكائن يبقي فاضي
}