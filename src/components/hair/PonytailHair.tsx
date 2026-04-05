import React from 'react'
import { useTheme } from '../../themeContext'
import { HairProps } from './types'
import { Front as BuzzCutFront } from './BuzzCut'

/** Pulled-back top (buzz dome) with a tail behind the head. */
export const Front = BuzzCutFront

export const Back = ({ hairColor }: HairProps) => {
  const { colors } = useTheme()
  const { base, shadow } = colors.hair[hairColor]

  return (
    <>
      <path
        d="M458,298c8-42,42-68,92-72s98,22,110,64c4,16,2,34-8,52-6,86-22,168-62,248-18,36-40,52-62,52s-44-16-62-52c-40-80-56-162-62-248-10-18-12-36-8-52Z"
        fill={base}
      />
      <path
        d="M520,310c28,120,24,260-28,420-12,32-28,48-44,48s-32-16-44-48c-52-160-56-300-28-420"
        fill={shadow}
        opacity={0.85}
      />
      <path
        d="M458,298c8-42,42-68,92-72s98,22,110,64c4,16,2,34-8,52-6,86-22,168-62,248-18,36-40,52-62,52s-44-16-62-52c-40-80-56-162-62-248-10-18-12-36-8-52Z"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
    </>
  )
}
