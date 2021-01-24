import React, { useState, useCallback } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Input from './'
import { Props } from './input'

export default {
  title: 'Input',
  component: Input,
} as Meta

const Template: Story<Props> = (args) => {
  const [value, setValue] = useState<string>('テキスト')
  const onChange_ = useCallback(
    (event) => {
      setValue(event.target.value)
    },
    [value]
  )
  return <Input {...args} value={value} onChange={onChange_} />
}

export const Default = Template.bind({})
Default.args = {}
