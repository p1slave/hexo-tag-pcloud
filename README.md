# hexo-tag-pcloud
[![npm version](https://img.shields.io/npm/v/hexo-tag-pcloud.svg)](https://www.npmjs.com/package/hexo-tag-pcloud) [![license](https://img.shields.io/npm/l/hexo-tag-xvideos.svg?style=flat)](https://raw.github.com/p1slave/hexo-tag-pcloud/blob/master/LICENSE)

Display asset links of images uploaded to [pcloud](https://www.pcloud.com) in your [Hexo](https://hexo.io) blog. This tag plugin also provides the option in `_config.yml` to turn off this feature and switch back to the default asset folder in Hexo.

## Install
In your blog folder, add this npm dependency to your project

```
$ npm i hexo-tag-pcloud --save
```

## Usage

```
{% pcloudimg path/to/image.jpg %}
```

## Options

| name | Description | Required | Type  | Default |
 ------ | ---------- | -------- | ------- | ------- |
| `enable` | Enable pcloud link for image assets or not | No  | `boolean`  | `false`
| `host` | A pcloud host name either in the US or EU | No | `string` | `https://filedn.com`
| `public_folder` | The name of public folder | Yes | `string` | Undefined
| `asset_path` | Relative asset folder path inside public folder | Yes | `string` | Undefined

## Configuration
You can configure default settings in ```_config.yml```. By disabling this plugin in the setting, you don't have to change every pcloud tag in your blog posts if you decide to fall back to the default image tag later.

```yml
pcloud:
  enable: false
  host: https://filedn.com
  public_folder: XXXXXXXXXXXXXXX
  asset_path: path/to/asset_folder
```
## License
© Licensed under the MIT License.
