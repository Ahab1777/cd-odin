export function EducationSlot() {


    return(
        <>
            <label>
                School
                <input 
                type="text"
                minLength={3}
                maxLength={30}
                placeholder=""
                value={'School'}
            />
            </label>
            <label>
                Title/Degree
                <input 
                type="text"
                minLength={3}
                maxLength={30}
                placeholder=""
                value={'Title/Degree'}
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