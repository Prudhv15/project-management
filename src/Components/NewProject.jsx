import Input from "./Input";
import { useRef, useState } from "react";
import ProjectSideBar from "./ProjectsSideBar";
import Modal from "./Modal.jsx";
export default function NewProject({ onAdd }) {
  const title = useRef();
  const descripiton = useRef();
  const modal = useRef();
  const date = useRef();
  function handleFormData() {
    const projTitle = title.current.value;
    const projDesc = descripiton.current.value;
    const projDueDate = date.current.value;

    if (
      projTitle.trim() === "" ||
      projDesc.trim() === "" ||
      projDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: projTitle,
      descripiton: projDesc,
      date: projDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2>Invalid Input</h2>
        <p>Please enter value for all input fileds</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex item-center justify-end gap-4 my-4">
          <button className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded">
            <li>Cancel</li>
          </button>
          <li>
            {" "}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleFormData}
            >
              Save
            </button>
          </li>
        </menu>
        <div className="flex flex-col mx-3 my-4">
          <Input label="Title" ref={title} />
          <Input label="description" textarea ref={descripiton} />
          <Input type="date" label="Due Date" ref={date} />
        </div>
      </div>
    </>
  );
}
