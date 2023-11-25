import { FC, ReactNode } from "react"
import { Container } from '@mui/material';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
}


export default PageLayout;