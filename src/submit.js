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
      const response = await axios.post(url, { nodes, edges });
      if (response) {
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
        <Popup
          isVisible={isPopupVisible}
          onClose={hidePopup}
          message={data}
        />
      
    </div>
  );
};
