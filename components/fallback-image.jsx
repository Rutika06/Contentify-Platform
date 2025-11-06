"use client";

import React from "react";
import Image from "next/image";

export default function FallbackImage({ src, alt, width, height, className }) {
	const [currentSrc, setCurrentSrc] = React.useState(src);

	return (
		<Image
			src={currentSrc}
			alt={alt}
			width={width}
			height={height}
			className={className}
			onError={() => {
				setCurrentSrc(
					"/placeholder.png"
				);
			}}
		/>
	);
}


