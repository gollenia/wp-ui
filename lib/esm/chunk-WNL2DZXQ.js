import {
  FieldWrapper_default
} from "./chunk-QY5QXQAC.js";

// src/components/Fields/Combobox/Combobox.tsx
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { useEffect, useId, useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var CLEAR_VALUE = "__ctx2_combobox_clear__";
var Combobox = (props) => {
  const {
    label = "",
    name = "",
    options,
    required = false,
    disabled = false,
    placeholder = "",
    help,
    error,
    customErrorMessage,
    formTouched = false,
    value = "",
    onChange,
    allowClear = false,
    clearLabel = "Clear selection",
    noResultsLabel = "No results",
    commitOnInput = true,
    autoComplete = "off",
    onInputChange,
    renderOption
  } = props;
  const reactId = useId();
  const inputId = name || `combobox-${reactId}`;
  const helpId = help ? `${inputId}-help` : void 0;
  const errorId = `${inputId}-error`;
  const [touched, setTouched] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [highlightedItem, setHighlightedItem] = useState(
    null
  );
  useEffect(() => {
    setInputValue(value);
  }, [options, value]);
  const filteredOptions = useMemo(() => {
    const query = inputValue.trim().toLowerCase();
    if (!query) {
      return options;
    }
    if (query.endsWith("*")) {
      const prefix = query.slice(0, -1);
      return options.filter(
        (option) => option.toLowerCase().startsWith(prefix)
      );
    }
    return options.filter((option) => option.toLowerCase().includes(query));
  }, [inputValue, options]);
  const clearEnabled = allowClear && inputValue.trim() !== "";
  const items = useMemo(() => {
    const optionItems = filteredOptions.map((option) => ({
      type: "option",
      value: option,
      label: option
    }));
    if (!clearEnabled) {
      return optionItems;
    }
    return [
      {
        type: "clear",
        value: CLEAR_VALUE,
        label: clearLabel
      },
      ...optionItems
    ];
  }, [clearEnabled, clearLabel, filteredOptions]);
  const selectedItem = useMemo(
    () => options.includes(value) ? {
      type: "option",
      value,
      label: value
    } : null,
    [options, value]
  );
  const hasError = !!error;
  const errorMessage = error ?? (formTouched || touched ? customErrorMessage : void 0);
  const describedBy = [helpId, hasError && errorMessage ? errorId : void 0].filter(Boolean).join(" ") || void 0;
  const classes = [
    "ctx2-form-field",
    "ctx2-combobox",
    required ? "ctx2-input--required" : "",
    hasError ? "ctx2-form-error" : ""
  ].filter(Boolean).join(" ");
  const handleInputValueChange = (nextValue) => {
    setInputValue(nextValue);
    onInputChange?.(nextValue);
    if (commitOnInput) {
      onChange(nextValue);
    }
  };
  const handleValueChange = (item) => {
    if (!item || item.type === "clear") {
      setInputValue("");
      onChange("");
      return;
    }
    setInputValue(item.value);
    onChange(item.value);
  };
  return /* @__PURE__ */ jsx(
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
      hasError: hasError && (touched || formTouched),
      children: /* @__PURE__ */ jsxs(
        BaseCombobox.Root,
        {
          items,
          value: selectedItem,
          inputValue,
          open: isOpen,
          onInputValueChange: handleInputValueChange,
          onValueChange: handleValueChange,
          onOpenChange: setIsOpen,
          onItemHighlighted: (item) => setHighlightedItem(item ?? null),
          itemToStringLabel: (item) => item.label,
          itemToStringValue: (item) => item.value,
          isItemEqualToValue: (item, selected) => item.value === selected.value,
          openOnInputClick: true,
          autoHighlight: false,
          filter: null,
          disabled,
          required,
          children: [
            /* @__PURE__ */ jsx(
              BaseCombobox.Input,
              {
                id: inputId,
                name: name || void 0,
                type: "text",
                value: inputValue,
                placeholder,
                required,
                disabled,
                autoComplete,
                "aria-describedby": describedBy,
                "aria-required": required || void 0,
                "aria-invalid": hasError || void 0,
                "aria-errormessage": hasError && errorMessage ? errorId : void 0,
                onFocus: () => setIsOpen(true),
                onBlur: () => setTouched(true)
              }
            ),
            isOpen && !disabled && /* @__PURE__ */ jsx(BaseCombobox.Portal, { children: /* @__PURE__ */ jsx(BaseCombobox.Positioner, { className: "ctx2-combobox-positioner", children: /* @__PURE__ */ jsxs(BaseCombobox.Popup, { className: "ctx2-combobox-listbox", children: [
              /* @__PURE__ */ jsx(BaseCombobox.List, { children: (item, index) => /* @__PURE__ */ jsx(
                BaseCombobox.Item,
                {
                  value: item,
                  index,
                  className: "ctx2-combobox-option",
                  onMouseDown: (event) => {
                    event.preventDefault();
                    handleValueChange(item);
                    setIsOpen(false);
                  },
                  children: item.type === "clear" ? item.label : renderOption ? renderOption(item.value, {
                    highlighted: highlightedItem?.value === item.value,
                    selected: inputValue === item.value
                  }) : item.label
                },
                `${item.type}-${item.value}`
              ) }),
              filteredOptions.length === 0 && !clearEnabled && /* @__PURE__ */ jsx(BaseCombobox.Empty, { className: "ctx2-combobox-empty", children: noResultsLabel })
            ] }) }) })
          ]
        }
      )
    }
  );
};
var Combobox_default = Combobox;

export {
  Combobox_default
};
//# sourceMappingURL=chunk-WNL2DZXQ.js.map
