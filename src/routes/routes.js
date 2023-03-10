import { MdOutlineSettings } from "react-icons/md";

// Rangon
import Organization from "@pages/Admin/Organization/Organization";

// Admin
import Class from "@pages/School/Admin/Class/Class";
import Teacher from "@pages/School/Admin/Teacher/Teacher";

// Teacher
import Question from "@pages/School/Teacher/Question/Question";
import CalendarTeacher from "@pages/School/Teacher/Calendar/Calendar";

// Student
import CalendarStudent from "@pages/School/Student/Calendar/Calendar";

export const ROUTES_DASHBOARD = [];

export const ROUTES_RANGON = [
	{
		title: "Manajemen",
		icon: MdOutlineSettings,
		child: [
			{
				title: "Organisasi",
				path: "organization",
				fullPath: "/rangon/organization",
				Component: Organization,
				isNavbar: true,
			},
		],
	},
];

export const ROUTES_ADMIN = [
	{
		title: "Manajemen",
		icon: MdOutlineSettings,
		child: [
			{
				title: "Guru",
				path: "teacher",
				fullPath: "/admins/teacher",
				Component: Teacher,
				isNavbar: true,
			},
			{
				title: "Kelas",
				path: "classes",
				fullPath: "/admins/classes",
				Component: Class,
				isNavbar: true,
			},
		],
	},
];

export const ROUTES_TEACHER = [
	{
		title: "Manajemen",
		icon: MdOutlineSettings,
		child: [
			{
				title: "Kalender",
				path: "calendar",
				fullPath: "/teachers/calendar",
				Component: CalendarTeacher,
				isNavbar: true,
			},
			{
				title: "Konten Anda",
				path: "question",
				fullPath: "/teachers/question",
				Component: Question,
				isNavbar: true,
			},
		],
	},
];

export const ROUTES_STUDENT = [
	{
		title: "Manajemen",
		icon: MdOutlineSettings,
		child: [
			{
				title: "Kalender",
				path: "calendar",
				fullPath: "/students/calendar",
				Component: CalendarStudent,
				isNavbar: true,
			},
		],
	},
];
