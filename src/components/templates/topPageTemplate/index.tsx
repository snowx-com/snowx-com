import React, { memo } from 'react'
import { FaQItem, Footer, Header } from '../../organisms'
import { css } from '@emotion/react'
import { buttonStyles, themeColor } from '../../../style'
import {
  faQForArtist,
  FaQForUser,
  featuredArtworks,
  featuredImgList,
  followSNS,
  members,
  mintSteps,
  purchaseSteps,
} from '../../../consts'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { HashLink } from 'react-router-hash-link'

const topPageCSS = {
  wrapper: css`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  `,
  topImage: css`
    height: 480px;
    background-image: url('/img/top.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1023px) {
      background-position: 67%;
    }
  `,
  catchCopy: css`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 52px;
    line-height: 1;
    color: #fff;
    display: inline-block;
    padding: 62px;
    text-align: center;
    text-transform: uppercase;
    @media screen and (max-width: 1023px) {
      padding: 20px;
      font-size: 32px;
    }
  `,
  catchCopyWrapper: css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(48, 49, 58, 0.6);
  `,
  description: {
    wrapper: css`
      width: 100%;
      max-width: 1024px;
      margin: 76px auto 152px;
      display: flex;
      @media screen and (max-width: 1023px) {
        flex-direction: column;
      }
    `,
    title: css`
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 26px;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 1;
      margin-bottom: 22px;

      & span {
        font-size: 22px;
        font-weight: 300;
      }
    `,
    text: css`
      margin-bottom: 22px;
    `,
    textWrapper: css`
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: normal;
      flex-direction: column;
      @media screen and (max-width: 1023px) {
        width: 100%;
        padding: 20px;
      }
    `,
    movWrapper: css`
      width: 50%;
      display: flex;
      justify-content: center;
      @media screen and (max-width: 1023px) {
        width: 100%;
      }
    `,
    btnWrapper: css`
      display: flex;
      align-items: center;
      gap: 8px;
      @media screen and (max-width: 1023px) {
        flex-direction: column;
        a {
          width: 100%;
        }
      }
    `,
  },
  artWorks: {
    title: css`
      max-width: 1024px;
      margin: 76px auto;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 22px;

      & span {
        font-weight: 300;
      }
      @media screen and (max-width: 1023px) {
        padding: 0 20px;
      }
    `,
    wrapper: css`
      position: relative;
      width: 100%;
      overflow: hidden;
      margin-bottom: 152px;
      &:before,
      &:after {
        content: '';
        position: absolute;
        display: block;
        width: 120px;
        top: 0;
        bottom: 0;
        background: linear-gradient(90deg, #fdfdfd 0%, rgba(253, 253, 253, 0) 100%);
        z-index: 100;
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
        transform: rotate(-180deg);
      }
      @media screen and (max-width: 1023px) {
        &::before,
        &:after {
          content: none;
        }
      }
    `,
    cardsWrapper: css`
      position: relative;
      display: flex;
      width: fit-content;
      gap: 16px;
      animation: artsSlide 90s linear infinite;
    `,
    card: css`
      width: 278px;
      height: 340px;
      display: flex;
      align-items: flex-end;
      background-repeat: no-repeat;
      background-size: contain;
      border-radius: 3px;
    `,
    info: css`
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 36px 16px 16px;
      background: linear-gradient(0deg, #0f0e15 0%, rgba(91, 91, 91, 0) 100%);
      border-radius: 0px 0px 3px 3px;
      color: ${themeColor.base};
      text-transform: uppercase;
      font-family: 'Roboto Condensed';
      font-style: normal;
    `,
    artTitle: css`
      font-weight: 700;
      font-size: 18px;
    `,
    artistName: css`
      font-weight: 300;
      font-size: 14px;
    `,
    collectionName: css`
      font-weight: 400;
      font-size: 14px;
    `,
  },
  download: {
    wrapper: css`
      position: relative;
      width: 100%;
      max-width: 1024px;
      margin: 0 auto;
      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 100vw;
        height: 72%;
        top: 28%;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${themeColor.main.secondary};
        z-index: -1;
      }
    `,
    title: css`
      max-width: 1024px;
      margin: 76px auto;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 22px;
      text-align: center;
      & span {
        font-weight: 300;
      }
    `,
    movWrapper: css`
      position: relative;
      width: 100%;
      padding-top: 57%;
      margin: 0 auto;
      & iframe {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
    `,
    stepWrapper: css`
      background-color: ${themeColor.base};
      width: 100%;
      max-width: 860px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 18px;
      padding: 42px 72px;
      @media screen and (max-width: 1023px) {
        padding: 20px;
      }
    `,
    stepItem: css`
      display: flex;
      align-items: center;
      align-items: flex-end;
      @media screen and (max-width: 1023px) {
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }
    `,
    arrowWrapper: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    or: css`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      padding: 8px 0;

      & > span:first-of-type,
      & > span:last-of-type {
        width: 100%;
        height: 2px;
        background-color: ${themeColor.main.secondary};
      }
    `,
    buttonWrapper: css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 72px;
    `,
    button: css`
      width: 100%;
      max-width: 260px;
      appearance: none;
      border: none;
      background-color: inherit;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    `,
  },
  purchase: {
    title: css`
      margin: 0 auto 76px;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 38px;
      font-weight: bold;
      margin-bottom: 74px;
      line-height: 42px;
      & span {
        font-weight: 300;
      }
    `,
    movWrapper: css`
      position: relative;
      width: 100%;
      padding-top: 58%;

      & > iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    `,
  },
  awarded: {
    wrapper: css`
      position: relative;
      padding: 77px 20px;
      background-color: ${themeColor.main.secondary};

      &::before {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100vw;
        height: 100%;
        background-color: ${themeColor.main.secondary};
        z-index: -1;
      }
    `,
    title: css`
      text-align: center;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 22px;
      color: ${themeColor.base};

      & span {
        font-weight: 300;
      }
    `,
    awards: css`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;

      & > div {
        width: 20%;
      }

      @media screen and (max-width: 1023px) {
        flex-direction: column;
        & > div {
          width: 60%;
        }
      }
    `,
  },
  follow: {
    wrapper: css`
      width: 100%;
      max-width: 1024px;
      margin: 0 auto;
      padding: 108px 16px;
    `,
    title: css`
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 22px;

      & span {
        font-weight: 300;
      }
    `,
    links: css`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;
    `,
    link: css`
      width: 100%;
      max-width: 62px;
      display: inline-block;
      transition: opacity 0.3s;
      &:hover {
        opacity: 0.5;
      }
    `,
  },
}

const TopPageTemplate: React.FC = () => {
  const [width, height] = useWindowSize()
  const scrollWithOffset = (el: HTMLElement, offset: number) => {
    const elementPosition = el.offsetTop - offset
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Header />
      <main css={topPageCSS.wrapper}>
        <section id="top">
          <div css={topPageCSS.topImage}>
            <div css={topPageCSS.catchCopyWrapper}>
              <div>
                <h2 css={topPageCSS.catchCopy}>
                  {'The world’s first native'}
                  <br />
                  {'3D NFT Marketplace'}
                  <br />
                  {'on VR'}
                </h2>
                <div
                  css={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 16px;
                    @media screen and (max-width: 1023px) {
                      flex-direction: column;
                    }
                  `}
                >
                  <button
                    css={[
                      topPageCSS.download.button,
                      css`
                        width: 220px;
                        transition: opacity 0.3s;
                        cursor: pointer;
                        &:hover {
                          opacity: 0.5;
                        }
                      `,
                    ]}
                    onClick={() =>
                      window.open('https://sidequestvr.com/app/10347/snowx', '_blank', 'noreferrer')
                    }
                  >
                    <img src="/img/side-quest-button.png" alt="Side Quest Button" />
                  </button>
                  <button
                    css={[
                      buttonStyles.downloadButton,
                      css`
                        position: relative;
                        width: 200px;
                        border: 1px solid #fff;
                        min-height: 60px;
                        overflow: hidden;

                        span {
                          transition: all 0.3s;
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          transform: translate(-50%, -50%);
                        }
                        span:nth-of-type(2) {
                          transform: translate(200px, -50%);
                          white-space: nowrap;
                        }

                        &:hover {
                          opacity: 0.8;
                          span:nth-of-type(1) {
                            transform: translate(-400px, -50%);
                          }
                          span:nth-of-type(2) {
                            transform: translate(-50%, -50%);
                          }
                        }
                      `,
                    ]}
                  >
                    <span>Other device</span>
                    <span>Coming soon...</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="description">
          <div css={topPageCSS.description.wrapper}>
            <div css={topPageCSS.description.movWrapper}>
              <iframe
                width="480"
                height="260"
                src="https://www.youtube.com/embed/I4GwI6oSuvM?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&playlist=I4GwI6oSuvM"
                title="YouTube video player"
                frameBorder={0}
              ></iframe>
            </div>
            <div css={topPageCSS.description.textWrapper}>
              <h2 css={topPageCSS.description.title}>
                The VR shopping experience is here! <br />
                <span>Let’ see and purchase 3D NFT artworks in VR!</span>
              </h2>
              <p css={topPageCSS.description.text}>
                SnowX is the first NFT marketplace in VR. Creators mint 3D NFTs. And collectors
                download the app into their VR headset, connect the mobile app to their wallet, and
                purchase NFTs. This is how to buy 3D NFTs in VR. In VR, you can walk around and
                touch the artwork to feel the artwork.
              </p>
              <div css={topPageCSS.description.btnWrapper}>
                <HashLink smooth to={'/#mint'} scroll={(el) => scrollWithOffset(el, 150)}>
                  <button
                    css={[
                      buttonStyles.mintButton,
                      css`
                        @media screen and (max-width: 1023px) {
                          width: 100%;
                        }
                      `,
                    ]}
                  >
                    Mint
                  </button>
                </HashLink>
                <HashLink smooth to={'/#download'} scroll={(el) => scrollWithOffset(el, 150)}>
                  <button
                    css={[
                      buttonStyles.downloadButton,
                      css`
                        @media screen and (max-width: 1023px) {
                          width: 100%;
                        }
                      `,
                    ]}
                  >
                    Download App
                  </button>
                </HashLink>
                <button
                  css={[
                    buttonStyles.discordButton,
                    css`
                      @media screen and (max-width: 1023px) {
                        width: 100%;
                      }
                    `,
                  ]}
                  onClick={() =>
                    window.open('https://discord.gg/vprZWNdBPP', '_blank', 'noreferrer')
                  }
                >
                  <span>
                    <img src="/img/discord-icon.png" alt="" />
                  </span>
                  Discord
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="artWorks">
          <h2 css={topPageCSS.artWorks.title}>
            Featured Artworks<span> on SnowX </span>
          </h2>
          <div css={topPageCSS.artWorks.wrapper}>
            <div css={topPageCSS.artWorks.cardsWrapper}>
              {[...featuredArtworks, ...featuredArtworks].map((v, i) => (
                <div
                  key={i}
                  css={[
                    topPageCSS.artWorks.card,
                    css`
                      background-image: url(${v.imgPath});
                    `,
                  ]}
                >
                  <div css={topPageCSS.artWorks.info}>
                    <span css={topPageCSS.artWorks.artTitle}>{v.title}</span>
                    <span css={topPageCSS.artWorks.artistName}>{v.artist}</span>
                    <span css={topPageCSS.artWorks.collectionName}>{v.collection}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="download"
          css={[
            topPageCSS.download.wrapper,
            css`
              &::before {
                width: ${width}px;
              }
            `,
          ]}
        >
          <h2 css={topPageCSS.download.title}>
            Follow <span>these steps to</span> dowload SnowX!
          </h2>
          <div
            css={css`
              max-width: 860px;
              margin: 0 auto;
            `}
          >
            <div css={topPageCSS.download.movWrapper}>
              <iframe
                src="https://www.youtube.com/embed/3kT2RxYv6WA"
                title="YouTube video player"
                frameBorder="0"
              />
            </div>
          </div>
          <div css={topPageCSS.download.stepWrapper}>
            <div css={topPageCSS.download.stepItem}>
              <div>
                <h3>Download Sidequest</h3>
                <p>
                  Please download Sidequest (advanced installer) on your PC/Mac and create an
                  account.
                </p>
              </div>
              <div
                css={css`
                  @media screen and (max-width: 1023px) {
                    width: 100%;
                    text-align: center;
                  }
                `}
              >
                <button
                  css={topPageCSS.download.button}
                  onClick={() =>
                    window.open('https://sidequestvr.com/app/10347/snowx', '_blank', 'noreferrer')
                  }
                >
                  <img src="/img/side-quest-button.png" alt="Side Quest Button" />
                </button>
              </div>
            </div>
            <div css={topPageCSS.download.arrowWrapper}>
              <svg
                width="96"
                height="22"
                viewBox="0 0 96 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 2L48 20L94.5 2"
                  stroke="#90B4CE"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div css={topPageCSS.download.stepItem}>
              <div>
                <h3>Turn on your developer mode on oculus.</h3>
                <p>
                  Please pair your oculus device with your mobile app→ go to connected Oculus→ click
                  on “More Setting”→ enable “Developer mode”→ reboot Oculus. If you haven’t created
                  a Meta account yet, please create one from here.
                </p>
              </div>
            </div>
            <div css={topPageCSS.download.arrowWrapper}>
              <svg
                width="96"
                height="22"
                viewBox="0 0 96 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 2L48 20L94.5 2"
                  stroke="#90B4CE"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div css={topPageCSS.download.stepItem}>
              <div>
                <h3>Connect your oculus to your PC/Mac.</h3>
                <p>
                  Once you connect your oculus to your PC/Mac, please click allow for “Allow access
                  to data” on your oculus. Search SnowX on Sidequest, and click “Download
                  app(sideload)”. Once the download is completed, you can find the SnowX app under
                  “unknown sources” in the top right corner of the Oculus library.
                </p>
              </div>
              <div
                css={css`
                  min-width: 210px;
                `}
              >
                <img src="/img/ss.png" alt="" />
              </div>
            </div>
            <div css={topPageCSS.download.or}>
              <span></span>
              <span>OR</span>
              <span></span>
            </div>
            <div css={topPageCSS.download.arrowWrapper}>
              <button
                css={[
                  buttonStyles.downloadButton,
                  css`
                    position: relative;
                    width: 282px;
                    border: 1px solid #fff;
                    min-height: 60px;
                    overflow: hidden;

                    span {
                      transition: all 0.3s;
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                    }
                    span:nth-of-type(2) {
                      transform: translate(300px, -50%);
                      white-space: nowrap;
                    }

                    &:hover {
                      opacity: 0.8;
                      span:nth-of-type(1) {
                        transform: translate(-400px, -50%);
                      }
                      span:nth-of-type(2) {
                        transform: translate(-50%, -50%);
                      }
                    }
                  `,
                ]}
              >
                <span>For other headset devices</span>
                <span>Coming soon...</span>
              </button>
            </div>
          </div>
        </section>
        <section id="purchase">
          <div
            css={css`
              position: relative;
              margin-top: 180px;
              margin-bottom: 132px;

              &::before {
                content: '';
                position: absolute;
                width: ${width}px;
                height: 390px;
                top: -180px;
                left: 50%;
                transform: translateX(-50%);
                background-color: ${themeColor.main.secondary};
              }

              @media screen and (max-width: 1023px) {
                &::before {
                  content: none;
                }
              }
            `}
          >
            <div
              css={css`
                max-width: 680px;
                margin-left: auto;
              `}
            >
              <div css={topPageCSS.purchase.movWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/FOFr8hRZV9E"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div
              css={css`
                width: 100%;
                max-width: 1024px;
                margin: -76px auto 0;
                padding: 0 20px;
                @media screen and (max-width: 1023px) {
                  margin-top: 0;
                  padding-top: 60px;
                }
              `}
            >
              <h2 css={topPageCSS.purchase.title}>
                Follow{' '}
                <span>
                  these steps
                  <br /> to
                </span>{' '}
                purchase 3D NFTs
              </h2>
              <div
                css={css`
                  & span {
                    position: relative;
                    &::before {
                      content: '';
                      position: absolute;
                      bottom: -41px;
                      width: 2px;
                      height: 43px;
                      background-color: ${themeColor.main.primary};
                      @media screen and (max-width: 1023px) {
                        bottom: -80px;
                        height: 80px;
                      }
                    }
                  }
                  & div:last-of-type {
                    span::before {
                      content: none;
                    }
                  }
                `}
              >
                {purchaseSteps.map((step, i) => (
                  <div
                    key={i}
                    css={css`
                      display: flex;
                      align-items: center;
                      margin-bottom: 38px;
                      @media screen and (max-width: 1023px) {
                        align-items: flex-start;
                      }
                    `}
                  >
                    <span
                      css={css`
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        width: 46px;
                        min-width: 46px;
                        height: 46px;
                        border-radius: 87px;
                        background-color: ${themeColor.main.primary};
                        font-family: 'Roboto Condensed';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 28px;
                        line-height: 37px;
                        color: ${themeColor.base};
                      `}
                    >
                      {i + 1}
                    </span>
                    <p
                      css={css`
                        max-width: 480px;
                        padding-left: 24px;
                      `}
                    >
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="mint">
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: stretch;
              @media screen and (max-width: 1023px) {
                flex-direction: column;
                & > div {
                  width: 100%;
                }
              }
            `}
          >
            <div
              css={css`
                position: relative;
                width: 50%;
                background-image: url('img/mint.png');
                background-size: cover;
                background-position: center;
              `}
            >
              <div
                css={css`
                  position: relative;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: #fff;
                  z-index: 1;
                  height: 100%;
                  &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(48, 49, 58, 0.8);
                    z-index: -1;
                  }
                  @media screen and (max-width: 1023px) {
                    padding: 80px 20px;
                  }
                `}
              >
                <div
                  css={css`
                    max-width: 320px;
                  `}
                >
                  <h3
                    css={css`
                      font-family: 'Roboto Condensed';
                      font-style: normal;
                      font-weight: 300;
                      font-size: 38px;
                      line-height: 41px;
                      margin-bottom: 32px;
                      span {
                        font-weight: 700;
                      }
                    `}
                  >
                    Do you want to <br />
                    <span>mint your Artworks?</span>
                  </h3>
                  <p
                    css={css`
                      font-size: 18px;
                      line-height: 21px;
                      margin-bottom: 32px;
                    `}
                  >
                    If it’s your first time minting, you will make 4 transactions in total. If you
                    are adding artwork to an existing collection, you will make 3 transactions in
                    total.
                  </p>
                  <div
                    css={css`
                      text-align: center;
                    `}
                  >
                    <button
                      css={buttonStyles.mintButton}
                      onClick={() =>
                        window.open(
                          'https://snowx-nft-deploy.s3.us-west-1.amazonaws.com/eth3/index.html',
                          '_blank',
                          'noreferrer'
                        )
                      }
                    >
                      Mint Page
                      <span
                        css={css`
                          padding-left: 16px;
                        `}
                      >
                        ▶︎
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              css={css`
                width: 50%;
                border-top: 2px solid #d9d9d9;
              `}
            >
              <div
                css={css`
                  padding-top: 24px;
                  & div {
                    border-bottom: 2px solid #d9d9d9;
                  }
                  & div:last-of-type {
                    border-bottom: none;
                  }
                `}
              >
                {mintSteps.map((step, i) => (
                  <div
                    key={i}
                    css={css`
                      display: flex;
                      align-items: center;
                      padding: 8px 24px;
                    `}
                  >
                    <span
                      css={css`
                        width: 32px;
                        min-width: 32px;
                        height: 32px;
                        background: ${themeColor.accent};
                        border-radius: 87px;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        padding: 0px;
                        gap: 10px;
                        font-family: 'Roboto Condensed';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 32px;
                        color: ${themeColor.base};
                      `}
                    >
                      {i + 1}
                    </span>
                    <p
                      css={css`
                        padding-left: 24px;
                      `}
                    >
                      {step}
                    </p>
                  </div>
                ))}
                <span
                  css={css`
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: ${themeColor.base};
                    background-color: ${themeColor.accent};
                    text-transform: uppercase;
                    font-family: 'Roboto Condensed';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    padding: 12px 24px;
                    margin-top: 24px;
                    @media screen and (max-width: 1023px) {
                      flex-direction: column;
                    }
                  `}
                >
                  CHECK VIDEO:{' '}
                  <span
                    css={css`
                      display: flex;
                      line-height: 22px;
                      gap: 8px;
                      flex-direction: row;
                      align-items: flex-start;
                      flex-wrap: wrap;

                      @media screen and (max-width: 1023px) {
                        flex-direction: column;
                        align-items: center;
                      }
                    `}
                  >
                    <a
                      href="https://youtu.be/Iwp63Bbs8VI"
                      target="_blank"
                      rel="noopener noreferrer"
                      css={css`
                        border: 1px solid #ffffff;
                        border-radius: 40px;
                        padding: 4px 18px;
                        color: ${themeColor.base};
                        text-decoration: none;
                        transition: all 0.3s;
                        &:hover {
                          background-color: ${themeColor.base};
                          color: ${themeColor.accent};
                        }
                      `}
                    >
                      How to mint
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1VKKGlbE6TH4XyTwGxcCnIMtZJf_QrQZS/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      css={css`
                        border: 1px solid #ffffff;
                        border-radius: 40px;
                        padding: 4px 18px;
                        color: ${themeColor.base};
                        text-decoration: none;
                        transition: all 0.3s;
                        white-space: nowrap;
                        display: inline-block;
                        @media screen and (max-width: 1214px) {
                          margin-top: 8px;
                        }
                        @media screen and (max-width: 1023px) {
                          margin-top: 0px;
                        }

                        &:hover {
                          background-color: ${themeColor.base};
                          color: ${themeColor.accent};
                        }
                      `}
                    >
                      HOW to Add artwork to a collection
                    </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="aboutUs">
          <div
            css={css`
              width: 50%;
              max-width: 680px;
              margin-left: auto;
              margin-top: 180px;
              @media screen and (max-width: 1023px) {
                width: 100%;
                margin-bottom: 90px;
              }
            `}
          >
            <img src="/img/about.png" alt="" />
          </div>
          <div
            css={css`
              margin: -300px auto 112px;
              max-width: 1024px;
              padding: 0 20px;
              @media screen and (max-width: 1023px) {
                margin-top: 0;
              }
            `}
          >
            <div
              css={css`
                max-width: 680px;
              `}
            >
              <h3
                css={css`
                  font-family: 'Roboto Condensed';
                  font-style: normal;
                  font-weight: 700;
                  font-size: 38px;
                  line-height: 41px;
                  margin-bottom: 32px;
                  span {
                    font-weight: 300;
                  }
                `}
              >
                About <span>Us</span>
              </h3>
              <p
                css={css`
                  max-width: 360px;
                  margin-bottom: 106px;
                `}
              >
                This is our team, and we are from all over the world who believe in the future of
                VR, and virtual artwork creators.
              </p>
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  font-feature-settings: 'palt';
                  margin-bottom: 48px;
                  & > div {
                    width: 45%;
                  }

                  @media screen and (max-width: 1023px) {
                    flex-direction: column;
                    gap: 32px;
                    & > div {
                      width: 100%;
                    }
                  }
                `}
              >
                <div>
                  <img
                    css={css`
                      max-width: 200px;
                      margin-bottom: 24px;
                      @media screen and (max-width: 1023px) {
                        margin: 0 auto 24px;
                      }
                    `}
                    src="/img/team_01.png"
                  />
                  <div
                    css={css`
                      font-weight: 300;
                      font-size: 16px;
                      margin-bottom: 8px;
                      span {
                        font-size: 18px;
                        font-weight: 700;
                      }
                      @media screen and (max-width: 1023px) {
                        text-align: center;
                      }
                    `}
                  >
                    Co-founder CEO <span>Thomas</span>
                  </div>
                  <p
                    css={css`
                      font-size: 14px;
                      letter-spacing: -0.035em;
                    `}
                  >
                    Sales Manager at Nihon M&A Center(The largest M&A farm in Asia). Awarded as the
                    best M&A advisor with the sales record of all time best in 2018. Co-founded the
                    largest Japanese web3 community of 8,000 members (1,000 nft minted). Project
                    manager at Tart, the most influencial NFT production in Japan. First ambassador
                    of File Coin Foundation in SF.
                  </p>
                  <div
                    css={css`
                      display: flex;
                      gap: 8px;
                      padding-top: 8px;

                      & a {
                        width: 24px;
                        transition: opacity 0.3s;

                        &:hover {
                          opacity: 0.5;
                        }
                      }
                    `}
                  >
                    <a
                      href={'https://www.linkedin.com/in/taigakobayashi/'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/img/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a
                      href={'https://twitter.com/SnowX_Thomas'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/img/twitter.png" alt="Twitter" />
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    css={css`
                      max-width: 200px;
                      margin-bottom: 24px;
                      @media screen and (max-width: 1023px) {
                        margin: 0 auto 24px;
                      }
                    `}
                    src="/img/team_02.png"
                  />
                  <div
                    css={css`
                      font-weight: 300;
                      font-size: 16px;
                      margin-bottom: 8px;
                      span {
                        font-size: 18px;
                        font-weight: 700;
                      }
                      @media screen and (max-width: 1023px) {
                        text-align: center;
                      }
                    `}
                  >
                    Co-founder CTO <span>Michi</span>
                  </div>
                  <p
                    css={css`
                      font-size: 14px;
                      letter-spacing: -0.035em;
                    `}
                  >
                    Team lead in Rakuten (the largest ecommerce company) for 8 years. Dev Manager in
                    India. Coding 30 yrs+. 2 awards at ETH Mexico City(VR interface for Lens
                    Protocol) Technical advisor: prototype product of VR app to view live
                    performance for Oculus Go, 3DCG avatar performs in real time, watch together
                    with remote ~100 participants to share the excitement, performed by professional
                    dancers, captured by 30x motion capture cameras.
                  </p>
                  <div
                    css={css`
                      display: flex;
                      gap: 8px;
                      padding-top: 8px;

                      & a {
                        width: 24px;
                        transition: opacity 0.3s;

                        &:hover {
                          opacity: 0.5;
                        }
                      }
                    `}
                  >
                    <a
                      href={'https://www.linkedin.com/in/michitomo/'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/img/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href={'https://twitter.com/mijp'} target="_blank" rel="noopener noreferrer">
                      <img src="/img/twitter.png" alt="Twitter" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  @media screen and (max-width: 1023px) {
                    flex-direction: column;
                    gap: 16px;
                    & > div {
                      width: 60%;
                      margin: 0 auto;
                    }
                  }
                `}
              >
                {members.map((member) => (
                  <div
                    key={member.name}
                    css={css`
                      width: 200px;
                    `}
                  >
                    <img src={member.img} alt={member.name} />
                    <div
                      css={css`
                        font-size: 14px;
                        margin-top: 12px;
                        margin-bottom: -2px;
                      `}
                    >
                      {member.position}
                    </div>
                    <div
                      css={css`
                        font-weight: 700;
                        font-size: 18px;
                      `}
                    >
                      {member.name}
                    </div>
                    <div
                      css={css`
                        display: flex;
                        justify-content: flex-end;
                        gap: 8px;
                        margin-top: -26px;

                        & a {
                          width: 24px;
                          transition: opacity 0.3s;

                          &:hover {
                            opacity: 0.5;
                          }
                        }
                      `}
                    >
                      <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                        <img src="/img/linkedin.png" alt="LinkedIn" />
                      </a>
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <img src="/img/twitter.png" alt="Twitter" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div
                css={css`
                  margin-top: 96px;
                `}
              >
                <h3
                  css={css`
                    font-family: 'Roboto Condensed';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                  `}
                >
                  Contact
                </h3>
                <h3>SnowX (Potlatch, Inc)</h3>
                <p>
                  1 Embarcadero Center, San Francisco, CA 94111
                  <br />
                  NFT marketplace for VR headsets <br />
                  <br />
                  For further Queries
                  <br />
                  Mail: support@snowx.com
                </p>
              </div>
            </div>
          </div>
          <div
            css={css`
              position: relative;
              &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(31, 36, 46, 0.5);
              }

              @media screen and (max-width: 1023px) {
                height: 400px;
                img {
                  height: 100%;
                  object-fit: cover;
                  object-position: 100% 100%;
                }
              }
            `}
          >
            <img src="/img/about_member.png" />
          </div>
        </section>
        <section id="faq">
          <div
            css={css`
              margin: 214px auto;
              max-width: 1024px;
              padding: 20px;
            `}
          >
            <h2
              css={css`
                font-family: 'Roboto Condensed';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 32px;
                text-align: center;
                margin-bottom: 46px;
              `}
            >
              Frequently Asked Questions
            </h2>
            <div
              css={css`
                display: flex;
                justify-content: center;
                gap: 40px;
                @media screen and (max-width: 1023px) {
                  flex-direction: column;
                  & > div {
                    width: 100%;
                  }
                }
              `}
            >
              <div
                css={css`
                  width: 50%;
                `}
              >
                <h3
                  css={css`
                    font-family: 'Roboto Condensed';
                    color: ${themeColor.main.secondary};
                  `}
                >
                  For Collector
                </h3>
                {FaQForUser.map((f, i) => (
                  <div
                    key={i}
                    css={css`
                      margin-bottom: 16px;
                    `}
                  >
                    <FaQItem faq={f} />
                  </div>
                ))}
              </div>
              <div
                css={css`
                  width: 50%;
                `}
              >
                <h3
                  css={css`
                    font-family: 'Roboto Condensed';
                    color: ${themeColor.main.secondary};
                  `}
                >
                  For Artists
                </h3>
                {faQForArtist.map((f, i) => (
                  <div
                    key={i}
                    css={css`
                      margin-bottom: 16px;
                    `}
                  >
                    <FaQItem faq={f} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="grantsAwarded"
          css={[
            topPageCSS.awarded.wrapper,
            css`
              &::before {
                width: ${width}px;
              }
            `,
          ]}
        >
          <h2 css={topPageCSS.awarded.title}>Grants Awarded by</h2>
          <div
            css={[
              topPageCSS.awarded.awards,
              css`
                margin-bottom: 32px;
              `,
            ]}
          >
            <div>
              <img src="/img/ethmexico-logo.png" alt="ETH Mexico" />
            </div>
            <div>
              <img src="/img/PrimaryLogosvg.png" alt="polygon" />
            </div>
            <div>
              <img src="/img/eth-ny.png" alt="ETH NewYork" />
            </div>
          </div>
          <h2 css={topPageCSS.awarded.title}>Featured at</h2>
          <div
            css={[
              topPageCSS.awarded.awards,
              css`
                gap: 16px;

                & > div {
                  width: auto;
                }
              `,
            ]}
          >
            {featuredImgList.map((img) => (
              <div key={img}>
                <img
                  css={css`
                    width: 240px;
                    height: 115px;
                    object-fit: cover;

                    @media screen and (max-width: 1023px) {
                      width: 100%;
                      max-width: 500px;
                      height: auto;
                    }
                  `}
                  src={`/img/featured/${img}.png`}
                  alt={img}
                />
              </div>
            ))}
          </div>
        </section>
        <section id="joinUs" css={topPageCSS.follow.wrapper}>
          <h2 css={topPageCSS.follow.title}>
            Follow <span>Us</span>
          </h2>
          <div css={topPageCSS.follow.links}>
            {followSNS.map((sns, i) => (
              <a
                key={i}
                href={sns.url}
                rel="noreferrer"
                target="_blank"
                css={topPageCSS.follow.link}
              >
                <img src={sns.icon} />
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default memo(TopPageTemplate)
