import RealisationCard from "./RealisationCard";

interface RealisationListProps {
    reals: Realisation[];
}
 
const RealisationList: React.FunctionComponent<RealisationListProps> = ({ reals }) => {
    return (
        <div id="realisationList">
            {
                reals.map((real) => (
                    <RealisationCard realisation={real} key={real.id} />
                ))
            }
        </div>
    );
}
 
export default RealisationList;