import React from "react";
import Image from "next/image";
import styles from "@/styles/Detail.module.scss";
import { BsBookmark, BsPlay, BsFillStarFill } from "react-icons/bs";
import { Result } from "@/interfaces";
import { GetStaticProps, GetStaticPaths } from "next";
import slugify from "@sindresorhus/slugify";

const movieURL = "http://localhost:8080/movies";

const Detail = ({ movie }: any) => {
	console.log("movie", movie);
	return (
		<div className={styles.detail}>
			<Image
				className={styles.movieImg}
				src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
				alt={movie.title}
				width={370}
				height={470}
			/>
			<div className={styles.info}>
				<h1 className={styles.title}>{movie.title}</h1>
				<p>{movie.release_date.slice(0, 10)}</p>
				<p className={styles.genres}>
					Animation, Adventure, Family, Fantasy, Comedy
				</p>
				<div className={styles.actions}>
					<div className={styles.review}>
						<BsFillStarFill />
						<p>{movie.vote_average}</p>
					</div>
					<BsBookmark />
					<div className={styles.trailer}>
						<BsPlay />
						<p>play trailer</p>
					</div>
				</div>
				<div className={styles.overview}>
					<h4>Overview</h4>
					<p>{movie.overview}</p>
				</div>
				<div className={styles.credits}>
					<div>
						<p>Director</p>
						<p>Aaron Horvath</p>
					</div>
					<div>
						<p>Writers</p>
						<p>Matt Fogel</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`${movieURL}/upcoming`);
	const movie = await res.json();
	const pathWithParams = movie.map((m: Result) => ({
		params: { slug: slugify(m.title) },
	}));
	console.log("path", pathWithParams);
	return {
		paths: pathWithParams,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const res = await fetch(`${movieURL}/upcoming`);
	const movie = await res.json();
	const found = movie.find(
		(item: Result) => params?.slug === slugify(item.title)
	);
	console.log("itemid", params);
	console.log("found result", found);

	return {
		props: {
			movie: found,
		},
	};
};

export default Detail;
