"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  add: () => add,
  calculateAge: () => calculateAge,
  capitalizeString: () => capitalizeString,
  formatDate: () => formatDate,
  generateRandomString: () => generateRandomString,
  shuffleArray: () => shuffleArray,
  slugify: () => slugify,
  truncateString: () => truncateString,
  validatePhoneNumber: () => validatePhoneNumber
});
module.exports = __toCommonJS(src_exports);
function add(a, b) {
  return a + b;
}
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
function calculateAge(birthDate) {
  const currentDate = /* @__PURE__ */ new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const birthMonth = birthDate.getMonth();
  if (currentMonth < birthMonth || currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate()) {
    age--;
  }
  return age;
}
function slugify(input) {
  return input.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function truncateString(input, maxLength) {
  if (input.length <= maxLength) {
    return input;
  } else {
    return input.slice(0, maxLength) + "...";
  }
}
function formatDate(date, format) {
  const formatter = new Intl.DateTimeFormat(void 0, { dateStyle: "full", timeStyle: "long" });
  const formattedDate = formatter.format(date);
  switch (format) {
    case "short":
      return formattedDate;
    case "medium":
      return formattedDate.replace(/,[^,]+$/, "");
    case "long":
      return formattedDate.split(", ")[0];
    default:
      throw new Error("Invalid format string.");
  }
}
function generateRandomString(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset.charAt(randomIndex);
  }
  return randomString;
}
function capitalizeString(input) {
  return input.replace(/\b\w/g, (match) => match.toUpperCase());
}
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\+998\d{9}$/;
  return phoneRegex.test(phoneNumber);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  add,
  calculateAge,
  capitalizeString,
  formatDate,
  generateRandomString,
  shuffleArray,
  slugify,
  truncateString,
  validatePhoneNumber
});
//# sourceMappingURL=index.js.map