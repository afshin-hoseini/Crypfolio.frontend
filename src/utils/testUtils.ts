/* eslint-disable no-var */
/**
 * Returns defined CSS rule.
 * @param CLASSname The style rule, like `.main-title` or multiple rules like `.main-title,sub-title`
 */
export function GetStyle(CLASSname: string) {
  const styleSheets = document.styleSheets;
  const styleSheetsLength = styleSheets.length;
  for (let i = 0; i < styleSheetsLength; i++) {
    const styleSheet = styleSheets[i] as any;
    if (styleSheet.rules) {
      var classes = styleSheet.rules;
    } else {
      try {
        if (!styleSheet.cssRules) {
          continue;
        }
      } catch (e) {
        //Note that SecurityError exception is specific to Firefox.
        if (e.name === 'SecurityError') {
          console.log('SecurityError. Cant readd: ' + styleSheet.href);
          continue;
        }
      }
      var classes = styleSheet.cssRules;
    }
    for (let x = 0; x < classes.length; x++) {
      const classObject = classes[x] as any;

      if (classObject.selectorText === CLASSname) {
        let ret = classObject.cssText ? classObject.cssText : classObject.style.cssText;
        if (ret.indexOf(classObject.selectorText) === -1) {
          ret = classObject.selectorText + '{' + ret + '}';
        }
        return ret;
      }
    }
  }
}
