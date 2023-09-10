import { useState } from "react";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AddTaskIcon from "@mui/icons-material/AddTask";

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Add Todo"
        variant="outlined"
        value={text}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                <AddTaskIcon onClick={handleSubmit} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}

{
  /* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
<OutlinedInput
  id="outlined-adornment-password"
  type={showPassword ? "text" : "password"}
  endAdornment={
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {" "}
      </IconButton>
    </InputAdornment>
  }
  label="Password"
/>
</FormControl> */
}
