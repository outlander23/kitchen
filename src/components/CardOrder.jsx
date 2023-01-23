import { OrderCardGreen, OrderCardRed, OrderCardYellow } from "./OrderCardHead";
import SubCardOrder from "./SubCardOrder";

export default function CardOrder({ personal, order, time, data, status }) {
  console.log(status);
  return (
    <div className="relative shadow-xl rounded-lg overflow-hidden bg-gray-100 flex flex-col ">
      <div className="pb-4">
        {status === "green" && (
          <OrderCardGreen personal={personal} order={order} time={time} />
        )}
        {status === "yellow" && (
          <OrderCardYellow personal={personal} order={order} time={time} />
        )}
        {status === "red" && (
          <OrderCardRed personal={personal} order={order} time={time} />
        )}
        <div className="px-4 ">
          {data.map((item, index) => {
            return (
              <SubCardOrder
                key={index}
                name={item.name}
                items={item.sepcial}
                ok={item.ok}
              />
            );
          })}
        </div>
      </div>

      <div className=" bottom-0 w-full px-4 py-2 flex justify-between gap-3 border-t border-gray-700 pb-2">
        <button className="px-4 py-2 text-gray-700 rounded-lg border border-gray-600 flex-1">
          Serve Order
        </button>
        <button className=" text-white font-medium bg-purple-600 py-2 rounded-lg border border-gray-600 flex-1">
          <span className="">&#x2713;</span>
          Bump
        </button>
      </div>
    </div>
  );
}
