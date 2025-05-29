import { EducationSlot } from "./EducationSlot";
import { memo
    
 } from "react";
export const Education = memo(function Education({
    education, 
    setEducation
}) {

    function addEducationSlot(e){
        e.preventDefault()
        const newEmptySlot = {
            school: '',
            degree: '',
            startDate: '1900-01',
            endDate: '2099-01'
        }
        const newEducationArray = [...education, newEmptySlot];
        setEducation(newEducationArray)
        console.log(education)
        console.log(newEducationArray)
    }

    return (
        <div className="education-container">Education
            <div className="education-slots-container">
                {education.length === 0 ? 
                (<p>No education entries.</p>) : 
                (
                    education.map((item, i) => (
                    <EducationSlot
                        school={item.school}
                        degree={item.degree}
                        startDate={item.startDate}
                        endDate={item.endDate}
                        key={i}
                        educationIndex={i}
                        education={education}
                        setEducation={setEducation}
                    ></EducationSlot>))
                )}    

            </div>
            <button onClick={addEducationSlot}>Add Education</button>
            
        </div>
    )


    
})