/**
 * @fileoverview 二分查找(折半查找)是最简单的查找方式, 所依赖的数组必须是排序后的,
 *     复杂度是O(log2n)
 * @author Leo.Zhang(AceMood)
 * @email zmike86@gmail.com
 */

;(function(global) {

    'use strict';

    /**
     * @param array 遍历的数组
     * @param n 取前n项查找
     * @param key 查找项
     */
    function binary_search(array, n, key) {

        var low = 0,
            high = Math.min(array.length - 1, n),
            mid;

        while (low <= high) {
            mid = Math.floor((low + high) / 2);

            if (array[mid] > key) {
                high = mid - 1;
            } else if (array[mid] < key) {
                low = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }

    global.binary_search = binary_search;

})(this);