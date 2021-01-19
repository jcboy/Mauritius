const tagList = [
    {
        id: 1,
        tagName: 'BBBBB'
    },
    {
        id: 1,
        tagName: 'AAAAA'
    },
]

const activities = [
    {
        id: 0,
        title: 'AAAAA',
        tags: [
            {
                id: 0,
                tagName: 'a',
            },
            {
                id: 1,
                tagName: 'aa',
            }
        ]
    },
    {
        id: 1,
        title: 'BBBBB',
        tags: [
            {
                id: 0,
                tagName: 'b',
            },
            {
                id: 1,
                tagName: 'bb',
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

const checkExistTag = (tag, tagList) => {
    const tagExist = tagList.filter((existingTag) => {
        return existingTag.tagName === tag;
    })
    return [!!tagExist[0], tagExist];
}

const filterActivitiesByExistingTags = (tagList, activities) => {
    return activities.filter((activity) => {
        for (let j = 0; j <= activity.tags.length; j++) {
            if (activity.tags.length > 1) {
                for (let i = 0; i < tagList.length; i++) {
                    return checkExistTag(activity.tags[i].tagName, [tagList[j]])[0];
                }
            } else {
                return checkExistTag(activity.tags[0].tagName, [tagList[j]])[0];
            }
        }
    })
}
console.log(filterActivitiesByExistingTags(tagList, activities));