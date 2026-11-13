// src/components/Fields/Range/Range.tsx
import { Slider } from "@base-ui/react/slider";
import { jsx, jsxs } from "react/jsx-runtime";
var RangeInput = (props) => {
  const {
    label,
    name,
    required,
    min,
    max,
    disabled,
    hasTicks,
    hasLabels = false,
    showValue = true,
    onChange,
    value
  } = props;
  const valueDisplayId = `${name}-value`;
  const numericValue = Number.parseFloat(value);
  const rangeValue = Number.isFinite(numericValue) ? numericValue : min;
  const safeMax = max === min ? min + 1 : max;
  const tickCount = Math.max(0, safeMax - min + 1);
  const classes = [
    "ctx2-form-field",
    "ctx2-range",
    hasTicks ? "ctx2-range--ticks" : "",
    required ? "ctx2-range--required" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs(
    Slider.Root,
    {
      className: classes,
      name,
      min,
      max: safeMax,
      step: 1,
      value: rangeValue,
      disabled,
      onValueChange: (nextValue) => onChange(String(nextValue)),
      children: [
        /* @__PURE__ */ jsx("label", { htmlFor: name, children: label }),
        /* @__PURE__ */ jsxs("div", { className: "ctx2-range__set", children: [
          /* @__PURE__ */ jsxs("div", { className: "ctx2-range__control", children: [
            /* @__PURE__ */ jsx(Slider.Control, { className: "ctx2-range__slider", children: /* @__PURE__ */ jsxs(Slider.Track, { className: "ctx2-range__track", children: [
              /* @__PURE__ */ jsx(Slider.Indicator, { className: "ctx2-range__indicator" }),
              /* @__PURE__ */ jsx(
                Slider.Thumb,
                {
                  className: "ctx2-range__thumb",
                  inputRef: (input) => {
                    if (input) {
                      input.id = name;
                      input.required = required;
                      input.setAttribute("aria-controls", valueDisplayId);
                    }
                  }
                }
              )
            ] }) }),
            hasTicks && /* @__PURE__ */ jsx("div", { className: "ctx2-range__ticks", "aria-hidden": "true", children: [...Array(tickCount)].map((_, index) => {
              const value2 = min + index;
              return /* @__PURE__ */ jsx("div", { className: "ctx2-range__tick" }, value2);
            }) }),
            hasLabels && /* @__PURE__ */ jsxs("div", { className: "ctx2-range__labels", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsx("span", { className: "ctx2-range__label", children: min }),
              /* @__PURE__ */ jsx("span", { className: "ctx2-range__label", children: max })
            ] })
          ] }),
          showValue && /* @__PURE__ */ jsx(
            "span",
            {
              id: valueDisplayId,
              className: "ctx2-range__value",
              "aria-live": "polite",
              children: /* @__PURE__ */ jsx(Slider.Value, { children: (_, values) => values[0] ?? rangeValue })
            }
          )
        ] })
      ]
    }
  );
};
var Range_default = RangeInput;

export {
  Range_default
};
//# sourceMappingURL=chunk-3RX5IOYL.js.map
