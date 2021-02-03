const getButtonPanel = (pageIndex) => {
    if (pageIndex > 1) {
        return Array.from({length: 3}, (v, i) => pageIndex - 1 + i);
    } else {
        return Array.from({length: 3}, (v, i) => i + 1);
    }
}

console.log(getButtonPanel(0));