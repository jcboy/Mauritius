const getButtonPanel = (pageIndex, pageIndexMax) => {
    if (pageIndexMax > 2) {
        let buttonPanel = Array.from({length: 3},
            (v, i) => i - 1);
        const start = (pageIndex < 1) ? 1 : 0;
        const end = (pageIndex >= pageIndexMax) ? -2 : 0;
        return buttonPanel.map((buttonIndex) => {
            return buttonIndex + pageIndex + end + start;
        })
    } else if (pageIndexMax < 0) {
        return [0]
    } else {
        return Array.from({length: pageIndexMax + 1},
            (v, i) => i);
    }
}

console.log(getButtonPanel(0, 4));