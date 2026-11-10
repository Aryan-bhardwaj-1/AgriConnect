import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  const clearSearch = () => {
    setSearch("");

    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <>
      <style>{`
        .search-container {
          width: 100%;
          max-width: 650px;
          margin: 20px auto;
        }

        .search-box {
          width: 100%;
          height: 52px;
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid #dce5de;
          border-radius: 12px;
          padding: 0 8px 0 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
          transition: 0.3s;
        }

        .search-box:focus-within {
          border-color: #4caf50;
          box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.12);
        }

        .search-icon {
          font-size: 20px;
          margin-right: 10px;
        }

        .search-input {
          flex: 1;
          height: 100%;
          border: none;
          outline: none;
          font-size: 14px;
          color: #333;
          background: transparent;
        }

        .search-input::placeholder {
          color: #999;
        }

        .clear-btn {
          border: none;
          background: transparent;
          color: #888;
          font-size: 18px;
          cursor: pointer;
          padding: 8px;
        }

        .clear-btn:hover {
          color: #333;
        }

        .search-btn {
          height: 40px;
          padding: 0 20px;
          border: none;
          border-radius: 8px;
          background: #2e7d32;
          color: white;
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
          transition: 0.3s;
        }

        .search-btn:hover {
          background: #256b29;
        }

        @media (max-width: 500px) {
          .search-box {
            height: 48px;
          }

          .search-btn {
            padding: 0 12px;
          }

          .search-input {
            font-size: 13px;
          }
        }
      `}</style>

      <div className="search-container">

        <div className="search-box">

          <span className="search-icon">
            🔍
          </span>

          <input
            type="text"
            className="search-input"
            placeholder="Search for wheat, rice, tomato..."
            value={search}
            onChange={handleSearch}
          />

          {search && (
            <button
              className="clear-btn"
              onClick={clearSearch}
            >
              ✕
            </button>
          )}

          <button
            className="search-btn"
            onClick={() => onSearch && onSearch(search)}
          >
            Search
          </button>

        </div>

      </div>
    </>
  );
}

export default SearchBar;