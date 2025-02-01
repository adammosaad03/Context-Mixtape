import React, { useContext } from "react";
import { MixtapeContext } from "./MixtapeContext";
import { Song } from "./Song";
export const SongList = () => {
  // Your code here! ✨
  const { genre, sortOrder, songs } = useContext(MixtapeContext);
  
  const filteredSongs = songs.filter(
    song => genre === "all" || song.genre === genre
  );

const sortedSongs = filteredSongs.sort((a,b) =>
{
  return sortOrder === 'ascending' ? a.year - b.year : b.year - a.year;
}
)
  return (
    <>
      <h2>TODO: Update taste in music...?</h2>
      {sortedSongs.map(song => 
        <Song {...song} key={song.name} />
      )}
    </>
  );
};
