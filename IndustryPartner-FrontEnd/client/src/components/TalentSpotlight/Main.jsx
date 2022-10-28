import { useEffect, useState } from "react";
import Filter from "./Filter";
import ProfileCardsContainer from "./ProfileCardsContainer";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from "../Header";
import Footer from "../Footer";

function Main(){
    const [graduates, setGraduates] = useState(null);
    const [originalGrads, setOriginalGrads] = useState(null);
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    
    // const logOut = () => {
    // removeCookie("jwt");
    // navigate("/login");
    // };
    useEffect(() => {
        const verifyUser = async () => {
            if (!cookies.jwt) {
            navigate("/login");
            } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Hi ${data.user} 🦄`, {
            theme: "dark",
          });
      }
    };
        verifyUser();
        const getGraduates = async () =>{
            const response = await fetch('http://localhost:4000/graduates')
            const graduatesData = await response.json();
            if (response.ok){
                setGraduates(graduatesData);
                setOriginalGrads(graduatesData);
            }
        }
        getGraduates();

     }, [cookies, navigate, removeCookie]);

    const filterDropdown = (dfSubjectSelected) => {
        if (dfSubjectSelected === ""){
            setGraduates(originalGrads);
        } else{
            const filteredGraduates = originalGrads.filter(graduate => graduate.dfSubject === dfSubjectSelected)
            setGraduates(filteredGraduates);
        }
    }

    return (
        <>

            <Header />
            <div style={{ display: 'grid', placeContent: 'center', paddingBottom: '30px', marginTop: '20px' }}>
                    <div className="header" style={{ maxWidth: '980px' }}>
                    <h1 style={{ color: '#18164d' }}>Talent spotlight</h1>
                    <p style={{ color: "grey" }}>At Digital Futures we're focused on improving diversity within the technology sector, helping organisations build high-performing technology teams representative of society. Below is a selection of our engineers who have recently graduated from the Digital Academy and are immediately available to join your organisation </p>
                    <br></br>
                    </div>
                    
                    <div style={{ justifyContent: 'left', padding: '20px 45px 15px 45px', borderRadius: '5px', backgroundColor: "white" }}>
                        <p style={{ color: "grey" }}>Engineer type:</p>
                       <Filter filterDropdown={filterDropdown} />
                    </div>
                
                    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0px 20px 20px 20px', borderRadius: '5px', backgroundColor: "white", paddingTop: '40px' }}>
                    
                        {graduates && <ProfileCardsContainer graduates={graduates} />}
                
                    </div>
                
            </div >
            <Footer />

        </>
    )

}

export default  Main;