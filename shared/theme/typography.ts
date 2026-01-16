import { TextStyle } from 'react-native'

import { lineHeight } from './utils/lineHeight'

export const Fonts = {
  primary: 'FiraSans',
} as const

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
  semiBold: '600',
  bold: '700',
} as const

export const LineHeightMultiplier = {
  regular: 1.2,
  relaxed: 1.5,
} as const

export const Typography = {
  heading: {
    fontFamily: Fonts.primary,
    fontSize: FontSizes.heading,
    fontWeight: FontWeights.bold,
    fontStyle: 'normal',
    lineHeight: lineHeight(
      FontSizes.heading,
      LineHeightMultiplier.regular,
    ),
  },
  title: {
    fontFamily: Fonts.primary,
    fontSize: FontSizes.title,
    fontWeight: FontWeights.semiBold,
    fontStyle: 'normal',
    lineHeight: lineHeight(
      FontSizes.title,
      LineHeightMultiplier.regular,
    ),
  },
  subtitle: {
    fontFamily: Fonts.primary,
    fontSize: FontSizes.subtitle,
    fontWeight: FontWeights.regular,
    fontStyle: 'normal',
    lineHeight: lineHeight(
      FontSizes.subtitle,
      LineHeightMultiplier.regular,
    ),
  },
  primary: {
    fontFamily: Fonts.primary,
    fontSize: FontSizes.primary,
    fontWeight: FontWeights.regular,
    fontStyle: 'normal',
    lineHeight: lineHeight(
      FontSizes.primary,
      LineHeightMultiplier.regular,
    ),
  },
  small: {
    fontFamily: Fonts.primary,
    fontSize: FontSizes.small,
    fontWeight: FontWeights.regular,
    fontStyle: 'normal',
    lineHeight: lineHeight(
      FontSizes.small,
      LineHeightMultiplier.relaxed,
    ),
  },
  extrasmall: {
    fontFamily: Fonts.primary,
    fontSize: FontSizes.extrasmall,
    fontWeight: FontWeights.regular,
    fontStyle: 'normal',
    lineHeight: lineHeight(
      FontSizes.extrasmall,
      LineHeightMultiplier.regular,
    ),
  },
} satisfies Record<string, TextStyle>

export type TypographyVariant = keyof typeof Typography
