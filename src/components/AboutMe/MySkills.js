import "../../App.css";

function MySkills() {
    const skills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React.js', 'Vue.js', 'Bootstrap', 'Git']
    return(
        <div>
            <div className="d-flex section-subtopic_heading">My Skills</div>
            <div className="d-flex flex-wrap mt-3 flex-basis-1">
                {skills.map((skill) => {
                    return (
                        <div className="skills-card px-3 py-2 m-2 ">{skill}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default MySkills;