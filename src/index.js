module.exports = function check(str, bracketsConfig) {
  let result = [];
  let i = 0;
  while (i < str.length) {
      for (let config of bracketsConfig) {
          if (str[i] == config[0] && config[0] == config[1] && result[result.length - 1] == config[0]) {
            result.pop();
              break;
          }
          if (str[i] == config[0]) {
            result.push(str[i]);
          }
          if (str[i] == config[1] && config[0] != config[1]) {
              if (result.length == 0) {
                  return false;
              }
              if (result.length != 0 && result[result.length - 1] == config[0]) {
                result.pop();
              }
          }
          
      }
      i++;
  }
  if (result.length) {
      return false;
  }
  return true;
}