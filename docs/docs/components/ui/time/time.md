---
title: vm-time
sidebar_label: Time
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Formats and displays a length of time provided in seconds.

## Visual

<img
  src="https://raw.githubusercontent.com/vime-js/vime/master/packages/core/src/components/ui/time/time/time.png"
  alt="Vime time component"
/>

<!-- Auto Generated Below -->

## Usage

<Tabs
groupId="framework"
defaultValue="html"
values={[
{ label: 'HTML', value: 'html' },
{ label: 'React', value: 'react' },
{ label: 'Vue', value: 'vue' },
{ label: 'Svelte', value: 'svelte' },
{ label: 'Stencil', value: 'stencil' },
{ label: 'Angular', value: 'angular' }
]}>

<TabItem value="html">

```html
<vm-time label="Time" seconds="120" />
```

</TabItem>


<TabItem value="react">

```tsx {2,5}
import React from 'react';
import { Time } from '@vime/react';

function Example() {
  return <Time label="Time" seconds={120} />;
}
```

</TabItem>


<TabItem value="vue">

```html {2,6,10} title="example.vue"
<template>
  <time label="Time" :seconds="120" />
</template>

<script>
  import { Time } from '@vime/vue';

  export default {
    components: {
      Time,
    },
  };
</script>
```

</TabItem>


<TabItem value="svelte">

```tsx
<Time label="Time" seconds={120} />
```

```html
<script lang="ts">
  import { Time } from '@vime/svelte';
</script>
```

</TabItem>


<TabItem value="stencil">

```tsx {3}
class Example {
  render() {
    return <vm-time label="Time" seconds={120} />;
  }
}
```

</TabItem>


<TabItem value="angular">

```html title="example.html"
<vm-time label="Time" [seconds]="120" />
```

</TabItem>
    
</Tabs>


## Properties

| Property             | Attribute           | Description                                                                                                           | Type      | Default     |
| -------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `alwaysShowHours`    | `always-show-hours` | Whether the time should always show the hours unit, even if the time is less than 1 hour (eg: `20:35` -> `00:20:35`). | `boolean` | `false`     |
| `label` _(required)_ | `label`             | The `aria-label` property of the time.                                                                                | `string`  | `undefined` |
| `seconds`            | `seconds`           | The length of time in seconds.                                                                                        | `number`  | `0`         |

## CSS Custom Properties

| Name                    | Description                                 |
| ----------------------- | ------------------------------------------- |
| `--vm-time-color`       | The color of the text displaying the time.  |
| `--vm-time-font-size`   | The size of the font displaying the time.   |
| `--vm-time-font-weight` | The weight of the font displaying the time. |

## Dependencies

### Used by

- [vm-current-time](current-time.md)
- [vm-end-time](end-time.md)

### Graph

```mermaid
graph TD;
  vm-current-time --> vm-time
  vm-end-time --> vm-time
  style vm-time fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
