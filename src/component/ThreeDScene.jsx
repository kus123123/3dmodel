import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { XR, createXRStore } from "@react-three/xr";
import Model from "./Model";

const xrStore = createXRStore();

function ThreeDScene() {
    return (
        <>
            <div className="flex gap-10">
                <button onClick={() => xrStore.enterVR()} className="border-2 px-4 py-2 m-4 rounded-xl text-lg font-semibold hover:cursor-pointer">
                    Enter VR
                </button>

                <button onClick={() => xrStore.enterAR()} className="border-2 px-4 py-2 m-4 rounded-xl text-lg font-semibold hover:cursor-pointer" >Enter AR</button>
            </div>

            <div className="w-full h-screen">
                <Canvas camera={{ position: [0, 1, 5] }}>
                    <XR store={xrStore}>
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[0, 1, 0]} />
                        <Model />
                        <OrbitControls />
                    </XR>
                </Canvas>
            </div>
        </>
    );
}

export default ThreeDScene;