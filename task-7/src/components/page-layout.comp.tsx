import { FC, ReactNode } from "react"
import { Container } from '@mui/material';

interface PageLayoutProps {
  children: ReactNode;
  padding?: string;
}

const PageLayout: FC<PageLayoutProps> = ({ children, padding }) => {
  return <Container maxWidth="lg" sx={{ padding: padding ?? '30px 0' }}>{children}</Container>;
}


export default PageLayout;