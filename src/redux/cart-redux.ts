const SET_ITEM = 'SET_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'

type PurchasesType = {
    img: string
    name: string
    size: string
    color: string
    price: number
    id: number
}

let initialState = {
    purchases : [] as Array<PurchasesType>,
    count : 0,
    finalCost: 0
}

const cartReducer = (state = initialState, action: ActionTypes): CartInitialStateType => {
    switch(action.type){
        case SET_ITEM:
            let newItem = {
                img: action.img,
                name: action.name,
                size: action.size,
                color: action.color,
                price: action.price,
                id: action.id
            }
            state.count++
            state.finalCost = state.finalCost + action.price
            return {
                ...state,
                purchases: [newItem, ...state.purchases]
            }
        case DELETE_ITEM:
            state.purchases = state.purchases.filter((obj) => {
                return obj.id != action.id
            })
            state.count--
            state.finalCost = state.finalCost - action.price
            return {
                ...state
            }
           
        default:
            return state
    }
}

export type CartInitialStateType = typeof initialState;

type ActionTypes = SetItemACType | DeleteItemACType

type SetItemACType = {
    type: typeof SET_ITEM
    img: string
    name: string
    size: string
    color: string
    price: number
    id: number
}

export const setItemAC = (img: string, name: string, size: string, color: string, price: number, id: number): SetItemACType => ({type: SET_ITEM, img, name, size, color, price, id})

type DeleteItemACType = {
    type: typeof DELETE_ITEM
    id: number
    price: number
}

export const deleteItemAC = (id: number, price: number): DeleteItemACType => ({type: DELETE_ITEM, id, price})

export default cartReducer