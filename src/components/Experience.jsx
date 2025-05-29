import { ExperienceSlot } from "./ExperienceSlot"
import { memo } from "react"

export const Experience = memo( function Experience({
    experience, 
    setExperience,
    isEditing
}) {

    function addExperienceSlot(e){
        e.preventDefault()
        const newEmptySlot = {
            company: '',
            position: '',
            functions: '',
            startDate: '1900-01',
            endDate: '2099-01'
        }
        const newExperienceArray = [...experience, newEmptySlot];
        setExperience(newExperienceArray)
        console.log(experience)
        console.log(newExperienceArray)
    }

    return (
        <div className="experience-container">Experience
            <div className="experience-slots-container">
                {experience.length === 0 ? 
                (<p>No experience entries</p>) : 
                (
                    experience.map((item, i) => (
                        <ExperienceSlot
                            company={item.company}
                            position={item.position}
                            functions={item.functions}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            key={i}
                            experienceIndex={i}
                            experience={experience}
                            setExperience={setExperience}
                            isEditing={isEditing}
                        ></ExperienceSlot>
                    ))
                )}
            </div>

            <button 
            onClick={addExperienceSlot}
            disabled={isEditing}
            >Add Experience </button>
        </div>
        
    )
})

