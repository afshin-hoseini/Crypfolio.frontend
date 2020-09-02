/**
 * Returns defined CSS rule.
 * @param CLASSname The style rule, like `.main-title` or multiple rules like `.main-title,sub-title`
 */
export function GetStyle(CLASSname : string) 
{
    var styleSheets = document.styleSheets;
    var styleSheetsLength = styleSheets.length;
    for(var i = 0; i < styleSheetsLength; i++){
        if (styleSheets[i].rules ) { var classes = styleSheets[i].rules; }
        else { 
            try {  if(!styleSheets[i].cssRules) {continue;} } 
            //Note that SecurityError exception is specific to Firefox.
            catch(e) { if(e.name == 'SecurityError') { console.log("SecurityError. Cant readd: "+ styleSheets[i].href);  continue; }}
            var classes = styleSheets[i].cssRules ;
        }
        for (var x = 0; x < classes.length; x++) {
            if ((classes[x] as any).selectorText == CLASSname) {
                var ret = (classes[x].cssText) ? classes[x].cssText : (classes[x] as any).style.cssText ;
                if(ret.indexOf((classes[x] as any).selectorText) == -1){ret = (classes[x] as any).selectorText + "{" + ret + "}";}
                return ret;
            }
        }
    }
}