const GridCard = ({source, title}:any) =>{
    return (
        <div className="bg-cardBg h-[253px] w-[222px] rounded-lg flex flex-col justify-between items-center pt-[57px] pb-[17px]">
            <img src={source} alt="" />
            <p className="text-lightYellow font-montserrat text-base font-extrabold w-3/4 text-center">{title}</p>
        </div>
    )
};

export default GridCard;