# `@contexis/wp-ui`

React form renderer for WordPress-based frontends.

The package uses React directly and renders forms from a field schema. You can either render a complete form through `Form` or compose lower-level building blocks such as `Fieldset`, `FormField`, `Input`, `TextArea`, `Select`, `Checkbox`, `Flex`, `FlexItem`, `Accordion`, and `Stepper`.

## Install

```bash
npm install @contexis/wp-ui
```

```ts
import '@contexis/wp-ui/style.css';
```

## Scope

This package is primarily a schema-driven form renderer for WordPress-based frontends.

- `Form`, `FormField`, and `Fieldset` are the main public building blocks.
- The concrete field components such as `Input`, `TextArea`, `Select`, or `Checkbox` are exported so individual fields can also be rendered directly in larger apps and plugins while staying visually and behaviorally consistent with schema-rendered forms.
- External UI libraries may be used internally as implementation details, but they are not the public API of this package.
- If you want consistency with the schema-driven form system, import primitives from this package rather than mixing them directly with third-party field components.

## Exports

Default export:

- `Form`

Named exports:

- `Form`
- `Accordion`
- `AccordionSection`
- `Fieldset`
- `FormFields`
- `FormField`
- `InputField`
- `Input`
- `TextArea`
- `Select`
- `Radio`
- `Button`
- `Checkbox`
- `Combobox`
- `Country`
- `Flex`
- `FlexItem`
- `FormAccordion`
- `FormAccordionSection`
- `Hidden`
- `Range`
- `Stepper`
- `Submit`
- `getDefaultFormValues`
- `normalizeFieldValue`
- `isFieldVisible`
- `getCountryOptions`
- `sanitizeHtml`
- `sanitizeInlineHtml`

The package also exports the relevant TypeScript types from [`src/types.ts`](src/types.ts).

## Structure Helpers

`Accordion` is a form-oriented layout primitive for grouped flows. Sections can contain schema-rendered fields, custom components, or both.

```tsx
import { Accordion, Fieldset } from '@contexis/wp-ui';

<Accordion value={[openSection]} onValueChange={([next]) => setOpenSection(next)}>
	<Accordion.Section
		id="details"
		title="Contact details"
		completed={detailsDone}
		editLabel="Edit"
	>
		<Fieldset fields={detailsFields} formData={form} onChange={setFieldValue} />
	</Accordion.Section>

	<Accordion.Section id="payment" title="Payment" disabled={!detailsDone}>
		<PaymentSection />
	</Accordion.Section>
</Accordion>;
```

## Basic Usage

```tsx
import Form from '@contexis/wp-ui';
import '@contexis/wp-ui/style.css';

const fields = [
	{
		name: 'name',
		type: 'text',
		label: 'Name',
		required: true,
	},
	{
		name: 'email',
		type: 'email',
		label: 'E-Mail',
		required: true,
	},
	{
		name: 'country',
		type: 'country',
		label: 'Country',
	},
	{
		name: 'newsletter',
		type: 'toggle',
		label: 'Subscribe to newsletter',
		defaultValue: false,
	},
	{
		name: 'submit',
		type: 'submit',
		label: 'Send',
	},
];

export function Example() {
	return (
		<Form
			data={fields}
			extraData={{ source: 'landing-page' }}
			submitUrl="/wp-json/my-form/v1/submit"
			onSubmissionFinished={(response) => {
				console.log(response.success);
			}}
		/>
	);
}
```

## `Form` Props

- `data?: FormFieldDefinition[]`
- `formUrl?: string`
- `submitUrl?: string`
- `extraData?: FormValues`
- `onSubmit?: (event, data) => void`
- `onSubmissionFinished?: (response) => void`
- `onStateChange?: (state) => void`
- `onChange?: (form) => void`

Notes:

- If `formUrl` is set, the form schema is loaded via `fetch`.
- If `onSubmit` is provided, submission is handled externally.
- If `onSubmit` is not provided, the component posts JSON to `submitUrl`.

## Supported Field Types

- `text`
- `email`
- `url`
- `tel`
- `password`
- `search`
- `date`
- `week`
- `month`
- `datetime-local`
- `number`
- `range`
- `numberpicker`
- `select`
- `combobox`
- `radio`
- `options`
- `textarea`
- `checkbox`
- `toggle`
- `country`
- `html`
- `hidden`
- `submit`

The following input types exist in the shared type union but are not currently mapped to dedicated UI in `FormField`:

