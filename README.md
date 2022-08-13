# i18n-v2e-plugin-react

**_i18n translated value to react element post processor_**

> v2e post processor wraps i18n translated text into any html element passed in config. This is useful if you need to identify all the translated texts in a page, as with simple translation its not easy.

## Add custom scripts & styles

```js
import { getProcessor } from "i18n-v2e-plugin-react";

const MyPostProcessor = getProcessor();

i18n.use(MyPostProcessor).init({
    ...
    postProcess: [MyPostProcessor.name]
    ...
});
```

That's all!

With this configuration,

```js
    const  {t} = useTranslation();
    ...
    ...


    <div>{t('your_sample_key')}</div>
```

will generate below HTML,

```html
<div>
  <span class="lokalize-lbl your_sample_key">
    your sample value
  </span>
</div>
```

## Configurations

| Parameter  | Description                                                | Required | Default         |
| ---------- | ---------------------------------------------------------- | -------- | --------------- |
| ignoreList | list of keys that don't need to be wrapped in html element | No       | [], empty array |
| className  | classes to add to the generated element                    | No       | empty string    |
| tag        | HTML tag to be used                                        | No       | span            |

### Example

```js
import { getProcessor } from "i18n-v2e-plugin-react";

const MyPostProcessor = getProcessor(
    ["ignore_1"],
    "class-143",
    "var"
);

i18n.use(MyPostProcessor).init({
    ...
    postProcess: [MyPostProcessor.name]
    ...
});
```

```js
    const  {t} = useTranslation();
    ...
    ...


    <div>
    {t('your_sample_key')}
    {t('ignore_1')}
    </div>
```

```html
<div>
  <var class="lokalize-lbl your_sample_key class-143">
    your sample value
  </var>
  Ignore 1 value
</div>
```

This comes really handy while writing automated UI tests where you can pick your translated texts and verify the translation.

Thanks.
