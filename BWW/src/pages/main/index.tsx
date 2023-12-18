import { FC } from 'react'
import './index.css'
import Welcome from '../../widgets/main/welcome'
import Works from '../../widgets/main/works'

const Main: FC = () => {

    return (
        <div className='main-page'>
            <Welcome />
            <Works />
        </div>
    )
}

export default Main
