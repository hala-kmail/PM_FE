import { colors } from "./colors"
export const LogInTextFieldThemes={
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderWidth: "2px",
        borderColor: colors.MainGreenColor, // Default border color
      },
      "&:hover fieldset": {
        borderWidth: "2px",
        borderColor: colors.MainGreenColor, // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderWidth: "2px",
        borderColor: colors.MainGreenColor, // Border color when focused
      },
    },
    "& .MuiInputLabel-root": {
      color: colors.MainGreenColor, // Default label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: colors.MainGreenColor, // Label color when focused

    },
    "& .MuiInputLabel-root.Mui-disabled": {
      color: "lightgray", // Label color when disabled
    },
  }


  export const RememberMeCheckboxTheme = {
    color: "gray", // Default color
    "&.Mui-checked": {
      color: colors.MainGreenColor, // Checked color
    },
    "&:hover": {
      color: colors.MainGreenColor, // Hover color
    },
  }
