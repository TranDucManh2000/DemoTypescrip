import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { data } from '../interface/Interface';
import { GetDataProduct } from '../redux/Reduce';
import { datasVluae } from '../redux/ReduxSlice';

const Tests = () => {
    const dispatch: Function = useDispatch();
    const datas = useSelector(datasVluae);
    const ok = () => {
        dispatch(GetDataProduct([{ name: 'ccne' }]))
    }
    return (
        <div>
            <div onClick={() => ok()}>Tests</div>
            {
                datas.map((vl: data, index: number) => (
                    <h1 key={index}>Vl :{vl.name}</h1>
                ))
            }
        </div>
    )
}

export default Tests