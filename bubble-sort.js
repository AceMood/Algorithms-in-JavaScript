/**
 * @fileoverview Bubble Sort In JavaScript
 * @author AceMood 
 * @email zmike86@gmail.com
 *
 * @License Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Order an array.
 * @param {Array} arr
 * @param {boolean} orderUp
 * @return {Array}
 */ 
function bubbleSort (arr, orderUp) {
  var i = arr.length, j;
  var temp;
  var cmpFn = orderUp ? function (a, b) {
	return a > b
  } : function (a, b) {
	return b > a
  };
  while (i > 0) {
    for (j = 0; j < i - 1; j++) {
      if (cmpFn(arr[j], arr[j + 1])) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    i--;
  }
  return arr
}

// Usage: 
var arr = [3,2,4,9,1,5,7,6,8];
var arrSorted = bubbleSort(arr);

console.log(arrSorted);