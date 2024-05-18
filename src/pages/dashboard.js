import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import Sidebar from "../components/Sidebar";
import EmployeeTable from "../components/EmployeeTable";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setEmployees([...employees, data]);
    reset();
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-8">
          Employee Information Management
        </h1>
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
          >
            + Add Employee
          </button>
        ) : (
          <div className="mb-4 flex items-center">
            <button
              onClick={() => setShowForm(false)}
              className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 mr-2"
            >
              X
            </button>
            <span className="text-lg font-semibold">Add Employee</span>
          </div>
        )}
        {showForm && (
          <form
            className="bg-white p-6 rounded-lg shadow-lg mb-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Name"
                type="text"
                placeholder="Name"
                register={register("name", { required: true })}
              />
              <InputField
                label="Position"
                type="text"
                placeholder="Position"
                register={register("position", { required: true })}
              />
              <InputField
                label="Department"
                type="text"
                placeholder="Department"
                register={register("department", { required: true })}
              />
              <InputField
                label="Email"
                type="email"
                placeholder="Email"
                register={register("email", { required: true })}
              />
              <InputField
                label="Phone Number"
                type="text"
                placeholder="Phone Number"
                register={register("phoneNumber", { required: true })}
              />
              <InputField
                label="Address"
                type="text"
                placeholder="Address"
                register={register("address", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Employee
            </button>
          </form>
        )}

        {employees.length > 0 && <EmployeeTable employees={employees} />}
      </div>
    </div>
  );
};

export default Dashboard;
