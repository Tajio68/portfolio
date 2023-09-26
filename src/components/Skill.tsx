import { useState } from "react";

interface SkillProps {
    skill: SkillType;
}

const Skill: React.FunctionComponent<SkillProps> = ({ skill }) => {

    const [hovered, setHovered] = useState(false);

    const hoverTrigger:string = hovered ? 'showSkill' : 'hideSkill';

    return (
        <div className='skill' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img src={skill.img} />
            <p id='skillDesc' className={hoverTrigger + ''}>{skill.name}</p>
        </div>
    );
}

export default Skill;