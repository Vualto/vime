---
title: vm-settings-control
sidebar_label: SettingsControl
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

A control for toggling the visiblity of the settings menu. This control is not displayed if no
settings (`vime-settings`) has been provided for the current player.

## Visual

<img
  src="https://raw.githubusercontent.com/vime-js/vime/master/packages/core/src/components/ui/controls/settings-control/settings-control.png"
  alt="Vime settings control component"
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

```html {7}
<vm-player>
  <!-- ... -->
  <vm-ui>
    <!-- ... -->
    <vm-controls>
      <!-- ... -->
      <vm-settings-control></vm-settings-control>
    </vm-controls>
  </vm-ui>
</vm-player>
```

</TabItem>


<TabItem value="react">

```tsx {6,16}
import React from 'react';
import { Player, Ui, Controls, SettingsControl } from '@vime/react';

function Example() {
  return (
    <Player>
      {/* ... */}
      <Ui>
        {/* ... */}
        <Controls>
          <SettingsControl />
        </Controls>
      </Ui>
    </Player>
  );
}
```

</TabItem>


<TabItem value="vue">

```html {7,18,26} title="example.vue"
<template>
  <Player>
    <!-- ... -->
    <Ui>
      <!-- ... -->
      <Controls>
        <SettingsControl />
      </Controls>
    </Ui>
  </Player>
</template>

<script>
  import { Player, Ui, Controls, SettingsControl } from '@vime/vue';

  export default {
    components: {
      Player,
      Ui,
      Controls,
      SettingsControl,
    },
  };
</script>
```

</TabItem>


<TabItem value="svelte">

```html {6,16} title="example.svelte"
<Player>
  <!-- ... -->
  <Ui>
    <!-- ... -->
    <Controls>
      <SettingsControl />
    </Controls>
  </Ui>
</Player>

<script lang="ts">
  import { Player, Ui, Controls, SettingsControl } from '@vime/svelte';
</script>
```

</TabItem>


<TabItem value="stencil">

```tsx {9}
class Example {
  render() {
    return (
      <vm-player>
        {/* ... */}
        <vm-ui>
          {/* ... */}
          <vm-controls>
            <vm-settings-control />
          </vm-controls>
        </vm-ui>
      </vm-player>
    );
  }
}
```

</TabItem>


<TabItem value="angular">

```html {7} title="example.html"
<vm-player>
  <!-- ... -->
  <vm-ui>
    <!-- ... -->
    <vm-controls>
      <!-- ... -->
      <vm-settings-control></vm-settings-control>
    </vm-controls>
  </vm-ui>
</vm-player>
```

</TabItem>
    
</Tabs>


## Properties

| Property           | Attribute           | Description                                                                                         | Type                           | Default      |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------ | ------------ |
| `expanded`         | `expanded`          | Whether the settings menu this control manages is open.                                             | `boolean`                      | `false`      |
| `icon`             | `icon`              | The name of the settings icon to resolve from the icon library.                                     | `string`                       | `'settings'` |
| `icons`            | `icons`             | The name of an icon library to use. Defaults to the library defined by the `icons` player property. | `string ∣ undefined`           | `undefined`  |
| `menu`             | `menu`              | The DOM `id` of the settings menu this control is responsible for opening/closing.                  | `string ∣ undefined`           | `undefined`  |
| `tooltipDirection` | `tooltip-direction` | The direction in which the tooltip should grow.                                                     | `"left" ∣ "right" ∣ undefined` | `undefined`  |
| `tooltipPosition`  | `tooltip-position`  | Whether the tooltip is positioned above/below the control.                                          | `"bottom" ∣ "top"`             | `'top'`      |

## Dependencies

### Used by

- [vm-default-controls](default-controls.md)

### Depends on

- [vm-control](control.md)
- [vm-icon](../icon.md)
- [vm-tooltip](../tooltip.md)

### Graph

```mermaid
graph TD;
  vm-settings-control --> vm-control
  vm-settings-control --> vm-icon
  vm-settings-control --> vm-tooltip
  vm-default-controls --> vm-settings-control
  style vm-settings-control fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