- `time`
- `year`
- `file`

## Field Schema

The main schema type is `FormFieldDefinition`.

Common properties:

- `name`
- `type`
- `label`
- `defaultValue`
- `required`
- `placeholder`
- `unit`
- `help`
- `hint`
- `description`
- `width`
- `visibilityRule`
- `customError`
- `customErrorMessage`
- `testId`

Field-specific properties:

- `options` for `select`, `combobox`, `radio`, `options`
- `rows` for `textarea`
- `min`, `max`, `hasTicks`, `hasLabels` for `range` and `numberpicker`
- `region` for `country`
- `alignment` for `submit`
- `content` for `html`

`unit` can be used on native input fields to show a visual suffix inside the
input, for example `kg` or `m2`. It is not part of the submitted value. The
schema `number` field currently renders the range-style control, so units apply
to native inputs rather than that slider field.

Example:

```ts
const fields = [
	{
		name: 'area',
		type: 'text',
		label: 'Area',
		unit: 'm2',
	},
	{
		name: 'details',
		type: 'textarea',
		label: 'Details',
		rows: 5,
		visibilityRule: {
			field: 'newsletter',
			value: true,
			operator: 'equals',
		},
	},
];
```

## Lower-Level Usage

If you do not want the full `Form` component, you can render visible fields yourself:

```tsx
import { Fieldset } from '@contexis/wp-ui';

<Fieldset
	fields={fields}
	formData={formData}
	errors={errors}
	status="LOADED"
	formTouched={false}
	disabled={false}
	onChange={(name, value) => {
		setFormData((prev) => ({ ...prev, [name]: value }));
	}}
/>;
```

`FormFields` remains available as a backwards-compatible alias.

Or render a single schema-driven field directly:

```tsx
import { FormField } from '@contexis/wp-ui';

<FormField
	type="text"
	name="company"
	label="Company"
	status="LOADED"
	formTouched={false}
	disabled={false}
	value=""
	onChange={(value) => {
		console.log(value);
	}}
/>;
```

`InputField` remains available as a backwards-compatible alias.

If you want to use the concrete field primitives directly, import them individually:

```tsx
import { Input, Select, TextArea } from '@contexis/wp-ui';
```

## Card

The card is an optional entry point; importing it does not import the form bundle or its styles.

```tsx
import { Card } from '@contexis/wp-ui/card';
import '@contexis/wp-ui/card.css';

<Card>
  <div className="ctx-ui-card__image"><img src="/event.jpg" alt="" /></div>
  <a href="/event">Event</a>
</Card>
```

The same CSS classes work without React. The theme controls the default hover and focus effects with `settings.custom.ctx.ui.card` in `theme.json`. Effects can be combined; defaults produce no visible effect.

```json
{
  "settings": {
    "custom": {
      "ctx": {
        "ui": {
          "card": {
            "background": "#ffffff",
            "hoverBackground": "#eeeeee",
            "hoverImageScale": "1.05",
            "hoverScale": "1",
            "hoverTranslateY": "-4px",
            "hoverShadow": "0 8px 24px rgba(0, 0, 0, 0.15)",
            "duration": "200ms"
          }
        }
      }
    }
  }
}
```

Also supported are `radius` and `shadow`. WordPress turns these settings into `--wp--custom--ctx--ui--card--*` CSS variables. `hoverScale` affects the entire card; `hoverImageScale` affects images inside `.ctx-ui-card__image`. Motion is disabled when reduced motion is requested.

For an intentional per-plugin or per-block override, set the corresponding `--ctx-ui-card-*` variable on the card or an ancestor, for example `--ctx-ui-card-hover-background: blue`. These variables take precedence over theme values and are inherited; omit them to use the theme. The existing explicit `hover` prop and `ctx-ui-card--hover-*` classes remain available; omit the prop to use the theme defaults, or set `hover="none"` to disable effects.

The card CSS is separate from the existing `style.css`. Existing root, `form`, `dialog` and `style.css` exports are retained. The existing `@contexis/wp-react-form` package remains independent; changing package names does not redirect old imports.

## List

`@contexis/wp-ui/list` exports `List` and `ListItem`; import `@contexis/wp-ui/list.css` for the styles. A list item accepts optional `leading` and `action` slots, and arbitrary content as children. Provide an accessible label for icon-only actions. For a description list, place a semantic `<dl>` with its `<dt>` and `<dd>` children in the item content; this retains valid description-list markup while keeping leading visuals and actions available.
