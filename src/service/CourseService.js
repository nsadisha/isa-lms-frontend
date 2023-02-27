import axios from "axios";
import { filterUserProperties } from "./FormHelperService";

class CourseService {
    async getCourseDetails(token, courseId) {
        return axios.get(`/course/${courseId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            res.data.conductor = filterUserProperties(res.data.conductor);
            return res.data;
        }).catch(err => {
            throw err;
        });
    }
}

let courseService = new CourseService();
export default courseService;