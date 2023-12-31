import Image from "next/image";
import { craftableItems } from "../../helpers/mockData";

const CraftableMaterials = () => {
  return (
    <div className="card bg-base-100 shadow-xl w-auto my-4 h-full">
      <div className="card-body">
        <h2 className="card-title text-3xl">Craftable Items</h2>
        <div className="overflow-x-auto grid grid-cols-2 gap-4">
          {craftableItems.map((item, index) => (
            <div className="card glass" key={index}>
              <figure>
                <Image src={item.image} alt="car!" width={300} height={300} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export { CraftableMaterials };
