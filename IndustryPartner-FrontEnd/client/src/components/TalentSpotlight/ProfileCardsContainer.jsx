
import ProfileCard from "./ProfileCard";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileCardsContainer({ graduates }) {
    const graduateCard = graduates.map((graduate) => {
        return <ProfileCard key={graduate._id} graduate={graduate} graduates={graduates} />
    })

    return (
        <div id="content-wrap" className="container" >
            <div className="row row-cols-1 row-cols-md-2 g-4 m-3" >
                {graduateCard}
            </div>
        </div>
    );
}

export default ProfileCardsContainer;