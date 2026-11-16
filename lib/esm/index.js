import {
  Select_default
} from "./chunk-IGHVFCQZ.js";
import {
  Checkbox_default,
  Fieldset,
  Flex,
  Form_default,
  Hidden_default,
  InputField_default,
  Input_default,
  Radio_default,
  Submit_default,
  TextArea_default,
  getDefaultFormValues,
  isFieldVisible,
  normalizeFieldValue
} from "./chunk-ND7ATD5A.js";
import {
  FormDialog,
  FormDialogBackdrop,
  FormDialogClose,
  FormDialogDescription,
  FormDialogHeader,
  FormDialogPanel,
  FormDialogPortal,
  FormDialogTitle,
  FormDialogTrigger
} from "./chunk-UOVJWHGK.js";
import {
  Country_default,
  getCountryOptions
} from "./chunk-HVT4RUS4.js";
import {
  Combobox_default
} from "./chunk-WNL2DZXQ.js";
import {
  FieldMessages,
  sanitizeHtml,
  sanitizeInlineHtml
} from "./chunk-QY5QXQAC.js";
import {
  Range_default
} from "./chunk-3RX5IOYL.js";

// src/components/Button/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button({
  children,
  className = "",
  variant = "primary",
  fullWidth = false,
  type = "button",
  ...props
}) {
  const classes = [
    "ctx2-button",
    `ctx2-button--${variant}`,
    fullWidth ? "ctx2-button--full-width" : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("button", { type, className: classes, ...props, children });
}

// src/components/Fields/RadioCards/RadioCards.tsx
import { useId } from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var RadioCards = (props) => {
  const {
    onChange,
    options = [],
    name = "",
    disabled = false,
    required = false,
    label = "",
    help,
    error,
    customErrorMessage,
    value
  } = props;
  const reactId = useId();
  const fieldId = name || `radio-cards-${reactId}`;
  const helpId = help ? `${fieldId}-help` : void 0;
  const errorId = `${fieldId}-error`;
  const hasError = !!error;
  const errorMessage = error ?? customErrorMessage;
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    "ctx2-radio-cards",
    required ? "ctx2-radio-cards--required" : "",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const handleChange = (event) => {
    onChange(event.currentTarget.value);
  };
  return /* @__PURE__ */ jsxs("div", { className: classes, children: [
    /* @__PURE__ */ jsxs(
      "fieldset",
      {
        className: "ctx2-radio-cards__group",
        "aria-describedby": describedBy,
        "aria-invalid": hasError || void 0,
        children: [
          label && /* @__PURE__ */ jsxs("legend", { children: [
            /* @__PURE__ */ jsx2("span", { children: label }),
            required && /* @__PURE__ */ jsx2("span", { className: "ctx2-form-label__required", "aria-hidden": "true" })
          ] }),
          options.map((option, index) => {
            const optionId = `${fieldId}-${index}`;
            const optionDisabled = disabled || option.disabled;
            return /* @__PURE__ */ jsxs(
              "label",
              {
                className: "ctx2-radio-cards__option",
                htmlFor: optionId,
                children: [
                  /* @__PURE__ */ jsx2(
                    "input",
                    {
                      id: optionId,
                      type: "radio",
                      name: name || fieldId,
                      value: option.value,
                      checked: value === option.value,
                      onChange: handleChange,
                      disabled: optionDisabled,
                      required
                    }
                  ),
                  /* @__PURE__ */ jsxs("span", { className: "ctx2-radio-cards__card", children: [
                    /* @__PURE__ */ jsxs("span", { className: "ctx2-radio-cards__title", children: [
                      option.icon,
                      /* @__PURE__ */ jsx2("span", { children: option.title })
                    ] }),
                    option.description && /* @__PURE__ */ jsx2("span", { className: "ctx2-radio-cards__description", children: option.description }),
                    option.note && /* @__PURE__ */ jsx2("small", { className: "ctx2-radio-cards__note", children: option.note })
                  ] })
                ]
              },
              optionId
            );
          })
        ]
      }
    ),
    /* @__PURE__ */ jsx2(
      FieldMessages,
      {
        help,
        helpId,
        errorMessage,
        errorId,
        hasError
      }
    )
  ] });
};
var RadioCards_default = RadioCards;

// src/components/Fields/Stepper/Stepper.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Stepper({
  value,
  min = 0,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  disabled = false,
  decrementLabel = "Decrease value",
  incrementLabel = "Increase value",
  onChange,
  decrementTestId,
  incrementTestId,
  valueTestId,
  className = ""
}) {
  const boundedValue = Math.min(max, Math.max(min, value));
  const canDecrement = !disabled && boundedValue > min;
  const canIncrement = !disabled && boundedValue < max;
  const changeValue = (direction) => {
    const nextValue = Math.min(
      max,
      Math.max(min, boundedValue + step * direction)
    );
    if (nextValue !== boundedValue) {
      onChange(nextValue);
    }
  };
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: ["ctx2-stepper", className].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ jsx3(
          "button",
          {
            type: "button",
            className: "ctx2-stepper__button",
            "aria-label": decrementLabel,
            "data-testid": decrementTestId,
            disabled: !canDecrement,
            onClick: () => changeValue(-1),
            children: "-"
          }
        ),
        /* @__PURE__ */ jsx3(
          "span",
          {
            className: "ctx2-stepper__value",
            "aria-live": "polite",
            "data-testid": valueTestId,
            children: boundedValue
          }
        ),
        /* @__PURE__ */ jsx3(
          "button",
          {
            type: "button",
            className: "ctx2-stepper__button",
            "aria-label": incrementLabel,
            "data-testid": incrementTestId,
            disabled: !canIncrement,
            onClick: () => changeValue(1),
            children: "+"
          }
        )
      ]
    }
  );
}

