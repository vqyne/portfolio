import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Purple = () => {
    const purple = useGLTF("./purple/scene.gltf");
    return (
        <primitive object={purple.scene} scale={2.5} position-y={0} rotation-y={0} />
    );
};

const PurpleCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 10],
            }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 0]} intensity={0.8} />
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Purple />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};



export default PurpleCanvas;