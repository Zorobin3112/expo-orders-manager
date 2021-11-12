import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSelectProd, setProdData } from '../../../redux/orderSlice'
import styleProdItem from './styles/ProdItem.style.js'
import { View } from 'react-native'
import { Section, IconButton, TitleInput } from '../Core'
import { i_checkmark } from '../../assets/icon'

export default function ProdItem({displayData, stats, orderIndex, prodIndex, editing}) {
  const dispatch = useDispatch()

  return (
    <Section style={styleProdItem.container}>
      <View style={styleProdItem.leftSection}>
        <IconButton
          id='orderSelect'
          iconSource={stats.select?i_checkmark:null}
          width={30}
          height={30}
          backgroundColor='#ccc'
          onPress={() => dispatch(toggleSelectProd([orderIndex, prodIndex]))}
        />  
      </View>
      <View style={styleProdItem.inputSection}>
        <Section style={styleProdItem.inputRow}>
          <TitleInput
            id='prodName'
            title='Tên sản phẩm'
            value={displayData.prodName}
            editable={editing}
            flex={1}
            onChangeText={text => dispatch(setProdData([orderIndex, prodIndex, 'prodName', text]))}
          />
        </Section>
        <Section style={styleProdItem.inputRow}>
          <TitleInput
            id='quantity'
            title='Số lượng'
            value={displayData.quantity}
            editable={editing}
            flex={1}
            onChangeText={text => dispatch(setProdData([orderIndex, prodIndex, 'quantity', text]))}
          />
          <TitleInput
            id='buyPrice'
            title='Giá mua(¥)'
            value={displayData.buyPrice}
            editable={editing}
            flex={1}
            onChangeText={text => dispatch(setProdData([orderIndex, prodIndex, 'buyPrice', text]))}
          />
          <TitleInput
            id='sellPrice'
            title='Giá bán(¥)'
            value={displayData.sellPrice}
            editable={editing}
            flex={1}
            onChangeText={text => dispatch(setProdData([orderIndex, prodIndex, 'sellPrice', text]))}
          />
          <TitleInput
            id='postPrice'
            title='Tiền gửi(¥)'
            value={displayData.postPrice}
            editable={editing}
            flex={1}
            onChangeText={text => dispatch(setProdData([orderIndex, prodIndex, 'postPrice', text]))}
          />
        </Section>
        <Section style={styleProdItem.inputRow}>
          <TitleInput
            id='postCode'
            title='Mã vận chuyển'
            value={displayData.postCode}
            editable={editing}
            flex={1}
            onChangeText={text => dispatch(setProdData([orderIndex, prodIndex, 'postCode', text]))}
          />
        </Section>
      </View>
    </Section>
  )
}
