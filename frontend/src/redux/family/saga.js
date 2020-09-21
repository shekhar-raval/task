import { all, takeEvery, put, fork } from "redux-saga/effects";
import { message } from 'antd';

import { REQ_ADD_FAMILY, ERROR, ADD_FAMILY_SUCCESS, HIDE_MODEL } from '../../utils/actions';
import { AddFamilyMember } from '../../services/index';

export function* AddFamily () {
  yield takeEvery(REQ_ADD_FAMILY, function* ({ data }) {
    try {
      const res = yield AddFamilyMember(data);
      if (res.status === 200 || res.status === 201) { 
        const { data } = res.data;
        yield put({ type: ADD_FAMILY_SUCCESS, data });
        yield put({ type: HIDE_MODEL })
      } 
    } catch (err) {
      message.error(err.response.data.message);
      yield put({ type: ERROR, error: err.response.data.message }); 
    }
  });
}


export default function* FamilySaga() {
  yield all([ fork(AddFamily) ]);
}