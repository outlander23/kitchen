function OrderCardGreen({ personal, order, time }) {
  return (
    <div className="flex items-center justify-between py-4 px-4 bg-green-500  ">
      <p className="text-white font-medium">#{order}</p>
      <p className="text-white">
        <span className="font-medium text-white">{personal}</span>
        Guest(s)
      </p>
      <p className="text-white">{time}</p>
    </div>
  );
}

function OrderCardYellow({ personal, order, time }) {
  return (
    <div className="flex items-center justify-between py-4 px-4 bg-yellow-500  ">
      <p className="text-white font-medium">#{order}</p>
      <p className="text-white">
        <span className="font-medium text-white">{personal}</span>
        Guest(s)
      </p>
      <p className="text-white">{time}</p>
    </div>
  );
}

function OrderCardRed({ personal, order, time }) {
  return (
    <div className="flex items-center justify-between py-4 px-4 bg-red-500  ">
      <p className="text-white font-medium">#{order}</p>
      <p className="text-white">
        <span className="font-medium text-white">{personal}</span>
        Guest(s)
      </p>
      <p className="text-white">{time}</p>
    </div>
  );
}

export { OrderCardGreen, OrderCardYellow, OrderCardRed };
