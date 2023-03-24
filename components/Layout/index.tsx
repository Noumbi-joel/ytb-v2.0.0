// comp
import { Navbar } from "..";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main>
      <Navbar />
      <Box sx={{ backgroundColor: "#000" }}>{children}</Box>
    </main>
  );
}
