import { css } from '@emotion/react'
import React, { memo, useState } from 'react'
import { themeColor } from '../../../style'

type FaQItemProps = {
  faq: { q: string; a: string }
}

const FaQItem: React.FC<FaQItemProps> = ({ faq }) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      css={css`
        background: #90b4ce;
        border-radius: 3px;
        padding: 14px 24px;
        color: ${themeColor.base};
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
        `}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          css={[
            css`
              width: 24px;
              min-width: 24px;
              transition: transform 0.3s;
            `,
            open
              ? css`
                  transform: rotate(90deg);
                `
              : null,
          ]}
        >
          <img src="/img/arrow_icon.png" alt="" />
        </span>
        <div>{faq.q}</div>
      </div>
      {open && (
        <p
          css={css`
            border-top: 1px solid ${themeColor.base};
            font-family: 'Roboto';
            font-weight: 300;

            border-top: 1px solid #fbfbfb;
            font-family: 'Roboto';
            font-weight: 300;
            padding-top: 8px;
            margin: 8px;

            & a {
              color: #fbfbfb;
            }
          `}
          dangerouslySetInnerHTML={{
            __html: faq.a,
          }}
        />
      )}
    </div>
  )
}

export default memo(FaQItem)
