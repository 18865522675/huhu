import { $ } from "./axios";

export default {
  login: params => $.post("admin/login", params, { lock: true }),
  logout: params => $.post("/channel/logout", params, { lock: true }),
};
