# Alert

> 提示框，支持自定义图片和文本。

-------------
## 引入

```javascript
import { alert } from 'rap-vue-ui';
Vue.component(alert.name, alert);
```

## 例子
```html
<zfb-alert :my-list="alertList"></zfb-alert>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| myList | 弹出框组 { type, title, content, btn } | Obiect | | {} |

### alertList参数
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| type | 若为0，内容为无图片且文字居左<br/>若为1，内容为有图片且文字居中<br/>若为2，内容为无图片且文字居中 | Boolean | 0<br>1<br>2 | 0 |
| title | 标题 | String | | '' |
| content | 内容 | String | | '' |
| btn | 按钮文字 | String | | '我知道了' |
