const SpecialistLandingCard = ({source, title, speciality}:any) =>{
    return (
        <div className="bg-white h-[192px] w-[168px] rounded-lg flex flex-col justify-between items-center p-4">
            <img src="https://randomuser.me/api/portraits/med/men/57.jpg" alt="" className="rounded-full w-24 pb-3" />
            <p className="text-textBlack font-inter text-base font-medium text-center">{title}Dr. Martin Ochoa</p>
            <p className="text-textGray font-inter text-sm font-normal text-center">{speciality} Pediatra</p>
        </div>
    )
};

export default SpecialistLandingCard;