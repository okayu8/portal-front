import React, { useState, useCallback, useMemo } from 'react'
import styled from 'styled-components'

import { Color } from '../../../const/color'

export type Props = {
  type?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  onMouseEnter?: (event: React.MouseEvent<HTMLInputElement>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLInputElement>) => void
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement>) => void
  onMouseUp?: (event: React.MouseEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

const inputStyle = {
  enabled: {
    backgroundColor: Color.white,
    border: `1px solid ${Color.cover_dark_gray}`,
    color: Color.cover_black,
  },
  hover: {
    backgroundColor: Color.cover_very_light_gray,
    border: `1px solid ${Color.cover_dark_gray}`,
    color: Color.cover_black,
    opacity: '0.8',
  },
  focus: {
    backgroundColor: Color.white,
    border: `2px solid ${Color.light_blue}`,
    color: Color.cover_black,
    paddingRight: '15px',
    paddingLeft: '15px',
  },
  disabled: {
    backgroundColor: Color.cover_light_gray,
    border: `1px solid ${Color.cover_dark_gray}`,
    color: Color.cover_black,
    opacity: '0.5',
  },
} as const

const Input_ = styled.input<{
  inputStyle?: { [key: string]: string }
}>(({ inputStyle }) => ({
  height: '40px',
  paddingRight: '16px',
  paddingLeft: '16px',
  borderRadius: '4px',
  boxSizing: 'border-box',
  outline: 'none',
  ...inputStyle,
}))

export const Input: React.FC<Props> = ({
  type = 'text',
  value,
  disabled,
  onChange,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onMouseDown,
  onMouseUp,
}) => {
  const [intaractionState, setIntaractionState] = useState<
    'enabled' | 'hover' | 'focus'
  >('enabled')

  const inputStyle_ = useMemo(() => {
    return inputStyle[disabled ? 'disabled' : intaractionState]
  }, [disabled, intaractionState])

  const onClick_ = useCallback(
    (event: React.MouseEvent<HTMLInputElement>) => {
      if (onClick) onClick(event)
    },
    [onClick]
  )

  const onMouseEnter_ = useCallback(
    (event: React.MouseEvent<HTMLInputElement>) => {
      if (intaractionState !== 'focus') setIntaractionState('hover')
      if (onMouseEnter) onMouseEnter(event)
    },
    [onMouseEnter, intaractionState]
  )

  const onMouseLeave_ = useCallback(
    (event: React.MouseEvent<HTMLInputElement>) => {
      if (intaractionState !== 'focus') setIntaractionState('enabled')
      if (onMouseLeave) onMouseLeave(event)
    },
    [onMouseLeave, intaractionState]
  )

  const onFocus_ = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setIntaractionState('focus')
      if (onFocus) onFocus(event)
    },
    [onFocus]
  )

  const onBlur_ = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setIntaractionState('enabled')
      if (onBlur) onBlur(event)
    },
    [onBlur]
  )

  const onMouseDown_ = useCallback(
    (event: React.MouseEvent<HTMLInputElement>) => {
      if (onMouseDown) onMouseDown(event)
    },
    [onMouseDown]
  )

  const onMouseUp_ = useCallback(
    (event: React.MouseEvent<HTMLInputElement>) => {
      if (onMouseUp) onMouseUp(event)
    },
    [onMouseUp]
  )

  return (
    <Input_
      type={type}
      value={value}
      inputStyle={inputStyle_}
      onChange={onChange}
      onClick={onClick_}
      onMouseEnter={onMouseEnter_}
      onMouseLeave={onMouseLeave_}
      onFocus={onFocus_}
      onBlur={onBlur_}
      onMouseDown={onMouseDown_}
      onMouseUp={onMouseUp_}
      tabIndex={0}
      disabled={disabled}
    />
  )
}
