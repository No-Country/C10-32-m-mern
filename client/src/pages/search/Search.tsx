import { useParams } from "react-router-dom";
import Text from "../../components/Text";
import Title from "../../components/Title";
import iconSearchSmall from "../../assets/iconSearchSmall.svg";
import Dropdown from "../../components/Dropdown";


const Search = () =>{
    []
    const {category} = useParams();
    console.log(category);
    
    return(
        <div>
            {category === "specialists" ? 
                       < >
                       <Title
                            title = {"Especialistas"}
                        />
                        <Text
                            first={"Hola Nombre Usuario"}
                            second={"Ubica al doctor de tu preferencia y selecciona el horario."}
                        />
            
                        <Dropdown
                        header="Primero elige a un Especialista"
                        />
                        
                       
                       </>
                       :
                       < >
                        <Title
                                title = {"Espcialidades"}
                        />
                        <Text
                            first={"Hola Nombre Usuario"}
                            second={"Busque la especialidad y seleccione el especialista y horario"}
                        />

                        <Dropdown
                        header="Primero elige a una Especialidad"
                        />
                
                            
                       
                       </>
                       }

</div>
        )
}

export default Search