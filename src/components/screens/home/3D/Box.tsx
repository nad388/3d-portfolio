import { useTexture } from '@react-three/drei'
import { ThreeElements, useFrame } from '@react-three/fiber'
import { FC, useRef } from 'react'
import * as THREE from 'three'

type TypeBox = {
	image: string
} & ThreeElements['mesh']

const Box: FC<TypeBox> = props => {
	const ref = useRef<THREE.Mesh>(null!)

	const images = useTexture([
		props.image,
		props.image,
		props.image,
		props.image,
	])

	// useFrame((state, delta) => (ref.current.rotation.y += delta))
	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.x += delta / 2
			ref.current.rotation.y += delta
		}
	})

	return (
		<mesh {...props} ref={ref}>
			<boxGeometry args={[1, 0.56, 1]} />
			{images.map(image => (
				<meshBasicMaterial key={image.id} map={image} side={THREE.BackSide} />
			))}
		</mesh>
	)
}

export default Box
