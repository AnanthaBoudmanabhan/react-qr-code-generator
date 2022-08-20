import React, { useState } from "react";

const Form = ({ generateQR }) => {
  const [url, setUrl] = useState("");
  const [size, setSize] = useState("300");
  const [color, setColor] = useState("#000000");

  const submitHandler = (e) => {
    e.preventDefault();
    if (url && size) {
      generateQR(url, size, color);
    }
  };

  const handleColorChange = (e) => {
    const { value } = e.target;
    if (value === "#ffffff") return;
    setColor(value);
  };

  return (
    <form className="mt-4" onSubmit={submitHandler}>
      <label htmlFor="url">
        URL
        <input
          type="url"
          name="url"
          id="url"
          placeholder="Enter an URL"
          className="w-full border-2 border-gray-200 rounded p-3 mr-2 text-gray-700 focus:outline-none mb-5"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </label>
      <label htmlFor="size">
        Size
        <select
          name="size"
          id="size"
          className="w-full border-2 border-gray-200 rounded p-3 mr-2 text-gray-700 focus:outline-none mb-5"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="100">100x100</option>
          <option value="200">200x200</option>
          <option value="300">300x300</option>
          <option value="400">400x400</option>
          <option value="500">500x500</option>
          <option value="600">600x600</option>
          <option value="700">700x700</option>
        </select>
      </label>
      <label htmlFor="color">
        color
        <input
          type="color"
          name="color"
          id="color"
          className="w-full border-2 border-gray-200 rounded  text-gray-700 focus:outline-none mb-5"
          value={color}
          onChange={handleColorChange}
          required
        />
      </label>
      <button className="bg-gray-600 w-full text-white py-3 px-4 rounded hover:bg-black">
        Generate QR Code
      </button>
    </form>
  );
};

export default Form;
