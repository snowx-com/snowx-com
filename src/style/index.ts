import { css } from '@emotion/react'

export const themeColor = {
  main: {
    primary: '#3DA9FC',
    secondary: '#90B4CE',
  },
  base: '#FBFBFB',
  accent: '#79D799',
}

export const commonStyle = {
  buttonStyle: css`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    min-width: 134px;
    color: #fff;
    padding: 10px 24px;
    text-transform: uppercase;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.5;
    }
  `,
}

export const buttonStyles = {
  mintButton: [
    commonStyle.buttonStyle,
    css`
      background-color: ${themeColor.accent};
    `,
  ],
  downloadButton: [
    commonStyle.buttonStyle,
    css`
      background-color: ${themeColor.main.primary};
    `,
  ],
  discordButton: [
    commonStyle.buttonStyle,
    css`
      background-color: #5865f2;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding-left: 12px;
      & span {
        display: inline-block;
        width: 18px;
      }
    `,
  ],
}
