import { css } from '@emotion/react'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { buttonStyles } from '../../../style'
import { Footer, Header } from '../../organisms'

const NotFoundTemplate: React.FC = () => {
  const [width, height] = useWindowSize()
  const navigate = useNavigate()
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: ${height}px;
      `}
    >
      <Header />
      <main
        css={css`
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        `}
      >
        <div>
          <h2>Error</h2>
          <p
            css={css`
              margin-bottom: 24px;
            `}
          >
            It seems we can’t find what you’re looking for.
          </p>
          <button css={buttonStyles.downloadButton} onClick={() => navigate('/')}>
            Back to TOP
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default memo(NotFoundTemplate)
