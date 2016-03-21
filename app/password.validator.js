System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidator;
    return {
        setters:[],
        execute: function() {
            PasswordValidator = (function () {
                function PasswordValidator() {
                }
                PasswordValidator.hasRequiredLength = function (control) {
                    if (control.value.length > 0 && control.value.length <= 4)
                        return { toShort: true, minimumLength: 5 };
                    return null;
                };
                PasswordValidator.hasSamePassword = function (passwordKey, confirmPasswordKey) {
                    return function (group) {
                        var password = group.controls[passwordKey], confirmPassword = group.controls[confirmPasswordKey];
                        if (password.value != confirmPassword.value)
                            return { doesNotMatch: true };
                    };
                };
                return PasswordValidator;
            }());
            exports_1("PasswordValidator", PasswordValidator);
        }
    }
});
//# sourceMappingURL=password.validator.js.map