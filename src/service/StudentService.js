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

    async isEnrolledForCourse(token, courseId) {
        return this.getEnrolledCourses(token)
            .then(res => {
                let x = res.find(course => { return course.id === courseId });
                return x !== undefined;
            }).catch(err => {
                throw err;
            })
    }

    async enroll(token, courseId) {
        return axios.post(`/course/enroll/${courseId}`, {}, {
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

const studentService = new StudentService();
export default studentService;