import {basePath} from "../../next.config";

export function getBasePath() {
  return basePath === undefined ? "" : basePath;
}
