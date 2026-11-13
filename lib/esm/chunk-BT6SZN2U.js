import {
  FieldMessages,
  FieldWrapper_default,
  RenderHtml,
  sanitizeInlineHtml
} from "./chunk-QY5QXQAC.js";

// src/components/Fields/Checkbox/Checkbox.tsx
import { useId, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Checkbox = (props) => {
  const {
    label = "",
    name = "",
    disabled = false,
    required = false,
    customErrorMessage,
    error,
    value,
    help,
    formTouched = false,
    variant = "checkbox",
    onChange
  } = props;
  const inputRef = useRef(null);
  const [touched, setTouched] = useState(false);
  const reactId = useId();
  const inputId = name || `checkbox-${reactId}`;
  const helpId = help ? `${inputId}-help` : void 0;
  const errorId = `${inputId}-error`;
  const isTouched = formTouched || touched;
  const nativeInvalid = !!inputRef.current && !inputRef.current.validity.valid;
  const hasError = !!error || nativeInvalid && isTouched;
  const errorMessage = error ?? customErrorMessage ?? (isTouched ? inputRef.current?.validationMessage : void 0);
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    variant === "toggle" ? "ctx2-toggle" : "ctx2-checkbox",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const handleChange = (event) => {
    if (customErrorMessage) {
      event.currentTarget.setCustomValidity("");
    }
    onChange(event.currentTarget.checked);
  };
  const handleInvalid = (event) => {
    if (!customErrorMessage) return;
    event.currentTarget.setCustomValidity(customErrorMessage);
  };
  return /* @__PURE__ */ jsxs("div", { className: classes, children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: inputId, className: "ctx2-form-checkbox-label", children: [
      /* @__PURE__ */ jsxs("span", { className: "ctx2-toggle__control", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: inputRef,
            id: inputId,
            name: name || void 0,
            type: "checkbox",
            checked: value,
            disabled,
            required,
            "aria-required": required || void 0,
            "aria-invalid": hasError || void 0,
            "aria-describedby": describedBy,
            "aria-errormessage": hasError && errorMessage ? errorId : void 0,
            onChange: handleChange,
            onBlur: () => setTouched(true),
            onInvalid: handleInvalid
          }
        ),
        variant === "toggle" && /* @__PURE__ */ jsx("span", { className: "ctx2-toggle__switch", "aria-hidden": "true" })
      ] }),
      label && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          RenderHtml,
          {
            className: "ctx2-form-checkbox-label__text",
            html: label,
            tag: "span"
          }
        ),
        required && /* @__PURE__ */ jsx("span", { className: "ctx2-form-label__required", "aria-hidden": "true" })
      ] })
    ] }),
    help && /* @__PURE__ */ jsx(
      FieldMessages,
      {
        helpHtml: sanitizeInlineHtml(help),
        helpId,
        errorMessage,
        errorId,
        hasError
      }
    )
  ] });
};
var Checkbox_default = Checkbox;

// src/components/Fields/Hidden/Hidden.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var HiddenInput = ({ defaultValue = "", name = "" }) => {
  return /* @__PURE__ */ jsx2("input", { defaultValue, name, type: "hidden" });
};
var Hidden_default = HiddenInput;

