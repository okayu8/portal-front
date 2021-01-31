import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import CommonHeader from '../organisms/common-header'

export type Props = {
  currentPageNumber: number
}

const Wrapper_ = styled.div({})
const Content_ = styled.div({})

export const Template: React.FC<Props> = ({ currentPageNumber, children }) => {
  const [userName, setUserName] = useState<string>('')
  const pagesArray = [
    { name: 'マイページ', id: 0, href: '/' },
    { name: 'お知らせ', id: 1, href: '/news' },
    { name: 'カレンダー', id: 2, href: '/calendar' },
    { name: 'TO DO', id: 2, href: '/todo' },
    { name: '個人設定', id: 3, href: '/settings' },
  ]

  useEffect(() => {
    // TODO: APIから取得
    setUserName('田中 太郎')
  }, [])

  return (
    <>
      <CommonHeader
        selectedPage={currentPageNumber}
        pagesArray={pagesArray}
        userName={userName}
      />
      {/* TODO: add side bar component */}
      <Wrapper_>
        <Content_>{children}</Content_>
        {/* TODO: add common footer */}
      </Wrapper_>
    </>
  )
}
