import React from 'react'
import { useTheme } from '../../themeContext'

/** Lens geometry aligned with round glasses centers (338.9,548.55) and (659.21,548.55), ~186×186 outer. */
const L = 186.62
const CORNER = 18
const CY = 548.55
const leftLensX = 338.9 - L / 2
const rightLensX = 659.21 - L / 2
const topY = CY - L / 2

export const SquareGlasses = () => {
  const { colors } = useTheme()

  return (
    <>
      <rect
        x={leftLensX}
        y={topY}
        width={L}
        height={L}
        rx={CORNER}
        ry={CORNER}
        fill="white"
        opacity={0.2}
      />
      <path
        d="M744.47,606.82a103.27,103.27,0,0,1-188.33-51.49c-37-14.6-74.43-14.47-114.19.39a103.43,103.43,0,0,1-103,96.13c-32.48,0-76-36.5-71-28.39,14,20.69,47,36.45,72.54,36.45,54.55,0,97.87-39.29,101.56-92.92,39.76-14.85,77.23-15,114.19-.39,3.5,53.82,48.39,93.53,103.07,93.53C704,660.13,729.4,626,744.47,606.82Z"
        opacity={0.12}
      />
      <path
        d={`M${leftLensX + 8},${topY + L - 12} L${leftLensX + L * 0.55},${topY + L * 0.35} L${leftLensX + 18},${topY + 18} Z`}
        fill="white"
        opacity={0.35}
      />
      <rect
        x={rightLensX}
        y={topY}
        width={L}
        height={L}
        rx={CORNER}
        ry={CORNER}
        fill="white"
        opacity={0.2}
      />
      <path
        d={`M${rightLensX + L - 18},${topY + L - 10} L${rightLensX + L * 0.42},${topY + L * 0.38} L${rightLensX + L - 28},${topY + 22} Z`}
        fill="white"
        opacity={0.35}
      />
      <rect
        x={leftLensX}
        y={topY}
        width={L}
        height={L}
        rx={CORNER}
        ry={CORNER}
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="20px"
      />
      <rect
        x={rightLensX}
        y={topY}
        width={L}
        height={L}
        rx={CORNER}
        ry={CORNER}
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="20px"
      />
      <path
        d={`M${leftLensX + L},${CY} Q${(leftLensX + L + rightLensX) / 2},${CY - 12} ${rightLensX},${CY}`}
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="20px"
      />
      <path
        d="M314.7,492.5c2.06,6.5-5.94,11.5-11.94,12.5-6,0-10-4-12-9-1-5,0-10,4-13,5-2,12-4,16.45,1.13A11.66,11.66,0,0,1,314.7,492.5Z"
        fill="white"
      />
      <path
        d="M325.37,488.67c-.61,4.33-6.61,4.33-7.61.33,0-3,1-4,3.85-4.1A3.76,3.76,0,0,1,325.37,488.67Z"
        fill="white"
      />
      <path
        d="M635,492.5c2.06,6.5-5.94,11.5-11.94,12.5-6,0-10-4-12-9-1-5,0-10,4-13,5-2,12-4,16.45,1.13A11.7,11.7,0,0,1,635,492.5Z"
        fill="white"
      />
      <path
        d="M645.69,488.67c-.61,4.33-6.61,4.33-7.61.33,0-3,1-4,3.84-4.1A3.77,3.77,0,0,1,645.69,488.67Z"
        fill="white"
      />
    </>
  )
}
