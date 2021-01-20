const activities = [
    {
        id: 0,
        title: 'AAAAA',
        tags: ['a']
    },
    {
        id: 1,
        title: 'BBBBB',
        tags: ['b', 'z']
    },
    {
        id: 2,
        title: 'CCCCC',
        tags: ['c', 'a']
    },
    {
        id: 3,
        title: 'DDDDD',
        tags: ['d', 'x', 'XXXXXXXXXXXX']
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
        tagList.push([...activities[i].tags][0]);
    }
    return tagList;
}

console.log(getAllTags());