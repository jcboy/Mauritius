const activities = [
    {
        id: 0,
        title: 'AAAAA',
        tags: [
            {
                id: 0,
                tagName: 'a',
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
                id: 0,
                tagName: 'z',
            }
        ]
    },
    {
        id: 2,
        title: 'CCCCC',
        tags: [
            {
                id: 0,
                tagName: 'c',
            },
            {
                id: 0,
                tagName: 'y',
            }
        ]
    },
    {
        id: 3,
        title: 'DDDDD',
        tags: [
            {
                id: 0,
                tagName: 'd',
            },
            {
                id: 0,
                tagName: 'x',
            }
        ]
    },
    {
        id: 4,
        title: 'EEEEE',
        tags: [
            {
                id: 0,
                tagName: 'e',
            },
            {
                id: 0,
                tagName: 'w',
            }
        ]
    }
    ,
    {
        id: 5,
        title: 'FFFFF',
        tags: [
            {
                id: 0,
                tagName: 'f',
            },
            {
                id: 0,
                tagName: 'v',
            }
        ]
    },
    {
        id: 6,
        title: 'GGGGG',
        tags: [
            {
                id: 0,
                tagName: 'g',
            },
            {
                id: 0,
                tagName: 'u',
            }
        ]
    },
    {
        id: 7,
        title: 'HHHHH',
        tags: [
            {
                id: 0,
                tagName: 'HHHHH',
            }
        ]
    },
    {
        id: 8,
        title: 'IIIII',
        tags: [
            {
                id: 0,
                tagName: 'IIIII',
            }
        ]
    },
    {
        id: 9,
        title: 'JJJJJ',
        tags: [
            {
                id: 0,
                tagName: 'JJJJJ',
            }
        ]
    },
    {
        id: 10,
        title: 'KKKKK',
        tags: [
            {
                id: 0,
                tagName: 'KKKKK',
            }
        ]
    }
    ,
    {
        id: 11,
        title: 'LLLLL',
        tags: [
            {
                id: 0,
                tagName: 'LLLLL',
            }
        ]
    },
    {
        id: 12,
        title: 'MMMMM',
        tags: [
            {
                id: 0,
                tagName: 'MMMMM',
            }
        ]
    }
]


const getAllTags = () => {
    let tagList = [];
    for (let i = 0; i < activities.length; i++) {
        if (activities[i].tags.length > 1) {
            while (activities[i].tags.length > 1) {
                const tags = activities[i].tags.splice(0, 1);
                tagList.push([...tags][0]);
            }
        }
        tagList.push([...activities[i].tags][0])
    }
    return tagList;
}


const ALLTAGS = getAllTags();


const checkExistTag = (tag, tagList) => {
    const tagExist = tagList.filter((existingTag) => {
        return existingTag.tagName === tag;
    })
    return [!!tagExist[0], tagExist];
}

tag = 'a';

checkExistTag(tag,ALLTAGS);