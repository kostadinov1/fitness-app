
export const useTodaysDate = () => {
    const date = new Date();
    let day = date.getDate()
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // let isoDate = date.toISOString()
    // let time = date.toLocaleTimeString('it-IT')
    // let currentDate = `${isoDate.slice(0, 19)}Z`;
    const currentDate = `${year} ${month} ${day}`
    return currentDate
}
