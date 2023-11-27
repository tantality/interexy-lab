import { Stack, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { FC } from "react";

interface ErrorScreenProps {
  error?: Error | AxiosError | string;
  horAlignment?: string;
}

const ErrorScreen: FC<ErrorScreenProps> = ({ error = 'Something went wrong. Please try later', horAlignment: horAlignmentProp }) => {
  let errorMessage: string | null = null;

  if (error instanceof AxiosError) {
    errorMessage = error.response?.data.error
  }
  if (error instanceof Error && !errorMessage) {
    errorMessage = error.message
  }

  if (typeof error === 'string') {
    errorMessage = error;
  }

  const horAlignment = horAlignmentProp ?? 'center';

  return (
    <section className="error-screen">
      <Stack alignContent={horAlignment} flexWrap="wrap">
        <Typography variant="h2" sx={{ fontSize: "1.5rem", fontWeight: 500 }}>
          {errorMessage}
        </Typography>
      </Stack>
    </section>
  );
}


export default ErrorScreen;