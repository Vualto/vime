---
title: vm-dailymotion
sidebar_label: Dailymotion
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Enables loading, playing and controlling videos from [Dailymotion](https://www.dailymotion.com).

> You don't interact with this component for passing player properties, controlling playback, listening to player events and so on, that is all done through the `vime-player` component.

## Quirks

- You cannot change the `playbackRate` prop because there is no API for it.

- The `playsinline` property cannot be set. The player automatically sets it to `true` if `autoplay`
  is `true`.

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
  <vm-dailymotion video-id="k3b11PemcuTrmWvYe0q"></vm-dailymotion>
  <!-- ... -->
</vm-player>
```

</TabItem>


<TabItem value="react">

```tsx {2,7}
import React from 'react';
import { Player, Dailymotion } from '@vime/react';

function Example() {
  return (
    <Player controls>
      <Dailymotion videoId="k3b11PemcuTrmWvYe0q" />
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
    <Dailymotion videoId="k3b11PemcuTrmWvYe0q" />
    <!-- ... -->
  </Player>
</template>

<script>
  import { Player, Dailymotion } from '@vime/vue';

  export default {
    components: {
      Player,
      Dailymotion,
    },
  };
</script>
```

</TabItem>


<TabItem value="svelte">

```html {2,7} title="example.svelte"
<Player controls>
  <Dailymotion videoId="k3b11PemcuTrmWvYe0q" />
  <!-- ... -->
</Player>

<script lang="ts">
  import { Player, Dailymotion } from '@vime/svelte';
</script>
```

</TabItem>


<TabItem value="stencil">

```tsx {5}
class Example {
  render() {
    return (
      <vm-player controls>
        <vm-dailymotion videoId="k3b11PemcuTrmWvYe0q" />
        {/* ... */}
      </vm-player>
    );
  }
}
```

</TabItem>


<TabItem value="angular">

```html {2-5} title="example.html"
<vm-player controls>
  <vm-dailymotion color="fff" video-id="k3b11PemcuTrmWvYe0q"></vm-dailymotion>
  <!-- ... -->
</vm-player>
```

</TabItem>
    
</Tabs>


## Properties

| Property               | Attribute               | Description                                                                                                                                     | Type                 | Default     |
| ---------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ----------- |
| `color`                | `color`                 | Change the default highlight color used in the controls (hex value without the leading #). Color set in the Partner HQ will override this prop. | `string ∣ undefined` | `undefined` |
| `poster`               | `poster`                | The absolute URL of a custom poster to be used for the current video.                                                                           | `string ∣ undefined` | `undefined` |
| `shouldAutoplayQueue`  | `should-autoplay-queue` | Whether to automatically play the next video in the queue.                                                                                      | `boolean`            | `false`     |
| `showDailymotionLogo`  | `show-dailymotion-logo` | Whether to display the Dailymotion logo.                                                                                                        | `boolean`            | `false`     |
| `showShareButtons`     | `show-share-buttons`    | Whether to show buttons for sharing the video.                                                                                                  | `boolean`            | `false`     |
| `showUpNextQueue`      | `show-up-next-queue`    | Whether to show the 'Up Next' queue.                                                                                                            | `boolean`            | `false`     |
| `showVideoInfo`        | `show-video-info`       | Whether to show video information (title and owner) on the start screen.                                                                        | `boolean`            | `true`      |
| `syndication`          | `syndication`           | Forwards your syndication key to the player.                                                                                                    | `string ∣ undefined` | `undefined` |
| `videoId` _(required)_ | `video-id`              | The Dailymotion resource ID of the video to load.                                                                                               | `string`             | `undefined` |

## Events

| Event     | Description                         | Type                              |
| --------- | ----------------------------------- | --------------------------------- |
| `vmError` | Emitted when an error has occurred. | `CustomEvent<string ∣ undefined>` |

## Dependencies

### Used by

- [vm-playground](../core/playground.md)

### Depends on

- [vm-embed](../core/embed.md)

### Graph

```mermaid
graph TD;
  vm-dailymotion --> vm-embed
  vm-playground --> vm-dailymotion
  style vm-dailymotion fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
