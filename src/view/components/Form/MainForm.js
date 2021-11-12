import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  createOrder, 
          toggleEditingMode,
          toggleSelectAllOrder,
          toggleExpandAllOrder,
          deleteSelectedItem } from '../../../redux/orderSlice'
import styleMainForm from './styles/MainForm.style.js'
import { FlatList, Text, ScrollView } from 'react-native'
import { Section, Header, IconButton } from '../Core'
import { OrderItem } from '../ListItem'
import { i_menu, i_addList, i_edit, i_delete, i_collapseArrow, i_expandArrow, i_selectAll } from '../../assets/icon'

export default function MainForm() {
  const statsList = useSelector(state => state.store.statsList)
  console.log("Main Stat: ", statsList);
  const orders = useSelector(state => state.store.orders)
  const dispatch = useDispatch()

  const select = statsList.select.length !== 0
  const editing = statsList.editing.length !== 0
  const expanding = statsList.expanding.length !== 0

  return (
    <>
      <Header
        leftContent={
          <IconButton
            id='menu'
            iconSource={i_menu}
            onPress={() => {}}
          />
        }
        centerContent={
          <Text style={styleMainForm.title}>
            QUẢN LÝ BÁN HÀNG
          </Text>
        }
        rightContent={
          <IconButton
            id='addList'
            iconSource={i_addList}
            onPress={() => dispatch(createOrder())}
          />
        }
      />
      
      <FlatList 
        data={orders}
        renderItem={({item, index}) => (
          <OrderItem
            {...item}
            orderIndex={index}
          />
        )}
        keyExtractor={(item, index) => index}
      />

      {(orders.length !== 0)&&
        <Section style={styleMainForm.footer}>
          {!editing &&
            <IconButton
              id='SelectAll'
              iconSource={i_selectAll}
              backgroundColor={select? 'rgb(25, 118, 210)': 'rgb(245, 245, 245)'}
              underlayColor='rgb(25, 118, 210)'
              onPress={() => dispatch(toggleSelectAllOrder())}
            />
          }
          {!editing &&
            <IconButton
              id='ExpandAll/CollapseAll'
              iconSource={expanding? i_collapseArrow :i_expandArrow}
              backgroundColor='rgb(245, 245, 245)'
              underlayColor='rgb(25, 118, 210)'
              onPress={() => dispatch(toggleExpandAllOrder())}
            />
          }
          <IconButton
            id='edit'
            iconSource={i_edit}
            backgroundColor={editing? 'rgb(25, 118, 210)': 'rgb(245, 245, 245)'} 
            underlayColor='rgb(25, 118, 210)'
            onPress={() => dispatch(toggleEditingMode())}
          />
          {!editing&&
            <IconButton
              id='delete'
              iconSource={i_delete}
              underlayColor='rgb(25, 118, 210)'
              onPress={() => dispatch(deleteSelectedItem())}
            />
          }
        </Section>
      }
    </>
  )
}
