import axios from "axios";

class StudentService {
    async getEnrolledCourses(token) {
        return axios.get('/student/courses', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            throw err;
        });
    }
}

const studentService = new StudentService();
export default studentService;