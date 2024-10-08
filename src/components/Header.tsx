import { Box, Slide, Typography } from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: 300,
        position: "fixed",
        top: 0,
        zIndex: 5,
      }}
    >
      <Image
        src="/header.svg"
        alt="header-image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <Slide
        direction="left"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <Box
          sx={{
            position: "absolute",
            right: 0,
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            src={"/panda-cooking.png"}
            alt="header-image"
            width={350}
            height={350}
          />
        </Box>
      </Slide>

      <Typography
        sx={{
          position: "fixed",
          fontWeight: "bold",
          color: "#4C4C6D",
          mt: 4,
          fontFamily: "Merriweather",
          fontSize: { xs: 30, md: 40, lg: 50 },
          bgcolor: "#fff",
          p: 2,
          px: 6,
          borderRadius: 2,
        }}
      >
        Foodie POS
      </Typography>
    </Box>
  );
};

export default Header;
