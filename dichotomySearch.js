/**
 * 二分查找
 * @param {Number} arr 数组
 * @param {String} target 目标
 */

function search(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    // left <= right: 当数组元素只一个时，left=right的
    while (left <= right) {
        let mid = Math.round((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        // arr[mid]已经做过比较，故可将其在下一次比较的队列中排除。
        if (arr[mid] < target) {
            left = mid + 1;
        }
        if (arr[mid] > target) {
            right = mid -1;
        }
    }
    return -1;
}
