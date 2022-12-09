import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingT, loadingTrueAC, } from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    //const loading = false
    const allState = (state:AppStoreType) => state.loading
    const { isLoading } = useSelector(allState)
    const dispatch = useDispatch<Dispatch<LoadingT>>()

    const setLoading = () => {

        setTimeout(() => {
            dispatch(loadingAC())
        },2000)
        console.log('loading...')
        dispatch(loadingTrueAC())
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div style={{color:'yellow',fontWeight:'700'}}>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading} style={
                            {
                            backgroundColor:'blueviolet',
                            color: 'white',
                            border: 'solid 1px blueviolet',
                            borderRadius: '3px'}
                        }>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
