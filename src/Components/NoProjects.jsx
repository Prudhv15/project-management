import logo from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={logo}
        alt="No Porjects Yet"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2>No Project Selected </h2>
      <p className="text-stone-400 mb-4">
        Select a porject or get statrted with new Project
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
