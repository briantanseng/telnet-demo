# telnet-demo
Node wrapper for telnet connectivity checks packaged as an AWS lambda function

## Run the app
```
$ npm install
$ export TELNET_HOSTS="smtp.gmail.com:465,smtp.gmail.com:25"
$ ./run.sh
```

## Sample Run
Telnet two hosts:
* smtp.gmail.com:465 (Google SMTP server)
* smtp.gmail.com:25 (Invalid SMTP server)
```
$ ./run.sh

hostInfo: smtp.gmail.com:465
smtp.gmail.com:465 is alive. Nothing to see here.
hostInfo: smtp.gmail.com:25
RED ALERT! Cannot connect to smtp.gmail.com:25.
[
  { host: 'smtp.gmail.com:465', alive: true },
  { host: 'smtp.gmail.com:25', alive: false }
]
```

