import reactIcon from './../assets/img/reactIcon.png';
import tsIcon from './../assets/img/tsLogo.png';
import firebaseIcon from './../assets/img/firebaseIcon.png';
import tailwindIcon from './../assets/img/tailwindIcon.png';
import cssIcon from './../assets/img/cssIcon.png';

interface SkillsProps {

}

const Skills: React.FunctionComponent<SkillsProps> = () => {

    // Animation Typing à créer

    const handleMouseHoverEnter = () => {
        const element = document.getElementById('reaDesc');
        console.log("TEST");
    }

    const handleMouseHoverLeave = () => {

    }

    return (
        <div id="skills" className="selectionToBlue reveal">
            <h2 className="titleCenter">Mes compétences</h2>
            <div id="skillsList">
                <div className='skill'>
                    <img src={reactIcon} onMouseEnter={handleMouseHoverEnter}/>
                    <p id='reaDesc'>React</p>
                </div>
                <div className='skill'>
                    <img src={tsIcon} />
                    <p id='typDesc'>TypeScript</p>
                </div>
                <div className='skill'>
                    <img src={firebaseIcon} />
                    <p id='firDesc'>Firebase</p>
                </div>
                <div className='skill'>
                    <img src={tailwindIcon} />
                    <p id='taiDesc'>Tailwind</p>
                </div>
                <div className='skill'>
                    <img src={cssIcon} />
                    <p id='cssDesc'>CSS</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;