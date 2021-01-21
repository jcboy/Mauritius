const getButtonPanel = (pageIndex, pageIndexMax) => {
    let buttonBar = Array.from({length: 3}, (v, i) => i - 1);
    let add = pageIndex < 1 ? 1 : pageIndex;
    if (add === pageIndex) {
        add = pageIndex < pageIndexMax ? pageIndex : pageIndex - 1;
    }
    return buttonBar.map((btn) => {
        return btn + add;
    });
}


/*
const getButtonPanel = (pageIndex, pageIndexMax) => {
    let buttonBar = Array.from({length: 3}, (v, i) => i - 1);
    if (pageIndex < 1) {
        return buttonBar.map((btn) => {
            return btn + 1;
        });
    } else if (pageIndex < pageIndexMax) {
        return buttonBar.map((btn) => {
            return pageIndex + btn;
        })
    } else {
        return buttonBar.map((btn) => {
            return pageIndex + btn - 1;
        })
    }
}
*/

/*
Utilisation de () => {
    switch () {
        case 1
        case 2
        case 3
    }
}
 */

export default getButtonPanel;