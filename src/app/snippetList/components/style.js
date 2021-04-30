import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

export const HeadContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  width: "50rem",
  height: "7rem",
  marginTop: "3rem",
  padding: "3rem",
  border: "0.1rem solid black",
});

export const SearchBar = styled(TextField)({
  width: "40rem",
});

export const LargeSearchIcon = styled(SearchIcon)({
  marginLeft: "1rem",
  cursor: "pointer",
});

export const MainContainer = styled(Container)({
  display: "flex",
  border: "0.1rem solid black",
  width: "50rem",
  height: "100rem",
  marginTop: "2rem",
});