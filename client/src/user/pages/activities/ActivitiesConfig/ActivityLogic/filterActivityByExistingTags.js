import checkExistTag from "./checkExistTag";

const filterActivityByExistingTags = (tagList, activities) => {
    const activitiesMatchingTags = [];
    for (let i = 0; i < tagList.length; i++) {
        for (let j = 0; j < activities.length; j++) {
            const match = checkExistTag(tagList[i].tagName, activities[j].tags);
            if (match[0]) {
                activitiesMatchingTags.push(checkExistTag(tagList[i].tagName, activities[j].tags)[1][0])
            }
        }
    }
    return activitiesMatchingTags;
}

export default filterActivityByExistingTags;