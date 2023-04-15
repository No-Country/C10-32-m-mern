import GridCard from "./GridCard";
import Stethoscope from "../assets/gridMedical.svg";
import Dentist from "../assets/gridDentist.svg";
import Ophtalmology from "../assets/gridOphtalmology.svg";
import Cardiology from "../assets/gridCardiology.svg";
import Dermatology from "../assets/gridDermatology.svg";
import Pediatry from "../assets/gridPediatry.svg";
import Obstetriscm from "../assets/gridObstetriscm.svg";
import Neurology from "../assets/gridNeurology.svg";

const GridLanding = () =>{
    return (
        <div className="flex flex-wrap gap-6">
            <GridCard source={Stethoscope} title="MEDICINA GENERAL"/>
            <GridCard source={Dentist} title="ODONTOLOGÍA"/>
            <GridCard source={Ophtalmology} title="OFTALMOLOGÍA"/>
            <GridCard source={Cardiology} title="CARDIOLOGÍA"/>
            <GridCard source={Dermatology} title="DERMATOLOGÍA"/>
            <GridCard source={Pediatry} title="PEDIATRÍA"/>
            <GridCard source={Obstetriscm} title="NEUROLOGÍA"/>
            <GridCard source={Neurology} title="GINECOLOGÍA Y OBSTETRICIA"/>
        </div>
    )
};

export default GridLanding;