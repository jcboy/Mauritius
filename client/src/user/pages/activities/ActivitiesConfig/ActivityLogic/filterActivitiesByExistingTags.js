import checkExistTag from "./checkExistTag";

const filterActivitiesByExistingTags = (tagList, activities) => {
    const activitiesMatchingTags = [];
    for (let i = 0; i < tagList.length; i++) {
        for (let j = 0; j < activities.length; j++) {
            for (let k = 0; k < activities[j].tags.length; k++) {
                const match = checkExistTag(activities[j].tags[k].tagName, [tagList[i]]);
                if (match[0]) {
                    activitiesMatchingTags.push(match[1][0]);
                }
            }
        }
    }
    return activitiesMatchingTags;
}

export default filterActivitiesByExistingTags;