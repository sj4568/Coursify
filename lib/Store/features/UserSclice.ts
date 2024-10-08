import { getStorLocal, setStorLocal } from "@/lib/hooks/LoacalHooks"
import { InstructorType, review, Student } from "@/lib/Types/Types"
import { createSlice } from "@reduxjs/toolkit"

const localData:Student|null = getStorLocal("user")
const localRatings:review[]|null = getStorLocal("ratings")
const localTempUser:Student | InstructorType = getStorLocal("tempUser")
const localModuleData:{
    courseId:string,
    moduleId:string,
    videoId:string
}= getStorLocal("moduleData")

const initialState = {
    user:localData,
    type:"student",
    ratings:localRatings,
    tempUser:localTempUser,
    otp:0,
    moduleData:localModuleData
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        signInUser:(state,action)=>{
            state.user = action.payload
            setStorLocal('user',action.payload)
        },
        Logout:(state)=>{
            state.user=null
            setStorLocal('user',null)
        },
        setRatings:(state,action)=>{
            state.ratings=action.payload
            setStorLocal('ratings',action.payload)
        },
        setTempUser:(state,action)=>{
            state.tempUser=action.payload
            setStorLocal('tempUser',action.payload)
        },
        setOTP:(state,action)=>{
            state.otp = action.payload
        },
        setModuleData:(state,action)=>{
            state.moduleData=action.payload
            setStorLocal('moduleData',action.payload)
        
        }

    }
})

export const {signInUser,Logout,setRatings,setTempUser,setOTP,setModuleData} = userSlice.actions
