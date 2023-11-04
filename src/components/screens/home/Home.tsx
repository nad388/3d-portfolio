import { FC } from 'react'
import Carousel from './carousel/Carousel'

const Home: FC = () => {
	return (
		<div className='m-16'>
			<h1 className='text-7xl text-center font-medium'>
				Twin Peaks. Red room.
			</h1>
			<Carousel />
		</div>
	)
}

export default Home
