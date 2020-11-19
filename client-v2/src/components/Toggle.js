import React from "react";
import PropTypes from "prop-types";

import "../styles/ToggleSwitch.scss";

export default function Toggle({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled,
}) {
  return (
    <div className={"toggle-switch" + (small ? "small-switch" : "")}>
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      {id ? (
        <label className="toggle-switch-label" htmlFor={id}>
          <span
            className={
              disabled
                ? "toggle-switch-inner toggle-switch-disabled"
                : "toggle-switch-inner"
            }
            data-yes={optionLabels[0]}
            data-no={optionLabels[1]}
          />
          <span
            className={
              disabled
                ? "toggle-switch-outer toggle-switch-disabled"
                : "toggle-switch-outer"
            }
          />
        </label>
      ) : null}
    </div>
  );
}

Toggle.defaultProps = {
  optionLabels: ["Yes", "No"],
};

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
};
