export const DateService = {
    getFormatedDate(date: Date) {
        const yyyy = date.getFullYear();
        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();

        let mm_str = '';
        if (mm < 10) {
            mm_str = '0' + mm;
        } else {
            mm_str = mm.toString();
        }

        let dd_str = '';
        if (dd < 10) {
            dd_str = '0' + dd;
        } else {
            dd_str = dd.toString();
        }
        return dd_str + '/' + mm_str + '/' + yyyy;
    },
};
