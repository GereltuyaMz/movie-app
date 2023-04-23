import React from "react";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import type { Result } from "@/interfaces";

type Props = {
	movie: Result;
};

export const SingleMovie = ({ movie }: Props) => {
	return (
		<div className={styles.movie}>
			<Image
				src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				alt={`${movie.title} poster`}
				width={270}
				height={380}
			/>
			<p>{movie.title}</p>
		</div>
	);
};
