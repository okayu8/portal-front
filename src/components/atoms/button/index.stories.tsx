import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Button from './'
import { Props } from './button'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story<Props> = (args) => (
  <Button {...args}>{args.children}</Button>
)

export const Default = Template.bind({})
Default.args = {
  color: 'default',
  children: 'ログアウト',
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  children: '▶︎ マイページ',
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'danger',
  children: 'Danger',
}
