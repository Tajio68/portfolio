import reactIcon from './../assets/img/reactIcon.png';
import tsIcon from './../assets/img/tsLogo.png';
import firebaseIcon from './../assets/img/firebaseIcon.png';
import tailwindIcon from './../assets/img/tailwindIcon.png';
import cssIcon from './../assets/img/cssIcon.png';
import Skill from './Skill';

const SkillDisplay: React.FunctionComponent = () => {

    const skillsImg: SkillType[] = [
        {
            img: reactIcon,
            name: "React"
        },
        {
            img: tsIcon,
            name: "TypeScript"
        },
        {
            img: firebaseIcon,
            name: "Firebase"
        },
        {
            img: cssIcon,
            name: "CSS"
        },
        {
            img: tailwindIcon,
            name: "Tailwind"
        }
    ];

    const display = skillsImg.map((skill) => {
        return (
            <Skill skill={skill} key={skill.name}/>
        );
    })

    return (
        <>
            {display}
        </>
    );
}

export default SkillDisplay;