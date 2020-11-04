# Vulnerable WebApps

**Disclaimer**: *Any information shared within this repository must not be used with malicious intentions. Proof-of-Concepts and tools are shared for educational purpose only. Any malicious use will not hold the author responsible.*

## Introduction
Quick and dirty tests/showcases for PostScript vulnerabilities which occur when using ImageMagick without paying additional attention. This repository provides a playground for previously presented vulnerabilities. 

For further reading and references to research made on this take a look at the [useful resources](https://github.com/lauritzh/PoC-Using_ImageMagick_in_vulnerable_WebApps/blob/master/README.md#useful-resources) section. 

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
