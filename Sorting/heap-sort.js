/**
 * @fileoverview Heap Sort In JavaScript
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

;(function(global) {

    'use strict';

    /**
     * 对一个数组保持堆的性质
     * @param {!Array} array
     * @param {number} i
     */
    function MAX_HEAPIFY (array, i) {
        var leftNode = 2 * i + 1,
            rightNode = 2 * i + 2;
        var largest, temp;

        if (leftNode < array.length && array[leftNode] > array[i]) {
            largest = leftNode
        } else {
            largest = i
        }

        if (rightNode < array.length && array[rightNode] > array[largest]) {
            largest = rightNode
        }

        if (largest !== i) {
            temp = array[i];
            array[i] = array[largest];
            array[largest] = temp;

            MAX_HEAPIFY(array, largest)
        }
    }


    /**
     * 以一个数组来建立最大堆
     * @param {!Array} array
     */
    function BUILD_MAX_HEAP (array) {
        var heapSize = array.length;
        for (var i = Math.floor((heapSize - 1)/2); i >= 0; i--) {
            MAX_HEAPIFY(array, i)
        }
    }


    /**
     * HEAPSORT(A)
     * 1. BUILD_MAX_HEAP(A)
     * 2. for i <- length(A) downto 2
     * 3.   do exchange A[1] <-> A[I]
     * 4.     heap-size[A] <- heap-size[A] - 1
     * 5.     MAX_HEAPIFY(A, 1)
     *
     * 最差时间复杂度	O(nlogn)
     * 最优时间复杂度	O(nlogn)
     * 平均时间复杂度	O(nlogn)
     * 最差空间复杂度	总共O(n)
     *
     * @param {Array} arr An array to be sorted.
     * @return {Array} the result array.
     */
    function heapSort (arr) {
        var ret = [];
        BUILD_MAX_HEAP(arr);
        // console.log("after build, arr is " + arr);
        var i, j;
        var temp;
        for (i = arr.length - 1 ; i >= 0; i--) {
            temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;

            ret.push(arr.pop());
            MAX_HEAPIFY(arr, 0);
        }
        return ret
    }

    global.heapSort = heapSort;

// Usage:
// var arr = [3, 2, 4, 9, 1, 5, 7, 6, 8];
// var arrSorted = heapSort(arr);

// console.log(arrSorted);

})(this);