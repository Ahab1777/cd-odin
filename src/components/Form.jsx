import { General } from "./General"
import { Education } from "./Education"
import { Experience } from "./Experience"

export function Form() {



    return (
        <div className="form-container">
            <General></General>
            <Education></Education>
            <Experience></Experience>
        </div>
    )
}