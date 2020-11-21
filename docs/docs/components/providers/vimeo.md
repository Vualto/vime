---
title: vm-vimeo
sidebar_label: Vimeo
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Enables loading, playing and controlling videos from [Vimeo](https://www.vimeo.com).

> You don't interact with this component for passing player properties, controlling playback, listening to player events and so on, that is all done through the `vime-player` component.

## Quirks

- Only [Vimeo PRO](https://vimeo.com/professionals) members can set/change the playbackRate.

- `playbackQuality` and `playbackQualities` are not supported because there is no API for it.

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

```html {2}
<vm-player controls>
  <vm-vimeo video-id="411652396"></vm-vimeo>
  <!-- ... -->
</vm-player>
```

</TabItem>


<TabItem value="react">

```tsx {2,7}
import React from 'react';
import { Player, Vimeo } from '@vime/react';

function Example() {
  return (
    <Player controls>
      <Vimeo videoId="411652396" />
      {/* ... */}
    </Player>
  );
}
```

</TabItem>


<TabItem value="vue">

```html {3,9,14} title="example.vue"
<template>
  <Player controls>
    <Vimeo videoId="411652396" />
    <!-- ... -->
  </Player>
</template>

<script>
  import { Player, Vimeo } from '@vime/vue';

  export default {
    components: {
      Player,
      Vimeo,
    },
  };
</script>
```

</TabItem>


<TabItem value="svelte">

```html {2,7} title="example.svelte"
<Player controls>
  <Vimeo videoId="411652396" />
  <!-- ... -->
</Player>

<script lang="ts">
  import { Player, Vimeo } from '@vime/svelte';
</script>
```

</TabItem>


<TabItem value="stencil">

```tsx {5}
class Example {
  render() {
    return (
      <vm-player controls>
        <vm-vimeo videoId="411652396" />
        {/* ... */}
      </vm-player>
    );
  }
}
```

</TabItem>


<TabItem value="angular">

```html {2} title="example.html"
<vm-player controls>
  <vm-vimeo cookies="true" video-id="411652396"></vm-vimeo>
  <!-- ... -->
</vm-player>
```

</TabItem>
    
</Tabs>


## Properties

| Property               | Attribute              | Description                                                                                                      | Type                 | Default     |
| ---------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------- | ----------- |
| `byline`               | `byline`               | Whether to display the video owner's name.                                                                       | `boolean`            | `true`      |
| `color`                | `color`                | The hexadecimal color value of the playback controls. The embed settings of the video might override this value. | `string ∣ undefined` | `undefined` |
| `noAutoAspectRatio`    | `no-auto-aspect-ratio` | Turns off automatically determining the aspect ratio of the current video.                                       | `boolean`            | `false`     |
| `portrait`             | `portrait`             | Whether to display the video owner's portrait.                                                                   | `boolean`            | `true`      |
| `poster`               | `poster`               | The absolute URL of a custom poster to be used for the current video.                                            | `string ∣ undefined` | `undefined` |
| `videoId` _(required)_ | `video-id`             | The Vimeo resource ID of the video to load.                                                                      | `string`             | `undefined` |

## Events

| Event     | Description                         | Type               |
| --------- | ----------------------------------- | ------------------ |
| `vmError` | Emitted when an error has occurred. | `CustomEvent<any>` |

## Dependencies

### Used by

- [vm-playground](../core/playground.md)

### Depends on

- [vm-embed](../core/embed.md)

### Graph

```mermaid
graph TD;
  vm-vimeo --> vm-embed
  vm-playground --> vm-vimeo
  style vm-vimeo fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
