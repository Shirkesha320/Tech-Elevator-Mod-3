/**
 * Write a function called isAdmitted. It will check entrance
 * scores and return true if the student is admitted and
 * false if rejected. It takes three parameters:
 *
 *     * gpa
 *     * satScore (optional)
 *     * recommendation (optional)
 *
 * Admit them--return true--if:
 * gpa is above 4.0 OR
 * SAT score is above 1300 OR
 * gpa is above 3.0 and they have a recommendation OR
 * SAT score is above 1200 and they have a recommendation
 * OTHERWISE reject it
 *
 * @param {number} gpa the GPA of the student, between 4.2 and 1.0
 * @param {number} [satScore=0] the student's SAT score
 * @param {boolean} [recommendation=false] does the student have a recommendation
 * @returns {boolean} true if they are admitted
 */
    function isAdmitted(gpa, satScore=0, recommendation=false) {
        if (gpa > 4.0) {
            return true;
        }
        if (satScore > 1300) {
            return true;
        }
        if (gpa > 3.0 && recommendation == true){
            return true;
        }
        if (satScore > 1200 && recommendation == true) {
            return true;
        }
        return false;
          }

        // if (gpa > 4.0 || satScore > 1300 || gpa > 3.0 && recommendation == true || 
        //     satScore > 1200 && recommendation == true) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        

/**
 * Write a function called useParameterToFilterArray that takes an anonymous
 * function and uses that in the `unfilteredArray` filter function. Return the result.
 *
 * @param {function} filterFunction the function to filter with
 * @returns {number[]} the filtered array
 */
         
    function useParameterToFilterArray(filterFunction) {
        let unfilteredArray = [1, 2, 3, 4, 5, 6];
        return unfilteredArray.filter(filterFunction);
       
        // let result = unfilteredArray.filter((filterFunction) => {
        //     return filterFunction;
        // });
        //     return result;
    }
/**
 * Write a function called makeNumber that takes two strings
 * of digits, concatenates them together, and returns
 * the value as a number.
 *
 * So if two strings are passed in "42293" and "443", then this function
 * returns the number 42293443.
 *
 * @param {string} first the first string of digits to concatenate
 * @param {string} [second=''] the second string of digits to concatenate
 * @returns {number} the resultant number
 */

    function makeNumber(first, second= '') {
        return parseInt(first + second);


       // let result = "";

        // for (let i = 0; i < arguments.length; i++) {
        //     result += arguments[i];
        //     result = Number.parseInt(result);
        // }
        // return result;
    }

/**
 * Write a function called addAll that takes an unknown number of parameters
 * and adds all of them together. Return the sum.
 *
 * @param {...number} num a series of numbers to add together
 * @returns {number} the sum of all the parameters (or arguments)
 */

    function addAll() {

        let sum = 0;

        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        return sum;
    }

    
/*
 * Write and document a function called makeHappy that takes
 * an array and prepends 'Happy ' to the beginning of all the
 * words and returns them as a new array. Use the `map` function.
 */

/**
 * Adds the word "Happy" to each word and return new array
 * @param {string} 
 *  @returns {string}
 */
    function makeHappy(words) {

        for (i = 0; i < words.length; i++) {
            words[i] = 'Happy ' + words[i];
        }
            return words;
         
        // let prependsHappy = words.map ((word) => {
        //     return "Happy " + word;
        // });

        // return prependHappy;
                  
    }


        // let = array.map((word) => {
        //     return "Happy" + word;
        // });

        // return makeHappy;
    
    //     array = array.map(word => `Happy `);
    //     return array;
     

/*
 * Write and document a function called getFullAddressesOfProperties
 * that takes an array of JavaScript objects containing the
 * following keys:
 *     * streetNumber
 *     * streetName
 *     * streetType
 *     * city
 *     * state
 *     * zip
 *
 * and returns an array of strings that turns the JavaScript objects
 * into a mailing address in the form of:
 *     streetNumber streetName streetType city state zip
 *
 * Use `map` and an anonymous function.
 */

/**
 * 
 * @param {string[]} properties
 * @returns 
 */

     function getFullAddressesOfProperties(properties) {

        return properties.map((address) => {
        return `${address.streetNumber} ${address.streetName} ${address.streetType} ${address.city} ${address.state} ${address.zip}`;
        });
     }

/*
 * Write and document a function called findLargest.
 *
 * Using `forEach`, find the largest element in an array.
 * It must work for strings and numbers.
 * @param {number[] || string[]}
 * @returns {number[] || string[]}
 */

     function findLargest(findIt) {

        let largest = findIt[0];

           findIt.forEach(element => {
                if (largest < element) {
                    largest = element;
                }
            });
                return largest;
        

        }
            // array.forEach(function(element) {
            //     if (largest < element)
            //     array = element;
            // });
            // return array + 1;
      

        // for (let i = 0; i < array.length; i++) {
        //     if (array[i] >largestNum) {
        //         largestNum = array[i];
        //     }
        // }
        // return largestNum;
     

/*
 * CHALLENGE
 * Write and document a function called getSumOfSubArrayValues.
 *
 * Take an array of arrays, adds up all sub values, and returns
 * the sum. For example, if you got this array as a parameter:
 * [
 *   [1, 2, 3],
 *   [2, 4, 6],
 *   [5, 10, 15]
 * ];
 *
 * The function returns 48. To do this, you will use two nested `reduce`
 * calls with two anonymous functions.
 *
 * Read the tests to verify you have the correct behavior.
 * 
 * @param {array} get all the numbers in the array and add them leave empty id its 0
 * 
 * @return {number} sum of all the numbers in the array
 * 
 */

        function getSumOfSubArrayValues(array=[]) {


            if (array.length == 0) return 0;
            return array.reduce((result, currentArray) => result.concat(currentArray)).reduce((result, currentArray) => 
           result + currentArray)
           
        }


    //        return array.reduce((sum, array) => {
    //            return (sum + array.reduce((sum, number) => {
    //                return sum + number;
    //            }, 0)
    //            );
    //        }, 0);
    //    }
