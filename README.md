# Vulnerable Node.js WebApp

## Introduction
Quick and dirty tests/showcases for PostScript vulnerabilities which occur when using ImageMagick without paying additional attention.

## Node.js PoC
*/node/*-Directory
### Setup
```Bash
npm i imagemagick
npm i formidable
```

### Usage
```Bash
node index.js
```

## PHP
*/php/*-Directory
### Setup
```
pecl install imagick
```

### Usage
*Attention*: The built-in webserver is only intended for developing or test purposes.
```Bash
php -S localhost:8080
```

## Payloads
*/payloads/*-Directory: Useful payloads when tampering with vulnerable WebApps.

## Useful resources
* https://god.owasp.de/archive/2018/slides/2018-god-mueller.pdf
* https://link.springer.com/chapter/10.1007%2F978-3-030-00470-5_28 
* https://lamehackersguide.blogspot.com/2017/02/weaponizing-postscript.html
* https://hackerone.com/reports/403417
