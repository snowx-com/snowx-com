import React, { memo } from 'react'
import { css } from '@emotion/react'
import { themeColor } from '../../../style'

const footerCSS = {
  wrapper: css`
    font-family: 'Roboto Condensed', sans-serif;
    background-color: ${themeColor.main.secondary};
    color: ${themeColor.base};
    font-size: 14px;
    padding: 14px;
    text-align: center;
  `,
}

const Footer: React.FC = () => {
  return <footer css={footerCSS.wrapper}>©︎ SnowX</footer>
}

export default memo(Footer)
