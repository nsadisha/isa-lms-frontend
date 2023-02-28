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

    async getEnrolledStudents(token, courseId) {
        return axios.get(`/course/${courseId}/students`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            res.data.forEach(u => {
                res.data.pop(u);
                res.data.push(filterUserProperties(u));
            });
            return res.data;
        }).catch(err => {
            throw err;
        });
    }

    async getAllCourses() {
        return axios.get("/course/all")
            .then(res => {
                res.data.forEach(u => {
                    delete u.conductor;
                });
                return res.data;
            }).catch(err => {
                throw err;
            });
    }

    async search(query="") {
        return axios.get(`/course/search?query=${query}`)
            .then(res => {
                res.data.forEach(u => {
                    delete u.conductor;
                });
                return res.data;
            }).catch(err => {
                throw err;
            });
    }
}

let courseService = new CourseService();
export default courseService;