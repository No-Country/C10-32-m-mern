import { useParams } from "react-router-dom"
import Text from "../../components/Text"
import Title from "../../components/Title"

const Search = () =>{
    []
    const {category} = useParams();
    console.log(category);
    
    return(
        <div>
        {category === "specialists" && 
           < >
           <Title
                title = {"Especialistas"}
            />
            <Text
                first={"Hola Nombre Usuario"}
                second={"Ubica al doctor de tu preferencia y selecciona el horario."}
            />

            <input className="w-full h-[44px] px-2" type="search" placeholder="Escribe el nombre del especialista"/>
           
           </>
        }
        {category === "specialities" &&
                   < >
           <Title
                title = {"Espcialidades"}
            />
            <Text
                first={"Hola Nombre Usuario"}
                second={"Busque la especialidad y seleccione el especialista y horario"}
            />

            <input className="w-full h-[44px] px-2" type="search" placeholder="Escribe el nombre de la especialidad"/>
           
           </>
        }
</div>
        )
}

export default Search