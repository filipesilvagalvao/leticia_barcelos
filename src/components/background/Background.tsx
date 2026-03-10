"use client"
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

function Background() {
    return (
        <ShaderGradientCanvas
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -2,
                pointerEvents: "none", // Permite clicar através do gradiente
            }}
            pixelDensity={1.5}
            fov={45}
        >
            <ShaderGradient
                animate="on"
                brightness={1.2}
                cAzimuthAngle={180}
                cDistance={2.9}
                cPolarAngle={120}
                cameraZoom={1}
                color1="#a5978a"
                color2="#ffffff"
                color3="#fdfbf9"
                envPreset="city"
                grain="off"
                lightType="3d"
                positionX={0}
                positionY={1.8}
                positionZ={0}
                range="disabled"
                rangeEnd={40}
                rangeStart={0}
                reflection={0.1}
                rotationX={0}
                rotationY={0}
                rotationZ={-90}
                shader="defaults"
                type="waterPlane"
                uAmplitude={0}
                uDensity={1}
                uFrequency={5.5}
                uSpeed={0.12}
                uStrength={3}
                uTime={0.2}
                wireframe={false}
            />
        </ShaderGradientCanvas>
    )
}

export default Background