import {
  FieldWrapper_default
} from "./chunk-QY5QXQAC.js";

// src/components/Fields/Select/Select.tsx
import { Select as BaseSelect } from "@base-ui/react/select";
import { useId, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Select = (props) => {
  const {
    onChange,
    options,
    hasEmptyOption = false,
    help,
    hint,
    disabled = false,
    required = false,
    label = "",
    name = "",
    customError,
    customErrorMessage,
    error,
    value,
    formTouched = false,
    emptyOptionLabel = "Make a selection"
  } = props;
  const [touched, setTouched] = useState(false);
  const inputRef = useRef(null);
  const reactId = useId();
  const selectId = name || `select-${reactId}`;
  const helpId = help ? `${selectId}-help` : void 0;
  const hintId = hint ? `${selectId}-hint` : void 0;
  const errorId = `${selectId}-error`;
  const isTouched = formTouched || touched;
  const nativeInvalid = !!inputRef.current && !inputRef.current.validity.valid;
  const hasError = !!error || nativeInvalid && isTouched;
  const errorMessage = error ?? customErrorMessage ?? (isTouched ? inputRef.current?.validationMessage : void 0);
  const describedBy = [hintId, helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    "ctx2-select",
    required ? "ctx2-select--required" : "",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const normalizedOptions = useMemo(() => {
    if (!options) return [];
    if (Array.isArray(options)) {
      return options.map((option) => ({
        value: option,
        label: option
      }));
    }
    return Object.entries(options).map(([key, optionLabel]) => ({
      value: key,
      label: optionLabel
    }));
  }, [options]);
  const selectedLabel = useMemo(() => {
    const selected = normalizedOptions.find((option) => option.value === value);
    if (selected) {
      return selected.label;
    }
    return hasEmptyOption && value === "" ? emptyOptionLabel : void 0;
  }, [emptyOptionLabel, hasEmptyOption, normalizedOptions, value]);
  const handleBlur = () => {
    setTouched(true);
  };
  const handleValueChange = (nextValue) => {
    if (customError) {
      inputRef.current?.setCustomValidity("");
    }
    onChange(nextValue ?? "");
  };
  const setInputRef = (input) => {
    inputRef.current = input;
    if (!input) {
      return;
    }
    if (customError) {
      input.setCustomValidity(customError);
    }
  };
  return /* @__PURE__ */ jsx(
    FieldWrapper_default,
    {
      className: classes,
      label,
      required,
      labelFor: selectId,
      hint,
      hintId,
      help,
      helpId,
      errorMessage,
      errorId,
      hasError,
      children: /* @__PURE__ */ jsxs(
        BaseSelect.Root,
        {
          id: selectId,
          name: name || void 0,
          required,
          disabled,
          value: typeof value === "string" ? value : value[0] ?? "",
          onValueChange: handleValueChange,
          inputRef: setInputRef,
          children: [
            /* @__PURE__ */ jsxs(
              BaseSelect.Trigger,
              {
                id: selectId,
                disabled,
                "aria-required": required || void 0,
                "aria-invalid": hasError || void 0,
                "aria-describedby": describedBy,
                "aria-errormessage": hasError && errorMessage ? errorId : void 0,
                onBlur: handleBlur,
                className: "ctx2-select__trigger",
                children: [
                  /* @__PURE__ */ jsx(BaseSelect.Value, { placeholder: emptyOptionLabel, children: () => selectedLabel ?? emptyOptionLabel }),
                  /* @__PURE__ */ jsx(BaseSelect.Icon, { "aria-hidden": "true" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(BaseSelect.Portal, { children: /* @__PURE__ */ jsx(
              BaseSelect.Positioner,
              {
                className: "ctx2-select__positioner",
                positionMethod: "fixed",
                side: "bottom",
                align: "start",
                sideOffset: 4,
                alignItemWithTrigger: false,
                children: /* @__PURE__ */ jsx(BaseSelect.Popup, { className: "ctx2-select__popup", children: /* @__PURE__ */ jsxs(BaseSelect.List, { className: "ctx2-select__list", children: [
                  hasEmptyOption && /* @__PURE__ */ jsx(
                    BaseSelect.Item,
                    {
                      value: "",
                      disabled: required,
                      label: emptyOptionLabel,
                      className: "ctx2-select__option",
                      onMouseDown: (event) => {
                        event.preventDefault();
                        if (!required) {
                          handleValueChange("");
                        }
                      },
                      onClick: () => {
                        if (!required) {
                          handleValueChange("");
                        }
                      },
                      children: /* @__PURE__ */ jsx(BaseSelect.ItemText, { children: emptyOptionLabel })
                    }
                  ),
                  normalizedOptions.map((option) => /* @__PURE__ */ jsx(
                    BaseSelect.Item,
                    {
                      value: option.value,
                      label: option.label,
                      className: "ctx2-select__option",
                      onMouseDown: (event) => {
                        event.preventDefault();
                        handleValueChange(option.value);
                      },
                      onClick: () => handleValueChange(option.value),
                      children: /* @__PURE__ */ jsx(BaseSelect.ItemText, { children: option.label })
                    },
                    option.value
                  ))
                ] }) })
              }
            ) })
          ]
        }
      )
    }
  );
};
var Select_default = Select;

export {
  Select_default
};
//# sourceMappingURL=chunk-IGHVFCQZ.js.map
