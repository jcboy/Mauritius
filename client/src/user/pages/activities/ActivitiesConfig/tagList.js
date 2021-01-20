import activities from "./ActivityList";

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

export default getAllTags;
