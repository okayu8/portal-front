import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Story, Meta } from '@storybook/react/types-6-0'

import CommonHeader from './'
import { Props } from './common-header'

export default {
  title: 'CommonHeader',
  component: CommonHeader,
} as Meta

const pagesArray = [
  { name: 'マイページ', id: 0, href: '/' },
  { name: 'お知らせ', id: 1, href: '/news' },
  { name: 'カレンダー', id: 2, href: '/calendar' },
  { name: 'TO DO', id: 2, href: '/todo' },
  { name: '個人設定', id: 3, href: '/settings' },
]

const Template: Story<Props> = () => (
  <Router>
    <CommonHeader pagesArray={pagesArray} userName="田中 太郎" />
  </Router>
)

export const Default = Template.bind({})
