import { IconButton } from "@mui/material";
import { ReactNode } from "react";

/**
 * @type {IconLinkProps}
 */
type IconLinkProps = {
  href: string;
  child: ReactNode;
  color?: string;
};

/**
 * @fileoverview Link wrapper for icons shown in the footer
 */
const IconLink = (props: IconLinkProps) => {
  return (
    <IconButton
      href={props.href}
      sx={props.color ? { color: props.color } : undefined}
      target={props.href.includes("614") ? "_parent" : "_blank"}
      rel="noopener"
    >
      {props.child}
    </IconButton>
  );
};
export default IconLink;
