import { defineStore } from "pinia";
import { reactive } from "vue";
import info from "../context/personalInfoContext.json";

export const usePersonalInfoStore = defineStore("form.personalInfo", () => {
  const refs = reactive(new Array(info.length).fill(""));

  return { refs, info };
});
