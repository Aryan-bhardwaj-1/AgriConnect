import React from "react";

function Input({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <>
      <style>{`
        .input-group {
          margin-bottom: 18px;
          width: 100%;
        }

        .input-label {
          display: block;
          margin-bottom: 7px;
          font-size: 14px;
          font-weight: 600;
          color: #173d24;
        }

        .input-field {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #d5ddd7;
          border-radius: 8px;
          outline: none;
          font-size: 14px;
          background: #fff;
          transition: 0.3s;
        }

        .input-field:focus {
          border-color: #4caf50;
          box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.12);
        }

        .input-field::placeholder {
          color: #999;
        }
      `}</style>

      <div className="input-group">
        {label && (
          <label className="input-label" htmlFor={name}>
            {label}
            {required && " *"}
          </label>
        )}

        <input
          className="input-field"
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </>
  );
}

export default Input;
