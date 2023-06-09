const Title = ({title, color, icon}:any) =>{
    return(
        <div className={`flex justify-around items-center text-[22px] text-[#000000] h-[54px] py-2 px-7`}>
            <h2 className="font-montserrat font-semibold drop-shadow">{title}</h2>
        </div>
    )
}

export default Title