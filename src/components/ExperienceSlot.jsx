export function ExperienceSlot() {

    return (
        <>
            <label>
                Company
                <input 
                type="text"
                minLength={3}
                maxLength={30}
                placeholder='---'
                value={''}
            />
            </label>
            <label>
                Position/Title
                <input 
                type="text"
                minLength={3}
                maxLength={30}
                placeholder='---'
                value={''}
            />
            </label>
            <label>
                Main Responsibilities
                <input 
                type="text"
                minLength={100}
                maxLength={1000}
                placeholder='---'
                value={''}
            />
            </label>
            <div className="duration-div">
                <div className="start-date-div">Duration
                    <fieldset>
                        <legend>Start Date</legend>
                        <label>
                            <input type='month'/>
                        </label>
                    </fieldset>
                      <fieldset>
                        <legend>End Date</legend>
                        <label>
                            <input type='month'
                            />
                        </label>
                    </fieldset>
                </div>
                
            </div>
        </>
    )
}