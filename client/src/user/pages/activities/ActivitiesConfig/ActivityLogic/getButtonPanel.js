const getButtonPanel = (pageIndex, pageIndexMax) => {
    if (pageIndexMax >= 2) {
        let buttonPanel = Array.from({length: 3}, (v, i) => i - 1);
        const start = (pageIndex < 1) ? 1 : 0;
        const end = (pageIndex >= pageIndexMax) ? -1 : 0;
        return buttonPanel.map((buttonIndex) => {
            return buttonIndex + pageIndex + end + start;
        })
    } else {
        return Array.from({length: pageIndexMax}, (v, i) => i);
    }
}

export default getButtonPanel;