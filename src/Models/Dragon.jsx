import React , { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import dragon_flying_cycleScene from '../assets/3d/dragon_flying_cycle.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
const Dragon = (props) => {
  
    const dragonRef = useRef();
    const {scene , animations} = useGLTF(dragon_flying_cycleScene);
    const {actions} = useAnimations(animations, dragonRef);
    useEffect(() => {
      actions['Take 001'].play();
    }, [])
    
   
    useFrame(({ clock, camera }) => {

      
      // Update the Y position to simulate bird-like motion using a sine wave
      dragonRef.current.position.y = Math.sin(clock.elapsedTime) * 0.6 + 4;
  
      // Check if the bird reached a certain endpoint relative to the camera
      if (dragonRef.current.position.x > camera.position.x + 10) {
        // Change direction to backward and rotate the bird 180 degrees on the y-axis
        dragonRef.current.rotation.y = Math.PI*1.5;
      } else if (dragonRef.current.position.x < camera.position.x - 10) {
        // Change direction to forward and reset the bird's rotation
        dragonRef.current.rotation.y = Math.PI/2;
      }
  
      // Update the X and Z positions based on the direction
      if (dragonRef.current.rotation.y === Math.PI/2) {
      
        // Moving forward
        dragonRef.current.position.x += 0.01;
        dragonRef.current.position.z -= 0.01;
        dragonRef.current.position.y += 0.01;
      } else {
        // Moving backward
        dragonRef.current.position.x -= 0.01;
        dragonRef.current.position.z += 0.01;
      }
    })
  return (
    <mesh position={[-5,10,1]} scale={[1,1,1]}  ref={dragonRef}  >

      <primitive object={scene}/>
      
    </mesh>
  );
}

export default Dragon
