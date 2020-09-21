import { SHOW_MODEL, HIDE_MODEL } from "../../utils/actions";

export const ModelActions = {
  showModel: () => ({ type: SHOW_MODEL }),
  hideModel: () => ({ type: HIDE_MODEL }),
}