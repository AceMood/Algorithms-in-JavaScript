/**
 * @fileoverview 插值查找是对二分查找进行了优化, 所依赖的数组必须是排序后的,
 *     复杂度是O(log2n). 虽然复杂度没有减少但是执行比较的次数多数情况下会减少.
 *     关键在于插值计算公式 ln25的代码变化.
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
    function interpolation_search(array, n, key) {

        var low = 0,
            high = Math.min(array.length - 1, n),
            mid;

        while (low <= high) {
            mid = Math.floor(low + ((key - array[low]) / (array[high] - array[low])) * (high - low));

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

    global.interpolation_search = interpolation_search;

})(this);