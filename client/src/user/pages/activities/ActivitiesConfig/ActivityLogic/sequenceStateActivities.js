const sequenceState = (activityNumberPerPage,activities) => {
    let cutActivities = [...activities];
    let page = [cutActivities.splice(0, activityNumberPerPage)];
    while (cutActivities.length > activityNumberPerPage) {
        page.push(cutActivities.splice(0, activityNumberPerPage))
    }
    page.push(cutActivities);
    return page;
}

export default sequenceState;