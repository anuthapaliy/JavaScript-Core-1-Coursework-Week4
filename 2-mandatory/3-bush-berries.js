/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.

  The pink berries are the ONLY safe ones to eat.

  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.
  Use the tests to confirm which message to return
  
  This exercise can be solved in a few different ways. One way might include the array methods
  .some() and .every(). 
  
  The .some() method tests to see if some of the values (at least 1) in an array 
  match what you're looking for and returns true or false. 
  
  The .every() method will only return true if all values match watch you're looking for. 
  
  Let's first look at an example that will teach you how to use these methods.
*/

function isBerrySafe(berry){
    if(berry=== "pink"){
      return  true;
   }else{
     return false;
     }
   };

//// Main function
function isBushSafe(berries){
  
  let allBerriesArePink = berries.every(isBerrySafe); // either true or false

    if(allBerriesArePink===true){
      return "Bush is safe to eat from" ;
    }else{
     return  "Toxic! Leave bush alone!"
    }
};

// with arrow function

      
      
   



// function isBushSafe(berryArray) {
//   let allPinkBerries = berryArray.every(isBushSafe);


//   if(allPinkBerries){
//     return "Bush is safe to eat"
//   }else{
//     return "Bush is not safe to eat"
//   }
// }

// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// Expected output: true


/* ======= TESTS - DO NOT MODIFY ===== */

test("isBushSafe finds toxic busy", () => {
  expect(
    isBushSafe(["pink", "pink", "pink", "neon", "pink", "transparent"])
  ).toEqual("Toxic! Leave bush alone!");
});

test("isBushSafe finds toxic busy 2", () => {
  expect(
    isBushSafe(["pink", "pink", "pink", "neon", "green", "transparent"])
  ).toEqual("Toxic! Leave bush alone!");
});

test("isBushSafe function finds safe bush", () => {
  expect(isBushSafe(["pink", "pink", "pink", "pink"])).toEqual(
    "Bush is safe to eat from"
  );
});
