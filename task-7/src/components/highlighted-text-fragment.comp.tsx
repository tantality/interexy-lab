import { FC, ReactNode } from "react";

interface HighlightedTextFragmentProps {
  children: ReactNode;
  color?: string;
  fontWeight?: number;
}

const HighlightedTextFragment: FC<HighlightedTextFragmentProps> = ({ children, ...props }) => {
  return (
    <span style={props}>{children} </span>
  );
};

HighlightedTextFragment.defaultProps = {
  color: "#373A40",
  fontWeight: 600
}

export default HighlightedTextFragment;
