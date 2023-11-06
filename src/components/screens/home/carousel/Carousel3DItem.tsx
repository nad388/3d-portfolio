import useActions from '@/hooks/useActions'
import { ICarouselItem } from '@/store/carousel/carousel.interface'
import cn from 'clsx'
import { FC } from 'react'
import Box from '../3D/Box'
import ThreeProvider from '../3D/Three'
import { useCarousel } from './useCarousel'

const Carousel3DItem: FC<{ item: ICarouselItem }> = ({ item }) => {
	const { currentId } = useCarousel()
	const { changeCurrentId } = useActions()

	const isActive = currentId === item.id

	return (
		<div className={cn('mx-14', isActive ? 'w-1/2' : 'w-1/4')}>
			<button onClick={() => changeCurrentId(item.id)}>
				<ThreeProvider>
					<Box position={[0, 0, 0]} image={item.image} />
				</ThreeProvider>
				{/* <Image
					src={item.image}
					alt=''
					width={700}
					height={394}
					className='rounded-xl shadow-lg overflow-hidden'
				/> */}
			</button>

			<div
				className={cn(
					'mx-auto mt-10 bg-blue h-2 rounded transition-all duration-500 ease-in-out',
					isActive ? 'w-1/2' : 'w-0'
				)}
			/>
		</div>
	)
}

export default Carousel3DItem
