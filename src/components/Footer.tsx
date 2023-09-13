import githubIcon from "./../assets/img/githubIcon.png";
import linkedinIcon from "./../assets/img/linkedinIcon.png";
 
const Footer: React.FunctionComponent = () => {

    return (
        <div id="footer" className="selectionToBlue">
            <hr />
            <div id="socialMedias">
                <h3>Me suivre</h3>
                <div id="socialMediaLinks">
                    <a href="https://www.linkedin.com/in/timéo-godin-8533401b6" target="blank" title="LinkedIn" ><img src={linkedinIcon} className="icon"/></a>
                    <a href="https://github.com/Tajio68" target="blank"><img src={githubIcon} className="icon" title="GitHub"/></a>
                </div>
            </div>
            <hr />
            <div id="infosFooter">
                <h5>Mentions légales</h5>
                <h5>Création par Timéo Godin | 2023</h5>
            </div>
        </div>
    );
}
 
export default Footer;