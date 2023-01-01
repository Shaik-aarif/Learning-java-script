
// to string method
let num = [1,21,3,42,5];
let a = num.toString(num)
console.log(a);

// join 
console.log(num.join("_"));
// pop -> removes element from end
// shift -> removes element from beginning
// push -> adds element from end
// unshift -> adds element from beginning

// delete -> 
// delete num[0]
// [ <1 empty item>, 2, 3, 4, 5 ]
// removes the element but does not update the size of the array 

// concat
// sort
// num.sort()  it modifies the original array 
// --> sorts alphabetically taking array as string 
        // ex {4 23 21 5} --> [21 ,23, 4, 5] two series first 

// sort compare

const compare = (a,b)=>{
    return a-b//  sorting in ascending order
    // return b-a //  sorting in decending order
}
num.sort(compare)
console.log(num);


// splice method




