const GoToTop: React.FunctionComponent = () => {
    return (
        <div id="goToTop" className="" onClick={() => window.scrollTo(0, 0)}>
            <p>&#10149;</p>
        </div>
    );
}
 
export default GoToTop;