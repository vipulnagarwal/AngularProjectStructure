import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  label: '#{CLIENTLABEL}#',
  apiUrl: '#{APIURL}#',
  logLevel: NgxLoggerLevel.OFF,
  serverLogLevel: NgxLoggerLevel.ERROR
};
