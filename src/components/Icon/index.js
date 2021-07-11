import React from "react";
import { ReactSVG } from "react-svg";

/**
 * Reusable SVG Icon component - pass in the name of the SVG in the `assets/icons`
 * folder as a prop
 */
export function Icon({ name }) {
  return (
    <ReactSVG src={`${process.env.PUBLIC_URL}/assets/icons/${name}.svg`} />
  );
}
