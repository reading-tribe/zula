import * as React from 'react'
import { ScrollView, StyleSheet, ScrollViewProps } from "react-native";

export const FullHeightScrollView = (props: {
  children: React.ReactNode
} & Omit<ScrollViewProps, 'contentContainerStyle'>) => {
  return (
    <ScrollView contentContainerStyle={styles.grow} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} {...props}>
      {props.children}
    </ ScrollView>
  )
}

const styles = StyleSheet.create({
  grow: { flexGrow: 1 },
})
