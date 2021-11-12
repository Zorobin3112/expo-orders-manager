function removeItemByIndex(array, indexList) {
    let deletedItemNum = 0

    indexList.forEach(item => {
        array.splice(item-deletedItemNum, 1)
        deletedItemNum++
    });

    return array
}

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(removeItemByIndex(a, [0, 4, 6, 7]));