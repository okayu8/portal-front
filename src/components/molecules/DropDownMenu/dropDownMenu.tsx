import React, { useState, useCallback, useRef, useEffect } from 'react'
import styled from 'styled-components'

import Button from '../../atoms/button'

export type Props = {
  children?: React.ReactNode
  triggerComponent?: React.ReactNode
  closeMenu?: boolean
}

const ButtonContainer_ = styled.div({
  display: 'inline-block',
})

const MenuContainer_ = styled.div<{ display?: string }>(({ display }) => ({
  display: display,
  position: 'absolute',
}))

export const DropDownMenu: React.FC<Props> = ({
  children,
  triggerComponent,
  closeMenu,
}) => {
  const [hasOpenMenu, setHasOpenMenu] = useState<boolean>(false)
  const buttonRef = useRef<HTMLDivElement | null>(null)

  const onClickButton_ = useCallback(() => {
    setHasOpenMenu(true)
  }, [])

  const clickedMenu = useCallback((event) => {
    if (buttonRef.current) {
      if (!buttonRef.current.contains(event.target)) {
        setHasOpenMenu(false)
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('click', clickedMenu)
    return () => {
      window.removeEventListener('click', clickedMenu)
    }
  }, [])

  useEffect(() => {
    if (closeMenu) setHasOpenMenu(false)
  }, [closeMenu])

  return (
    <>
      <ButtonContainer_ ref={buttonRef} onClick={onClickButton_}>
        {triggerComponent}
      </ButtonContainer_>
      <MenuContainer_ display={hasOpenMenu ? 'block' : 'none'}>
        {children}
      </MenuContainer_>
    </>
  )
}
