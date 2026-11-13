import {
  Combobox_default
} from "./chunk-KFIYOEMP.js";

// src/components/Fields/Country/Country.tsx
import { useMemo } from "react";

// src/modules/countries.ts
var REGION_COUNTRY_CODES = {
  EU: [
    "AD",
    "AL",
    "AT",
    "BA",
    "BE",
    "BG",
    "BY",
    "CH",
    "CY",
    "CZ",
    "DE",
    "DK",
    "EE",
    "ES",
    "FI",
    "FO",
    "FR",
    "GB",
    "GI",
    "GR",
    "HR",
    "HU",
    "IE",
    "IS",
    "IT",
    "LI",
    "LT",
    "LU",
    "LV",
    "MC",
    "MD",
    "ME",
    "MK",
    "NL",
    "NO",
    "PL",
    "PT",
    "RO",
    "RS",
    "RU",
    "SE",
    "SI",
    "SK",
    "SM",
    "UA",
    "VA",
    "XK"
  ],
  DACH: ["AT", "CH", "DE"],
  AS: [
    "AE",
    "AF",
    "AM",
    "AZ",
    "BD",
    "BH",
    "BN",
    "BT",
    "CN",
    "GE",
    "HK",
    "ID",
    "IL",
    "IN",
    "IQ",
    "IR",
    "JO",
    "JP",
    "KG",
    "KH",
    "KP",
    "KR",
    "KW",
    "KZ",
    "LA",
    "LB",
    "LK",
    "MM",
    "MN",
    "MO",
    "MV",
    "MY",
    "NP",
    "OM",
    "PH",
    "PK",
    "PS",
    "QA",
    "SA",
    "SG",
    "SY",
    "TH",
    "TJ",
    "TL",
    "TM",
    "TR",
    "TW",
    "UZ",
    "VN",
    "YE"
  ],
  AF: [
    "AO",
    "BF",
    "BI",
    "BJ",
    "BW",
    "CD",
    "CF",
    "CG",
    "CI",
    "CM",
    "CV",
    "DJ",
    "DZ",
    "EG",
    "ER",
    "ET",
    "GA",
    "GH",
    "GM",
    "GN",
    "GQ",
    "GW",
    "IO",
    "KE",
    "KM",
    "LR",
    "LS",
    "LY",
    "MA",
    "MG",
    "ML",
    "MR",
    "MU",
    "MW",
    "MZ",
    "NA",
    "NE",
    "NG",
    "RE",
    "RW",
    "SC",
    "SD",
    "SH",
    "SL",
    "SN",
    "SO",
    "ST",
    "SZ",
    "TG",
    "TN",
    "TZ",
    "UG",
    "YT",
    "ZA",
    "ZM",
    "ZW"
  ],
  OC: [
    "AS",
    "AU",
    "CK",
    "FJ",
    "FM",
    "GU",
    "KI",
    "MH",
    "MP",
    "NC",
    "NF",
    "NR",
    "NU",
    "NZ",
    "PF",
    "PG",
    "PW",
    "SB",
    "TK",
    "TO",
    "TV",
    "VU",
    "WF",
    "WS"
  ],
  NA: [
    "AG",
    "AI",
    "BB",
    "BL",
    "BM",
    "BS",
    "BZ",
    "CA",
    "CR",
    "CU",
    "DM",
    "DO",
    "GD",
    "GL",
    "GP",
    "GT",
    "HN",
    "HT",
    "JM",
    "KN",
    "KY",
    "LC",
    "MF",
    "MQ",
    "MS",
    "MX",
    "NI",
    "PA",
    "PM",
    "PR",
    "SV",
    "TC",
    "US",
    "VC",
    "VG",
    "VI"
  ],
  SA: [
    "AR",
    "AW",
    "BO",
    "BR",
    "CL",
    "CO",
    "EC",
    "FK",
    "GF",
    "GY",
    "PE",
    "PY",
    "SR",
    "TT",
    "UY",
    "VE"
  ]
};
var REGION_FILTERS = {
  europe: ["EU"],
  dach: ["DACH"],
  asia: ["AS"],
  africa: ["AF"],
  oceania: ["OC"],
  "north-america": ["NA"],
  "south-america": ["SA"],
  americas: ["NA", "SA"]
};
var WORLD_COUNTRY_CODES = Array.from(
  new Set(
    Object.values(REGION_COUNTRY_CODES).flatMap((codes) => Array.from(codes))
  )
).sort();
var getCountryCodes = (region) => {
  if (region === "world") {
    return WORLD_COUNTRY_CODES;
  }
  const filterKeys = REGION_FILTERS[region];
  return Array.from(
    new Set(filterKeys.flatMap((key) => REGION_COUNTRY_CODES[key] ?? []))
  );
};
var getCountryOptions = (region, locale) => {
  const displayNames = new Intl.DisplayNames([locale, "en"], {
    type: "region"
  });
  return getCountryCodes(region).map((code) => ({ value: code, label: displayNames.of(code) ?? code })).sort((a, b) => a.label.localeCompare(b.label, locale));
};

// src/components/Fields/Country/Country.tsx
import { jsx } from "react/jsx-runtime";
var browserLocale = navigator.language;
var Country = (props) => {
  const {
    onChange,
    disabled,
    required,
    name,
    label,
    width,
    region,
    help,
    customErrorMessage,
    error,
    value,
    placeholder,
    formTouched
  } = props;
  const countries = useMemo(
    () => getCountryOptions(region, browserLocale),
    [region]
  );
  const labelToValueMap = useMemo(() => {
    return new Map(countries.map((country) => [country.label, country.value]));
  }, [countries]);
  const valueToLabelMap = useMemo(() => {
    return new Map(countries.map((country) => [country.value, country.label]));
  }, [countries]);
  const selectedLabel = value ? valueToLabelMap.get(value) ?? "" : "";
  const handleChange = (selectedLabel2) => {
    if (typeof selectedLabel2 !== "string") {
      onChange("");
      return;
    }
    const selectedValue = labelToValueMap.get(selectedLabel2) ?? "";
    onChange(selectedValue);
  };
  return /* @__PURE__ */ jsx(
    Combobox_default,
    {
      label,
      name,
      required,
      width,
      options: countries.map((country) => country.label),
      help: help ?? "Make a selection",
      disabled,
      formTouched,
      customErrorMessage,
      error,
      placeholder,
      value: selectedLabel,
      onChange: handleChange,
      allowClear: !required,
      commitOnInput: false,
      clearLabel: help ?? "Make a selection",
      noResultsLabel: "No matching country"
    }
  );
};
var Country_default = Country;

export {
  getCountryOptions,
  Country_default
};
//# sourceMappingURL=chunk-CYO6UO5C.js.map
