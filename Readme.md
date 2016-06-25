# Open Calculator

This is a simple calculator that can calculate sum, subtract, multiplication,
division and ''. The algorithm to resolve operations is RPN(Reverse polish notation)
to avoid to use exec commands on code for security. If you need to check how it
works you can do it executing the index.html.

Also, the application could be installed on your phone with Cordova technology
to export html files to a APK android. If you want to check it you should 
run the command to cpy all files on www to cordovaProject/www:
```
npm run copy
```

After this point you have to run these commands in order:

```
cd cordovaProject
```
```
cordova run android
```
