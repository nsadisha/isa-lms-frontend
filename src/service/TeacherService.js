import axios from "axios";

class TeacherService {
    async getConductingCourses(token) {
        return axios.get('/teacher/courses', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            throw err;
        })
    }

    async createNewCourse(token, course) {
        return axios.post("/course/create", course, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            throw err;
        })
    }
}

let teacherService = new TeacherService();
export default teacherService;