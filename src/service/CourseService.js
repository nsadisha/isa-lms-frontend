import axios from "axios";

class CourseService {
    async getCourseDetails(token, courseId) {
        return axios.get(`/course/${courseId}`, {
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

let courseService = new CourseService();
export default courseService;