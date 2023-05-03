import React, { useState } from "react";

export function SearchBar({ handleSearch }) {
    const [query, setQuery] = useState("");

    const handleChange = (event) => {
        setQuery(event.target.value);
        handleSearch(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search documentation..."
            value={query}
            onChange={handleChange}
            className="text-white w-full max-w-[250px] text-sm rounded-md py-1.5 pl-4 bg-dark-darkbg border border-light-secondary/50 hover:bg-gray-800 duration-200 hover:text-white hover:placeholder:text-white"
        />
    );
}
