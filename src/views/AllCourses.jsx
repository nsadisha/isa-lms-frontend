import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Course from "../components/Course";
import NavBar from "../components/NavBar";
import courseService from "../service/CourseService";

function AllCourses({ title }) {
    const [params, setParams] = useSearchParams()
    const [query, setQuery] = useState("");
    const [isSearched, setIsSearched] = useState(false);
    const [courses, setCourses] = useState([]);
    const [msg, setMsg] = useState("");

    const search = useCallback((query) => {
        courseService.search(query)
            .then(res => {
                setCourses(res)
                setMsg(`${res.length} result(s) for "${query}"`)
                if (query !== "")
                    setIsSearched(true);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        document.title = title;
        setQuery(params.get('query') || "");
        search(params.get('query') || "");
    }, [title, search, params]);

    function handleSearch(e) {
        e.preventDefault();

        setParams(`?query=${query}`);
        search(query);
    }

    return (
        <>
            <NavBar theme="dark" />
            <div className="navbar-height"></div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <form className="col-md-6" onSubmit={handleSearch}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                name="query"
                                className="form-control"
                                placeholder="Search courses"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                required />
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                        </div>
                    </form>
                </div>

                <div className="row mt-3">
                    {isSearched && <h3>{msg}</h3>}
                    <div className="w-100 mb-2"></div>
                    <hr className="mb-5 bg-secondary" />

                    {courses.map(course => { return <Course course={course} key={course.id} /> })}
                </div>
            </div>
        </>
    );
}

export default AllCourses;