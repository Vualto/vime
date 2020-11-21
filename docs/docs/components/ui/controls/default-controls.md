---
title: vm-default-controls
sidebar_label: DefaultControls
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Default set of controls for when you're in a hurry. The controls displayed depend on whether
the media is audio/video/live, and whether the device is mobile/desktop. See
[`vime-default-ui`](../default-ui.md) for visuals.

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

```html {5}
<vm-player>
  <!-- ... -->
  <vm-ui>
    <!-- ... -->
    <vm-default-controls active-duration="2750"></vm-default-controls>
  </vm-ui>
</vm-player>
```

</TabItem>


<TabItem value="react">

```tsx {2,10}
import React from 'react';
import { Player, Ui, DefaultControls } from '@vime/react';

function Example() {
  return (
    <Player>
      {/* ... */}
      <Ui>
        {/* ... */}
        <DefaultControls activeDuration={3200} />
      </Ui>
    </Player>
  );
}
```

</TabItem>


<TabItem value="vue">

```html {6,12,18} title="example.vue"
<template>
  <Player>
    <!-- ... -->
    <Ui>
      <!-- ... -->
      <DefaultControls :activeDuration="3200" />
    </Ui>
  </Player>
</template>

<script>
  import { Player, Ui, DefaultControls } from '@vime/vue';

  export default {
    components: {
      Player,
      Ui,
      DefaultControls,
    },
  };
</script>
```

</TabItem>


<TabItem value="svelte">

```tsx {5}
<Player>
  <!-- ... -->
  <Ui>
    <!-- ... -->
    <DefaultControls activeDuration={3200} />
  </Ui>
</Player>
```

```html {2}
<script lang="ts">
  import { Player, Ui, DefaultControls } from '@vime/svelte';
</script>
```

</TabItem>


<TabItem value="stencil">

```tsx {8}
class Example {
  render() {
    return (
      <vm-player>
        {/* ... */}
        <vm-ui>
          {/* ... */}
          <vm-default-controls activeDuration={3200} />
        </vm-ui>
      </vm-player>
    );
  }
}
```

</TabItem>


<TabItem value="angular">

```html {5} title="example.html"
<vm-player>
  <!-- ... -->
  <vm-ui>
    <!-- ... -->
    <vm-default-controls [active-duration]="2750"></vm-default-controls>
  </vm-ui>
</vm-player>
```

</TabItem>
    
</Tabs>


## Properties

| Property               | Attribute                 | Description                                                                                                                 | Type      | Default |
| ---------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `activeDuration`       | `active-duration`         | The length in milliseconds that the controls are active for before fading out. Audio players are not effected by this prop. | `number`  | `2750`  |
| `hideOnMouseLeave`     | `hide-on-mouse-leave`     | Whether the controls should hide when the mouse leaves the player. Audio players are not effected by this prop.             | `boolean` | `false` |
| `hideWhenPaused`       | `hide-when-paused`        | Whether the controls should show/hide when paused. Audio players are not effected by this prop.                             | `boolean` | `false` |
| `waitForPlaybackStart` | `wait-for-playback-start` | Whether the controls should wait for playback to start before being shown. Audio players are not effected by this prop.     | `boolean` | `false` |

## Dependencies

### Used by

- [vm-default-ui](../default-ui.md)

### Depends on

- [vm-controls](controls.md)
- [vm-playback-control](playback-control.md)
- [vm-volume-control](volume-control.md)
- [vm-current-time](../time/current-time.md)
- [vm-control-spacer](control-spacer.md)
- [vm-scrubber-control](scrubber-control.md)
- [vm-live-indicator](../live-indicator.md)
- [vm-end-time](../time/end-time.md)
- [vm-settings-control](settings-control.md)
- [vm-control-group](control-group.md)
- [vm-fullscreen-control](fullscreen-control.md)
- [vm-scrim](../scrim.md)
- [vm-caption-control](caption-control.md)
- [vm-time-progress](../time/time-progress.md)
- [vm-pip-control](pip-control.md)

### Graph

```mermaid
graph TD;
  vm-default-controls --> vm-controls
  vm-default-controls --> vm-playback-control
  vm-default-controls --> vm-volume-control
  vm-default-controls --> vm-current-time
  vm-default-controls --> vm-control-spacer
  vm-default-controls --> vm-scrubber-control
  vm-default-controls --> vm-live-indicator
  vm-default-controls --> vm-end-time
  vm-default-controls --> vm-settings-control
  vm-default-controls --> vm-control-group
  vm-default-controls --> vm-fullscreen-control
  vm-default-controls --> vm-scrim
  vm-default-controls --> vm-caption-control
  vm-default-controls --> vm-time-progress
  vm-default-controls --> vm-pip-control
  vm-playback-control --> vm-control
  vm-playback-control --> vm-icon
  vm-playback-control --> vm-tooltip
  vm-volume-control --> vm-mute-control
  vm-volume-control --> vm-slider
  vm-mute-control --> vm-control
  vm-mute-control --> vm-icon
  vm-mute-control --> vm-tooltip
  vm-current-time --> vm-time
  vm-scrubber-control --> vm-slider
  vm-scrubber-control --> vm-tooltip
  vm-end-time --> vm-time
  vm-settings-control --> vm-control
  vm-settings-control --> vm-icon
  vm-settings-control --> vm-tooltip
  vm-fullscreen-control --> vm-control
  vm-fullscreen-control --> vm-icon
  vm-fullscreen-control --> vm-tooltip
  vm-time-progress --> vm-current-time
  vm-time-progress --> vm-end-time
  vm-pip-control --> vm-control
  vm-pip-control --> vm-icon
  vm-pip-control --> vm-tooltip
  vm-default-ui --> vm-default-controls
  style vm-default-controls fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
