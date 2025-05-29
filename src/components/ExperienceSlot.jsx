import { memo } from "react";

export const ExperienceSlot = memo(function ExperienceSlot({
    company, 
    position, 
    functions, 
    startDate, 
    endDate, 
    experienceIndex, 
    experience, 
    setExperience,
    isEditing
}) {

    function handleExperienceChange(e) {
        e.preventDefault();
        const targetInfo = e.currentTarget.dataset.field;
        const newExperience = [...experience];
        newExperience[experienceIndex][targetInfo] = e.currentTarget.value;
        setExperience(newExperience)
    }

    function handleDeleteExperienceSlot(e, experienceIndex) {
        e.preventDefault();
        setExperience(prevExperience => {
            const updatedExperience = [...prevExperience];
            updatedExperience.splice(experienceIndex, 1);
            return updatedExperience;
        });
    }

    return (
        <div className="experience-slot">
            <label className="company-label">
                Company
                <input 
                type="text"
                minLength={3}
                maxLength={30}
                placeholder='---'
                value={company}
                data-field='company'
                onChange={handleExperienceChange}
                disabled={isEditing}
            />
            </label>
            <label className="position-label">
                Position/Title
                <input 
                type="text"
                minLength={3}
                maxLength={30}
                placeholder='---'
                value={position}
                data-field='position'
                onChange={handleExperienceChange}
                disabled={isEditing}
            />
            </label>
            <label className="function-label">
                Main Responsibilities
                <textarea
                type="text"
                minLength={100}
                maxLength={1000}
                placeholder='---'
                value={functions}
                data-field='functions'
                onChange={handleExperienceChange}
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
                            value={startDate}
                            data-field='startDate'
                            onChange={handleExperienceChange}
                            disabled={isEditing}
                            />
                        </label>
                    </fieldset>
                      <fieldset>
                        <legend>End Date</legend>
                        <label>
                            <input 
                            type='month'
                            value={endDate}
                            data-field='endDate'
                            onChange={handleExperienceChange}
                            disabled={isEditing}
                            />
                        </label>
                    </fieldset>
                </div>
                
            </div>
            <button 
            className="delete-experience-slot" 
            onClick={handleDeleteExperienceSlot}
            disabled={isEditing}
            >Delete</button>
        </div>
    )
})