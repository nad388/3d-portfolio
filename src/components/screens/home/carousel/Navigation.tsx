import useActions from '@/hooks/useActions'
import { FC } from 'react'
import { BsFillSignTurnLeftFill, BsFillSignTurnRightFill } from 'react-icons/bs'
const Navigation: FC = () => {
	const { nextSlide, prevSlide } = useActions()
	return (
		<div className='mt-10 w-1/2 flex items-center justify-center mx-auto'>
			<button onClick={() => prevSlide()}>
				<BsFillSignTurnLeftFill
					size={40}
					className='mr-12 transition-colors duration-500 hover:text-pink'
				/>
			</button>
			<button onClick={() => nextSlide()}>
				<BsFillSignTurnRightFill
					size={40}
					className='transition-colors duration-500 hover:text-pink'
				/>
			</button>
		</div>
	)
}

export default Navigation
