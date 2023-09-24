import { useCurrentWeekNum } from "./useCurrentWeekNum";


export const useGetWeekDay = (activityDate) => {  
    
    const activityDayNum = new Date(activityDate)
    return activityDayNum?.getDay()
}

