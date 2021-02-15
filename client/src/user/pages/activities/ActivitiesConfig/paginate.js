const paginate = (currentPage, pageMax) => {
    if (pageMax > 2) {
        const buttonPanel = Array.from({length: 3},
            (v, i) => i + 1);
        const start = (currentPage < 2) ? 0 : -1;
        const end = (currentPage >= pageMax) ? -2 : -1;
        return buttonPanel.map((value) => {
            return value + currentPage + end + start;
        })
    } else if (pageMax === 1) {
        return [1]
    } else {
        return [1, 2];
    }
}

export default paginate;