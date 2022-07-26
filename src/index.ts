import { createElement } from 'react';
import { uuid } from 'uuidv4';

export const getProcessor = function (
    ignoreList: string[] = [],
    className: string = "",
    tag: string = ""
) {

    function isInIgnoreList(key: string) {
        return ignoreList.indexOf(key.toString()) >= 0;
    }

    return {
        type: "postProcessor",
        name: `rs-bdd-processor-${uuid()}`,
        process: function (value: string, key: any) {
            return !isInIgnoreList(key) ? createElement(
                tag || "span",
                {
                    className: `lokalize-lbl ${key}${className ? ' ' + className : ''}`
                },
                value
            ) : value; 
        }
    } as {
        type: "postProcessor",
        name: string,
        process: Function
    }
}
