class Formatter {
  //add static methods here
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-']+/g, '');
  }
  
  static titleize(string) {
    return string.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
  }
}