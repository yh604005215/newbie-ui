<!--
 * @Autor: Yhao
 * @Date: 2021-11-07 00:58:37
 * @LastEditors: Yhao
 * @LastEditTime: 2021-11-07 23:24:30
 * @Description:
-->

## Button

主题:

```tsx
import React from 'react';
import { Button } from 'newbie-ui';

export default () => {
  return (
    <>
      <Button style={{ marginRight: 10 }}>原始按钮</Button>
      <Button style={{ marginRight: 10 }} type="primary">
        Primary
      </Button>
      <Button style={{ marginRight: 10 }} type="normal">
        Normal
      </Button>
      <Button style={{ marginRight: 10 }} type="warm">
        Warm
      </Button>
      <Button type="danger">Danger</Button>
    </>
  );
};
```

透明按钮:

```tsx
import React from 'react';
import { Button } from 'newbie-ui';

export default () => {
  return (
    <>
      <Button style={{ marginRight: 10 }} ghost>
        原始按钮
      </Button>
      <Button style={{ marginRight: 10 }} ghost type="primary">
        Primary
      </Button>
      <Button style={{ marginRight: 10 }} ghost type="normal">
        Normal
      </Button>
      <Button style={{ marginRight: 10 }} ghost type="warm">
        Warm
      </Button>
      <Button ghost type="danger">
        Danger
      </Button>
    </>
  );
};
```

按钮尺寸:

```tsx
import React from 'react';
import { Button } from 'newbie-ui';

export default () => {
  return (
    <>
      <Button style={{ marginRight: 10 }} size="lg">
        大尺寸
      </Button>
      <Button style={{ marginRight: 10 }}>默认尺寸</Button>
      <Button style={{ marginRight: 10 }} size="sm">
        小尺寸
      </Button>
      <Button size="xs">微小尺寸</Button>
    </>
  );
};
```

禁用按钮:

```tsx
import React from 'react';
import { Button } from 'newbie-ui';

export default () => (
  <Button type="primary" disabled>
    禁用按钮
  </Button>
);
```

圆角、流体按钮:

```tsx
import React from 'react';
import { Button } from 'newbie-ui';

export default () => {
  return (
    <>
      <Button radius style={{ marginBottom: 10 }}>
        圆角
      </Button>
      <Button block type="primary">
        流体按钮
      </Button>
    </>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
