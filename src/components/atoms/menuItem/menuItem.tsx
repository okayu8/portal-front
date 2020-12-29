import React, { useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'

import { Color } from '../../../const/color'

export type Props = {
  children?: React.ReactNode
  selected?: boolean
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void
  onMouseEnter?: (event: React.MouseEvent<HTMLLIElement>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLLIElement>) => void
  onMouseDown?: (event: React.MouseEvent<HTMLLIElement>) => void
  onMouseUp?: (event: React.MouseEvent<HTMLLIElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLLIElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLLIElement>) => void
}

const colorStyles = {
  default: {
    color: Color.cover_black,
  },
  selected: {
    color: Color.brand_blue,
    backgroundColor: Color.very_light_gray,
  },
  disabled: {
    color: Color.cover_light_gray,
  },
} as const

const opacity = {
  enabled: '0',
  hover: '0.12',
  focus: '0.24',
  pressed: '0.24',
  disabled: '0',
} as const

const MenuItem_ = styled.li<{ colorStyles?: { [key: string]: string } }>(
  ({ colorStyles }) => ({
    padding: '8px 16px',
    position: 'relative',
    userSelect: 'none',
    listStyle: 'none',
    ...colorStyles,
  })
)

const State_ = styled.div<{ opacity?: string }>(({ opacity }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: Color.cover_black,
  opacity: opacity,
}))

export const MenuItem: React.FC<Props> = ({
  children,
  selected,
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
    (event: React.MouseEvent<HTMLLIElement>) => {
      if (onClick) onClick(event)
    },
    [onClick]
  )

  const onMouseEnter_ = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      setIntaractionState('hover')
      if (onMouseEnter) onMouseEnter(event)
    },
    [onMouseEnter]
  )

  const onMouseLeave_ = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      setIntaractionState('enabled')
      if (onMouseLeave) onMouseLeave(event)
    },
    [onMouseLeave]
  )

  const onFocus_ = useCallback(
    (event: React.FocusEvent<HTMLLIElement>) => {
      setIntaractionState('focus')
      if (onFocus) onFocus(event)
    },
    [onFocus]
  )

  const onBlur_ = useCallback(
    (event: React.FocusEvent<HTMLLIElement>) => {
      setIntaractionState('enabled')
      if (onBlur) onBlur(event)
    },
    [onBlur]
  )

  const onMouseDown_ = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      setIntaractionState('pressed')
      if (onMouseDown) onMouseDown(event)
    },
    [onMouseDown]
  )

  const onMouseUp_ = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      setIntaractionState('hover')
      if (onMouseUp) onMouseUp(event)
    },
    [onMouseUp]
  )

  return (
    <MenuItem_
      colorStyles={
        colorStyles[disabled ? 'disabled' : selected ? 'selected' : 'default']
      }
      onClick={onClick_}
      onMouseEnter={onMouseEnter_}
      onMouseLeave={onMouseLeave_}
      onFocus={onFocus_}
      onBlur={onBlur_}
      onMouseDown={onMouseDown_}
      onMouseUp={onMouseUp_}
    >
      {children}
      <State_ opacity={opacity_} />
    </MenuItem_>
  )
}
