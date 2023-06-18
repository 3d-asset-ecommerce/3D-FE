import { Asset } from '@/api/service/assets'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Asset = {
  id: 0,
  title: '',
  price: 0,
  discount: 0,
  createdAt: '',
  updatedAt: '',
  categories: {
    title: '',
    tags: [],
  },
}

const clickedAssetSlice = createSlice({
  name: 'clickedAsset',
  initialState,
  reducers: {
    setClickedAsset: (state: Asset, action) => {
      return action.payload
    },
    clearAsset: (state: Asset) => {
      return initialState
    },
  },
})

export const { setClickedAsset, clearAsset } = clickedAssetSlice.actions
export default clickedAssetSlice.reducer
