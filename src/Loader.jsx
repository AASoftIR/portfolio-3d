// Loader.jsx
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
	const { progress } = useProgress();
	return (
		<Html center>
			<div
				style={{
					fontSize: "4rem",
					textAlign: "center",
					whiteSpace: "nowrap",
					fontFamily: "fantasy",
					background: "linear-gradient(90deg, #63eb1a, #00c3ff)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					backgroundClip: "text",
					color: "transparent",
				}}
			>
				Loading {Math.round(progress)}%
			</div>
		</Html>
	);
}
