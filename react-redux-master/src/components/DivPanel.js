import React  from "react";
import { useSelector} from "react-redux";

const DivPanel = () => {
  let counterVal = useSelector(state => state.counter);
  return (
    <div className="panel">
        The present value is {counterVal}
    </div>
  );
}

export default DivPanel;
