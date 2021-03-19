import Part from '../Part';

const Total = ({ course }) => {
    const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    return (
        <h3>Total of {sum} exercises</h3>
    )
}
const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => {
                return <Part key={part.id} part={part} />
            })}
            <Total course={course} />
            
        </div>
    )
}

export default Content;