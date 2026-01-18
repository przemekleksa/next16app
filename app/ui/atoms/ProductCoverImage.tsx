export interface ProductCoverImageProps {
	src: string;
	alt: string;
}

export const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => {
	return (
		<div className="aspect-square w-full overflow-hidden rounded-lg bg-amber-400">
			<img
				width={320}
				height={320}
				src={src}
				alt={alt}
				className="h-full w-full object-cover object-center p-4 transition-transform duration-300 ease-in-out hover:scale-105"
			/>
		</div>
	);
};
