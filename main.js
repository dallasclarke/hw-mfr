// 1.  a. You are given an array of numbers below
//     b. Using reduce subtract all of the numbers in the array from an initial number 200
let numbers = [12, 3, 5, 3, 5, 4];

const total = numbers.reduce((acc,curr) =>{
    return acc - curr;
}, 200);
total;



// 2.  Add 500 to each bottle of red wine, then add all the red wine bottles together. Use all three methods we learned today and use method chaining.
let data = [
    {
    wineColor: 'red',
    year: '1922',
    region: 'Bordeaux',
    numBottles: 123
    },
    {
    wineColor: 'red',
    year: '1972',
    region: 'Beaujolais',
    numBottles: 29
    },
    {
    wineColor: 'white',
    year: '2020',
    region: 'Bourgogne',
    numBottles: 224
    },
    {
    wineColor: 'white',
    year: '1987',
    region: 'Merlot',
    numBottles: 122
    },
    {
    wineColor: 'white',
    year: '1963',
    region: 'Rioja',
    numBottles: 22
    },
    {
    wineColor: 'red',
    year: '1976',
    region: 'Napa',
    numBottles: 54
    }
    ];

    const bottles = data.filter((bottle) => bottle['wineColor'] === 'red')
    .map((bottles) => bottles['numBottles'] + 500)
    .reduce((total, sum) => total + sum)
    bottles;

    // 3.  Just Averages
//     - Using reduce, return an integer value for the average of all the index values and/or calculated values in an array.
//     - If the Value is a String, use the character Code number for the first letter in the String.
//     - Use all four arguments in the callback function in your solution
//     - And a ternary wouldn't hurt
const nums1 = [8, 21.3, 16, 55, 22, 44]; // should be 27
const nums2 = [11.12, 43, 56.22, 78, 98, 11]; // should be 49
const nums3 = [2, 1222, 3444, 7254, 83.04444, 1111]; // should be 2186
const nums4 = [2, 1222,'sneeze', 3444, 7254, 8, 'abacus']; //should be 1734

const avg1 = nums1.reduce((acc, val, idx) => acc + val) / nums1.length;
console.log(Math.floor(avg1));
const avg2 = nums2.reduce((acc,val,idx) => acc + val) / nums2.length;
console.log(Math.floor(avg2));
const avg3 = nums3.reduce((acc,val,idx) => acc + val) / nums3.length;
console.log(Math.floor(avg3));
const avg4 = nums4.reduce((acc, val, idx) => {
    const number = (typeof(val) === 'number') ? acc + val : val.charCodeAt(0);
        return number;
}) / nums4.length;
console.log(avg4) // Not sure about this one.

// 4.  Choose all the companies that started after 2000 and sort them ascending
let businesses = [
    { company: 'Amex', startYear: 2000 },
    { company: 'Chase', startYear: 1998 },
    { company: 'Citibank', startYear: 2010 },
    { company: 'BOA', startYear: 1980 },
    { company: 'TD', startYear: 2001 },
    { company: 'Mastercard', startYear: 2011 },
    { company: 'VISA', startYear: 2000 }
    ];

    const companies = businesses.filter((biz) => biz['startYear'] > 2000).sort((a,b) => (a.startYear > b.startYear) ? 1 : -1);
    console.log(companies)

    // 5.  COMPUTE INTEGERS

//     - use the array methods to multiply all integers in an array by 5.
//       [1,2,3,4] should be [5,10,15,20]
//       [1,2,undefined,6] should be [5,10,30]
//       [1,3,25.5,4,32.9] should be [5,15,20]
    const arr1 = [1,2,3,4];
    const arr2 = [1,2,undefined,6];
    const arr3 = [1,3,25.5,4,32.9];

    const result1 = arr1.map(n => n * 5);
    result1;
    const result2 = arr2.filter(undf =>{
        return undf !== undefined;
    })
    .map(n => n * 5);
    result2;
    const result3 = arr3.filter(n => n % 1 === 0)
    .map(n => n * 5);
    result3