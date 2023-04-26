import React from "react";
import { useSession } from "next-auth/react";

const Movies = () => {
	const { data: session, status } = useSession();
	console.log("session", session);
	console.log("status", status);
	return (
		<div>
			<h1>Movies</h1>
		</div>
	);
};

export default Movies;
