import {Float, useGLTF} from '@react-three/drei'

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/react.glb')
    return (
        <Float floatIntensity={1}>
            <group position={[8,8,0]} {...props} scale={0.03}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 7.935, 18.102]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[1.5, 1.5, 1.5]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo