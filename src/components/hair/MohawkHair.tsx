import React from 'react'
import { useTheme } from '../../themeContext'
import { HairProps } from './types'

export const Back = () => <></>

/** Short sides (implied) with a tall center strip. */
export const Front = ({ hairColor }: HairProps) => {
  const { colors, skin } = useTheme()
  const { base, shadow } = colors.hair[hairColor]

  return (
    <>
      <path
        d="M558.73,399.34c-12.86,24-60,37.44-63.83,31.42-4.29-6.73,37.85-55.32,13.9-106.14"
        fill={skin.shadow}
      />
      <path
        d="M384,418c12-88,52-142,116-142s104,54,116,142c-36-8-72-12-116-12S420,410,384,418Z"
        fill={skin.shadow}
        opacity={0.75}
      />
      <path
        d="M468,395c4-48,28-92,32-138,4-46,12-88,32-118s48-38,68-38,48,8,68,38,28,72,32,118,28,90,32,138c-24-10-52-15-82-15s-58,5-82,15Z"
        fill={base}
      />
      <path
        d="M512,118c8,32,12,72,16,118,6,58,14,112,24,162"
        fill="none"
        stroke={shadow}
        strokeWidth="28px"
        strokeLinecap="round"
        opacity={0.45}
      />
      <path
        d="M468,395c4-48,28-92,32-138,4-46,12-88,32-118s48-38,68-38,48,8,68,38,28,72,32,118,28,90,32,138c-24-10-52-15-82-15s-58,5-82,15Z"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <path
        d="M502,128c-6,28-10,62-12,98s-2,72,4,108"
        fill="none"
        stroke={colors.white}
        strokeWidth="10px"
        strokeLinecap="round"
        opacity={0.35}
      />
    </>
  )
}
