import openfl_errors_Error from "openfl/errors/Error";

declare namespace starling.errors {

export class AbstractClassError extends openfl_errors_Error {

	constructor(message?:any, id?:any);


}

}

export default starling.errors.AbstractClassError;