import Context from "context";
import { useContext } from "react";

/**
 * Get window innerWidth
 * @returns width
 */
export default function useWidth(): number {
  const { width } = useContext(Context);
  return width;
}
