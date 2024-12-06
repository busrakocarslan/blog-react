import React, { useState } from "react";

const BlogForm = ({
  initialData = { title: "", body: "" },
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="flex flex-col">
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border border-primary rounded p-2 outline-primary_hover caret-primary"
          required
        />
      </label>
      <label className="flex flex-col">
        Content:
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          className="border border-primary rounded p-2 outline-primary_hover caret-primary"
          required
        />
      </label>
      <div className="flex gap-2">
        <button type="submit" className="buttonNewbg w-[100%]">
          Save
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-red-500 text-white rounded-lg p-2 w-[100%] hover:bg-red-600 duration-300"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default BlogForm;
