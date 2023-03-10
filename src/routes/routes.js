import Calendar from "@pages/Content/Calendar/Calendar";
import Question from "@pages/Content/Question/Question";

export const ROUTES_DASHBOARD = [];

export const ROUTE_CONTENT = [
    {
        title: "Kalender",
        path: "calendar",
        fullPath: "/contents/calendar",
        Component: Calendar,
        isNavbar: true,
    },
    {
        title: "Konten Anda",
        path: "question",
        fullPath: "/contents/question",
        Component: Question,
        isNavbar: true,
    },
]