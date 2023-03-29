import React, { MouseEvent, useState } from "react";

// comp
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";

type Props = {};

const Searchbar = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();

    if (searchTerm) {
      router.push(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <IconButton
        type="submit"
        sx={{ p: "10px", color: "red" }}
        onClick={handleSubmit}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
