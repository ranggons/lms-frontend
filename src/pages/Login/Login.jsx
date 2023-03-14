import React from "react";
import { useNavigate } from "react-router";

import { Button, Input } from "@components/atoms";

import { useCreateData } from "@hooks/useCreateData";

import AuthenticationService from "@services/api/auth/AuthenticationService";
import { getRedirected, login } from "@services/functions/Auth";
import AuthenticationValidator from "@services/validations/auth/AuthenticationValidator";

import { useAuthStore } from "@stores/authStore";

const Login = () => {
	const setUser = useAuthStore((state) => state.setUser);
	const navigate = useNavigate();

	const onSuccessLogin = (data) => {
		login(data.data.data, data.data.data.token);
		setUser(data.data.data);
		navigate(getRedirected());
	};

	const { errorsCreate, handleSubmitCreate, onSubmitCreate, registerCreate } =
		useCreateData({
			api: AuthenticationService.login,
			resolver: AuthenticationValidator.login,
			onSuccess: onSuccessLogin,
			toastSuccess: false,
		});

	return (
		<div className="flex w-full h-screen">
			<div className="basis-1/2 flex flex-col justify-center items-center">
				<h1 className="font-bold text-3xl text-center mb-3">
					Selamat Datang Para <br></br> Penerus Bangsa
				</h1>
				<form
					onSubmit={handleSubmitCreate(onSubmitCreate)}
					className="p-12 border border-black rounded-md shadow-lg"
				>
					<Input
						title="Email"
						error={errorsCreate.email}
						{...registerCreate("email")}
					/>
					<Input
						title="Password"
						type="password"
						error={errorsCreate.password}
						{...registerCreate("password")}
					/>
					<Button text="Login" additionalClass="mt-2 w-full" type="submit" />
				</form>
			</div>
			<div className="flex bg-blue-400 flex-grow"></div>
		</div>
	);
};

export default Login;
