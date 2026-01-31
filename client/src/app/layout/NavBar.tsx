import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    handleThemeChange: () => void;
    darkMode: boolean;
}

export default function NavBar({handleThemeChange, darkMode}: Props) {

  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6">RE-STORE</Typography>
            <IconButton onClick={handleThemeChange}>
                {darkMode ? <DarkMode /> : <LightMode sx={{color: "yellow"}} />}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}