function removeItemByIndex(array, indexList) {
    let deletedItemNum = 0

    indexList.forEach(item => {
        array.splice(item-deletedItemNum, 1)
        deletedItemNum++
    });
}

function updateStatsListByDeletedIndex(statList, deletedindexList) {
    
    deletedindexList.forEach(deletedItem => {
        let deletedItemInStatList = []
        statList.forEach((statItem, index) => {
            if(deletedItem < statItem) {
                statList[index]--
                console.log(statList[index]);
            }
            else if(deletedItem === statItem) deletedItemInStatList.push(index)
        })
        removeItemByIndex(statList, deletedItemInStatList)
    });
}

const a = [0, 5, 6, 3, 4, 7]
const b = [0, 1, 4, 6]
updateStatsListByDeletedIndex(a, b)
console.log(a);