export function multiFilter(arr, filters) {
    let filterKeys = Object.keys(filters);
    return arr.filter((eachObj) => {
        return filterKeys.every((eachKey) => {
            if (!filters[eachKey].length) {
                return true;
            }
            return filters[eachKey] === eachObj[eachKey];
        });
    });
}
