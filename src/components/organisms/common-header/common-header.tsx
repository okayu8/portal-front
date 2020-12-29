import React, { useState, useCallback, useRef, useEffect } from 'react'
import styled from 'styled-components'

import Button from '../../atoms/button'
import MenuItem from '../../atoms/menuItem'
import MenuList from '../../atoms/menuList'
import DropDownMenu from '../../molecules/DropDownMenu'

import { Color } from '../../../const/color'

export type Props = {
  selectedPage?: number
  pagesArray?: { id: number; name: string }[]
  userName?: string
}

const Wrapper_ = styled.div({
  height: '64px',
  width: '100%',
  backgroundColor: Color.brand_blue,
  boxShadow: `0 4px 4px ${Color.cover_light_gray}`,
  display: 'flex',
  justifyContent: 'space-between',
  // fix の場合外部からつけるようにするか、検討中
  // position: 'fixed',
  // top: 0,
  // left: 0,
})

const LeftContentWrapper_ = styled.div({
  display: 'flex',
})

const RightContentWrapper_ = styled.div({
  display: 'flex',
})

const SiteTitle_ = styled.a({
  margin: 'auto 24px',
  fontSize: '24px',
  fontWeight: 600,
  color: Color.white,
  textDecoration: 'none',
})

const DropDownWrapper_ = styled.div({
  margin: 'auto 60px',
})

const MenuWrapper_ = styled.div({
  width: '200px',
})

const UserName_ = styled.p({
  margin: 'auto 0',
  color: Color.white,
  fontSize: '16px',
})

const LogoutButtonWrapper_ = styled.div({
  margin: 'auto 24px',
})

export const CommonHeader: React.FC<Props> = ({
  selectedPage = 0,
  pagesArray = [],
  userName,
}) => {
  const [selectedItem, setSelectedItem] = useState<number>(selectedPage)

  const triggerComponent = (
    <Button color="primary">▶︎ {pagesArray[selectedItem].name}</Button>
  )

  const onClickMenuItem_ = useCallback((index: number) => {
    // TODO: Global State: selectedPage の更新
    setSelectedItem(index)
  }, [])

  const onClickLogout_ = useCallback(() => {
    // TODO: ログアウトの処理
  }, [])

  return (
    <Wrapper_>
      <LeftContentWrapper_>
        <SiteTitle_ href={'./'}>Atomic Style Portal</SiteTitle_>
        <DropDownWrapper_>
          <DropDownMenu triggerComponent={triggerComponent}>
            <MenuWrapper_>
              <MenuList>
                {pagesArray.map((value, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => onClickMenuItem_(index)}
                    selected={selectedItem === index}
                  >
                    {value.name}
                  </MenuItem>
                ))}
              </MenuList>
            </MenuWrapper_>
          </DropDownMenu>
        </DropDownWrapper_>
      </LeftContentWrapper_>
      <RightContentWrapper_>
        <UserName_>{userName} さん</UserName_>
        <LogoutButtonWrapper_>
          <Button onClick={onClickLogout_}>ログアウト</Button>
        </LogoutButtonWrapper_>
      </RightContentWrapper_>
    </Wrapper_>
  )
}
