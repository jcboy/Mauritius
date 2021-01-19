import checkExistTag from "./checkExistTag";

const filterActivitiesByExistingTags = (tagList, activities) => {
    let match = [];
    for (let i = 0; i < tagList.length; i++) {
        let truc = activities.filter((activity) => {
            const match = checkExistTag(tagList[i].tagName, activity.tags);
            if (match[0]) {
                return activity
            }
            return false;
        })
        match.push(truc[0]);
    }
    return match;
}

export default filterActivitiesByExistingTags;