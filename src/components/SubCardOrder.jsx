import GreenBox from "./greenBox";
import RedBox from "./RedBox";

export default function SubCardOrder({ name, ok = true }) {
  return (
    <div className="bg-white flex items-start gap-4 pt-2">
      <div className="p-4">
        {ok == true ? <GreenBox> </GreenBox> : <RedBox> </RedBox>}
      </div>
      <div className="flex flex-col pt-2 ">
        <p className="text-lg text-gray-800 font-medium">{name}</p>
        <div className="pl-6 text-gray-600">
          <p className="text-sm">*More Cheese</p>
          <p className="text-sm">*Add Ranch</p>
        </div>
      </div>
    </div>
  );
}
