import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

export const useCreateData = ({
	invalidateQueries = [],
	api,
	handleCloseModal = null,
	defaultValues = {},
	resolver,
	onSuccessMessage = "Success Create Data",
	onSuccess = null,
	toastSuccess = true,
}) => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
		watch,
	} = useForm({
		defaultValues: { ...defaultValues },
		reValidateMode: "onBlur",
		resolver: resolver ? yupResolver(resolver) : null,
	});

	const queryClient = useQueryClient();

	const onSubmit = async (data, e) => {
		e.preventDefault();
		mutation.mutate({
			...data,
			createdAt: new Date().toISOString(),
		});
	};

	const mutation = useMutation({
		mutationFn: async (data) => await api({ data }),
		onSuccess: (data) => {
			invalidateQueries?.map((key) =>
				queryClient.invalidateQueries({ queryKey: [key] }),
			);
			reset();
			handleCloseModal && handleCloseModal();
			onSuccess && onSuccess(data);
			toastSuccess && toast.success(onSuccessMessage);
		},
		onError: (err) => toast.error(err.message),
	});

	return {
		registerCreate: register,
		onSubmitCreate: onSubmit,
		handleSubmitCreate: handleSubmit,
		errorsCreate: errors,
		controlCreate: control,
		watchCreate: watch,
	};
};
