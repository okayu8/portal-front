import React from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'

import CommonHeader from './'
import { Props } from './common-header'

export default {
  title: 'CommonHeader',
  component: CommonHeader,
} as Meta

const pagesArray = [
  { name: 'マイページ', id: 0 },
  { name: 'カレンダー', id: 1 },
  { name: 'お知らせ', id: 2 },
  { name: '個人設定', id: 3 },
]

const Template: Story<Props> = () => (
  <CommonHeader pagesArray={pagesArray} userName="田中 太郎" />
)

export const Default = Template.bind({})
