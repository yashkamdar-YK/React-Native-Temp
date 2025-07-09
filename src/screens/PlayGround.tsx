import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { FONTS } from '../styles/typography'

const PlayGround = () => {
  return (
    <SafeAreaView>
      <View style={{
        paddingHorizontal: 20,
        flex: 1,
      }} >
        <Text
          style={{
            fontSize: 28,
            marginTop: 20,
            fontFamily: FONTS.MEDIUM,
          }}
        >Playground</Text>
      </View>
    </SafeAreaView>
  )
}

export default PlayGround