import { memo } from "react";

export const EducationSlot = memo(function EducationSlot({
    educationIndex, 
    education, 
    setEducation,
    isEditing
}) {


    function handleEducationChange(e) {
        e.preventDefault();
        const targetInfo = e.currentTarget.dataset.field;
        const newEducation = [...education];
        newEducation[educationIndex][targetInfo] = e.currentTarget.value;
        setEducation(newEducation)
    }

    function handleDeleteEducationSlot(e, educationIndex) {
        e.preventDefault();
        setEducation(prevEducation => {
            const updatedEducation = [...prevEducation];
            updatedEducation.splice(educationIndex, 1);
            return updatedEducation;
        });
    }


    return(
        <div className="education-slot">
            <label className="school-label">
                School
                <input 
                type="text"
                minLength={3}
                maxLength={30}
                placeholder="Institution name"
                data-field='school'
                value={education[educationIndex].school}
                onChange={handleEducationChange}
                disabled={isEditing}
            />
            </label>
            <label className="title-label">
                Title/Degree
                <input 
                type="text"
                minLength={3}
                maxLength={30}
                placeholder="Title/Degree"
                data-field='degree'
                value={education[educationIndex].degree}
                onChange={handleEducationChange}
                disabled={isEditing}
            />
            </label>
            <div className="duration-div">
                <div className="start-date-div">Duration
                    <fieldset>
                        <legend>Start Date</legend>
                        <label>
                            <input 
                            type='month'
                            data-field='startDate'
                            value={education[educationIndex].startDate}
                            onChange={handleEducationChange}
                            disabled={isEditing}
                            />
                        </label>
                    </fieldset>
                      <fieldset>
                        <legend>End Date</legend>
                        <label>
                            <input 
                            type='month'
                            data-field='endDate'
                            value={education[educationIndex].endDate}
                            onChange={handleEducationChange}
                            disabled={isEditing}
                            />
                        </label>
                    </fieldset>
                </div>
            </div>
            <button 
            className="delete-education-slot" 
            onClick={handleDeleteEducationSlot}
            disabled={isEditing}
            >Delete</button>
        </div>
    )
})