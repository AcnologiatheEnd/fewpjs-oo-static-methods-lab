class Formatter {
  //add static methods here
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-']+/g, '');
  }
  
  static titleize(string) {
    return string.split(' ').map(function(val){ 
    if (val === )  
    return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
  }).join(' ');
}