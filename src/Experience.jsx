// Experience.js
import {
	useGLTF,
	Environment,
	Float,
	PresentationControls,
	ContactShadows,
	Html,
	Text,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Experience() {
	const { scene, nodes } = useGLTF("./model.gltf");

	const lidRef = useRef();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// Animate the laptop lid opening
		gsap.fromTo(
			lidRef.current.rotation,
			{ x: -Math.PI / 2 },
			{ x: 0, duration: 1.5, ease: "power2.out" }
		);
		// Mark as loaded once animation completes
		setIsLoaded(true);
	}, []);

	const isMobile = window.innerWidth < 768;

	return (
		<>
			{isLoaded && <Environment preset="city" />}
			<color args={["#241a1a"]} attach="background" />
			<PresentationControls
				global
				rotation={[0.13, 0.1, 0]}
				polar={[-0.4, 0.2]}
				azimuth={[-1, 0.75]}
				config={{ mass: 2, tension: 400 }}
				snap={{ mass: 4, tension: 400 }}
			>
				<Float rotationIntensity={0.4}>
					<rectAreaLight
						width={2.5}
						height={1.65}
						intensity={65}
						color={"#63eb1a"}
						rotation={[0.1, Math.PI, 0]}
						position={[0, 0.55, -1.15]}
					/>
					{/* The laptop with an animated opening lid */}
					<primitive object={scene} position-y={isMobile ? -0.6 : -1.2}>
						<group ref={lidRef} position-y={-0.1}>
							{/* Screen content */}
							<Html
								transform
								wrapperClass="htmlScreen"
								distanceFactor={1.17}
								position={[0, 1.56, -1.4]}
								rotation-x={-0.256}
							>
								<iframe src="https://aasoft.ir" />
							</Html>
						</group>
					</primitive>

					{/* Adjusted text for mobile */}
					<Text
						font="./bangers-v20-latin-regular.woff"
						fontSize={isMobile ? 0.3 : 0.6}
						position={[isMobile ? 1 : 2, 0.75, 0.75]}
						rotation-y={-1.25}
						children={"Alireza Mohebbi\rAASoft.ir"}
						maxWidth={2}
						textAlign="center"
						color={"#63eb1a"}
					></Text>
				</Float>
			</PresentationControls>
			<ContactShadows position-y={-1.4} blur={2.4} scale={5} opacity={0.4} />
		</>
	);
}
