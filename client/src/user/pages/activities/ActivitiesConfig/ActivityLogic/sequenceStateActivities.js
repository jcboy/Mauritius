const sequenceState = (activityNumberPerPage, activities) => {
    if (Math.floor((activities.length + 1) / activityNumberPerPage) >= 1) {
        let cutActivities = [...activities];
        let page = [];
        while (cutActivities.length > activityNumberPerPage) {
            page.push(cutActivities.splice(0, activityNumberPerPage))
        }
        page.push(cutActivities);
        return page;
    }
    return activities;
}

export default sequenceState;