// src/components/FlexItem/FlexItem.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function FlexItem({
  as,
  order,
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  style,
  children,
  ...props
}) {
  const Component = as ?? "div";
  const flexStyle = flex === void 0 ? {
    flexGrow,
    flexShrink,
    flexBasis
  } : { flex };
  return /* @__PURE__ */ jsx4(
    Component,
    {
      ...props,
      style: {
        order,
        ...flexStyle,
        alignSelf,
        ...style
      },
      children
    }
  );
}

// src/components/FormAccordion/FormAccordion.tsx
import { Accordion } from "@base-ui/react/accordion";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function DefaultCompletedIndicator() {
  return /* @__PURE__ */ jsx5(
    "span",
    {
      className: "ctx2-form-accordion__completed-indicator",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx5(
        "svg",
        {
          className: "ctx2-form-accordion__completed-icon",
          viewBox: "0 0 16 16",
          focusable: "false",
          children: /* @__PURE__ */ jsx5(
            "path",
            {
              d: "M13.4 4.6 6.7 11.3 2.9 7.5",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            }
          )
        }
      )
    }
  );
}
function FormAccordionRoot({
  children,
  value,
  defaultValue,
  onValueChange,
  multiple = false,
  disabled = false,
  keepMounted = false,
  hiddenUntilFound = false,
  loopFocus = true,
  className
}) {
  return /* @__PURE__ */ jsx5(
    Accordion.Root,
    {
      className: classNames("ctx2-form-accordion", className),
      value,
      defaultValue,
      onValueChange: (nextValue) => onValueChange?.(nextValue),
      multiple,
      disabled,
      keepMounted,
      hiddenUntilFound,
      loopFocus,
      children
    }
  );
}
function FormAccordionSection({
  id,
  title,
  children,
  completed = false,
  disabled = false,
  completedIndicator,
  editLabel,
  className,
  headerClassName,
  triggerClassName,
  panelClassName,
  contentClassName
}) {
  return /* @__PURE__ */ jsxs3(
    Accordion.Item,
    {
      value: id,
      disabled,
      className: (state) => classNames(
        "ctx2-form-accordion__section",
        state.open && "ctx2-form-accordion__section--open",
        completed && "ctx2-form-accordion__section--completed",
        disabled && "ctx2-form-accordion__section--disabled",
        className
      ),
      "data-completed": completed ? "" : void 0,
      children: [
        /* @__PURE__ */ jsx5(
          Accordion.Header,
          {
            className: (state) => classNames(
              "ctx2-form-accordion__header-wrap",
              state.open && "ctx2-form-accordion__header-wrap--open",
              headerClassName
            ),
            children: /* @__PURE__ */ jsxs3(
              Accordion.Trigger,
              {
                className: classNames(
                  "ctx2-form-accordion__header",
                  triggerClassName
                ),
                disabled,
                children: [
                  completed && (completedIndicator ?? /* @__PURE__ */ jsx5(DefaultCompletedIndicator, {})),
                  /* @__PURE__ */ jsx5("span", { className: "ctx2-form-accordion__title", children: title }),
                  completed && editLabel && /* @__PURE__ */ jsx5("span", { className: "ctx2-form-accordion__edit-label", children: editLabel })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsx5(
          Accordion.Panel,
          {
            className: classNames("ctx2-form-accordion__content", panelClassName),
            children: /* @__PURE__ */ jsx5(
              "div",
              {
                className: classNames(
                  "ctx2-form-accordion__content-inner",
                  contentClassName
                ),
                children
              }
            )
          }
        )
      ]
    }
  );
}
var FormAccordion = Object.assign(
  FormAccordionRoot,
  {
    Section: FormAccordionSection
  }
);

// src/index.ts
var index_default = Form_default;
export {
  FormAccordion as Accordion,
  FormAccordionSection as AccordionSection,
  Button,
  Checkbox_default as Checkbox,
  Combobox_default as Combobox,
  Country_default as Country,
  FormDialog as Dialog,
  Fieldset,
  Flex,
  FlexItem,
  Form_default as Form,
  FormAccordion,
  FormAccordionSection,
  FormDialog,
  FormDialogBackdrop,
  FormDialogClose,
  FormDialogDescription,
  FormDialogHeader,
  FormDialogPanel,
  FormDialogPortal,
  FormDialogTitle,
  FormDialogTrigger,
  InputField_default as FormField,
  Fieldset as FormFields,
  Hidden_default as Hidden,
  Input_default as Input,
  InputField_default as InputField,
  Radio_default as Radio,
  RadioCards_default as RadioCards,
  Range_default as Range,
  Select_default as Select,
  Stepper,
  Submit_default as Submit,
  TextArea_default as TextArea,
  index_default as default,
  getCountryOptions,
  getDefaultFormValues,
  isFieldVisible,
  normalizeFieldValue,
  sanitizeHtml,
  sanitizeInlineHtml
};
//# sourceMappingURL=index.js.map
