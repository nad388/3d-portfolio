import { createSlice } from '@reduxjs/toolkit'
import { ICarousel } from './carousel.interface'
import { items } from './items.data'

const initialState: ICarousel = {
	currentId: 1,
	items,
}

export const carouselSlice = createSlice({
	name: 'carousel',
	initialState,
	reducers: {
		
	}
})
