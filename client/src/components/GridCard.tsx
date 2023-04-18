const GridCard = ({ source, title }: any) => {
  return (
    <div className="bg-cardBg h-[260px] w-[200px] rounded-2xl flex flex-col justify-between items-center ml-10  xl:ml-0 pt-[35px] pb-[17px] transition duration-300 hover:scale-110">
      <img src={source} alt="" className="h-[6rem]" />
      <p className="text-lightYellow font-montserrat text-lg font-extrabold w-3/4 text-center">
        {title}
      </p>
    </div>
  );
};

export default GridCard;
