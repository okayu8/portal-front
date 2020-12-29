import React, { useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'

import { Color } from '../../../const/color'

export type Props = {
  color?: 'default' | 'primary' | 'danger'
  children?: React.ReactNode
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
}

const colorStyles = {
  default: {
    backgroundColor: Color.light_gray,
    border: `1px solid ${Color.cover_light_gray}`,
    color: Color.cover_black,
  },
  primary: {
    backgroundColor: Color.brand_blue,
    border: `1px solid ${Color.cover_white}`,
    color: Color.white,
  },
  danger: {
    backgroundColor: Color.danger_red,
    border: `1px solid ${Color.cover_white}`,
    color: Color.white,
  },
} as const

const opacity = {
  enabled: '1',
  hover: '0.64',
  focus: '0.48',
  pressed: '0.48',
  disabled: '0.38',
} as const

const Button_ = styled.button<{
  colorStyles?: { [key: string]: string }
  opacity?: string
}>(({ colorStyles, opacity }) => ({
  height: '32px',
  paddingRight: '16px',
  paddingLeft: '16px',
  borderRadius: '4px',
  boxSizing: 'border-box',
  fontWeight: 600,
  outline: 'none',
  opacity: opacity,
  ...colorStyles,
}))

export const Button: React.FC<Props> = ({
  color = 'default',
  children,
  disabled,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onMouseDown,
  onMouseUp,
}) => {
  const [intaractionState, setIntaractionState] = useState<
    'enabled' | 'hover' | 'focus' | 'pressed'
  >('enabled')

  const opacity_ = useMemo(() => {
    return opacity[disabled ? 'disabled' : intaractionState]
  }, [disabled, intaractionState])

  const onClick_ = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(event)
    },
    [onClick]
  )

  const onMouseEnter_ = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setIntaractionState('hover')
      if (onMouseEnter) onMouseEnter(event)
    },
    [onMouseEnter]
  )

  const onMouseLeave_ = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setIntaractionState('enabled')
      if (onMouseLeave) onMouseLeave(event)
    },
    [onMouseLeave]
  )

  const onFocus_ = useCallback(
    (event: React.FocusEvent<HTMLButtonElement>) => {
      setIntaractionState('focus')
      if (onFocus) onFocus(event)
    },
    [onFocus]
  )

  const onBlur_ = useCallback(
    (event: React.FocusEvent<HTMLButtonElement>) => {
      setIntaractionState('enabled')
      if (onBlur) onBlur(event)
    },
    [onBlur]
  )

  const onMouseDown_ = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setIntaractionState('pressed')
      if (onMouseDown) onMouseDown(event)
    },
    [onMouseDown]
  )

  const onMouseUp_ = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setIntaractionState('hover')
      if (onMouseUp) onMouseUp(event)
    },
    [onMouseUp]
  )

  return (
    <Button_
      colorStyles={colorStyles[color]}
      opacity={opacity_}
      onClick={onClick_}
      onMouseEnter={onMouseEnter_}
      onMouseLeave={onMouseLeave_}
      onFocus={onFocus_}
      onBlur={onBlur_}
      onMouseDown={onMouseDown_}
      onMouseUp={onMouseUp_}
      tabIndex={0}
      disabled={disabled}
    >
      {children}
    </Button_>
  )
}
