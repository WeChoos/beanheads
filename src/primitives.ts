import React from 'react'

// Web shim: wraps DOM SVG intrinsics so all components can import named
// primitives. Metro platform resolution substitutes primitives.native.ts
// (react-native-svg) when bundling for iOS/Android.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const e = (tag: string) => (props: any) => React.createElement(tag, props)

export const Svg      = e('svg')
export const Path     = e('path')
export const G        = e('g')
export const Circle   = e('circle')
export const Rect     = e('rect')
export const Ellipse  = e('ellipse')
export const Mask     = e('mask')
export const Defs     = e('defs')
export const ClipPath = e('clipPath')
export const Line     = e('line')
export const Polygon  = e('polygon')
export const Polyline = e('polyline')
