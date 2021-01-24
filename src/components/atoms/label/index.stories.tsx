import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Label from './'
import { Props } from './label'

export default {
  title: 'Label',
  component: Label,
} as Meta

const Template: Story<Props> = (args) => (
  <Label {...args}>{args.children}</Label>
)

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  children: '任意',
}

export const New = Template.bind({})
New.args = {
  type: 'new',
  children: 'NEW',
}

export const Required = Template.bind({})
Required.args = {
  type: 'required',
  children: '必須',
}
