

const CategoriesBox = ({label,icon: Icon}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2
        hover:text-neutral-800
        transition">
            <Icon size={26}></Icon>
            <h2 className="text-lg font-semibold">{label}</h2>
        </div>
    );
};

export default CategoriesBox;