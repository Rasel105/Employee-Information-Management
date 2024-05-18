const InputField = ({ label, register, required, type, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        required={required}
        className="w-full p-2 border border-gray-300 rounded text-sm"
      />
    </div>
  );
};

export default InputField;
