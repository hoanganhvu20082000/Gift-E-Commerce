import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const navigateToSearch = (e: any) => {
    if (e.key === "Enter") {
      navigate(`/search?search=${searchInput}`);
    }
  };

  const handleEnterClose = (e: any) => {
    if (e.key === "Enter") {
      setOpen(false);
    }
  };

  return (
    <div className="">
      <div onClick={handleClickOpen} className="cursor-pointer style-hover-menu">
        <SearchIcon sx={{ fontSize: "30px" }} />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={navigateToSearch}
            onKeyUp={handleEnterClose}
            autoFocus
            margin="dense"
            id="name"
            label="Search Product.."
            fullWidth
            variant="standard"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
