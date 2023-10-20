import React from 'react'
import data from '../data.tsx';

interface FormData {
    name: string,
    season: string,
    isRaining: boolean,
    specialDay?: string,
    railroadUnlocked: boolean,
    communityRestored: boolean,
    weekday?: string
}

interface FormComponentProps {
    formData: FormData
  }

function Schedule(props: FormComponentProps) {

    let dataID:string;

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
    else if(props.formData.name === "elliott" && props.formData.season === "spring" && (props.formData.weekday !== "thursday" && props.formData.weekday !== "friday")){
        dataID = "elliott-weekday-spring"
    }
    else if(props.formData.name === "elliott" && props.formData.season === "summer" && (props.formData.weekday !== "thursday" && props.formData.weekday !== "friday")){
        dataID = "elliott-weekday-summer"
    }
    else if(props.formData.name === "elliott" && props.formData.season === "fall" && (props.formData.weekday !== "thursday" && props.formData.weekday !== "friday")){
        dataID = "elliott-weekday-fall"
    }
    else if(props.formData.name === "elliott" && props.formData.season === "winter" && (props.formData.weekday !== "thursday" && props.formData.weekday !== "friday")){
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
    else if(props.formData.name === "maru" && props.formData.isRaining){
        dataID = "maru-rainy";
    }
    else if(props.formData.name === "maru" && props.formData.communityRestored && (props.formData.weekday === "wednesday" || props.formData.weekday === "friday" )){
        dataID = "maru-winter-wf-cc";
    }
    else if(props.formData.name === "maru" && props.formData.communityRestored && (props.formData.weekday === "saturday" && props.formData.season === "winter" )){
        dataID = "maru-winter-sat-cc";
    }
    else if(props.formData.name === "maru" && (props.formData.weekday === "monday" || props.formData.weekday === "sunday")){
        dataID = "maru-ms";
    }
    else if(props.formData.name === "maru" && (props.formData.weekday === "tuesday" || props.formData.weekday === "thursday")){
        dataID = "maru-tt";
    } 
    else if(props.formData.name === "maru" && props.formData.season !== "summer" && (props.formData.weekday === "wednesday" || props.formData.weekday === "friday" || props.formData.weekday === "saturday" )){
        dataID = "maru-wfs";
    }
    else if(props.formData.name === "maru" && props.formData.season === "summer" && (props.formData.weekday === "wednesday" || props.formData.weekday === "friday" || props.formData.weekday === "saturday" )){
        dataID = "maru-summer-wfs";
    }
    else if(props.formData.name === "maru" && props.formData.season === "winter" && props.formData.specialDay === "16"){
        dataID = "maru-winter-16";
    }
    else if(props.formData.name === "maru" && props.formData.season === "winter" && props.formData.weekday === "sunday"){
        dataID = "maru-winter-sunday";
    }
    else if(props.formData.name === "penny" && props.formData.isRaining){
        dataID = "penny-rainy-A";
    }
    else if(props.formData.name === "penny" && props.formData.season === "winter" && props.formData.specialDay === "4"){
        dataID = "penny-winter-4";
    }
    else if(props.formData.name === "penny" && props.formData.season === "winter" && props.formData.specialDay === "15"){
        dataID = "penny-winter-15";
    }
    else if(props.formData.name === "penny"  && (props.formData.specialDay === "9" || props.formData.specialDay === "23")){
        dataID = "penny-9-23-lessSam";
    }
    else if(props.formData.name === "penny" && (props.formData.season === "spring" || props.formData.season === "fall" ) && (props.formData.weekday === "monday" || props.formData.weekday === "thursday" || props.formData.weekday === "sunday" )){
        dataID = "penny-spring-fall-mts";
    }
    else if(props.formData.name === "penny" && props.formData.season !== "spring" && (props.formData.weekday === "tuesday" || props.formData.weekday === "wednesday" || props.formData.weekday === "friday" )){
        dataID = "penny-twf";
    }
    else if(props.formData.name === "penny" && props.formData.season === "spring"  && (props.formData.weekday === "tuesday" || props.formData.weekday === "wednesday" || props.formData.weekday === "friday" )){
        dataID = "penny-spring-twf";
    }
    else if(props.formData.name === "penny" && props.formData.season === "spring" && props.formData.weekday === "saturday"){
        dataID = "penny-spring-saturday";
    }
    else if(props.formData.name === "penny" && props.formData.season === "summer" && props.formData.weekday === "sunday"){
        dataID = "penny-summer-sunday";
    }
    else if(props.formData.name === "penny" && props.formData.season === "summer" && (props.formData.weekday === "monday" || props.formData.weekday === "thursday" )){
        dataID = "penny-summer-mt";
    }
    else if(props.formData.name === "penny" && props.formData.season === "fall" && props.formData.weekday === "saturday"){
        dataID = "penny-fall-saturday";
    }
    else if(props.formData.name === "penny" && props.formData.season === "winter" && props.formData.communityRestored && (props.formData.weekday === "sunday" || props.formData.weekday === "monday" || props.formData.weekday === "thursday")){
        dataID = "penny-winter-stm-cc";
    }
    else if(props.formData.name === "penny" && props.formData.season === "winter" && !props.formData.communityRestored && (props.formData.weekday === "sunday" || props.formData.weekday === "monday" || props.formData.weekday === "thursday")){
        dataID = "penny-winter-stm-nocc";
    }
    else if(props.formData.name === "sebastian"  && props.formData.specialDay === "11"){
        dataID = "sebastian-11-optionA";
    }
    else if(props.formData.name === "sebastian"  && props.formData.specialDay === "15"){
        dataID = "sebastian-15";
    }
    else if(props.formData.name === "sebastian"  && props.formData.specialDay === "25"){
        dataID = "sebastian-11-25-optionB";
    }
    else if(props.formData.name === "sebastian" && props.formData.season === "winter"  && props.formData.specialDay === "16"){
        dataID = "sebastian-winter-16";
    }
    else if(props.formData.name === "sebastian"  && props.formData.isRaining){
        dataID = "sebastian-rainy-A";
    }
    else if(props.formData.name === "sebastian"  && props.formData.railroadUnlocked && props.formData.weekday === "thursday" ){
        dataID = "sebastian-thurs-rr";
    }
    else if(props.formData.name === "sebastian"  && props.formData.weekday === "friday" ){
        dataID = "sebastian-friday";
    }
    else if(props.formData.name === "sebastian"  && props.formData.weekday === "saturday" ){
        dataID = "sebastian-saturday";
    }
    else if(props.formData.name === "sebastian"){
        dataID = "sebastian-weekday";
    }
    else if(props.formData.name === "shane" && props.formData.season === "winter"  && props.formData.specialDay === "15"){
        dataID = "shane-winter-15";
    }
   
    else if(props.formData.name === "shane" && props.formData.isRaining){
        dataID = "shane-weekday";
    }
    else if(props.formData.name === "shane" && props.formData.weekday === "saturday" && !props.formData.communityRestored ){
        dataID = "shane-sat-nocc";
    }
    else if(props.formData.name === "shane" && props.formData.weekday === "sunday" && !props.formData.communityRestored){
        dataID = "shane-sun-nocc";
    }
    else if(props.formData.name === "shane" && props.formData.weekday === "sunday" && props.formData.communityRestored){
        dataID = "shane-sun-cc";
    }

    else if(props.formData.name === "shane" && props.formData.communityRestored  && props.formData.weekday !== "sunday" && props.formData.weekday !== "saturday"){
        dataID = "shane-weekday-cc";
    }
    else if(props.formData.name === "shane" && props.formData.communityRestored  && props.formData.weekday !== "sunday" && props.formData.weekday === "saturday"){
        dataID = "shane-weekday-cc";
    }

    else {
        dataID = "shane-weekday";
    }



    //console.log(dataID);
    const sched = data.filter(item => item.id == dataID);
    
    //console.log(sched);
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

            if (dataID === "sebastian-11-optionA"){
                // if it's the 11th  , Sebastian has a second option
                sched2 = data.filter(item => item.id == "sebastian-11-25-optionB");
                
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

                if (dataID === "penny-rainy-A"){
                    // if it's raining, Penny has a second option
                    sched2 = data.filter(item => item.id == "penny-rainy-B");
                    
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
                    if (dataID === "penny-9-23-lessSam"){
                        // if it's 9 or 16, penny has a second option
                        sched2 = data.filter(item => item.id == "penny-9-23-withSam");
                        
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
                        if (dataID === "sebastian-rainy-A"){
                            // if it's raining, has a second option
                            sched2 = data.filter(item => item.id == "sebastian-rainy-B");
                            
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
    <div className = "schedule">
    {noteElement}
    <div>{scheduleTable} </div>
    <br/>
    {noteElement2}
    <div>{scheduleTable2} </div>
    </div>
  )
}

export default Schedule