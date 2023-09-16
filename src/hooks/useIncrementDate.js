
// Increment Any Django Object with the given Days(increment)
export const useIncrementDate = (djangoDate, increment) => {
    // To increment correctly and more reliably
    // Transform django format date to js Date object
    const djToJsDate = new Date(djangoDate)
    // Create new Date and Increment it in Miliseconds
    const jsDate = new Date()
    // Increment date with 7 days
    jsDate.setTime(djToJsDate.getTime() + increment * 86400000);
    // Transform JS Date back to Django format
    let day = jsDate.getDate()
    let month = jsDate.getMonth() + 1;
    let year = jsDate.getFullYear();
    const resultDate = `${year}-${month}-${day}`
    // console.log(resultDate, 'RESULT DATE IN INCREMENT DATE')
    return resultDate
} 