const description = 'Always include the `height` and `width` attributes of your <img> as integers. See https://www.campaignmonitor.com/resources/will-it-work/guidelines/';


function isInteger(value) {
  return Number.isInteger ? (
    Number.isInteger(value)
  ) : (
    typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
  );
};


export default (props) => {
  if (!props.hasOwnProperty('height') || !props.hasOwnProperty('width')) {
    return new Error(description);
  } else /** props has both height and width properties. */ {
    if (!isInteger(props.height) || !isInteger(props.width)) {
      return new Error(description);
    }
  }
};
