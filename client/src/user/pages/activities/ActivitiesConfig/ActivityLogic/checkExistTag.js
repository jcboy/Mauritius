const checkExistTag = (tag, tagList) => {
    const tagExist = tagList.filter((existingTag) => {
        return existingTag === tag;
    })
    return [!!tagExist[0], tag];
}

export default checkExistTag;