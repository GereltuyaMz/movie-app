export type Movies = {
	page?: number;
	results?: [
		{
			id?: number;
			poster_path?: string | null;
			adult?: boolean;
			overview?: string;
			release_date?: string;
			genre_ids?: [number];
			original_title?: string;
			original_language?: string;
			title?: string;
			backdrop_path?: string | null;
			popularity?: number;
			vote_count?: number;
			video?: boolean;
			vote_average?: number;
		}
	];
	dates?: {
		maximum?: string;
		minimum?: string;
	};
	total_pages?: number;
	total_results?: number;
};

export type Result = {
	id: number;
	poster_path?: string | null;
	adult?: boolean;
	overview?: string;
	release_date?: string;
	genre_ids?: [number];
	original_title?: string;
	original_language?: string;
	title?: string;
	backdrop_path?: string | null;
	popularity?: number;
	vote_count?: number;
	video?: boolean;
	vote_average?: number;
};

export type Series = {
	page?: number;
	results?: [
		{
			id?: number;
			poster_path?: string | null;
			overview?: string;
			genre_ids?: [number];
			original_name?: string;
			original_language?: string;
			backdrop_path?: string | null;
			popularity?: number;
			vote_count?: number;
			vote_average?: number;
			first_air_date?: string;
			origin_country?: [string];
			name?: string;
		}
	];
	total_pages?: number;
	total_results?: number;
};

export type TVResult = {
	id?: number;
	poster_path?: string | null;
	overview?: string;
	genre_ids?: [number];
	original_name?: string;
	original_language?: string;
	backdrop_path?: string | null;
	popularity?: number;
	vote_count?: number;
	vote_average?: number;
	first_air_date?: string;
	origin_country?: [string];
	name?: string;
};
