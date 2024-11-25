import React from 'react'
import {
  Pressable,
  PressableProps,
  Text,
  StyleSheet,
} from 'react-native'

interface MyPressableProps extends PressableProps {
  readonly variant?: 'primary' | 'secondary'
  readonly title: string
}

export default function Button({
  variant,
  title,
  ...props
}: MyPressableProps) {
  return (
    <Pressable style={[styles.button, variant ? styles[variant] : styles.primary ]} {...props}>
      <Text style={variant ? styles[`${variant}Text`] : styles.primaryText}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#099250',

    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8
  },
  primary: {
    backgroundColor: '#099250'
  },
  primaryText: {
    color: '#FFFFFF'
  },
  secondary: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    backgroundColor: '#FFFFFF'
  },
  secondaryText: {
    color: '#344054'
  },
  dangerText: {
    color: '#FFFFFF'
  }
})
