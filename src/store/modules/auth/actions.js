import * as types from '../types';

export function loginHospitalRequest (payload) {
    return {
        type: types.LOGIN_HOSPITAL_REQUEST,
        payload,
    }
}

export function loginPacienteRequest (payload) {
    return {
        type: types.LOGIN_PACIENTE_REQUEST,
        payload,
    }
}

export function loginHospitalSuccess (payload) {
    return {
        type: types.LOGIN_HOSPITAL_SUCCESS,
        payload,
    }
}

export function loginPacienteSuccess (payload) {
    return {
        type: types.LOGIN_PACIENTE_SUCCESS,
        payload,
    }
}

export function loginHospitalFailure (payload) {
    return {
        type: types.LOGIN_HOSPITAL_FAILURE,
        payload,
    }
}

export function loginPacienteFailure (payload) {
    return {
        type: types.LOGIN_PACIENTE_FAILURE,
        payload,
    }
}