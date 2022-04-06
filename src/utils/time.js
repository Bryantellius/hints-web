export class Time {
  static getFormatedHours() {
    let hrs = new Date().getHours();
    hrs = hrs > 12 ? hrs - 12 : hrs;
    return hrs.toString().padStart(2, "0");
  }

  static getFormatedMinutes() {
    return new Date().getMinutes().toString().padStart(2, "0");
  }

  static getFormatedSeconds() {
    return new Date().getSeconds().toString().padStart(2, "0");
  }

  static getMeriadiam() {
    return new Date().getHours() >= 12 ? "PM" : "AM";
  }
}

export function setProgress(radius, percent) {
  let circumference = radius * 2 * Math.PI;
  const offset = circumference - (percent / 60) * circumference;
  return offset;
}
