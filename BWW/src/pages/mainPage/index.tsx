import Contact from '../../widgets/mainPage/contact';
import Education from '../../widgets/mainPage/education';
import FirstContainer from '../../widgets/mainPage/firstContainer';
import Image from '../../widgets/mainPage/image';
import Master from '../../widgets/mainPage/master';
import New from '../../widgets/mainPage/new';
import Works from '../../widgets/mainPage/works';
import './index.scss'

const Main = () => {
    return (
        <>
            <FirstContainer />
            <Works />
            <Master />
            <Education />
            <New />
            <Contact />
            <Image />
        </>
    );
}

export default Main;