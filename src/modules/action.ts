import {Item} from '../components/RootComponent'

export const Types = {
    FETCH_ITEM: "FETCH_ITEM",
    FILTER_ITEM: "FILTER_ITEM",
    DELETE_FILTER:"DELETE_FILTER"
};
const urlList = 'http://localhost:5000/list'

const filterTitle = (items: Item[], saveFilterSearch: string) => {
    const regex = new RegExp(saveFilterSearch, 'i')
    return items.filter(item => item.name.match(regex))
}

const filterFunction = (items: Item[], saveFilterSearch: string) => {
    const regex = new RegExp(saveFilterSearch, 'i')
    const titleArrayFiltered = filterTitle(items, saveFilterSearch)
    const tagsArrayFiltered = items
        .filter(item=>item.tags
            .some((tag)=>
                regex.test(tag)))
    const Filtered = [...titleArrayFiltered, ...tagsArrayFiltered]
    return Filtered
}

export const filterItem = (search: string) => (dispatch: (pay:{type:string, payload?:any})=>any, getState: ()=>{items:Item[], actualFilter:Item[]}) => {
    if (search) {
        const saveFilterSearch = search
        const {items} = getState()
        const filteredItem = filterFunction(items, saveFilterSearch)
       return dispatch({type: Types.FILTER_ITEM, payload: filteredItem})
    }
    return dispatch({type:Types.DELETE_FILTER})
}
export const fetchItem = () => async (dispatch: any) => {
    try {
        const list = await fetch(urlList, {
            mode: 'cors',

        })
        dispatch({type: Types.FETCH_ITEM, payload: await list.json()})
    } catch (err) {
        console.error('canot fetch localhtos 5000, be sure you could fetch your launch your server')
        // TODO do something with the error
    }
}
export default Types
