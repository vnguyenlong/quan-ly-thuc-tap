import { axiosClient } from "./Link";
const SemestersAPI = {
  getSemesters() {
    const url = `/smester`;
    return axiosClient.get(url);
  },

  insertSemester(data) {
    const url = `/add-mester`;
    return axiosClient.post(url, data);
  },

  updateSemester(data) {
    const url = `/update-mester`;
    return axiosClient.patch(url, data);
  },
};

export default SemestersAPI;
