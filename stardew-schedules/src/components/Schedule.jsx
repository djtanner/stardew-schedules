import React from 'react'
import data from '../../data';

function Schedule(props) {

    let dataID;

    if(props.formData.name == "alex" && props.formData.season == "spring" && props.formData.isRaining){
        dataID = "alex-spring-rainy";
    }
    else if(props.formData.name == "alex" && props.formData.season == "spring" && props.formData.weekday === "wednesday"){
        dataID = "alex-spring-wednesday"
    }
    else if(props.formData.name == "alex" && props.formData.season == "spring" && !props.formData.isRaining){
        dataID = "alex-spring-weekday"
    }

    console.log(dataID);

    

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

    if (dataID === "alex-spring-wednesday"){
    
    sched2 = data.filter(item => item.id == "alex-spring-weekday");
    
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