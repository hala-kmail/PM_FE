import { useState } from "react";

// Custom hook to handle the filter logic
export const useFilterLogic = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Function to toggle filter selection
  const toggleFilter = (filter: string) => {
    setSelectedFilters((prevSelected) =>
      prevSelected.includes(filter)
        ? prevSelected.filter((item) => item !== filter) // Deselect
        : [...prevSelected, filter] // Select
    );
  };

  return { selectedFilters, toggleFilter };
};
