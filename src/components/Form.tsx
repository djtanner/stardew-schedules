import React from 'react'
import Schedule from './Schedule.tsx'

function Form() {
    const [showSchedule, setShowSchedule] = React.useState(false);

    interface FormData {
        name: string,
        season: string,
        isRaining: boolean,
        specialDay?: string,
        railroadUnlocked: boolean,
        communityRestored: boolean,
        weekday?: string
    }


    const initialFormData: FormData = {
        name: "abigail", 
        season: "spring", 
        isRaining: false, 
        specialDay: "",
        railroadUnlocked: false,
        communityRestored: false,
        weekday: ""
    }


    const [formData, setFormData] = React.useState<FormData>(initialFormData)
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
        onChange={handleSelectChange}
        name="name"
        value={formData.name}
    >
            <option value="abigail">Abigail</option>
            <option value="alex">Alex</option>
            <option value="elliott">Elliott</option>
            <option value="emily">Emily</option>
            <option value="harvey">Harvey</option>
            <option value="haley">Haley</option>
            <option value="leah">Leah</option>
            <option value="maru">Maru</option>
            <option value="penny">Penny</option>
            <option value="sebastian">Sebastian</option>
            <option value="shane">Shane</option>
    </select>
    <br />
    <label htmlFor="season">Season</label>
    <select
        id="season"
        onChange={handleSelectChange}
        name="season"
        value={formData.season}
    >

            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
    </select>
    <br />

<label htmlFor="isRaining">Is it raining?</label>
<input 
                type="checkbox" 
                id="isRaining" 
                checked={formData.isRaining}
                onChange={handleInputChange}
                name="isRaining"
            />

<fieldset>
                <legend>Special Day of the Month</legend>
                <input 
                    type="radio"
                    id="4"
                    name="specialDay"
                    value="4"
                    checked={formData.specialDay === "4"}
                    onChange={handleInputChange}
                />
                <label htmlFor="4">4th</label>
                <br />
                <input 
                    type="radio"
                    id="6"
                    name="specialDay"
                    value="6"
                    checked={formData.specialDay === "6"}
                    onChange={handleInputChange}
                />
                <label htmlFor="6">6th</label>
                <br />
                <input 
                    type="radio"
                    id="9"
                    name="specialDay"
                    value="9"
                    checked={formData.specialDay === "9"}
                    onChange={handleInputChange}
                />
                <label htmlFor="9">9th</label>
                <br />
                <input 
                    type="radio"
                    id="11"
                    name="specialDay"
                    value="11"
                    checked={formData.specialDay === "11"}
                    onChange={handleInputChange}
                />
                <label htmlFor="11">11th</label>
                <br />
                
                <input 
                    type="radio"
                    id="15"
                    name="specialDay"
                    value="15"
                    checked={formData.specialDay === "15"}
                    onChange={handleInputChange}
                />
                <label htmlFor="15">15th</label>
                <br />
                <input 
                    type="radio"
                    id="16"
                    name="specialDay"
                    value="16"
                    checked={formData.specialDay === "16"}
                    onChange={handleInputChange}
                />
                <label htmlFor="16">16th</label>
                <br />
                <input 
                    type="radio"
                    id="17"
                    name="specialDay"
                    value="17"
                    checked={formData.specialDay === "17"}
                    onChange={handleInputChange}
                />
                <label htmlFor="17">17th</label>
               
                <br />
                <input 
                    type="radio"
                    id="23"
                    name="specialDay"
                    value="23"
                    checked={formData.specialDay === "23"}
                    onChange={handleInputChange}
                />
                <label htmlFor="23">23rd</label>
                <br />

                <input 
                    type="radio"
                    id="25"
                    name="specialDay"
                    value="25"
                    checked={formData.specialDay === "25"}
                    onChange={handleInputChange}
                />
                <label htmlFor="25">25th</label>
                <br />
            </fieldset>
            
           
<label htmlFor="railroadUnlocked">Is the railroad unlocked?</label>
<input 
                type="checkbox" 
                id="railroadUnlocked" 
                checked={formData.railroadUnlocked}
                onChange={handleInputChange}
                name="railroadUnlocked"
            />
<br/>

<label htmlFor="communityRestored">Is the Community Center restored?</label>
<input 
                type="checkbox" 
                id="communityRestored" 
                checked={formData.communityRestored}
                onChange={handleInputChange}
                name="communityRestored"
            />
<br/>

<label htmlFor="weekday">Weekday</label>
    <select
        id="weekday"
        onChange={handleSelectChange}
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
            {!showSchedule && <button>Submit</button>}

    </form>

    {showSchedule && <Schedule formData={formData}/>}

    {showSchedule && <button onClick={() => setShowSchedule(false)}>Clear</button>}
    </>
  )
}

export default Form