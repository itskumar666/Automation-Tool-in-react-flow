// submit.js
import axios from "axios";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import Popup from "./popUp";
import { useState } from "react";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
    const [data,setDatat]=useState()
  const { nodes, edges } = useStore(selector, shallow);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => setPopupVisible(true);
  const hidePopup = () => setPopupVisible(false);

  const handleSubmit = async () => {
    try {
      const url = "http://127.0.0.1:8000/pipelines/parse";
      //    console.log( await axios.get(url))
      const response = await axios.post(url, { nodes, edges });
      console.log(response);
      if (response) {
        console.log(response.data,"response nhi hai ye bsafsdgcv")
        setDatat(response.data)
       showPopup()
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {console.log(data,"ye bhi data hai")}
        <Popup
          isVisible={isPopupVisible}
          onClose={hidePopup}
          message={data}
        />
      
    </div>
  );
};
