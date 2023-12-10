# WDA.AG Website Pure HTML

Requirements:  
[Zola](https://www.getzola.org)

To install Zola:
[Zola Installation](https://www.getzola.org/documentation/getting-started/installation/)

To run:

```bash
zola serve
```

To build:

```bash
zola build
```

To deploy in WHM:

```bash
Move all contents from public folder to /public-html
Add following .htaccess rules:

Options -MultiViews
RewriteEngine On

RewriteBase /

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]
```
