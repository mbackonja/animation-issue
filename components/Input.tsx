import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { View, TextInput, TextInputProps, StyleSheet, Pressable } from 'react-native'

interface MyTextInputProps extends TextInputProps {
  readonly secureTextEntry?: boolean
}

export default function Input({ secureTextEntry,...props }: MyTextInputProps) {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

    return (
      <View style={styles.inputWrap}>
        <TextInput
          style={[
            styles.input,
            secureTextEntry && [styles.inputAppend, styles.inputAppendWithIcon]
          ]}
          secureTextEntry={!showPassword && secureTextEntry}
          {...props}
        />
        {secureTextEntry && (
          <Pressable onPress={toggleShowPassword} style={[styles.inputAdditionalInfoWrap, styles.inputAppendWrap]}>
            <MaterialIcons
              name={showPassword ? 'visibility-off' : 'visibility'}
              style={styles.passwordVisibilityIcon}
            />
          </Pressable>
        )}
      </View>
    )
  }

const styles = StyleSheet.create({
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#101828',
    backgroundColor: '#FFFFFF',
    width: '100%'
  },
  passwordVisibilityIcon: {
    fontSize: 16,
    lineHeight: 16,
    width: 16,
    height: 16,
    color: '#6B7280'
  },
  inputAppend: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  inputAppendWithIcon: {
    paddingRight: 0,
    borderRightWidth: 0
  },
  inputAdditionalInfoWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    backgroundColor: '#FFFFFF'
  },
  inputAppendWrap: {
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8
  },
})
