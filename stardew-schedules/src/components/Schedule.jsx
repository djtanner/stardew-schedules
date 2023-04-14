import React from 'react'
import data from '../../data';

function Schedule(props) {

    let dataID;

    if(props.formData.name === "alex" && props.formData.isRaining){
        dataID = "alex-rainy";
    }
    else if(props.formData.name == "alex" && props.formData.season=== "summer" && props.formData.specialDay === "16"){
        dataID = "alex-summer-16"
    }
    else if(props.formData.name == "alex" && props.formData.season=== "winter" && props.formData.specialDay === "17"){
        dataID = "alex-winter-17"
    }
    else if(props.formData.name === "alex" && props.formData.weekday === "wednesday"){
        dataID = "alex-wednesday"
    }
    else if(props.formData.name === "alex" && (props.formData.season === "spring" || props.formData.season === "fall" ) && !props.formData.isRaining){
        dataID = "alex-spring-fall-weekday"
    }
    else if(props.formData.name === "alex" && props.formData.season === "summer" && !props.formData.isRaining){
        dataID = "alex-summer-weekday"
    }
    else if(props.formData.name === "alex" && props.formData.season === "winter"  && !props.formData.isRaining){
        dataID = "alex-winter-weekday"
    }

    

    const sched = data.filter(item => item.id == dataID);
    console.log(sched);
    const scheduleData = (sched[0]["schedule"]);
    const noteElement = (<p>{sched[0]["note"]}</p>)
    
    const scheduleTable = scheduleData.map(item => (
        
        <table>
        <tbody>
        <tr>
            <td key={item[0]}>{item[0]}</td>
            <td>{item[1]}</td>
        </tr>
        </tbody>
        </table>
  
        
    ) 
    )
    
    let sched2;
    let scheduleData2;
    let scheduleTable2;
    let noteElement2;

    if (dataID === "alex-wednesday"){
    // if it's wednesday, then you need the second table for standard weekday as well
    sched2 = data.filter(item => item.id == "alex-spring-fall-weekday");
    
    scheduleData2 = (sched2[0]["schedule"]);
    noteElement2 = (<p>{sched2[0]["note"]}</p>)
    
    scheduleTable2 = scheduleData2.map(item => (
        
        <table>
        <tbody>
        <tr>
            <td key={item[0]}>{item[0]}</td>
            <td>{item[1]}</td>
        </tr>
        </tbody>
        </table>

    ) 
    )

    }


  return (
    <>
    {noteElement}
    <div>{scheduleTable} </div>
    <br/>
    {noteElement2}
    <div>{scheduleTable2} </div>
    </>
  )
}

export default Schedule