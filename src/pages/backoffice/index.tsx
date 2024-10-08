import { Box, Button } from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data } = useSession();
  const router = useRouter();
  if (!data) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          gap: 5,
        }}
      >
        <Button
          variant="contained"
          onClick={() => signIn("google", { callbackUrl: "/backoffice" })}
        >
          Sign in
        </Button>
      </Box>
    );
  } else {
    router.push("/backoffice/orders");
  }
}
