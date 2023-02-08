import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCustomMutation = ({
	invalidateQueries = [],
	api,
	handleCloseModal = null,
	onSuccessMessage = "",
	onErrorMessage = null,
}) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (data) => await api(data),
		onSuccess: () => {
			handleCloseModal ? handleCloseModal() : null;
			invalidateQueries?.map(
				async (key) => await queryClient.invalidateQueries({ queryKey: [key] }),
			);
			toast.success(onSuccessMessage);
		},
		onError: (err) => toast.error(onErrorMessage ?? err),
	});

	return {
		onMutate: mutation.mutate,
	};
};
