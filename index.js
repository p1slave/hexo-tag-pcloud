'use strict';

var pathFn = require('path');
const { htmlTag, url_for } = require('hexo-util');

const rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\w]*))?)/;
const rMeta = /["']?([^"']+)?["']?\s*["']?([^"']+)?["']?/;
const rImgFile = /([^\s]+(\.(jpg|JPG|png|PNG|gif|GIF|bmp|BMP))$)/;

/**
* pcloud Image tag
*
* Syntax:
*   {% pcloudimg [class names] imageFile [width] [height] [title text [alt text]] %}
*/
function pcloudImgTag(args, content) {
    const classes = [];
    let src, width, height, title, alt;

    // Find image URL and class name
    while (args.length > 0) {
      const item = args.shift();
      if (rImgFile.test(item)) {
        const { slug } = this
        const enable = hexo.config.pcloud.enable
        const host = hexo.config.pcloud.host || "https://filedn.com"
        const public_folder = hexo.config.pcloud.public_folder 
        const asset_path = hexo.config.pcloud.asset_path
        if (enable) {
          src = pathFn.join(host, public_folder, asset_path, slug, item)  
        } else {
          src = item
        }
        break;
      } else {
        classes.push(item);
      }
    }

    // Find image width and height
    if (args && args.length) {
      if (!/\D+/.test(args[0])) {
        width = args.shift();

        if (args.length && !/\D+/.test(args[0])) {
          height = args.shift();
        }
      }

      const match = rMeta.exec(args.join(' '));

      // Find image title and alt
      if (match != null) {
        title = match[1];
        alt = match[2];
      }
    }

    const attrs = {
      src,
      class: classes.join(' '),
      width,
      height,
      title,
      alt
    };

    return htmlTag('img', attrs);
};

hexo.extend.tag.register("pcloudimg", pcloudImgTag, {async: false, ends: false});