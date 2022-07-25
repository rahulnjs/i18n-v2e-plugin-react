import { createElement } from 'react';
import { uuid } from 'uuidv4';

export const getProcessor = function (
    ignoreList: string[] = [],
    className: string = "",
    tag: string = ""
) {

    function notInIgnoeList(key: string) {
        return ignoreList.indexOf(key.toString()) >= 0;
    }

    return {
        type: "postProcessor",
        name: `rs-bdd-processor-${uuid()}`,
        process: function (value: string, key: any) {
            return notInIgnoeList(key) ? createElement(
                tag || "span",
                {
                    className: `${className} lokalize-lbl ${key}`
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
