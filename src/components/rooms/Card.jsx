

const Card = ({ room }) => {
    
    return (
        <div>
            
            <div className="card col-span-1 glass cursor-pointer group">
                <figure className=" overflow-hidden hover:rounded-tr-3xl hover:rounded-bl-3xl"><img className=" h-full w-full object-cover rounded-tl-3xl rounded-br-3xl group-hover:scale-105 transition" src={room.image} alt="car!" /></figure>
                <div className="card-body mt-5">
                    <h2 className="card-title font-bold text-xl">{room.location}</h2>
                    <p className="text-lg">${room.price} <span className="font-semibold">night</span></p>
                    <h3 className="text-emerald-600 text-base font-medium italic">{room.category}</h3>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;