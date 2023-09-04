import { useCurrentWeekNum } from "./useCurrentWeekNum";


export const useWeekDay = (activityDate) => {  
    
    const weekNumber = useCurrentWeekNum()
    const activityDayNum = new Date(activityDate)
        // get current week number
    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const activityDay = new Date(activityDate)
    const days = Math.floor((activityDay - startOfYear) /
        (24 * 60 * 60 * 1000));
    const currentWeekNumber = Math.ceil(days / 7);

    if (activityDate &&  (weekNumber === currentWeekNumber) ) {
        return activityDayNum.getDay()
    } else {
        return undefined
    }
}


