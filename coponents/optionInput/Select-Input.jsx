import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import FormHelperText from "@mui/material/FormHelperText";
import "./select-Input.scss";

export default function SelectInput(props) {
  return (
    <Box sx={{ minWidth: 120, textAlign: "center" }}>
      <FormControl className="select-input">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value || ""}
          label={props.label || ""}
          onChange={props.onChange() ? (e) => props.onChange(e) : null}
          placeholder={props.placeholder || ""}
        >
          {props.options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              className="select-input-options"
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
    </Box>
  );
}

SelectInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
