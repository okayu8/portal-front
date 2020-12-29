import React from 'react'
import styled from 'styled-components'

import { Color } from '../../../const/color'

export type Props = {
  children?: React.ReactNode
}

const MenuList_ = styled.ul({
  padding: 0,
  margin: 0,
  overflow: 'hidden',
  borderRadius: '8px',
  boxShadow: `0 0 4px ${Color.cover_light_gray}`,
  backgroundColor: Color.white,
})

export const MenuList: React.FC<Props> = ({ children }) => {
  return <MenuList_>{children}</MenuList_>
}
