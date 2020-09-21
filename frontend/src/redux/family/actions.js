import { REQ_ADD_FAMILY, REQ_DELETE_FAMILY, REQ_LIST_FAMILY } from "../../utils/actions";

export const FamilyActions =  {
  addFamily: (values) => ({ type: REQ_ADD_FAMILY, data: values }),
  deleteFamlily: (values) => ({ type: REQ_DELETE_FAMILY, data: values }),
  listFamily: () => ({ type: REQ_LIST_FAMILY })
}