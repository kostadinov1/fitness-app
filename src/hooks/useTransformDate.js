
export const useTransformDate = (djangoDate) => {

    const listDate = djangoDate.split('-').reverse()
    const date = listDate.join('-')

    return date
}
