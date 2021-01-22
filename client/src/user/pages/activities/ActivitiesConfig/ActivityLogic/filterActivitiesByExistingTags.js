import checkExistTag from "./checkExistTag";

const filterActivitiesByExistingTags = (tagList, activities) => {
    if (!!tagList[0]) {
        let match = [];
        for (let i = 0; i < tagList.length; i++) {
            let filteredActivities = activities.filter((activity) => {
                const match = checkExistTag(tagList[i].tagName, activity.tags);
                if (match[0]) {
                    return activity;
                }
                return false;
            })
            match.push(filteredActivities[0]);
        }
        return match;
    } else {
        return activities;
    }
}

export default filterActivitiesByExistingTags;