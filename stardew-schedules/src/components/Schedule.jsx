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
    else if(props.formData.name === "abigail" && props.formData.isRaining ){
        dataID = "abigail-rainy-1"
    }
    else if(props.formData.name === "abigail" && props.formData.season === "spring"  && props.formData.specialDay === "4"){
        dataID = "abigail-spring-4"
    }
    else if(props.formData.name === "abigail" && props.formData.season === "winter"  && props.formData.specialDay === "15"){
        dataID = "abigail-winter-15"
    }
    else if(props.formData.name === "abigail" && (props.formData.specialDay === "6" || props.formData.specialDay == "16")){
        dataID = "abigail-6-16"
    }
    else if(props.formData.name === "abigail" && (props.formData.specialDay === "11" || props.formData.specialDay == "25")){
        dataID = "abigail-11-25"
    }
    else if(props.formData.name === "abigail" && props.formData.season === "spring"  && props.formData.specialDay !== "4" && props.formData.weekday !== "wednesday" && props.formData.weekday !== "friday" && props.formData.weekday !== "sunday"){
        dataID = "abigail-spring-mtts"
    }
    else if(props.formData.name === "abigail" && props.formData.specialDay !== "4" && props.formData.weekday === "wednesday" ){
        dataID = "abigail-wednesday"
    }
    else if(props.formData.name === "abigail" && props.formData.specialDay !== "4" && props.formData.weekday === "friday" ){
        dataID = "abigail-friday"
    }
    else if(props.formData.name === "abigail" && props.formData.specialDay !== "4" && props.formData.weekday === "sunday" ){
        dataID = "abigail-sunday"
    }
    else if(props.formData.name === "abigail" && props.formData.season === "summer"  && props.formData.specialDay !== "4" && props.formData.weekday !== "wednesday" && props.formData.weekday !== "friday" && props.formData.weekday !== "sunday"){
        dataID = "abigail-summer-mtts"
    }
    else if(props.formData.name === "abigail" && props.formData.season === "fall"  && props.formData.specialDay !== "4" && props.formData.weekday === "monday"){
        dataID = "abigail-fall-monday"
    }
    else if(props.formData.name === "abigail" && props.formData.season === "fall"  && props.formData.specialDay !== "4" && (props.formData.weekday === "tuesday" || props.formData.weekday === "thursday" || props.formData.weekday === "saturday")){
        dataID = "abigail-fall-tts"
    }
    else if(props.formData.name === "abigail" && props.formData.season === "winter"  && props.formData.specialDay !== "4" && props.formData.weekday !== "wednesday" && props.formData.weekday !== "friday" && props.formData.weekday !== "sunday"){
        dataID = "abigail-winter-mtts"
    }
    else if(props.formData.name === "elliott" && props.formData.isRaining){
        dataID = "elliott-rainy";
    }
    else if(props.formData.name === "elliott" && props.formData.season === "summer" && props.formData.specialDay === "9"){
        dataID = "elliott-summer-9";
    }
    else if(props.formData.name === "elliott" && (props.formData.weekday === "friday" || props.formData.weekday === "sunday")){
        dataID = "elliott-fs"
    }
    else if(props.formData.name === "elliott" && (props.formData.weekday === "thursday" || props.formData.weekday === "friday")){
        dataID = "elliott-tf"
    }
    else if(props.formData.name === "elliott" && props.formData.season === "spring" && (props.formData.weekday !== "thursday" || props.formData.weekday !== "friday")){
        dataID = "elliott-weekday-spring"
    }
    else if(props.formData.name === "elliott" && props.formData.season === "summer" && (props.formData.weekday !== "thursday" || props.formData.weekday !== "friday")){
        dataID = "elliott-weekday-summer"
    }
    else if(props.formData.name === "elliott" && props.formData.season === "fall" && (props.formData.weekday !== "thursday" || props.formData.weekday !== "friday")){
        dataID = "elliott-weekday-fall"
    }
    else if(props.formData.name === "elliott" && props.formData.season === "winter" && (props.formData.weekday !== "thursday" || props.formData.weekday !== "friday")){
        dataID = "elliott-weekday-winter"
    }
    else if(props.formData.name === "emily" && props.formData.isRaining){
        dataID = "emily-rainy";
    }
    else if(props.formData.name === "emily" && props.formData.season === "winter" && props.formData.specialDay === "11"){
        dataID = "emily-winter-11"
    }
    else if(props.formData.name === "emily" && props.formData.season === "fall" && props.formData.specialDay === "15"){
        dataID = "emily-fall-15"
    }
    else if(props.formData.name === "emily" && props.formData.season === "winter" && props.formData.specialDay === "15"){
        dataID = "emily-winter-15"
    }
    else if(props.formData.name === "emily" && props.formData.weekday === "tuesday" ){
        dataID = "emily-tuesday"
    }
    else if(props.formData.name === "emily" && props.formData.weekday === "friday" && props.formData.communityRestored ){
        dataID = "emily-friday"
    }
    else if(props.formData.name === "emily" ){
        dataID = "emily-weekday"
    }
    else if(props.formData.name === "harvey" && props.formData.isRaining){
        dataID = "harvey-rainy";
    }
    else if(props.formData.name === "harvey" && props.formData.season === "winter" && props.formData.specialDay === "15"){
        dataID = "harvey-winter-15"
    }
    else if(props.formData.name === "harvey" && (props.formData.weekday === "tuesday" || props.formData.weekday === "thursday")){
        dataID = "harvey-tt";
    }
    else if(props.formData.name === "harvey" && props.formData.weekday === "friday"){
        dataID = "harvey-friday";
    }
    else if(props.formData.name === "harvey" && props.formData.weekday === "saturday"){
        dataID = "harvey-saturday";
    }
    else if(props.formData.name === "harvey"){
        dataID = "harvey-weekday";
    }
    else if(props.formData.name === "haley" && props.formData.isRaining){
        dataID = "haley-rainy";
    }
    else if(props.formData.name === "haley" && props.formData.season === "winter" && props.formData.specialDay === "9"){
        dataID = "haley-winter-9"
    }
    else if(props.formData.name === "haley" && props.formData.season === "winter" && props.formData.specialDay === "16"){
        dataID = "haley-winter-16"
    }
    else if(props.formData.name === "haley" && props.formData.weekday === "monday" && (props.formData.season === "spring" || props.formData.season === "fall")){
        dataID = "haley-spring-fall-monday";
    }
    else if(props.formData.name === "haley" && props.formData.season === "spring" && (props.formData.weekday === "tuesday" || props.formData.weekday === "thursday" || props.formData.weekday === "friday" || props.formData.weekday === "saturday" || props.formData.weekday === "sunday")){
        dataID = "haley-spring-ttfss";
    }
    else if(props.formData.name === "haley" && props.formData.weekday === "wednesday" && props.formData.season === "spring"){
        dataID = "haley-spring-wednesday";
    }
    
    else if(props.formData.name === "haley" && props.formData.weekday !== "wednesday" && props.formData.season === "summer"){
        dataID = "haley-summer-mttfss";
    }
    else if(props.formData.name === "haley" && props.formData.weekday === "wednesday" && props.formData.season === "summer"){
        dataID = "haley-summer-wednesday";
    }
    else if(props.formData.name === "haley" && props.formData.weekday === "monday" && props.formData.season === "winter"){
        dataID = "haley-winter-monday";
    }
    else if(props.formData.name === "haley" && props.formData.weekday === "tuesday" && props.formData.season === "winter"){
        dataID = "haley-winter-tuesday";
    }
    else if(props.formData.name === "haley" && props.formData.weekday === "wednesday" && props.formData.season === "winter"){
        dataID = "haley-winter-wednesday";
    }
    else if(props.formData.name === "haley" && (props.formData.weekday === "thursday" || props.formData.weekday === "friday" || props.formData.weekday === "saturday") && props.formData.season === "winter"){
        dataID = "haley-winter-tfs";
    }
    else if(props.formData.name === "haley" && props.formData.weekday === "sunday"  && props.formData.season === "winter"){
        dataID = "haley-winter-sunday";
    }
    else if(props.formData.name === "leah" && props.formData.season === "spring" && props.formData.specialDay === "16"){
        dataID = "leah-spring-16";
    }
    else if(props.formData.name === "leah" && props.formData.isRaining){
        dataID = "leah-rainy-weekday";
    }
    else if(props.formData.name === "haley" && props.formData.weekday === "monday"){
        dataID = "leah-monday";
    }
    else if(props.formData.name === "leah" && props.formData.season === "winter" && props.formData.specialDay === "15"){
        dataID = "leah-winter-15";
    }
    else if(props.formData.name === "leah" ){
        dataID = "leah-rainy-weekday";
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

    if (dataID === "abigail-rainy-1"){
        // if it's raining, Abigail has a second option
        sched2 = data.filter(item => item.id == "abigail-rainy-2");
        
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

        if (dataID === "abigail-11-25"){
            // if it's the 11th or 25th , Abigail has a second option
            sched2 = data.filter(item => item.id == "abigail-11-25-option2");
            
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

            if (props.formData.weekday === "friday" && dataID === "elliott-fs"){
                // if it's Friday, display a second option
                sched2 = data.filter(item => item.id == "elliott-tf");
                
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