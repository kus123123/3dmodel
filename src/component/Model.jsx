import { useGLTF } from "@react-three/drei";

function Model() {
    const myThreeDObject = useGLTF("/Apartment-2.glb");
    console.log("the 3d object return by the useGLTF function is : \n");
    console.log(myThreeDObject);

    // destructuring the 3d object that is return by the useGLTF
    const { scene } = myThreeDObject;

    return <primitive object={scene} scale={2} />;
}
export default Model;
