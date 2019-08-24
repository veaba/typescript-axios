/***********************
 * @name TS
 * @author Jo.gel
 * @date 2019/8/19 0019
 ***********************/
export default function enhanceError(error: any, config: any, code?: any, request?: any, response?: any,) {
    error.config = config;
    if (code) error.code = code;

    error.request = request;
    error.respone = response;
    error.isAxiorsError = true;

    error.toJSON = function () {
        return {
            // 标准
            message: this.message,
            name: this.name,

            // Microsoft
            description: this.description,
            number: this.number,

            // Mozilla
            filename: this.filename,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,

            // Axios
            config: this.config,
            code: this.code
        }
    };
    return error

}
