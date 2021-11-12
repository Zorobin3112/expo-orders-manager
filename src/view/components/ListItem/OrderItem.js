import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  createProd,
          toggleSelectAllProd,
          toggleExpandOrder,
          toggleComplete,
          setOrderData } from '../../../redux/orderSlice'
import styleOrderItem from './styles/OrderItem.style.js'
import { View, FlatList, TextInput, TouchableWithoutFeedback } from 'react-native'
import { IconButton, Header, Section, TitleInput } from '../Core'
import ProdItem from './ProdItem'
import { i_checkmark, i_expandArrow, i_collapseArrow, i_addList } from '../../assets/icon'

export default function OrderItem({displayData, stats, prods, orderIndex}) {
  const dispatch = useDispatch()
  let selectStatus = ''
  if(stats.select.length === 0) selectStatus = 'none'
  else if(stats.select.length < prods.length) selectStatus = 'some'
  else if(stats.select.length === prods.length) selectStatus = 'all'

  const orderSelectStats = {
    "none": {
      backgroundColor: '#fff',
      iconSource: null
    },
    "all": {
      backgroundColor: '#fff',
      iconSource: i_checkmark
    },
    "some": {
      backgroundColor: 'orange',
      iconSource: i_checkmark
    }
  }
  
  return (
    <View style={styleOrderItem.container}>
      <TouchableWithoutFeedback
        delayLongPress={1000}
        onLongPress={() => dispatch(toggleComplete([orderIndex]))}
      >
        <View>
          <Header
            backgroundColor={stats.complete? 'rgb(0, 128, 0)': 'rgb(25, 118, 210)'}
            borderRadius={5}
            leftContent={
              <IconButton
                id='orderSelect'
                iconSource={orderSelectStats[selectStatus].iconSource}
                backgroundColor={orderSelectStats[selectStatus].backgroundColor}
                width={30}
                height={30}
                onPress={() => dispatch(toggleSelectAllProd([orderIndex]))}
              />
            }
            centerContent={
              <TextInput
                style={styleOrderItem.customerName}
                backgroundColor={stats.editing? '#b0c4de': null}
                color={stats.editing? '#333': '#fff'}
                value={displayData.customerName}
                editable={stats.editing}
                onChangeText={text => dispatch(setOrderData([orderIndex, 'customerName', text]))}
              />
            }
            rightContent={
              <>
                <IconButton
                  id='addList'
                  iconSource={i_addList}
                  onPress={() => dispatch(createProd([orderIndex]))}
                />
                <IconButton
                  id='expand'
                  iconSource={stats.expanding? i_collapseArrow: i_expandArrow}
                  borderRadius={9999}
                  onPress={() => dispatch(toggleExpandOrder([orderIndex]))}
                />
              </>
            }
          />
        </View>
      </TouchableWithoutFeedback>
      <Section style={styleOrderItem.topBar}>
        <TitleInput
          id='creatingDate'
          title='Ngày tạo'
          value={displayData.creatingDate.dateToString}
          editable={false}
          flex={1}
        />
      </Section>
      {stats.complete && 
        <Section style={styleOrderItem.topBar}>
          <TitleInput
            id='completeDate'
            title='Ngày hoàn thành'
            value={displayData.completeDate.dateToString}
            editable={false}
            flex={1}
          />
        </Section>
      }
      <Section style={styleOrderItem.topBar}>
        <TitleInput
          id='total'
          title='Tổng(¥)'
          value={1000}
          editable={false}
          flex={1}
        />
        <TitleInput
          id='note'
          title='Ghi chú'
          value={displayData.note}
          editable={stats.editing}
          flex={3}
          onChangeText={text => dispatch(setOrderData([orderIndex, 'note', text]))}
        />
      </Section>
      {stats.expanding && 
        <FlatList
          data={prods}
          renderItem={({item, index}) => (
            <ProdItem
              {...item}
              orderIndex={orderIndex}
              prodIndex={index}
              editing={stats.editing}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      }
    </View>
  )
}
