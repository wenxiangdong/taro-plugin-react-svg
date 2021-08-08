# taro-plugin-react-svg

> Taro 中使用 svg

## 安装


```bash
$ npm i taro-plugin-react-svg --save
```
Or
```bash
$ yarn add taro-plugin-react-svg
```


## 使用
### 引入插件
请确保 Taro CLI 已升级至 Taro 3.1 及以上。
修改项目 `config/index.js` 中的 plugins 配置为如下

```js
const config = {
  ...
  plugins: [
    ...其余插件

    'taro-plugin-react-svg',
  ]
  ...
}
```
### 在组件中使用
之后在tsx/jsx文件中导入"*.svg"文件，就可以当作View组件来使用啦
```js
import SvgIcon from "xxx.svg";
...
<SvgIcon style={{width: "100rpx", height: "100rpx"}} /> // 需要指定大小
```

### 参数

插件可以接受如下参数：

| 参数项 | 类型 | 是否可选 | 用途 |
| :-----| :---- | :---- | :---- |
| exclude | number | 是 |  |

## 实现
小程序不支持svg标签，但是支持 `svg` 作为 `css background` 的 `url` 参数，类似 `data:image/svg+xml` 前缀的字符串。
该插件对svg文件内容使用 `svgo` 进行优化后，对优化后的内容再进行字符的转义，之后赋值为 `View` 组件的 `style` 属性中的 `background` 属性。
