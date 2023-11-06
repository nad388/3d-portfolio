import { FC, forwardRef, useRef } from 'react'

interface IPlane {
	shift?: number
	opacity?: number
	args: any
	map: any
}

const Plane: FC<IPlane> = forwardRef(({ shift, opacity, args, map }, ref) => {
	const material = useRef()
	return <div></div>
})

export default Plane
