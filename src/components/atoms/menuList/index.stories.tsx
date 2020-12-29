import React from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'

import MenuList from './'
import { Props } from './menuList'

import MenuItem from '../menuItem'

export default {
  title: 'MenuList',
  component: MenuList,
} as Meta

const Wrapper_ = styled.div({
  width: '200px',
})

const Template: Story<Props> = () => (
  <Wrapper_>
    <MenuList>
      <MenuItem>アイテム１</MenuItem>
      <MenuItem selected>アイテム２</MenuItem>
      <MenuItem>アイテム３</MenuItem>
      <MenuItem>アイテム４</MenuItem>
      <MenuItem disabled>アイテム５</MenuItem>
      <MenuItem>アイテム６</MenuItem>
    </MenuList>
  </Wrapper_>
)

export const Default = Template.bind({})
