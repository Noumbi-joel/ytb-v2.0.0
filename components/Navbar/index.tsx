import React from "react";

// comp
import { Stack } from "@mui/material";
import { SearchBar } from "..";

// next
import { useRouter } from "next/navigation";
import { logo } from "@/utils/constants";

type Props = {};

const NavBar = (props: Props) => {
  const router = useRouter();
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        zIndex: 99,
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{ height: 45, cursor: "pointer" }}
        onClick={() => router.replace("/")}
      />
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
