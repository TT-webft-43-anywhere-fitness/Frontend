export const getTimeDiff = (start, end) => {
  if (
    Math.sign(
      (Number(start.split(":").join("")) - Number(end.split(":").join(""))) * -1
    ) === -1
  ) {
    const spl1 = start.split(":");
    const spl2 = end.split(":");
    const inMin1 = Number(spl1[0]) * 60 + Number(spl1[1]);
    const inMin2 = Number(spl2[0]) * 60 + Number(spl2[1]);
    return 24 - Math.abs(inMin2 - inMin1) / 60;
  }
  const spl1 = start.split(":");
  const spl2 = end.split(":");
  const inMin1 = Number(spl1[0]) * 60 + Number(spl1[1]);
  const inMin2 = Number(spl2[0]) * 60 + Number(spl2[1]);
  return Math.abs(inMin1 - inMin2) / 60;
};
