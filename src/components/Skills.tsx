import reactIcon from './../assets/img/reactIcon.png';
import tsIcon from './../assets/img/tsLogo.png';
import firebaseIcon from './../assets/img/firebaseIcon.png';
import tailwindIcon from './../assets/img/tailwindIcon.png';
import cssIcon from './../assets/img/cssIcon.png';
import SkillDisplay from './SkillDisplay';

interface SkillsProps {

}

const Skills: React.FunctionComponent<SkillsProps> = () => {

    // Animation Typing à créer


    return (
        <div id="skills" className="selectionToBlue reveal">
            <h2 className="titleCenter">Mes compétences</h2>
            <div id="skillsList">
                <SkillDisplay />
            </div>
        </div>
    );
}

export default Skills;