const checkExistTag = (tag, tagList) => {
    const tagExist = tagList.filter((existingTag) => {
        return existingTag.tagName === tag;
    })
    return [!!tagExist[0], tagExist];
}

export default checkExistTag;