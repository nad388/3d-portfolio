import { FC } from 'react'
import Carousel3DItem from './Carousel3DItem'
import Navigation from './Navigation'
import { useCarousel } from './useCarousel'

const Carousel: FC = () => {
	const { items } = useCarousel()

	return (
		<section className='mt-14'>
			<div className='flex items-center'>
				{items.length ? (
					items.map(item => <Carousel3DItem key={item.id} item={item} />)
				) : (
					<div>Elements not found!</div>
				)}
			</div>
			<Navigation />
		</section>
	)
}

export default Carousel
