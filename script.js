function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        const rangeArray = rangeOfNumbers(startNum + 1, endNum);
        rangeArray.unshift(startNum); // если push, то [9, 8, 7, 6, 5, 4]
        return rangeArray;
    }
};

console.log(rangeOfNumbers(4, 9)); // [4, 5, 6, 7, 8, 9]
