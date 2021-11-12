import { createSlice } from "@reduxjs/toolkit"
import * as Clipboard from 'expo-clipboard';
import {    getDateNow, 
            resetAllProdSelect,
            removeItemByIndex   } from "./ultility"
import {createNewEmptyOrder, createNewEmptyProd, createNewData} from "./template"

export const orderSlice = createSlice({
    name: 'store',
    initialState: {
        statsList: {
            select: [],
            editing: [],
            expanding: []
        },
        orders: []
    },
    reducers: {
        loadData: (state, action) => action.payload,
        createOrder: ({statsList, orders}) => {
            orders.push(createNewEmptyOrder())
            const newOrderIndex = orders.length - 1
            statsList.editing.push(newOrderIndex)
            statsList.expanding.push(newOrderIndex)
        },
        createProd: ({statsList, orders}, action) => {
            const [orderIndex] = action.payload
            const order = orders[orderIndex]
            order.prods.push(createNewEmptyProd())
        },
        toggleSelectProd: ({statsList, orders}, action) => {
            const [orderIndex, prodIndex] = action.payload
            const order = orders[orderIndex]
            const prod = order.prods[prodIndex]

            if(!prod.stats.select) {
                prod.stats.select = true
                order.stats.select.push(prodIndex)
                if(order.stats.select.length === 1)
                    statsList.select.push(orderIndex)
            }
            else {
                prod.stats.select = false
                order.stats.select = order.stats.select.filter(item => item !== prodIndex )
                if(order.stats.select.length === 0)
                    statsList.select = statsList.select.filter(item => item !== orderIndex )
            }
        },
        toggleSelectAllProd: ({statsList, orders}, action) => {
            const [orderIndex] = action.payload
            const order = orders[orderIndex]

            if(order.stats.select.length !== 0) {
                order.stats.select.forEach(prodIndex => {
                    order.prods[prodIndex].stats.select = false
                })
                order.stats.select = []
                statsList.select = statsList.select.filter(item => item !== orderIndex )
            }
            else {
                order.prods.forEach((prod, index) => {
                    prod.stats.select = true
                    order.stats.select.push(index)
                })
                statsList.select.push(orderIndex)
            }
        },
        toggleSelectAllOrder: ({statsList, orders}) => {
            if(statsList.select.length !== 0) {
                statsList.select.forEach(orderIndex => {
                    const order = orders[orderIndex]
                    if(order.stats.select.length !== 0) {
                        order.stats.select.forEach(prodIndex => {
                            order.prods[prodIndex].stats.select = false
                        })
                        order.stats.select = []
                    }
                })
                statsList.select = []
            }
            else orders.forEach((order, index) => {
                order.prods.forEach((prod, index) => {
                    prod.stats.select = true
                    order.stats.select.push(index)
                })
                statsList.select.push(index)
            })
        },
        toggleExpandOrder: ({statsList, orders}, action) => {
            const [orderIndex] = action.payload
            const order = orders[orderIndex]
            if(!order.stats.expanding) {
                order.stats.expanding = true
                statsList.expanding.push(orderIndex)
            }
            else {
                order.stats.expanding = false
                statsList.expanding = statsList.expanding.filter(item => item !== orderIndex)
            }
        },
        toggleExpandAllOrder: ({statsList, orders}) => {
            if(statsList.expanding.length !== 0) {
                statsList.expanding.forEach(orderIndex => {
                    orders[orderIndex].stats.expanding = false
                })
                statsList.expanding = []
            }
            else orders.forEach((order, index) => {
                order.stats.expanding = true
                statsList.expanding.push(index)
            })
        },
        toggleEditingMode: ({statsList, orders}) => {
            if(statsList.editing.length !== 0) {
                statsList.editing.forEach(orderIndex => {
                    orders[orderIndex].stats.editing = false
                })
                statsList.editing = []
            }
            else {
                statsList.select.forEach(orderIndex => {
                    orders[orderIndex].stats.editing = true
                    resetAllProdSelect(orders[orderIndex])
                    statsList.editing.push(orderIndex)
                })
                statsList.select = []
            }
        },
        
        deleteSelectedItem: ({statsList, orders}) => {
            let orderRemoveIndexList = []
            if(statsList.select.length !== 0) {
                statsList.select.forEach(orderIndex => {
                    const order = orders[orderIndex]
                    if(order.stats.select.length === order.prods.length) {
                        orderRemoveIndexList.push(orderIndex)
                    }
                    else {
                        removeItemByIndex(order.prods, order.stats.select)
                        order.stats.select = []

                    }
                })
                removeItemByIndex(orders, orderRemoveIndexList)
                statsList.select = []
                statsList.editing = []
                statsList.expanding = []
                orders.forEach((order, index) => {
                    if(order.stats.editing) statsList.editing.push(index)
                    if(order.stats.expanding) statsList.expanding.push(index)
                })
            }
        },
        
        toggleComplete: ({statsList, orders}, action) => {
            const [orderIndex] = action.payload
            const order = orders[orderIndex]

            order.stats.complete = !order.stats.complete
            if(order.stats.complete)
                order.displayData.completeDate = getDateNow()
            else
                order.displayData.completeDate = {}
        },
        setOrderData: ({statsList, orders}, action) => {
            const [orderIndex, dataKey, data] = action.payload
            const order = orders[orderIndex]

            order.displayData[dataKey] = data
        },
        setProdData: ({statsList, orders}, action) => {
            const [orderIndex, prodIndex, dataKey, data] = action.payload
            const order = orders[orderIndex]
            const prod = order.prods[prodIndex]

            prod.displayData[dataKey] = data
        },
        copyToClipboardPostCode: ({statsList, orders}) => {
            const data = 
                (statsList.select.reduce((result, orderIndex) => {
                    const order = orders[orderIndex]
                    const selectStat = order.stats.select
                    resetAllProdSelect(orders[orderIndex])
                    return result + selectStat.reduce((resultOfOrder, prodIndex) => {
                        return resultOfOrder + order.prods[prodIndex].displayData.postCode + '\n'
                    }, '')
                }, ''))
            Clipboard.setString(data)
        }
    }
})

export const {  
    loadData,
    createOrder, 
    createProd, 
    toggleSelectProd,
    toggleSelectAllProd,
    toggleSelectAllOrder,
    toggleExpandOrder,
    toggleExpandAllOrder,
    toggleEditingMode,
    deleteSelectedItem,
    toggleComplete,
    setOrderData,
    setProdData,
    copyToClipboardPostCode

} = orderSlice.actions

export default orderSlice.reducer