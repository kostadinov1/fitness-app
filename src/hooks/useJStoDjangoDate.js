
export const useJStoDjangoDate = (jsDate) => {
    let day = jsDate.getDate()
    let month = jsDate.getMonth() + 1;
    let year = jsDate.getFullYear();
    const currentDate = `${year} ${month} ${day}`
    
    return currentDate
}
