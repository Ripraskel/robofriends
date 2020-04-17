
export const  getFilteredList = (list, filter, caseSensitive=false) => {
    if (!caseSensitive) {
        return (
            list.filter(listItem => {
                return (
                    listItem.name.toLocaleLowerCase().includes(
                        filter.toLocaleLowerCase())
                )
            })
        );
    } else {
        return (
            list.filter(listItem => {
                return listItem.name.includes(filter);
            })
        );
    }
}