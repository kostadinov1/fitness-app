import { createActivity } from "../api/activities";
import { createMicroCycle } from "../api/cycles/microCycle";
import { createExercise } from "../api/exercises";


// Clone given Micro by given  weekCount times
export function createMesoPeriodization(user, initialMicro, selectedMeso,  weekCount) {

    let currMicro = {...initialMicro}

    for (let weekNum = 1; weekNum <= weekCount - 1; weekNum++) {
            const currentActivities = currMicro?.activities
            const startDate = incrementDate(currMicro.start_date, 7) // Increment by a Week
            const endDate = incrementDate(currMicro.end_date, 7) // Increment by a Week
            // Generate new Microcycle Object
            const newMicroData = {
                name:`WEEK ${weekNum + 1}`,
                start_date: startDate,
                end_date: endDate,
                description: undefined, 
                goals: undefined,
                meso_cycle : selectedMeso.id,
                user: user.user_id
            }
            // Assign custom Values to Current Microcycle(Week) for next Iteration
            currMicro = {...newMicroData}
            // Make a Create Request for the current cycle
            createMicroCycle(user, newMicroData)
                .then((res) =>  {
                    
                })
                .catch((res) => {console.log('ERROR IN CLONE MICRO', res)})
            // Create the Activties for each Microcycle 
            for (let activity = 0; activity < currentActivities?.length; activity++) {
                const currActivity = currentActivities[activity];
                cloneActivity(user, currActivity)

                // Create the Exercises for each Activity
                currActivity?.exercises?.forEach((exercise) => {
                        cloneExercise(user, exercise, currActivity.id, 1, 2, 1)
                    });
            }
        }

    }

function cloneActivity(user, activity) {
    const activityData = {
        name: activity.name,
        micro_cycle: activity.micro_cycle,
        user: user.user_id
    }
    console.log(activityData, 'ACTIVITY DATA')
    createActivity(user, activityData)
        .then((res) => {console.log('SUCCESS IN CLONE ACTIVITY', res)})
        .catch((res) => {console.log('ERROR IN CLONE ACTIVITY', res)})
}
function cloneExercise(user, exercise, activityID, setsIncrease, repsIncrease, weightIncrease) {
    const exerciseData = {
        name: exercise.name,
        reps: exercise.reps,
        sets: exercise.sets,
        weights_in_kg: exercise.weights_in_kg,
        activity: activityID,
        user: user.user_id
    }
    console.log(exerciseData, 'EXERCISE DATA')
    createExercise(user, exerciseData)
        .then((res) => {console.log('SUCCESS IN CLONE EXERCISE', res)})
        .catch((res) => {console.log('ERROR IN CLONE EXERCISE', res)})
}
function incrementDate(djangoDate, increment) {
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
  




// <<<<<============================ ORIGINAL FUNC IN PERIODIZATION COMPONENT ==================================>>>>> //

    // // Clone given Micro by given  weekCount times
    // function createMesoPeriodization(micro, weekCount) {
    //     let currMicro = {...micro}
    //     for (let weekNum = 1; weekNum <= weekCount - 1; weekNum++) {
    //             const currentActivities = currMicro?.activities
    //             const startDate = incrementDate(currMicro.start_date, 7) // Increment by a Week
    //             const endDate = incrementDate(currMicro.end_date, 7) // Increment by a Week
    //             // Generate new Microcycle Object
    //             const microData = {
    //                 name:`WEEK ${weekNum + 1}`,
    //                 start_date: startDate,
    //                 end_date: endDate,
    //                 description: undefined, 
    //                 goals: undefined,
    //                 meso_cycle : selectedMeso.id,
    //                 user: user.user_id
    //             }
    //             // Assign custom Values to Current Microcycle(Week) for next Iteration
    //             currMicro = {...microData}
    //             // Make a Create Request for the current cycle
    //             createMicroCycle(user, microData)
    //                 .then((res) => {
    //                     setSelectedMeso((state) =>
    //                      ({...state, 
    //                         micro_cycles: [...state.micro_cycles, microData ]                         
    //                     }))})
    //                 .catch((res) => {console.log('ERROR IN CLONE MICRO', res)})

    //             // Create the Activties for each Microcycle
    //             for (let activity = 0; activity < currentActivities?.length; activity++) {
    //                 const currActivity = currentActivities[activity];
    //                 cloneActivity(currActivity)

    //                 // Create the Exercises for each Activity
    //                 currActivity?.exercises?.forEach((exercise) => {
    //                         cloneExercise( exercise, currActivity.id, 1, 2, 1)
    //                     });
    //             }
    //         }
    //     }
    // function cloneActivity(activity) {
    //     const activityData = {
    //         name: activity.name,
    //         micro_cycle: activity.micro_cycle,
    //         user: user.user_id
    //     }
    //     // console.log(activityData, 'ACTIVITY DATA')
    //     // createActivity(user, activityData)
    //     //     .then((res) => {console.log('SUCCESS IN CLONE ACTIVITY', res)})
    //     //     .catch((res) => {console.log('ERROR IN CLONE ACTIVITY', res)})
    // }
    // function cloneExercise(exercise, activityID, setsIncrease, repsIncrease, weightIncrease) {
    //     const exerciseData = {
    //         name: exercise.name,
    //         reps: exercise.reps,
    //         sets: exercise.sets,
    //         weights_in_kg: exercise.weights_in_kg,
    //         activity: activityID,
    //         user: user.user_id
    //     }
    //     // console.log(exerciseData, 'EXERCISE DATA')
    //     // createExercise(user, exerciseData)
    //     //     .then((res) => {console.log('SUCCESS IN CLONE EXERCISE', res)})
    //     //     .catch((res) => {console.log('ERROR IN CLONE EXERCISE', res)})
    // }
    // function incrementDate(djangoDate, increment) {
    //     // To increment correctly and more reliably
    //     // Transform django format date to js Date object
    //     const djToJsDate = new Date(djangoDate)
    //     // Create new Date and Increment it in Miliseconds
    //     const jsDate = new Date()
    //     // Increment date with 7 days
    //     jsDate.setTime(djToJsDate.getTime() + increment * 86400000);
    //     // Transform JS Date back to Django format
    //     let day = jsDate.getDate()
    //     let month = jsDate.getMonth() + 1;
    //     let year = jsDate.getFullYear();
    //     const resultDate = `${year}-${month}-${day}`
    //     // console.log(resultDate, 'RESULT DATE IN INCREMENT DATE')
    //     return resultDate
    // } 
      