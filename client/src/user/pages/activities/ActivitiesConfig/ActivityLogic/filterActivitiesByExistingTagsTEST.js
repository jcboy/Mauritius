const tagList = [
    {
        id: 1,
        tagName: 'AAAAA'
    },
    {
        id: 1,
        tagName: 'BBBBB'
    },
]

const activities = [
    {
        id: 0,
        title: 'AAAAA',
        tags: [
            {
                id: 0,
                tagName: 'AAAAA',
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
                tagName: 'BBBBB',
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

console.log(filterActivitiesByExistingTags(tagList, activities));