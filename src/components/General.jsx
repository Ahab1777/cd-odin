

export function General(){
    
    
    return (
    <>
        <label>
            Name
            <input 
            type="text"
            minLength={3}
            maxLength={30}
            placeholder=""
            value={'name'}
            />
        </label>
        <label>
            Email
            <input 
            type='email'
            minLength={10}
            maxLength={30}
            placeholder=""
            value={'name@gmail.com'}
            />
        </label>
        <label>
            Phone
            <input 
            type='tel'
            minLength={3}
            maxLength={30}
            placeholder=""
            value={'000000000'}
            />
        </label>
        <label>
            GitHub
            <input 
            type="text"
            minLength={3}
            maxLength={30}
            value={'name'}
            placeholder='Add only subpath'
            />
        </label>
    </>

    )
}