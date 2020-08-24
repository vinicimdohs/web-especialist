import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { get } from "lodash";
import * as actions from "./actions";
import * as types from "../types";
import axios from "../../../services/axios";
import history from "../../../services/history";

function* loginHospitalRequest({ payload }) {
  try {
    const response = yield call(axios.post, "api/token/loginHospital", payload);
    yield put(actions.loginHospitalSuccess({ ...response.data }));

    toast.success("Logado com successo!");

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (error) {
    toast.error("Email ou senha Inválido!");

    yield put(actions.loginHospitalFailure());
  }
}

function* loginPacienteRequest({ payload }) {
  try {
    const response = yield call(axios.post, "api/token/loginPaciente", payload);
    yield put(actions.loginPacienteSuccess({ ...response.data }));

    toast.success("Logado com successo!");

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (error) {
    toast.error("Email ou senha Inválido!");

    yield put(actions.loginPacienteFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, "auth.token", "");
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_HOSPITAL_REQUEST, loginHospitalRequest),
  takeLatest(types.LOGIN_PACIENTE_REQUEST, loginPacienteRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
