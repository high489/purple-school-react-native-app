import { TextStyle } from 'react-native'

import { lineHeight } from './utils/lineHeight'

export const FontSizes = {
  heading: 21,
  title: 20,
  subtitle: 18,
  primary: 16,
  small: 14,
  extrasmall: 12,
} as const

export const FontWeights = {
  regular: '400',
  bold: '700',
} as const

export const LineHeightMultiplier = {
  regular: 1.2,
  relaxed: 1.5,
} as const

export const Typography = {
  heading: {
    fontSize: FontSizes.heading,
    fontWeight: FontWeights.bold,
    fontStyle: 'normal',
    lineHeight: lineHeight(FontSizes.heading, LineHeightMultiplier.regular),
  },
  title: {
    fontSize: FontSizes.title,
    fontWeight: FontWeights.regular,
    fontStyle: 'normal',
    lineHeight: lineHeight(FontSizes.title, LineHeightMultiplier.regular),
  },
  subtitle: {
    fontSize: FontSizes.subtitle,
    fontWeight: FontWeights.regular,
    fontStyle: 'normal',
    lineHeight: lineHeight(FontSizes.subtitle, LineHeightMultiplier.regular),
  },
  primary: {
    fontSize: FontSizes.primary,
    fontWeight: FontWeights.regular,
    fontStyle: 'normal',
    lineHeight: lineHeight(FontSizes.primary, LineHeightMultiplier.regular),
  },
  small: {
    fontSize: FontSizes.small,
    fontWeight: FontWeights.regular,
    fontStyle: 'normal',
    lineHeight: lineHeight(FontSizes.small, LineHeightMultiplier.relaxed),
  },
  extrasmall: {
    fontSize: FontSizes.extrasmall,
    fontWeight: FontWeights.regular,
    fontStyle: 'normal',
    lineHeight: lineHeight(FontSizes.extrasmall, LineHeightMultiplier.regular),
  },
} satisfies Record<string, TextStyle>

export type TypographyVariant = keyof typeof Typography
