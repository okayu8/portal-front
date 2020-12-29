import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import MenuItem from './'
import { Props } from './menuItem'

export default {
  title: 'MenuItem',
  component: MenuItem,
} as Meta

const Template: Story<Props> = (args) => (
  <MenuItem {...args}>{args.children}</MenuItem>
)

export const Default = Template.bind({})
Default.args = {
  children: 'マイページ',
}

export const Selected = Template.bind({})
Selected.args = {
  children: 'マイページ',
  selected: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'マイページ',
  disabled: true,
}
