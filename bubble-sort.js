/**
 * @fileoverview Bubble Sort In JavaScript
 * @author AceMood 
 * @email zmike86@gmail.com
 *
 * @License 
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 AceMood
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


/**
 * Order an array.
 * @param {Array} arr An array to be sorted.
 * @param {boolean} orderUp If ordering up or not.
 * @return {Array} the result array.
 */ 
function bubbleSort (arr, orderUp) {
  var i, j;
  var temp;
  var cmpFn = orderUp ? function (a, b) {
    return a > b
  } : function (a, b) {
    return b > a
  };
  for (i = arr.length - 1 ; i >= 0; i--) {
    for (j = 0; j < i; j++) {
      if (cmpFn(arr[j], arr[j + 1])) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}

// Usage: 
var arr = [3, 2, 4, 9, 1, 5, 7, 6, 8];
var arrSorted = bubbleSort(arr);

console.log(arrSorted);