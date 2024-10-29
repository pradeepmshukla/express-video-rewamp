import React, { useState } from "react";

const ToggleText = ({
  text,
  maxLength = 100,
}: {
  text: string;
  maxLength?: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <p>
        {isExpanded ? text : `${text.slice(0, maxLength)} `}
        <button onClick={toggleText} className="font-semibold">
          {isExpanded ? "See less" : "See more..."}
        </button>
      </p>
    </>
  );
};

export default ToggleText;
