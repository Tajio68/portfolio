import SkillDisplay from './SkillDisplay';

const Skills: React.FunctionComponent = () => {

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