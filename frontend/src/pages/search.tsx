import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const Search = () => {
	const [query, setQuery] = useState("");
	const [result, setResult] = useState([]);
	const handleSearch = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.get(
				`http://localhost:8080/movies/search?keyword=${query}`
			);
			setResult(response.data);
			console.log("result", result);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div>
			<form onSubmit={handleSearch}>
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
			{result.map((movie) => (
				<>
					<div key={movie._id}>{movie.title}</div>
					<Image
						src={`https://image.tmdb.org/t/p/w500/${movie.poster}`}
						alt={`${movie.title} poster`}
						width={270}
						height={380}
					/>
				</>
			))}
		</div>
	);
};

export default Search;
