import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Props } from './dropDownMenu'

import DropDownMenu from './'
import MenuList from '../../atoms/menuList'
import MenuItem from '../../atoms/menuItem'
import Button from '../../atoms/button'

export default {
  title: 'DropDownMenu',
  component: DropDownMenu,
} as Meta

const MenuWrapper_ = styled.div({
  width: '200px',
})

const menuItems = [
  { name: 'アイテム1' },
  { name: 'アイテム2' },
  { name: 'アイテム3' },
  { name: 'アイテム4' },
  { name: 'アイテム5' },
]

const Template: Story<Props> = () => {
  const [selectedItem, setSelectedItem] = useState<number>(1)
  const triggerComponent = (
    <Button color="primary">{menuItems[selectedItem].name}</Button>
  )

  const onClick_ = useCallback((index: number) => {
    setSelectedItem(index)
  }, [])
  return (
    <DropDownMenu triggerComponent={triggerComponent}>
      <MenuWrapper_>
        <MenuList>
          {menuItems.map((value, index) => (
            <MenuItem
              key={index}
              onClick={() => onClick_(index)}
              selected={selectedItem === index}
            >
              {value.name}
            </MenuItem>
          ))}
        </MenuList>
      </MenuWrapper_>
    </DropDownMenu>
  )
}

export const Default = Template.bind({})
