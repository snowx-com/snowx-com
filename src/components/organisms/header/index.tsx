import { css } from '@emotion/react'
import React, { memo, useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { menuList } from '../../../consts'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { buttonStyles, themeColor } from '../../../style'

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [width] = useWindowSize()
  const scrollWithOffset = (el: HTMLElement, offset: number) => {
    const elementPosition = el.offsetTop - offset
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    if (width >= 1024) {
      setOpen(false)
    }
  }, [width])
  return (
    <header
      css={css`
        position: sticky;
        top: 0;
        left: 0;
        padding: 8px 20px;
        background-color: ${themeColor.base};
        z-index: 999;
      `}
    >
      {width < 1024 && (
        <div
          css={[
            css`
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              gap: 3%;
              text-transform: uppercase;
              background-color: ${themeColor.base};
              z-index: -1;
              pointer-events: none;
              opacity: 0;
              transition: opacity 0.3s;
              & a {
                text-decoration: none;
                font-family: 'Roboto Condensed';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                color: #000;
                transition: opacity 0.3s;

                &:hover {
                  opacity: 0.5;
                }
              }
            `,
            open
              ? css`
                  pointer-events: auto;
                  opacity: 1;
                `
              : null,
          ]}
        >
          {menuList.map((menu, i) => (
            <HashLink
              key={i}
              smooth
              to={`/#${menu.id}`}
              scroll={(el) => {
                setOpen(false)
                scrollWithOffset(el, 100)
              }}
            >
              <span>{menu.label}</span>
            </HashLink>
          ))}
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 8px;
            `}
          >
            <HashLink
              smooth
              to="/#mint"
              scroll={(el) => {
                setOpen(false)
                scrollWithOffset(el, 150)
              }}
            >
              <button
                css={[
                  buttonStyles.mintButton,
                  css`
                    width: 200px;
                  `,
                ]}
              >
                Mint
              </button>
            </HashLink>
            <HashLink
              smooth
              to={'/#download'}
              scroll={(el) => {
                setOpen(false)
                scrollWithOffset(el, 150)
              }}
            >
              <button
                css={[
                  buttonStyles.downloadButton,
                  css`
                    width: 200px;
                  `,
                ]}
              >
                Download App
              </button>
            </HashLink>
          </div>
        </div>
      )}
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1440px;
          margin: 0 auto;
        `}
      >
        <h1
          css={css`
            max-width: 130px;
            @media screen and (max-width: 1023px) {
              max-width: 42px;
            }
          `}
        >
          <img src={width < 1024 ? '/img/logomark.png' : '/img/logo.png'} alt="SnowX" />
        </h1>
        {width > 1024 && (
          <div
            css={css`
              display: flex;
              justify-content: center;
              gap: 32px;
              text-transform: uppercase;
              & a {
                text-decoration: none;
                font-family: 'Roboto Condensed';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                color: #000;
                transition: opacity 0.3s;

                &:hover {
                  opacity: 0.5;
                }
              }
            `}
          >
            {menuList.map((menu, i) => (
              <HashLink
                key={i}
                smooth
                to={`/#${menu.id}`}
                scroll={(el) => scrollWithOffset(el, 150)}
              >
                <span>{menu.label}</span>
              </HashLink>
            ))}
          </div>
        )}
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 14px;
          `}
        >
          {width > 1024 && (
            <>
              <HashLink smooth to="/#mint" scroll={(el) => scrollWithOffset(el, 150)}>
                <button css={buttonStyles.mintButton}>Mint</button>
              </HashLink>
              <HashLink smooth to={'/#download'} scroll={(el) => scrollWithOffset(el, 150)}>
                <button css={buttonStyles.downloadButton}>Download App</button>
              </HashLink>
            </>
          )}
          {width < 1025 && (
            <button
              css={[
                css`
                  display: inline-block;
                  transition: all 0.4s;
                  box-sizing: border-box;
                  position: relative;
                  width: 32px;
                  height: 20px;
                  background: none;
                  border: none;
                  appearance: none;
                  cursor: pointer;
                  span {
                    display: inline-block;
                    transition: all 0.4s;
                    box-sizing: border-box;
                    position: absolute;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: ${themeColor.main.primary};
                    border-radius: 4px;
                    &:nth-of-type(1) {
                      top: 0;
                    }
                    &:nth-of-type(2) {
                      top: 9px;
                    }
                    &:nth-of-type(3) {
                      bottom: 0;
                    }
                  }
                `,
                open
                  ? css`
                      span:nth-of-type(1) {
                        transform: translateY(8px) rotate(-45deg);
                      }
                      span:nth-of-type(2) {
                        left: 50%;
                        opacity: 0;
                        animation: active-menu05-bar02 0.8s forwards;
                      }
                      @keyframes active-menu05-bar02 {
                        100% {
                          height: 0;
                        }
                      }
                      span:nth-of-type(3) {
                        transform: translateY(-10px) rotate(45deg);
                      }
                    `
                  : null,
              ]}
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
