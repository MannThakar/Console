import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrums = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="breadcrumbs text-sm mt-10">
      <ul>
        <li>
          <span
            className="inline-flex items-center gap-2 text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            Details
          </span>
        </li>
        <li>
          <span className="inline-flex items-center gap-2 text-white">
            {title}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrums;
