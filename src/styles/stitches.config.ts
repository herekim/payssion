import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {},
  utils: {
    flexCenter: () => () => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    flexColumn: () => () => ({
      display: 'flex',
      flexDirection: 'column',
    }),
    flexColumnCenter: () => () => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    ItemsCenter: () => () => ({
      alignItems: 'center',
    }),
    gridColumn: (columns: number) => () => ({
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
    }),
    gridGap: (value: string) => () => ({
      gridGap: value,
    }),
    positionTop: () => (top: string, left: string, right: string) => ({
      position: 'absolute',
      top: top,
      left: left,
      right: right,
    }),
    paddingX: (value: string) => () => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    marginX: (value: string) => () => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
})
