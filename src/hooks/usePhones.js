import {useMemo} from "react";

export const useSortedPhones = (phone, sort) => {
    const sortedPhones = useMemo(() => {
        if (sort) {
            return [...phone].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return phone;
    }, [sort, phone]);
    return sortedPhones;
}

export const usePhones = (phone, sort, query) => {
    const sortedPhones = useSortedPhones(phone, sort)

    const sortedAndSearchedPhone = useMemo(() => {
        return sortedPhones.filter(phone => phone.title.toLowerCase().includes(query))
    }, [query, sortedPhones])

    return sortedAndSearchedPhone;
}