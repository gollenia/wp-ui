#### Changes
## 2.6.2
- Removed internal `ctx-forms` default CSS vars from the style layer
- Styles now read `ctx.ui` tokens directly with literal fallbacks
- Added dedicated checkbox UI tokens

## 2.6.1
- Accordion now has it's own css vars

## 2.6.0
- Renamed css vars to new naming schema

## 2.5.0
- Added Dialog Component

## 2.4.2
- Added ESM subpath builds for `./form` and `./dialog`
- Split heavy form field components into lazy-loaded chunks in the `form` entry
- Reduced the initial size of the `form` import by moving `Select`, `Combobox`, `Country` and `Range` into separate async chunks

## 2.4.1
- Added `./form` and `./dialog` package subpath exports
- Exported `FormProps` from the dedicated `form` entry
- Added dedicated package entry files for `form` and `dialog`

## 2.4.0
- Added `FormDialog` with shared Base UI dialog primitives and detached trigger support via `createHandle()`
- Added fullscreen dialog panel variant
- Added central overlay layer tokens for navigation, dialog and popup ordering
- Moved dialog, select and combobox layering to shared tokens

## 2.3.10
- token :where selectors removed

## 2.3.8
- Flex now hast Collapsible porperty

## 2.3.7
- Accordion Indicator
- Accordion Edit Label

## 2.3.6
- Success color bug

## 2.3.5
- Active Color black
- accordion icon

## 2.3.4
- Select Fix
- Country Field Fix

## 2.3.3
- Stepper fix
- Select Icon Fix

## 2.3.2
- label CSS fix
- Accordion Header fix
- Button Radius Fix

## 2.3.1
- Range CSS fix
- FlexItem added

## 2.3.0
- Added Accordion
- moved Range, Select, Combobox and Stepper to base-ui

## 2.2.0
- Added optional `unit` suffixes for native input fields.
- Split form styles into focused partials and cleaned up field-specific nesting.
- Added form layout style aliases for rendered `ctx-form-*` classes.

## 2.1.0
- Added RadioCards

## 2.0.4
- Combobox fixes

## 2.0.3
- Combobox fix that closes the suggestion box when value is empty

## 2.0.2
- ComboBox CSS fix that makes items not wrap

## 2.0.1
- replaced own sanitize functions with DOMPurify
- export styles.css

## 2.0.0
- added field visibility
- added aria improvements across field components
- added new combobox
- countries no longer rely on an API call
- added 3 new fields
- added direct exports for individual field components
- added `FormField` as preferred alias for `InputField`
- added `Fieldset` as preferred alias for `FormFields`

## 1.1.5
- added ids

## 1.1.4
- added @wordpress/prettier-config
- added tabIndex-property

## 1.1.2
- className added to every InputField

## 1.1.1
- Tests now run over InputField component

## 1.1.0
- Added Currency

## 1.0.17
- Numbers now suport range and numbers

## 1.0.16
- Added custom classes that can be included
