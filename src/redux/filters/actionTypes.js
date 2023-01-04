import { COLORSCHANGED, STATUSCHANGED } from "./actions"

export const colorChanged = (color, changedType)=>{
    return{
        type : COLORSCHANGED,
        payload : {
            color,
            changedType
        }
    }
}
export const statusChanged = (status)=>{
    return{
        type : STATUSCHANGED,
        payload : status
    }
}