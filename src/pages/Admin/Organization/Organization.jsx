import React, { useMemo, useState } from "react";
import { MdAdd, MdSearch } from "react-icons/md";
import { createColumnHelper } from "@tanstack/react-table";
import { isNil, omitBy } from "lodash";

import {
	Button,
	Input,
	TableActionButton,
	TableCell,
	TableHeader,
} from "@components/atoms";
import { Spinner } from "@components/moleculs";
import { Modal, Table } from "@components/organism";

import { useCreateData } from "@hooks/useCreateData";
import { useDeleteData } from "@hooks/useDeleteData";
import { useQueryTable } from "@hooks/useQueryTable";
import { useUpdateData } from "@hooks/useUpdateData";

import CheckAuthorization from "@pages/Auth/CheckAuthorization";

import OrganizationService from "@services/api/rangon/organization/OrganizationService";
import { getPaginationPage } from "@services/helper";

import { MODAL_STATUS } from "@utils/constant";

const columnHelper = createColumnHelper();

const Organization = () => {
	const [search, setSearch] = useState("");
	const [searchQuery, setSearchQuery] = useState("");

	const [modalState, setModalState] = useState({
		title: "",
		status: "",
		isOpen: false,
		data: {},
	});

	const columns = useMemo(
		() =>
			({ isCanEdit, isCanDelete, onClickEdit, onClickDelete }) =>
				[
					columnHelper.accessor("name", {
						header: <TableHeader value={"Organization"} />,
						cell: (info) => (
							<TableCell
								value={info.getValue()}
								mergeClass="w-24"
								shorten
								maxChar={15}
							/>
						),
					}),
					columnHelper.accessor("type", {
						header: <TableHeader value={"Tipe"} />,
						cell: (info) => (
							<TableCell
								value={info.getValue()}
								mergeClass="w-28 max-w-[6rem]"
							/>
						),
					}),
					columnHelper.accessor("actions", {
						header: <TableHeader value={"Aksi"} mergeClass="text-center" />,
						cell: ({ row }) => (
							<TableActionButton
								data={row.original}
								onClickEdit={onClickEdit}
								onClickDelete={onClickDelete}
								isCanEdit={isCanEdit}
								isCanDelete={isCanDelete}
							/>
						),
						isVisible: isCanEdit || isCanDelete,
					}),
				],
		[],
	);

	const { data, isFetching, isLoading, pagination, setPagination, error } =
		useQueryTable({
			getAll: OrganizationService.get,
			queryKey: "organizations",
			queryParams: { search: searchQuery },
		});

	const handleOpenModal = ({ title, status }) =>
		setModalState({ ...modalState, title, status, isOpen: true });

	const handleCloseModal = () =>
		setModalState({ ...modalState, isOpen: false });

	const onClickEdit = (data) => {
		setModalState({
			title: "Ubah Organisasi",
			status: MODAL_STATUS.UPDATE,
			isOpen: true,
			data,
		});
	};

	const onClickDelete = (data) => {
		setModalState({
			title: "Hapus Organisasi",
			status: MODAL_STATUS.DELETE,
			isOpen: true,
			data,
		});
	};

	const { registerCreate, onSubmitCreate, handleSubmitCreate, errorsCreate } =
		useCreateData({
			invalidateQueries: ["organizations"],
			api: OrganizationService.create,
			handleCloseModal,
		});

	const { registerUpdate, onSubmitUpdate, handleSubmitUpdate, errorsUpdate } =
		useUpdateData({
			invalidateQueries: ["organizations"],
			api: OrganizationService.update,
			handleCloseModal: handleCloseModal,
			defaultValues: modalState.data,
		});

	const { onSubmitDelete } = useDeleteData({
		invalidateQueries: ["organizations"],
		api: OrganizationService.delete,
		handleCloseModal: handleCloseModal,
	});

	const transformData = (data, e, onSubmit) => {
		onSubmit(omitBy(data, isNil), e);
	};

	const createFormOrganization = (
		<form
			onSubmit={handleSubmitCreate((data, e) =>
				transformData(data, e, onSubmitCreate),
			)}
		>
			<Input
				title="Nama Organisasi"
				{...registerCreate("name")}
				error={errorsCreate.name}
			/>
			<Button
				text="Submit"
				type="submit"
				additionalClass="text-sm mt-4 text-red hover:bg-primary-500"
				onRight={true}
			/>
		</form>
	);

	const updateFormOrganization = (
		<form
			onSubmit={handleSubmitUpdate((data, e) =>
				transformData(data, e, onSubmitUpdate),
			)}
		>
			<Input
				title="Nama Organisasi"
				{...registerUpdate("name")}
				error={errorsUpdate.name}
			/>
			<Button
				text="Submit"
				type="submit"
				additionalClass="text-sm mt-4 text-red hover:bg-primary-500"
				onRight={true}
			/>
		</form>
	);

	const deleteFormOrganization = (
		<div className="flex flex-col gap-3">
			<p>Hapus Organisasi {modalState.data.name}?</p>
			<div className="flex flex-row gap-4">
				<Button
					onClick={handleCloseModal}
					text="Batal"
					additionalClass="bg-slate-400 text-sm p-1 hover:bg-slate-500"
					size="w-24"
				/>
				<Button
					onClick={() => onSubmitDelete(modalState.data.id)}
					text="Hapus"
					additionalClass="bg-red-400 text-sm p-1 hover:bg-red-500"
					size="w-24"
				/>
			</div>
		</div>
	);

	const renderForm = () => {
		if (modalState.status === MODAL_STATUS.CREATE) {
			return createFormOrganization;
		}

		if (modalState.status === MODAL_STATUS.UPDATE) {
			return updateFormOrganization;
		}

		return deleteFormOrganization;
	};

	if ([isLoading, isFetching].includes(true)) return <Spinner />;

	return (
		<>
			<div className="flex flex-row justify-between w-auto">
				<div className="flex md:flex-row flex-col gap-2 md:items-center items-start">
					<div className="w-3/3 flex justify-end items-center relative">
						<input
							placeholder="Cari Organisasi..."
							className="border border-primary-600 rounded-md p-1 px-5 pl-10 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-600"
							onChange={(e) => setSearch(e.target.value)}
							value={search}
						/>
						<MdSearch className="absolute w-6 left-0 ml-3 text-gray-500" />
					</div>
					<Button
						text="Cari"
						additionalClass="text-sm text-red hover:bg-primary-500"
						onClick={() => {
							setPagination({ pageIndex: 0, pageSize: pagination.pageSize });
							setSearchQuery(search);
						}}
					/>
				</div>
				<Button
					text="Tambah Organisasi"
					additionalClass="text-sm text-red hover:bg-primary-500"
					leftIcon={<MdAdd className="text-lg h-6 w-6" />}
					onClick={() =>
						handleOpenModal({
							title: "Tambah Organisasi",
							status: MODAL_STATUS.CREATE,
						})
					}
				/>
			</div>
			<Table
				columns={columns({
					isCanDelete: true,
					isCanEdit: true,
					onClickEdit,
					onClickDelete,
				})}
				data={data?.data ?? []}
				pageCount={getPaginationPage(data?.count, pagination.pageSize)}
				state={pagination}
				setPagination={setPagination}
				total={data?.count ?? 0}
			/>
			<Modal
				title={modalState.title}
				isOpen={modalState.isOpen}
				handleCloseModal={handleCloseModal}
			>
				{renderForm()}
			</Modal>
		</>
	);
};

export default CheckAuthorization({
	Component: Organization,
	menu: ["rangon"],
});
