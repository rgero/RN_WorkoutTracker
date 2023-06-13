export const SortWorkoutList = (workoutList, descending=true) => {
    let sortedList = workoutList.sort( (a,b) => {
        let aDate = new Date(a.workoutDate);
        let bDate = new Date(b.workoutDate);

        if (descending)
        {
            return bDate - aDate;
        } else
        {
            return aDate - bDate;
        }
        
    })

    return sortedList;
}