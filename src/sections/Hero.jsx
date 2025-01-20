import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import HackerRoom from "../Components/HackerRoom.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import Target from "../Components/Target.jsx";
import ReactLogo from "../Components/ReactLogo.jsx";
import {calculateSizes} from "../index.js";
import Cube from "../Components/Cube.jsx";
import Rings from "../Components/Rings.jsx";
import HeroCamera from "../Components/HeroCamera.jsx";
import Button from "../Components/Button.jsx";

const Hero = () => {

    const isMobile = useMediaQuery({maxWidth: 768})
    const isSmall = useMediaQuery({maxWidth: 440})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet);


    return (
        <section className="min-h-screen w-2024 flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Manas<span className="waving-hand"> 👋 </span></p>
                <p className="hero_tag text-gray_gradient ">Building UI/UX and Web Applications</p>
            </div>
            <div className="w-full h-full absolute inset-0">

                <Canvas className="max-w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                    <perspectiveCamera makeDefault position={[0, 0, 40]}/>
                    <HeroCamera>
                        <HackerRoom
                            // scale={0.01}
                            //postion={[0,0,0]}
                             //rotation={[0, -Math.PI/2, 0]}
                            position={sizes.deskPosition}
                            rotation={[0.18, -Math.PI, 0]}
                            scale={sizes.deskScale}
                        />
                    </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>

                        </group>

                        <ambientLight intensity={1.5}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>

                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#About" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="w-full"/>
                </a>
            </div>
        </section>
    )
}
export default Hero
