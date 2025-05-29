import { memo } from "react";

export const General = memo(function General({
    name, 
    setName, 
    email, 
    setEmail, 
    phoneNumber, 
    setPhoneNumber, 
    github, 
    setGithub,
    isEditing
}) {

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
            disabled={isEditing}
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
            disabled={isEditing}
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
            disabled={isEditing}
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
            disabled={isEditing}
            />
        </label>
    </div>

    )
})