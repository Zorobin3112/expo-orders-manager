import { getData } from './storage.js'
import { getDateNow } from './ultility'

export function createNewEmptyProd() {
    return {
        displayData: {
            prodName: 'pname',
            quantity: 1,
            buyPrice: 100,
            sellPrice: 110,
            postPrice: 111,
            postCode: 'pC',
        },
        stats: {
            select: false,
        }
    }
}

export function createNewEmptyOrder() {
    return {
        displayData: {
            customerName: 'name',
            creatingDate: getDateNow(),
            completeDate: {},
            note: 'note',
        },
        stats: {
            select: [],
            editing: true,
            expanding: true,
            complete: false
        },
        prods: [createNewEmptyProd()]
    }
}

export function createNewData() {
    return getData().then(data => data)
}
