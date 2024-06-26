'use client'

import React, { useState } from 'react'
import AssetsList from './AssetsList'
import PaginationButton from '../common/PaginationButton'
import { useGetAssets } from '@/hooks/useGetAssets'

export default function IndividualAsset() {
  const [activePage, setActivePage] = useState(0)
  const { assets } = useGetAssets(activePage)

  return (
    <>
      <div className="w-full">
        <div className=" mb-[2.5rem] h-[3rem] text-neutral-navy-100">
          <span className="text-lg font-bold leading-[3rem]">개별 에셋 </span>
          <span className="text-sl">({assets?.data?.totalElement})</span>
        </div>
      </div>
      <AssetsList assets={assets?.data?.assetList} />
      <PaginationButton
        activePage={activePage}
        setActivePage={setActivePage}
        pages={assets?.data?.totalPage}
      />
    </>
  )
}
