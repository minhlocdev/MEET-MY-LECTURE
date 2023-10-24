import L_home from "../Pages/lecturer/L_Home";
import L_ViewMeeting from "../Pages/lecturer/L_ViewMeeting";
import L_ViewProfile from "../Pages/lecturer/L_ViewProfile";
import L_ViewTeaching from "../Pages/lecturer/L_ViewTeaching";

const LecturerRoutes = [
    { path: '/lecturer', component: L_home },
    { path: '/lecturer/meetingschedule', component: L_ViewMeeting },
    { path: '/lecturer/teachingschedule', component: L_ViewTeaching },
    { path: '/lecturer/viewprofile', component: L_ViewProfile },
]

export default LecturerRoutes