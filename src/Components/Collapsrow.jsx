import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const data = [
  { id: 1, title: "Row 1", content: "This is the content for row 1." },
  { id: 2, title: "Row 2", content: "This is the content for row 2." },
  { id: 3, title: "Row 3", content: "This is the content for row 3." },
];

const CollapsibleRow = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b rounded-md   mb-2 overflow-hidden">
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer    "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>

        {isOpen ? (
          <span className="rounded-full p-2 text-xs border">
            <FaMinus />
          </span>
        ) : (
          <span className="rounded-full p-2 text-xs border">
            <FaPlus />
          </span>
        )}
      </div>

      {isOpen && (
        <div className="px-4 py-3 bg-white text-sm text-gray-700  ">
          {content}
        </div>
      )}
    </div>
  );
};

const CollapsRow = () => {
  return (
    <div className="py-6 max-w-xl mx-auto">
      {data.map((item) => (
        <CollapsibleRow
          key={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default CollapsRow;
