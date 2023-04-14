import React from 'react'
import Schedule from './Schedule'

function Form() {
    const [showSchedule, setShowSchedule] = React.useState(false);
    const [formData, setFormData] = React.useState(
        {
            name: "abigail", 
            season: "spring", 
            friendship: 1, 
            isRaining: false, 
            specialDay: "",
            railroadUnlocked: false,
            weekday: ""
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
                
            }
        })
        console.log(formData)
    }

    function handleSubmit(event) {
        event.preventDefault()
    
        console.log(formData)
        setShowSchedule(true);
        
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">NPC Name</label>
    <select
        id="name"
        onChange={handleChange}
        name="name"
        value={formData.name}
    >
            <option value="abigail">Abigail</option>
            <option value="alex">Alex</option>
            <option value="elliot">Elliot</option>
            <option value="emily">Emily</option>
            <option value="harvey">Harvey</option>
            <option value="haley">Haley</option>
            <option value="leah">Leah</option>
    </select>
    <br />
    <label htmlFor="season">Season</label>
    <select
        id="season"
        onChange={handleChange}
        name="season"
        value={formData.season}
    >

            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
    </select>
    <br />

    <label htmlFor="friendship">Current Friendship level</label>
    <select
        id="friendship"
        onChange={handleChange}
        name="friendship"
        value={formData.friendship}
    >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>

    </select>

<br/>
<label htmlFor="isRaining">Is it raining?</label>
<input 
                type="checkbox" 
                id="isRaining" 
                checked={formData.isRaining}
                onChange={handleChange}
                name="isRaining"
            />

<fieldset>
                <legend>Special Day of the Month</legend>
                <input 
                    type="radio"
                    id="11"
                    name="specialDay"
                    value="11"
                    checked={formData.specialDay === "11"}
                    onChange={handleChange}
                />
                <label htmlFor="11">11th</label>
                <br />
                
                <input 
                    type="radio"
                    id="15"
                    name="specialDay"
                    value="15"
                    checked={formData.specialDay === "15"}
                    onChange={handleChange}
                />
                <label htmlFor="15">15th</label>
                <br />
                
                <input 
                    type="radio"
                    id="25"
                    name="specialDay"
                    value="25"
                    checked={formData.specialDay === "25"}
                    onChange={handleChange}
                />
                <label htmlFor="25">25th</label>
                <br />
            </fieldset>
            
           
<label htmlFor="railroadUnlocked">Is the railroad unlocked?</label>
<input 
                type="checkbox" 
                id="railroadUnlocked" 
                checked={formData.railroadUnlocked}
                onChange={handleChange}
                name="railroadUnlocked"
            />
<br/>
<label htmlFor="weekday">Weekday</label>
    <select
        id="weekday"
        onChange={handleChange}
        name="weekday"
        value={formData.weekday}
    >
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            

    </select>
    <br />
            <br />
            <button>Submit</button>

    </form>

    {showSchedule && <Schedule formData={formData}/>}

    {showSchedule && <button onClick={() => setShowSchedule(false)}>Clear</button>}
    </>
  )
}

export default Form