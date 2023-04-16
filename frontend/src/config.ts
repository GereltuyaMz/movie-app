const dev = process.env.NODE_ENV !== "production";

export const server = dev
	? "http://localhost:3000"
	: "https://api.themoviedb.org/3/movie/upcoming?api_key=";