// src/components/Fields/Input/Input.tsx
import { useId as useId2, useMemo, useRef as useRef2, useState as useState2 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var TextInput = (props) => {
  const {
    label = "",
    placeholder = "",
    name = "",
    required = false,
    autoComplete = "",
    pattern = null,
    disabled = false,
    customError = "",
    min,
    max,
    customErrorMessage,
    error,
    type = "text",
    help,
    formTouched = false,
    onChange,
    value,
    unit = ""
  } = props;
  const [touched, setTouched] = useState2(false);
  const inputRef = useRef2(null);
  const reactId = useId2();
  const inputId = name || `input-${reactId}`;
  const helpId = help ? `${inputId}-help` : void 0;
  const errorId = `${inputId}-error`;
  const isTouched = formTouched || touched;
  const nativeInvalid = !!inputRef.current && !inputRef.current.validity.valid;
  const hasError = !!error || nativeInvalid && isTouched;
  const errorMessage = error ?? customErrorMessage ?? (isTouched ? inputRef.current?.validationMessage : void 0);
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    "ctx2-input",
    required ? "ctx2-input--required" : "",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const inputConstraints = useMemo(() => {
    const constraints = {};
    if (type === "text" || type === "email" || type === "password" || type === "search" || type === "tel" || type === "url") {
      if (typeof min === "number") constraints.minLength = min;
      if (typeof max === "number") constraints.maxLength = max;
    }
    if (type === "number" || type === "date" || type === "datetime-local" || type === "week" || type === "month") {
      if (min !== void 0) constraints.min = min;
      if (max !== void 0) constraints.max = max;
    }
    return constraints;
  }, [min, max, type]);
  const handleChange = (event) => {
    if (customError) {
      event.currentTarget.setCustomValidity("");
    }
    onChange(event.target.value);
  };
  const handleBlur = () => {
    setTouched(true);
  };
  const handleInvalid = (event) => {
    if (customError) {
      event.currentTarget.setCustomValidity(customError);
    }
  };
  const handleBeforeInput = (event) => {
    if (!pattern) return;
    const nativeEvent = event.nativeEvent;
    if (nativeEvent.data == null) return;
    try {
      const regex = new RegExp(pattern, "u");
      if (!regex.test(nativeEvent.data)) {
        event.preventDefault();
      }
    } catch {
    }
  };
  const input = /* @__PURE__ */ jsx3(
    "input",
    {
      ...inputConstraints,
      ref: inputRef,
      id: inputId,
      name: name || void 0,
      type,
      value,
      placeholder,
      required,
      disabled,
      autoComplete: autoComplete || void 0,
      pattern: pattern ?? void 0,
      "aria-required": required || void 0,
      "aria-invalid": hasError || void 0,
      "aria-describedby": describedBy,
      "aria-errormessage": hasError && errorMessage ? errorId : void 0,
      onChange: handleChange,
      onBlur: handleBlur,
      onInvalid: handleInvalid,
      onBeforeInput: handleBeforeInput
    }
  );
  return /* @__PURE__ */ jsx3(
    FieldWrapper_default,
    {
      className: classes,
      label,
      required,
      labelFor: inputId,
      help,
      helpId,
      errorMessage,
      errorId,
      hasError,
      children: unit ? /* @__PURE__ */ jsx3("div", { className: "ctx2-input__control", "data-unit": unit, children: input }) : input
    }
  );
};
var Input_default = TextInput;

// src/components/Fields/Radio/Radio.tsx
import { useId as useId3 } from "react";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var Radio = (props) => {
  const {
    onChange,
    options = [],
    name = "",
    disabled = false,
    width = 6,
    required = false,
    label = "",
    help,
    error,
    customErrorMessage,
    value
  } = props;
  const reactId = useId3();
  const fieldId = name || `radio-${reactId}`;
  const helpId = help ? `${fieldId}-help` : void 0;
  const errorId = `${fieldId}-error`;
  const hasError = !!error;
  const errorMessage = error ?? customErrorMessage;
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    "ctx2-radio",
    required ? "ctx2-radio--required" : "",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const handleChange = (event) => {
    onChange(event.currentTarget.value);
  };
  return /* @__PURE__ */ jsxs2("div", { className: classes, children: [
    /* @__PURE__ */ jsxs2(
      "fieldset",
      {
        className: "ctx2-radio-group",
        "aria-describedby": describedBy,
        "aria-invalid": hasError || void 0,
        children: [
          label && /* @__PURE__ */ jsxs2("legend", { children: [
            /* @__PURE__ */ jsx4("span", { children: label }),
            required && /* @__PURE__ */ jsx4("span", { className: "ctx2-form-label__required", "aria-hidden": "true" })
          ] }),
          (Array.isArray(options) ? options.map((option) => ({
            value: option,
            label: option
          })) : Object.entries(options ?? {}).map(([optionValue, optionLabel]) => ({
            value: optionValue,
            label: optionLabel
          }))).map((option, index) => {
            const optionId = `${fieldId}-${index}`;
            return /* @__PURE__ */ jsxs2("label", { htmlFor: optionId, children: [
              /* @__PURE__ */ jsx4(
                "input",
                {
                  id: optionId,
                  type: "radio",
                  name: name || fieldId,
                  value: option.value,
                  checked: value === option.value,
                  onChange: handleChange,
                  disabled,
                  required
                }
              ),
              /* @__PURE__ */ jsx4("span", { children: option.label })
            ] }, optionId);
          })
        ]
      }
    ),
    /* @__PURE__ */ jsx4(
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
var Radio_default = Radio;

// src/components/Flex/Flex.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function Flex({
  as,
  children,
  direction = "row",
  collapsedDirection = "column",
  align = "stretch",
  justify = "flex-start",
  wrap = "nowrap",
  collapse = true,
  gap,
  inline = false,
  className: passedClassName,
  style,
  ...props
}) {
  const Component = as ?? "div";
  const className = [
    "ctx2-flex",
    collapse && "ctx2-flex--collapse",
    passedClassName
  ].filter(Boolean).join(" ");
  const flexStyle = {
    "--ctx2-flex-direction": direction,
    "--ctx2-flex-collapsed-direction": collapsedDirection,
    ...style
  };
  return /* @__PURE__ */ jsx5(
    Component,
    {
      ...props,
      className,
      style: {
        display: inline ? "inline-flex" : "flex",
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        gap,
        ...flexStyle
      },
      children
    }
  );
}

// src/components/Fields/Submit/Submit.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var Submit = (props) => {
  const { label, alignment, disabled, placeholder } = props;
  const className = "ctx2-form-field";
  return /* @__PURE__ */ jsx6(
    Flex,
    {
      className,
      align: "center",
      justify: alignment === "right" ? "flex-end" : alignment === "center" ? "center" : "flex-start",
      children: /* @__PURE__ */ jsx6(
        "input",
        {
          className: "ctx2-button",
          type: props.type ?? "submit",
          value: label || placeholder,
          disabled
        }
      )
    }
  );
};
var Submit_default = Submit;

// src/components/Fields/TextArea/TextArea.tsx
import { useId as useId4, useRef as useRef3, useState as useState3 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var TextArea = (props) => {
  const {
    label = "",
    placeholder = "",
    name = "",
    required = false,
    disabled = false,
    rows = 3,
    help,
    formTouched = false,
    customErrorMessage,
    error,
    onChange,
    value
  } = props;
  const textAreaRef = useRef3(null);
  const [touched, setTouched] = useState3(false);
  const reactId = useId4();
  const textAreaId = name || `textarea-${reactId}`;
  const helpId = help ? `${textAreaId}-help` : void 0;
  const errorId = `${textAreaId}-error`;
  const isTouched = touched || formTouched;
  const nativeInvalid = !!textAreaRef.current && !textAreaRef.current.validity.valid;
  const hasError = !!error || nativeInvalid && isTouched;
  const errorMessage = error ?? customErrorMessage ?? (isTouched ? textAreaRef.current?.validationMessage : void 0);
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    "ctx2-textarea",
    required ? "ctx2-textarea--required" : "",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const handleChange = (event) => {
    onChange(event.currentTarget.value);
  };
  return /* @__PURE__ */ jsx7(
    FieldWrapper_default,
    {
      className: classes,
      label,
      required,
      labelFor: textAreaId,
      help,
      helpId,
      errorMessage,
      errorId,
      hasError,
      children: /* @__PURE__ */ jsx7(
        "textarea",
        {
          ref: textAreaRef,
          id: textAreaId,
          name: name || void 0,
          required,
          disabled,
          rows,
          placeholder,
          value,
          "aria-required": required || void 0,
          "aria-invalid": hasError || void 0,
          "aria-describedby": describedBy,
          "aria-errormessage": hasError && errorMessage ? errorId : void 0,
          onBlur: () => setTouched(true),
          onChange: handleChange
        }
      )
    }
  );
};
var TextArea_default = TextArea;

// src/modules/values.ts
var getDefaultFormValues = (fields) => {
  const values = {};
  fields.forEach((field) => {
    if (field.defaultValue !== void 0) {
      values[field.name] = field.defaultValue;
    }
  });
  return values;
};
var normalizeFieldValue = (field, formData) => {
  const rawValue = formData[field.name];
  switch (field.type) {
    case "checkbox":
    case "toggle":
      if (typeof rawValue === "boolean") return rawValue;
      if (rawValue === "checked" || rawValue === "on" || rawValue === "1" || rawValue === 1) {
        return true;
      }
      if (rawValue === "unchecked" || rawValue === "off" || rawValue === "0" || rawValue === 0) {
        return false;
      }
      return typeof field.defaultValue === "boolean" ? field.defaultValue : false;
    case "number":
    case "range":
    case "numberpicker":
      if (typeof rawValue === "number") return String(rawValue);
      if (typeof rawValue === "string") return rawValue;
      if (typeof field.defaultValue === "number") return String(field.defaultValue);
      if (typeof field.defaultValue === "string") return field.defaultValue;
      return "";
    default:
      if (typeof rawValue === "string") return rawValue;
      if (typeof rawValue === "number") return String(rawValue);
      if (typeof rawValue === "boolean") return rawValue ? "1" : "0";
      if (typeof field.defaultValue === "string") return field.defaultValue;
      if (typeof field.defaultValue === "number") return String(field.defaultValue);
      if (typeof field.defaultValue === "boolean") return field.defaultValue;
      return "";
  }
};

// src/modules/visibility.ts
var normalizeValue = (value) => {
  if (value === "checked" || value === "on" || value === "1" || value === 1) {
    return true;
  }
  if (value === "unchecked" || value === "off" || value === "0" || value === 0) {
    return false;
  }
  return value;
};
var isRuleMet = (rule, form) => {
  const actual = normalizeValue(form[rule.field] ?? null);
  const expected = normalizeValue(rule.value);
  switch (rule.operator) {
    case "equals":
      return actual == expected;
    case "not_equals":
      return actual != expected;
    case "not_empty":
      return actual !== null && actual !== "" && actual !== false;
    default:
      return false;
  }
};
var isFieldVisible = (visibilityRule, form) => {
  if (!visibilityRule) {
    return true;
  }
  return isRuleMet(visibilityRule, form);
};

// src/components/InputField/InputField.tsx
import { lazy, Suspense } from "react";

// src/components/HtmlBlock/HtmlBlock.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var HTMLBlock = ({ content = "", role }) => {
  const classes = ["ctx-content-block", "core-block"].join(" ");
  return /* @__PURE__ */ jsx8(RenderHtml, { className: classes, role, html: content });
};
var HtmlBlock_default = HTMLBlock;

// src/components/InputField/InputField.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var getLazyFieldComponent = (module) => {
  if (typeof module === "function") {
    return module;
  }
  if (module && typeof module === "object" && "default" in module) {
    return getLazyFieldComponent(module.default);
  }
  throw new TypeError("Lazy field module did not resolve to a component");
};
var loadLazyField = (loader) => lazy(async () => ({
  default: getLazyFieldComponent(await loader())
}));
var Combobox = loadLazyField(() => import("./Combobox-BD3G45CW.js"));
var Country = loadLazyField(() => import("./Country-QHJ5REOM.js"));
var RangeInput = loadLazyField(() => import("./Range-WIFX6O6M.js"));
var Select = loadLazyField(() => import("./Select-BNAKPSME.js"));
var withSuspense = (children) => /* @__PURE__ */ jsx9(Suspense, { fallback: null, children });
var InputField = (props) => {
  const { type, onChange, disabled } = props;
  const base = {
    name: props.name,
    label: props.label ?? "",
    width: props.width ?? 6,
    required: props.required ?? false,
    disabled: disabled ?? false,
    formTouched: props.formTouched ?? false,
    customErrorMessage: props.customErrorMessage,
    placeholder: props.placeholder ?? ""
  };
  switch (type) {
    case "select":
      return withSuspense(
        /* @__PURE__ */ jsx9(
          Select,
          {
            ...base,
            options: props.options,
            hasEmptyOption: props.hasEmptyOption,
            help: props.help,
            hint: props.hint,
            error: props.error,
            value: props.value,
            onChange
          }
        )
      );
    case "combobox":
      return withSuspense(
        /* @__PURE__ */ jsx9(
          Combobox,
          {
            ...base,
            options: Array.isArray(props.options) ? props.options : [],
            help: props.help ?? "",
            value: props.value,
            onChange
          }
        )
      );
    case "radio":
    case "options":
      return /* @__PURE__ */ jsx9(
        Radio_default,
        {
          ...base,
          options: Array.isArray(props.options) ? props.options : [],
          value: props.value,
          onChange
        }
      );
    case "textarea":
      return /* @__PURE__ */ jsx9(
        TextArea_default,
        {
          ...base,
          rows: props.rows ?? 3,
          error: props.error,
          value: props.value,
          onChange
        }
      );
    case "checkbox":
    case "toggle":
      return /* @__PURE__ */ jsx9(
        Checkbox_default,
        {
          ...base,
          help: props.help,
          error: props.error,
          variant: type === "toggle" ? "toggle" : "checkbox",
          value: props.value,
          onChange
        }
      );
    case "country":
      return withSuspense(
        /* @__PURE__ */ jsx9(
          Country,
          {
            ...base,
            region: props.region ?? "world",
            help: props.help,
            customError: props.customError ?? "",
            error: props.error,
            value: props.value,
            onChange
          }
        )
      );
    case "number":
    case "range":
    case "numberpicker":
      return withSuspense(
        /* @__PURE__ */ jsx9(
          RangeInput,
          {
            ...base,
            type,
            min: props.min ?? 0,
            max: props.max ?? 100,
            hasTicks: props.hasTicks ?? false,
            hasLabels: props.hasLabels ?? false,
            showValue: props.showValue ?? true,
            value: props.value,
            onChange
          }
        )
      );
    case "html":
      return /* @__PURE__ */ jsx9(HtmlBlock_default, { content: props.content, width: props.width });
    case "hidden":
      return /* @__PURE__ */ jsx9(
        Hidden_default,
        {
          name: props.name,
          defaultValue: typeof props.defaultValue === "string" ? props.defaultValue : void 0
        }
      );
    case "submit":
      return /* @__PURE__ */ jsx9(
        Submit_default,
        {
          label: props.label ?? "",
          width: props.width ?? 6,
          alignment: props.alignment ?? "left",
          placeholder: props.placeholder,
          disabled: !!disabled,
          type: "submit"
        }
      );
    default:
      return /* @__PURE__ */ jsx9(
        Input_default,
        {
          ...base,
          type,
          min: props.min,
          max: props.max,
          pattern: props.pattern ?? null,
          autoComplete: props.autoComplete ?? "",
          customError: props.customError ?? "",
          help: props.help,
          error: props.error,
          unit: props.unit,
          value: props.value,
          onChange
        }
      );
  }
};
var InputField_default = InputField;

// src/components/FormFields/FormFields.tsx
import { jsx as jsx10, jsxs as jsxs3 } from "react/jsx-runtime";
function Fieldset({
  fields,
  formData,
  errors = {},
  status = "LOADED",
  disabled = false,
  formTouched = false,
  onChange
}) {
  const visibleFields = fields.filter(
    (field) => isFieldVisible(field.visibilityRule, formData)
  );
  return /* @__PURE__ */ jsx10("div", { className: "ctx-form-fields", children: visibleFields.map((field) => /* @__PURE__ */ jsxs3(
    "div",
    {
      className: `ctx-form-fields__item ctx-width--${field.width ?? 6}`,
      "data-testid": field.testId,
      children: [
        field.description && /* @__PURE__ */ jsx10("p", { className: "ctx-form-field-description", children: field.description }),
        /* @__PURE__ */ jsx10(
          InputField_default,
          {
            ...field,
            status,
            disabled,
            formTouched,
            error: errors[field.name],
            value: normalizeFieldValue(field, formData),
            onChange: (value) => onChange(field.name, value)
          }
        )
      ]
    },
    field.name
  )) });
}

// src/components/Form/Form.tsx
import { useEffect, useRef as useRef4, useState as useState4 } from "react";
import { jsx as jsx11, jsxs as jsxs4 } from "react/jsx-runtime";
var Form = (props) => {
  const {
    data = [],
    formUrl = "",
    onSubmit,
    submitUrl = "",
    onChange,
    onStateChange,
    extraData,
    onSubmissionFinished
  } = props;
  const [status, setStatus] = useState4("LOADING");
  const [fields, setFields] = useState4([]);
  const [form, setForm] = useState4({});
  const [response, setResponse] = useState4();
  const [touched, setTouched] = useState4(false);
  useEffect(() => {
    onStateChange?.(status);
  }, [status]);
  const formRef = useRef4(null);
  useEffect(() => {
    if (!formUrl && data) {
      setFields(data);
      setStatus("LOADED");
      return;
    }
    fetch(formUrl).then((res) => res.json()).then((json) => {
      setFields(json.fields);
      setStatus("LOADED");
      setForm(getDefaultFormValues(json.fields));
    });
  }, [data, formUrl]);
  if (fields.length === 0) return null;
  const visibleFields = fields.filter(
    (field) => isFieldVisible(field.visibilityRule, form)
  );
  const handleSubmit = (event) => {
    const visibleValues = Object.fromEntries(
      visibleFields.map((field) => [
        field.name,
        form[field.name] ?? field.defaultValue ?? ""
      ])
    );
    const formData = { ...visibleValues, ...extraData };
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event, formData);
      return;
    }
    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity();
      return;
    }
    if (!submitUrl) {
      console.error("wp-react-form", "No URL or onSubmit callback provided");
      return;
    }
    if (status === "SUBMITTING" || status === "SUCCESS") return;
    setStatus("SUBMITTING");
    fetch(submitUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json()).then((data2) => {
      setStatus(data2.success ? "SUCCESS" : "ERROR");
      setResponse(data2);
      onSubmissionFinished?.(data2);
    });
  };
  const resetForm = () => {
    setStatus("LOADED");
    setForm(getDefaultFormValues(fields));
  };
  if (status === "LOADING") return null;
  const onFormChange = (_event) => {
    onChange?.(form);
  };
  const classes = [
    "ctx-form",
    status === "LOADED" ? "ctx-form--loaded" : "",
    status === "ERROR" ? "ctx-form--error" : "",
    status === "SUBMITTING" ? "ctx-form--submitting" : "",
    status === "SUCCESS" ? "ctx-form--submitted" : ""
  ].join(" ");
  return /* @__PURE__ */ jsxs4(
    "form",
    {
      className: classes,
      ref: formRef,
      onSubmit: handleSubmit,
      onInvalid: () => setTouched(true),
      onChange: onFormChange,
      onReset: resetForm,
      children: [
        status === "ERROR" && /* @__PURE__ */ jsx11(
          RenderHtml,
          {
            tag: "div",
            role: "alert",
            className: "ctx-form__response ctx-form__response--error",
            html: response?.message?.html ?? ""
          }
        ),
        /* @__PURE__ */ jsx11(
          RenderHtml,
          {
            tag: "div",
            role: "status",
            "aria-live": "polite",
            style: {
              opacity: status === "SUCCESS" ? 1 : 0,
              pointerEvents: status === "SUCCESS" ? "all" : "none",
              transition: "all 0.3s",
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              zIndex: 5
            },
            className: `ctx-form__response ${status === "SUCCESS" ? "ctx-form__response--show" : ""}`,
            html: response?.message?.html ?? "<p>Success</p>"
          }
        ),
        /* @__PURE__ */ jsx11(
          Fieldset,
          {
            fields: visibleFields,
            formData: form,
            status,
            disabled: status === "SUBMITTING",
            formTouched: touched,
            onChange: (name, value) => {
              setForm((prev) => ({ ...prev, [name]: value }));
            }
          }
        )
      ]
    }
  );
};
var Form_default = Form;

export {
  Checkbox_default,
  Hidden_default,
  Input_default,
  Radio_default,
  Flex,
  Submit_default,
  TextArea_default,
  getDefaultFormValues,
  normalizeFieldValue,
  isFieldVisible,
  InputField_default,
  Fieldset,
  Form_default
};
//# sourceMappingURL=chunk-BT6SZN2U.js.map
