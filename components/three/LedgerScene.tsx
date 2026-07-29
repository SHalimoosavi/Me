"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

const NODE_COUNT = 14;

function useNetworkLayout() {
  return useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / NODE_COUNT);
      const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;
      const r = 2.4;
      nodes.push(
        new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        )
      );
    }

    // Chain each node to its 2 nearest neighbours for a "settlement network" look.
    const edges: [THREE.Vector3, THREE.Vector3][] = [];
    nodes.forEach((a, i) => {
      const distances = nodes
        .map((b, j) => ({ j, d: i === j ? Infinity : a.distanceTo(b) }))
        .sort((x, y) => x.d - y.d)
        .slice(0, 2);
      distances.forEach(({ j }) => {
        const b = nodes[j];
        if (a && b) edges.push([a, b]);
      });
    });

    return { nodes, edges };
  }, []);
}

function Network() {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, edges } = useNetworkLayout();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.00015) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {edges.map(([a, b], i) => (
        <Line
          key={i}
          points={[a, b]}
          color="#6D5EF0"
          transparent
          opacity={0.35}
          lineWidth={1}
        />
      ))}
      {nodes.map((pos, i) => (
        <Float key={i} speed={1.4} floatIntensity={0.6} rotationIntensity={0.4}>
          <mesh position={pos}>
            <boxGeometry args={[0.16, 0.16, 0.16]} />
            <meshStandardMaterial
              color={i % 5 === 0 ? "#C9A227" : "#EDEBE2"}
              emissive={i % 5 === 0 ? "#C9A227" : "#6D5EF0"}
              emissiveIntensity={i % 5 === 0 ? 0.6 : 0.25}
              roughness={0.3}
              metalness={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function LedgerScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#C9A227" />
      <pointLight position={[-4, -2, -4]} intensity={30} color="#6D5EF0" />
      <Network />
    </Canvas>
  );
}
