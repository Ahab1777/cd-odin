export function General({name, setName, email, setEmail, phoneNumber, setPhoneNumber, github, setGithub}) {

    //create handle function for each input field to update state
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    }
    const handleGithubChange = (e) => {
        setGithub(e.target.value);
    }


    
    
    return (
    <div className="general-container">
        <label>
            Name
            <input 
            type="text"
            minLength={3}
            maxLength={30}
            placeholder="Provide full name"
            value={name}
            onChange={handleNameChange}
            />
        </label>
        <label>
            Email
            <input 
            type='email'
            minLength={10}
            maxLength={30}
            placeholder="example@domain.com"
            value={email}
            onChange={handleEmailChange}
            />
        </label>
        <label>
            Phone
            <input 
            type='tel'
            minLength={3}
            maxLength={30}
            placeholder="xxx-xxx-xxxx"
            value={phoneNumber}
            onChange={handlePhoneChange}
            />
        </label>
        <label>
            GitHub
            <input 
            type="text"
            minLength={3}
            maxLength={30}
            value={github}
            placeholder='Add only subpath'
            onChange={handleGithubChange}
            />
        </label>
    </div>

    )
}