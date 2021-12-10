import axios from "axios"
const bernardRodriguezAPI = axios.create({
  baseURL: "https://bernard-rodriguez-32336-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return bernardRodriguezAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return bernardRodriguezAPI.post(`/api/v1/signup/`, payload.data)
}
function modules_privacy_policy_list(payload) {
  return bernardRodriguezAPI.get(`/modules/privacy-policy/`)
}
function modules_privacy_policy_create(payload) {
  return bernardRodriguezAPI.post(`/modules/privacy-policy/`, payload.data)
}
function modules_privacy_policy_read(payload) {
  return bernardRodriguezAPI.get(`/modules/privacy-policy/${payload.id}/`)
}
function modules_privacy_policy_update(payload) {
  return bernardRodriguezAPI.put(
    `/modules/privacy-policy/${payload.id}/`,
    payload.data
  )
}
function modules_privacy_policy_partial_update(payload) {
  return bernardRodriguezAPI.patch(
    `/modules/privacy-policy/${payload.id}/`,
    payload.data
  )
}
function modules_privacy_policy_delete(payload) {
  return bernardRodriguezAPI.delete(`/modules/privacy-policy/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return bernardRodriguezAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return bernardRodriguezAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return bernardRodriguezAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return bernardRodriguezAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return bernardRodriguezAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return bernardRodriguezAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_create(payload) {
  return bernardRodriguezAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return bernardRodriguezAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_read(payload) {
  return bernardRodriguezAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return bernardRodriguezAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return bernardRodriguezAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  modules_privacy_policy_read,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
