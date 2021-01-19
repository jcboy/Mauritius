const checkExistTag = (tag, tagList) => {
    const tagExist = tagList.filter((existingTag) => {
        return existingTag.tagName === tag;
    })
    return [!!tagExist[0], tagExist];
}


const tagList = [
    {
        id: 1,
        tagName: 'CCCCC'
    }
]

const activities = [
    {
        id: 0,
        title: 'AAAAA',
        tags: [
            {
                id: 0,
                tagName: 'AAAAA',
            }
        ]
    },
    {
        id: 1,
        title: 'BBBBB',
        tags: [
            {
                id: 0,
                tagName: 'BBBBB',
            }
        ]
    },
    {
        id: 1,
        title: 'CCCCC',
        tags: [
            {
                id: 0,
                tagName: 'CCCCC',
            }
        ]
    },
]

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

console.log(filterActivityByExistingTags(tagList, activities))
