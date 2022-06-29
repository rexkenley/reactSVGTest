import { ReactSVG } from "react-svg";

export interface ISvgCarProps {
  /**
   * Width of svg
   */
  width?: number;
  /**
   * Height of svg
   */
  height?: number;
  /**
   * SVG source
   */
  svgSource: string;
}

export default function SvgMarker({
  width = 600,
  height = 400,
  svgSource = "",
}: ISvgCarProps): JSX.Element {
  const svgProps = {
    src: svgSource,
    beforeInjection: (svg: any) => {
      svg.setAttribute("width", `${width}px`);
      svg.setAttribute("height", `${height}px`);
    },
  };

  return <ReactSVG {...svgProps} />;
}