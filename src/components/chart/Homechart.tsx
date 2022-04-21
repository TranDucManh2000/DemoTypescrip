import React from 'react'
import '../chartscss/homechascss.scss'
import Bigchart from './Bigchart'
import Chaline from './Chaline'
import Curency from './Curency'
import Ethenum from './Ethenum'

const Homechart = () => {
    return (
        <div className='homechart'>
            <Curency />
            <Ethenum />
            <Chaline />

            <Bigchart />
        </div>
    )
}

export default Homechart