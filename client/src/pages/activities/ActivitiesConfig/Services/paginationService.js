import {Subject} from "rxjs";

const pageIndex$ = new Subject(0);
let historicOfIndexes = [];
historicOfIndexes.push(pageIndex$);

class PaginationService {

    static getObservable() {
        return pageIndex$.asObservable();
    }

    static getPageIndex() {
        return historicOfIndexes[historicOfIndexes.length];
    }

    static setPageIndex(value) {
        pageIndex$.next(value)
        historicOfIndexes.push(value);
    }


}

export default PaginationService;