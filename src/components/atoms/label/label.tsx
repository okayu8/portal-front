import React from 'react'
import styled from 'styled-components'

import { Color } from '../../../const/color'

export type Props = {
  type?: 'default' | 'new' | 'required'
  children?: React.ReactNode
}

const backgroundColor = {
  default: Color.cover_light_gray,
  new: Color.new_orange,
  required: Color.danger_red,
}

const Label_ = styled.div<{ backgrooundColor: string }>(
  ({ backgrooundColor }) => ({
    fontSize: '8px',
    lineHeight: '8px',
    padding: '4px',
    width: 'auto',
    display: 'inline-block',
    color: Color.white,
    backgroundColor: backgrooundColor,
    borderRadius: '4px',
  })
)

export const Label: React.FC<Props> = ({ type = 'default', children }) => {
  const backgroundColor_ = backgroundColor[type]
  return <Label_ backgrooundColor={backgroundColor_}>{children}</Label_>
}
