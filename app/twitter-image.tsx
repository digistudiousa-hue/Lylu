import { ImageResponse } from "next/og";
import { OgTemplate, ogSize, ogAlt } from "@/components/OgTemplate";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgTemplate />, { ...ogSize });
}
