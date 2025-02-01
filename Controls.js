import React, { useContext } from "react";
import { MixtapeContext } from "./MixtapeContext";

export const Controls = () => {
  const { genre, setGenre, sortOrder, setSortOrder } =
    useContext(MixtapeContext);
    const toggleSortOrder = () => {
      setSortOrder(prevOrder => (prevOrder === 'ascending' ? 'descending' : 'ascending' ))
    }
  return (
    <div className="controls">
      <select value={genre} onChange={event => setGenre(event.target.value)}>
        <option value="all">all</option>
        <option value="hip hop">hip hop</option>
        <option value="rap">rap</option>
        <option value="rock">rock</option>
        <option value="pop">pop</option>
      </select>{" "}
      <button onClick={toggleSortOrder}>
      {sortOrder === 'ascending' ? 'descending' : 'ascending'}
      </button>

      {/* TODO: add some controls! */}
    </div>
  );
};
