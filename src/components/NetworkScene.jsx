import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useReducedMotion from '../lib/useReducedMotion'

// Evenly spread points over a sphere, with a little jitter so it feels organic.
function spherePoints(count, radius) {
  const pts = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = golden * i
    const jitter = radius * (0.92 + Math.random() * 0.16)
    pts.push(new THREE.Vector3(Math.cos(theta) * r * jitter, y * jitter, Math.sin(theta) * r * jitter))
  }
  return pts
}

function Network({ reduced }) {
  const spin = useRef()
  const tilt = useRef()

  const { nodes, links, nodeCount, linkCount } = useMemo(() => {
    const pts = spherePoints(96, 2.15)
    const nodeArr = new Float32Array(pts.length * 3)
    pts.forEach((p, i) => p.toArray(nodeArr, i * 3))
    const linkList = []
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 0.92) linkList.push(...pts[i].toArray(), ...pts[j].toArray())
      }
    }
    return {
      nodes: nodeArr,
      links: new Float32Array(linkList),
      nodeCount: pts.length,
      linkCount: linkList.length / 3,
    }
  }, [])

  useFrame((state, delta) => {
    if (spin.current && !reduced) spin.current.rotation.y += delta * 0.12
    if (tilt.current) {
      // Gentle response to the pointer
      tilt.current.rotation.x = THREE.MathUtils.lerp(tilt.current.rotation.x, -state.pointer.y * 0.25, 0.04)
      tilt.current.rotation.z = THREE.MathUtils.lerp(tilt.current.rotation.z, state.pointer.x * 0.12, 0.04)
    }
  })

  return (
    <group ref={tilt}>
      <group ref={spin}>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={nodeCount} array={nodes} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial size={0.07} color="#e7e7e7" sizeAttenuation transparent opacity={0.95} />
        </points>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={linkCount} array={links} itemSize={3} />
          </bufferGeometry>
          <lineBasicMaterial color="#3fbf7f" transparent opacity={0.35} />
        </lineSegments>
        <mesh>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshBasicMaterial color="#3fbf7f" wireframe transparent opacity={0.28} />
        </mesh>
      </group>
    </group>
  )
}

export default function NetworkScene() {
  const reduced = useReducedMotion()
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      aria-label="Rotating 3D network of connected nodes"
      role="img"
    >
      <Network reduced={reduced} />
    </Canvas>
  )
}
