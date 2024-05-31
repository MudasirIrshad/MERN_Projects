import React from 'react'
import { useRecoilValue } from 'recoil'
import { countState } from '../Atoms'

export default function Count() {
    const count = useRecoilValue(countState)
  return (
    <div>{count}</div>
  )
}
