export function ExperienceSlot({
    company, 
    position, 
    functions, 
    startDate, 
    endDate, 
    experienceIndex, 
    experience, 
    setExperience
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
            <label>
                Company
                <input 
                type="text"
                minLength={3}
                maxLength={30}
                placeholder='---'
                value={company}
                data-field='company'
            />
            </label>
            <label>
                Position/Title
                <input 
                type="text"
                minLength={3}
                maxLength={30}
                placeholder='---'
                value={position}
                data-field='position'
            />
            </label>
            <label>
                Main Responsibilities
                <input 
                type="text"
                minLength={100}
                maxLength={1000}
                placeholder='---'
                value={functions}
                data-field='functions'
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
                            />
                        </label>
                    </fieldset>
                </div>
                
            </div>
            <button className="delete-experience-slot" onClick={handleDeleteExperienceSlot}>Delete</button>
        </div>
    )
}