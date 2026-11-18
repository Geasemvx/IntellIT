import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { ROBOT_SCENE } from '../config'

// The interactive 3D robot from the original IntellIT template, made in Spline.
export default function RobotScene() {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative h-full w-full" role="img" aria-label="Interactive 3D robot">
      {!loaded && (
        <div className="absolute inset-0 grid place-items-center text-sm text-ash">Loading 3D robot…</div>
      )}
      <Spline
        scene={ROBOT_SCENE}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}
