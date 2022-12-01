import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SideBarItem = styled(Link)(({ theme }) => ({
  display: "block",
  width: "100%",
  padding: theme.spacing.xs,
  color: theme.colors.blue[9],
  textDecoration: "none",
  "&:hover": {
    backgroundColor: theme.colors.blue[1],
  },
  borderRadius: theme.radius.sm,
}));
