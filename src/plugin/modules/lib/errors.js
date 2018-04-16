define([], function () {
    'use strict';
    //TODO: change
    /*
        DataSearchError
        A common exception understood well by the error component.
        source - the subsystem which generated the error (in which the rest can be understood)
        code - the most suitable numeric or string error identifier
        message - short (100 characters or less) description of the error
        detail - longer (1K characters or less) description of the error
        info - a structure containing additional information which may be useful to the user or
            to report the error
        stack - javascript code context for the error
    */
    function DataSearchError(source, code, message, detail, info) {
        this.source = source;
        this.code = code;
        this.message = message;
        this.detail = detail;
        this.info = info;
        this.stack = new Error().stack;
    }
    DataSearchError.prototype = Object.create(Error.prototype);
    DataSearchError.prototype.constructor = DataSearchError;
    DataSearchError.prototype.name = 'DataSearchError';

    return {
        DataSearchError: DataSearchError
    };
});