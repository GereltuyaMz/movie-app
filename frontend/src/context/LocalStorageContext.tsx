import React, {
	createContext,
	useEffect,
	useState,
	FC,
	ReactNode,
} from "react";
import axios from "axios";

export interface AuthContextType {
	auth: boolean;
	signup: ({ ...data }: any) => Promise<any>;
	login: ({ ...data }: any) => Promise<any>;
	logout: () => void;
	userData: any;
}

interface AuthProps {
	children: ReactNode;
}

export const LocalContext = createContext<AuthContextType | null>(null);

const API_URL = "http://localhost:8080/users";

export const LocalProvider: FC<AuthProps> = ({ children }) => {
	const [auth, setAuth] = useState(false);
	const [userData, setUserData] = useState<void>();

	useEffect(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("user")!;
			const userToken = JSON.parse(saved);
			if (userToken) {
				setAuth(true);
				setUserData(userToken);
			}
		}
	}, [auth]);

	const signup = async ({ ...data }) => {
		try {
			const response = await axios.post(`${API_URL}/register`, { ...data });
			setAuth(true);
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	const login = async ({ ...data }: any) => {
		try {
			const response = await axios.post(`${API_URL}/login`, {
				...data,
			});
			const saved = localStorage.setItem("user", JSON.stringify(response.data));
			setAuth(true);
			setUserData(saved);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	};

	const logout = () => {
		const remove = localStorage.removeItem("user");
		setAuth(false);
		return remove;
	};

	return (
		<LocalContext.Provider value={{ login, logout, auth, userData, signup }}>
			{children}
		</LocalContext.Provider>
	);
};
