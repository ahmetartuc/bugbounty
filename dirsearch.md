# Advanced Dirsearch 
If you count on your CPU, you gotta try it think of it like an M1919! 💣


```bash
export URL=https://example.com/
```

```bash
dirsearch -u $URL \
  -t 150 \
  -x 403,404,500,429,301 \
  -i 200,302 \
  --random-agent \
  -e conf,config,bak,backup,swp,old,db,sql,asp,aspx,aspx~,asp~,py,py~,rb,rb~,php,php~,bak,bkp,cache,cgi,conf,csv,html,inc,jar,js,json,jsp,jsp~,lock,log,rar,old,sql,sql.gz,sql.zip,sql.tar.gz,sql~,swp,swp~,tar,tar.bz2,tar.gz,txt,wadl,zip,log,xml,tmp,tmp~,bak~,save,ini,env,htaccess,htpasswd,pl,sh,bat,ps1,dll,exe,bakx,backup~,bk,orig,out,log~,crt,pem,key,swf,fla,psd,ai,xcf,bak.old,debug,dbg,apk,ipa,asc,gpg,pgp,sqlitedb,sqlite,bak1,bak2,sav,log.bak,log.old,cfg,conf~,pem~,key~,jspx,jspx~,cfm,cfml,dbf,mdb,accdb,bak.sql,bak.sqlite,p12,pfx,rdb,dump,doc,docx,xls,xlsx,ppt,pptx,odt,ods,odp,tif,tiff,png,jpg,jpeg,bmp,gif,vbs,js~,pyc,pyo,class,war,ear,exe~,dll~,deb,rpm,iso,img,7z,bz2,xz,psql,dmp,bak.tar,bak.zip \
  --deep-recursive \
  --force-recursive \
  --exclude-sizes=0B \
  --random-agent \
  --full-url \
  --delay 1
