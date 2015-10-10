var searchIndex = {};
searchIndex['conv'] = {"items":[[0,"","conv","This crate provides a number of conversion traits with more specific semantics than those provided by `as` or `From`/`Into`.",null,null],[4,"DefaultApprox","","The \"default\" approximation scheme.  This scheme does whatever would generally be expected of a lossy conversion, assuming no additional context or instruction is given.",null,null],[4,"Wrapping","","This scheme is used to convert a value by \"wrapping\" it into a narrower range.",null,null],[4,"RoundToNearest","","This scheme is used to convert a value by rounding it to the nearest representable value, with ties rounding away from zero.",null,null],[4,"RoundToNegInf","","This scheme is used to convert a value by rounding it toward negative infinity to the nearest representable value.",null,null],[4,"RoundToPosInf","","This scheme is used to convert a value by rounding it toward positive infinity to the nearest representable value.",null,null],[4,"RoundToZero","","This scheme is used to convert a value by rounding it toward zero to the nearest representable value.",null,null],[0,"macros","","This module provides convenience macros to help with implementing the conversion traits.",null,null],[0,"prelude","","Publicly re-exports the most generally useful set of items.",null,null],[0,"errors","","This module defines the various error types that can be produced by a failed conversion.",null,null],[3,"Unrepresentable","conv::errors","Indicates that the conversion failed because the value was not representable.",null,null],[3,"Underflow","","Indicates that the conversion failed due to an underflow.",null,null],[3,"Overflow","","Indicates that the conversion failed due to an overflow.",null,null],[4,"GeneralError","","A general error enumeration that subsumes all other conversion errors.",null,null],[13,"Underflow","","Input underflowed the target type.",0,null],[13,"Overflow","","Input overflowed the target type.",0,null],[13,"Unrepresentable","","Input was not representable in the target type.",0,null],[4,"GeneralErrorKind","","A general error enumeration that subsumes all other conversion errors, but discards all input payloads the errors may be carrying.",null,null],[13,"Underflow","","Input underflowed the target type.",1,null],[13,"Overflow","","Input overflowed the target type.",1,null],[13,"Unrepresentable","","Input was not representable in the target type.",1,null],[4,"NoError","","Indicates that it is not possible for the conversion to fail.",null,null],[4,"FloatError","","Indicates that a conversion from a floating point type failed.",null,null],[13,"Underflow","","Input underflowed the target type.",2,null],[13,"Overflow","","Input overflowed the target type.",2,null],[13,"NotANumber","","Input was not-a-number, which the target type could not represent.",2,null],[4,"RangeError","","Indicates that a conversion failed due to a range error.",null,null],[13,"Underflow","","Input underflowed the target type.",3,null],[13,"Overflow","","Input overflowed the target type.",3,null],[4,"RangeErrorKind","","Indicates that a conversion failed due to a range error.",null,null],[13,"Underflow","","Input underflowed the target type.",4,null],[13,"Overflow","","Input overflowed the target type.",4,null],[8,"Saturate","","Saturates a `Result`.",null,null],[16,"Output","","The result of saturating.",5,null],[10,"saturate","","Replaces an overflow or underflow error with a saturated value.",5,{"inputs":[{"name":"saturate"}],"output":{"name":"output"}}],[8,"UnwrapOk","","Safely unwrap a `Result` that cannot contain an error.",null,null],[10,"unwrap_ok","","Unwraps a `Result` without possibility of failing.",6,{"inputs":[{"name":"unwrapok"}],"output":{"name":"t"}}],[8,"UnwrapOrInf","","Unwrap a conversion by saturating to infinity.",null,null],[16,"Output","","The result of unwrapping.",7,null],[10,"unwrap_or_inf","","Either unwraps the successfully converted value, or saturates to infinity in the \"direction\" of overflow/underflow.",7,{"inputs":[{"name":"unwraporinf"}],"output":{"name":"output"}}],[8,"UnwrapOrInvalid","","Unwrap a conversion by replacing a failure with an invalid sentinel value.",null,null],[16,"Output","","The result of unwrapping.",8,null],[10,"unwrap_or_invalid","","Either unwraps the successfully converted value, or returns the output type's invalid sentinel value.",8,{"inputs":[{"name":"unwraporinvalid"}],"output":{"name":"output"}}],[8,"UnwrapOrSaturate","","Unwrap a conversion by saturating.",null,null],[16,"Output","","The result of unwrapping.",9,null],[10,"unwrap_or_saturate","","Either unwraps the successfully converted value, or saturates in the \"direction\" of overflow/underflow.",9,{"inputs":[{"name":"unwraporsaturate"}],"output":{"name":"output"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"bool"}}],[11,"cmp","","",0,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"ordering"}}],[11,"eq","","",0,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"generalerror"},{"name":"generalerror"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"generalerror"}],"output":{"name":"generalerror"}}],[11,"into_inner","","Returns the value stored in this error.",0,{"inputs":[{"name":"generalerror"}],"output":{"name":"t"}}],[11,"fmt","","",0,{"inputs":[{"name":"generalerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"generalerror"},{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",0,{"inputs":[{"name":"generalerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"generalerror"}],"output":{"name":"str"}}],[11,"from","","",0,{"inputs":[{"name":"generalerror"},{"name":"unrepresentable"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"generalerror"},{"name":"underflow"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"generalerror"},{"name":"overflow"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"generalerror"},{"name":"rangeerror"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"generalerror"},{"name":"floaterror"}],"output":{"name":"generalerror"}}],[11,"fmt","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"option"}}],[11,"lt","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"bool"}}],[11,"le","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"bool"}}],[11,"gt","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"bool"}}],[11,"ge","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"bool"}}],[11,"cmp","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"ordering"}}],[11,"eq","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerrorkind"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"generalerrorkind"}],"output":{"name":"generalerrorkind"}}],[11,"from","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",1,{"inputs":[{"name":"generalerrorkind"}],"output":{"name":"str"}}],[11,"from","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"unrepresentable"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"underflow"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"overflow"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"rangeerror"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"generalerror"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"generalerrorkind"},{"name":"floaterror"}],"output":{"name":"generalerrorkind"}}],[11,"fmt","","",10,{"inputs":[{"name":"noerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"partial_cmp","","",10,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"option"}}],[11,"lt","","",10,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"bool"}}],[11,"le","","",10,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"bool"}}],[11,"gt","","",10,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"bool"}}],[11,"ge","","",10,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"bool"}}],[11,"cmp","","",10,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"ordering"}}],[11,"eq","","",10,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"bool"}}],[11,"ne","","",10,{"inputs":[{"name":"noerror"},{"name":"noerror"}],"output":{"name":"bool"}}],[11,"clone","","",10,{"inputs":[{"name":"noerror"}],"output":{"name":"noerror"}}],[11,"fmt","","",10,{"inputs":[{"name":"noerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",10,{"inputs":[{"name":"noerror"}],"output":{"name":"str"}}],[11,"partial_cmp","","",11,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"option"}}],[11,"lt","","",11,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"bool"}}],[11,"le","","",11,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"bool"}}],[11,"gt","","",11,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"bool"}}],[11,"ge","","",11,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"bool"}}],[11,"cmp","","",11,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"ordering"}}],[11,"eq","","",11,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"bool"}}],[11,"ne","","",11,{"inputs":[{"name":"unrepresentable"},{"name":"unrepresentable"}],"output":{"name":"bool"}}],[11,"clone","","",11,{"inputs":[{"name":"unrepresentable"}],"output":{"name":"unrepresentable"}}],[11,"into_inner","","Returns the value stored in this error.",11,{"inputs":[{"name":"unrepresentable"}],"output":{"name":"t"}}],[11,"fmt","","",11,{"inputs":[{"name":"unrepresentable"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",11,{"inputs":[{"name":"unrepresentable"},{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",11,{"inputs":[{"name":"unrepresentable"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",11,{"inputs":[{"name":"unrepresentable"}],"output":{"name":"str"}}],[11,"partial_cmp","","",12,{"inputs":[{"name":"underflow"},{"name":"underflow"}],"output":{"name":"option"}}],[11,"lt","","",12,{"inputs":[{"name":"underflow"},{"name":"underflow"}],"output":{"name":"bool"}}],[11,"le","","",12,{"inputs":[{"name":"underflow"},{"name":"underflow"}],"output":{"name":"bool"}}],[11,"gt","","",12,{"inputs":[{"name":"underflow"},{"name":"underflow"}],"output":{"name":"bool"}}],[11,"ge","","",12,{"inputs":[{"name":"underflow"},{"name":"underflow"}],"output":{"name":"bool"}}],[11,"cmp","","",12,{"inputs":[{"name":"underflow"},{"name":"underflow"}],"output":{"name":"ordering"}}],[11,"eq","","",12,{"inputs":[{"name":"underflow"},{"name":"underflow"}],"output":{"name":"bool"}}],[11,"ne","","",12,{"inputs":[{"name":"underflow"},{"name":"underflow"}],"output":{"name":"bool"}}],[11,"clone","","",12,{"inputs":[{"name":"underflow"}],"output":{"name":"underflow"}}],[11,"into_inner","","Returns the value stored in this error.",12,{"inputs":[{"name":"underflow"}],"output":{"name":"t"}}],[11,"fmt","","",12,{"inputs":[{"name":"underflow"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",12,{"inputs":[{"name":"underflow"},{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",12,{"inputs":[{"name":"underflow"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",12,{"inputs":[{"name":"underflow"}],"output":{"name":"str"}}],[11,"partial_cmp","","",13,{"inputs":[{"name":"overflow"},{"name":"overflow"}],"output":{"name":"option"}}],[11,"lt","","",13,{"inputs":[{"name":"overflow"},{"name":"overflow"}],"output":{"name":"bool"}}],[11,"le","","",13,{"inputs":[{"name":"overflow"},{"name":"overflow"}],"output":{"name":"bool"}}],[11,"gt","","",13,{"inputs":[{"name":"overflow"},{"name":"overflow"}],"output":{"name":"bool"}}],[11,"ge","","",13,{"inputs":[{"name":"overflow"},{"name":"overflow"}],"output":{"name":"bool"}}],[11,"cmp","","",13,{"inputs":[{"name":"overflow"},{"name":"overflow"}],"output":{"name":"ordering"}}],[11,"eq","","",13,{"inputs":[{"name":"overflow"},{"name":"overflow"}],"output":{"name":"bool"}}],[11,"ne","","",13,{"inputs":[{"name":"overflow"},{"name":"overflow"}],"output":{"name":"bool"}}],[11,"clone","","",13,{"inputs":[{"name":"overflow"}],"output":{"name":"overflow"}}],[11,"into_inner","","Returns the value stored in this error.",13,{"inputs":[{"name":"overflow"}],"output":{"name":"t"}}],[11,"fmt","","",13,{"inputs":[{"name":"overflow"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",13,{"inputs":[{"name":"overflow"},{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",13,{"inputs":[{"name":"overflow"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",13,{"inputs":[{"name":"overflow"}],"output":{"name":"str"}}],[11,"partial_cmp","","",2,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"option"}}],[11,"lt","","",2,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"bool"}}],[11,"le","","",2,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"bool"}}],[11,"gt","","",2,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"bool"}}],[11,"ge","","",2,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"bool"}}],[11,"cmp","","",2,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"ordering"}}],[11,"eq","","",2,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"floaterror"},{"name":"floaterror"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"floaterror"}],"output":{"name":"floaterror"}}],[11,"into_inner","","Returns the value stored in this error.",2,{"inputs":[{"name":"floaterror"}],"output":{"name":"t"}}],[11,"fmt","","",2,{"inputs":[{"name":"floaterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",2,{"inputs":[{"name":"floaterror"},{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",2,{"inputs":[{"name":"floaterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",2,{"inputs":[{"name":"floaterror"}],"output":{"name":"str"}}],[11,"from","","",2,{"inputs":[{"name":"floaterror"},{"name":"underflow"}],"output":{"name":"self"}}],[11,"from","","",2,{"inputs":[{"name":"floaterror"},{"name":"overflow"}],"output":{"name":"self"}}],[11,"from","","",2,{"inputs":[{"name":"floaterror"},{"name":"rangeerror"}],"output":{"name":"self"}}],[11,"partial_cmp","","",3,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"option"}}],[11,"lt","","",3,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"bool"}}],[11,"le","","",3,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"bool"}}],[11,"gt","","",3,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"bool"}}],[11,"ge","","",3,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"bool"}}],[11,"cmp","","",3,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"ordering"}}],[11,"eq","","",3,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"rangeerror"},{"name":"rangeerror"}],"output":{"name":"bool"}}],[11,"clone","","",3,{"inputs":[{"name":"rangeerror"}],"output":{"name":"rangeerror"}}],[11,"into_inner","","Returns the value stored in this error.",3,{"inputs":[{"name":"rangeerror"}],"output":{"name":"t"}}],[11,"fmt","","",3,{"inputs":[{"name":"rangeerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",3,{"inputs":[{"name":"rangeerror"},{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",3,{"inputs":[{"name":"rangeerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",3,{"inputs":[{"name":"rangeerror"}],"output":{"name":"str"}}],[11,"from","","",3,{"inputs":[{"name":"rangeerror"},{"name":"underflow"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"rangeerror"},{"name":"overflow"}],"output":{"name":"self"}}],[11,"fmt","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"partial_cmp","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"option"}}],[11,"lt","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"bool"}}],[11,"le","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"bool"}}],[11,"gt","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"bool"}}],[11,"ge","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"bool"}}],[11,"cmp","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"ordering"}}],[11,"eq","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerrorkind"}],"output":{"name":"bool"}}],[11,"clone","","",4,{"inputs":[{"name":"rangeerrorkind"}],"output":{"name":"rangeerrorkind"}}],[11,"from","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"noerror"}],"output":{"name":"self"}}],[11,"fmt","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",4,{"inputs":[{"name":"rangeerrorkind"}],"output":{"name":"str"}}],[11,"from","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"underflow"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"overflow"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"rangeerrorkind"},{"name":"rangeerror"}],"output":{"name":"self"}}],[11,"saturate","core::result","",14,{"inputs":[{"name":"result"}],"output":{"name":"output"}}],[11,"saturate","","",14,{"inputs":[{"name":"result"}],"output":{"name":"output"}}],[11,"saturate","","",14,{"inputs":[{"name":"result"}],"output":{"name":"output"}}],[11,"unwrap_ok","","",14,{"inputs":[{"name":"result"}],"output":{"name":"t"}}],[11,"unwrap_or_inf","","",14,{"inputs":[{"name":"result"}],"output":{"name":"t"}}],[11,"unwrap_or_invalid","","",14,{"inputs":[{"name":"result"}],"output":{"name":"t"}}],[11,"unwrap_or_saturate","","",14,{"inputs":[{"name":"result"}],"output":{"name":"t"}}],[0,"misc","conv","This module defines some additional traits not *directly* tied to conversions.",null,null],[8,"Saturated","conv::misc","This trait indicates that values of a type can be logically \"saturated\".",null,null],[10,"saturated_max","","Returns the type's saturated, maximum value.",15,{"inputs":[{"name":"saturated"}],"output":{"name":"self"}}],[10,"saturated_min","","Returns the type's saturated, minimum value.",15,{"inputs":[{"name":"saturated"}],"output":{"name":"self"}}],[8,"InvalidSentinel","","This trait indicates that a type has an \"invalid\" sentinel value.",null,null],[10,"invalid_sentinel","","Returns the type's \"invalid\" sentinel value.",16,{"inputs":[{"name":"invalidsentinel"}],"output":{"name":"self"}}],[8,"SignedInfinity","","This trait indicates that a type has positive and negative \"infinity\" values.",null,null],[10,"neg_infinity","","Returns the type's positive infinity value.",17,{"inputs":[{"name":"signedinfinity"}],"output":{"name":"self"}}],[10,"pos_infinity","","Returns the type's negative infinity value.",17,{"inputs":[{"name":"signedinfinity"}],"output":{"name":"self"}}],[8,"ApproxFrom","conv","This trait is used to perform a conversion that is permitted to approximate the result, but *not* to wrap or saturate the result to fit into the destination type's representable range.",null,null],[16,"Err","","The error type produced by a failed conversion.",18,null],[10,"approx_from","","Convert the given value into an approximately equivalent representation.",18,{"inputs":[{"name":"approxfrom"},{"name":"src"}],"output":{"name":"result"}}],[8,"ApproxInto","","This is the dual of `ApproxFrom`; see that trait for information.",null,null],[16,"Err","","The error type produced by a failed conversion.",19,null],[10,"approx_into","","Convert the subject into an approximately equivalent representation.",19,{"inputs":[{"name":"approxinto"}],"output":{"name":"result"}}],[8,"ApproxScheme","","This trait is used to mark approximation scheme types.",null,null],[8,"TryFrom","","This trait is used to perform a conversion between different semantic types which might fail.",null,null],[16,"Err","","The error type produced by a failed conversion.",20,null],[10,"try_from","","Convert the given value into the subject type.",20,{"inputs":[{"name":"tryfrom"},{"name":"src"}],"output":{"name":"result"}}],[8,"TryInto","","This is the dual of `TryFrom`; see that trait for information.",null,null],[16,"Err","","The error type produced by a failed conversion.",21,null],[10,"try_into","","Convert the subject into the destination type.",21,{"inputs":[{"name":"tryinto"}],"output":{"name":"result"}}],[8,"ValueFrom","","This trait is used to perform an exact, value-preserving conversion.",null,null],[16,"Err","","The error type produced by a failed conversion.",22,null],[10,"value_from","","Convert the given value into an exactly equivalent representation.",22,{"inputs":[{"name":"valuefrom"},{"name":"src"}],"output":{"name":"result"}}],[8,"ValueInto","","This is the dual of `ValueFrom`; see that trait for information.",null,null],[16,"Err","","The error type produced by a failed conversion.",23,null],[10,"value_into","","Convert the subject into an exactly equivalent representation.",23,{"inputs":[{"name":"valueinto"}],"output":{"name":"result"}}],[8,"ConvUtil","","This extension trait exists to simplify using various conversions.",null,null],[11,"approx_as","","Approximate the subject to a given type with the default scheme.",24,{"inputs":[{"name":"convutil"}],"output":{"name":"result"}}],[11,"approx_as_by","","Approximate the subject to a given type with a specific scheme.",24,{"inputs":[{"name":"convutil"}],"output":{"name":"result"}}],[11,"into_as","","Convert the subject to a given type.",24,{"inputs":[{"name":"convutil"}],"output":{"name":"dst"}}],[11,"try_as","","Attempt to convert the subject to a given type.",24,{"inputs":[{"name":"convutil"}],"output":{"name":"result"}}],[11,"value_as","","Attempt a value conversion of the subject to a given type.",24,{"inputs":[{"name":"convutil"}],"output":{"name":"result"}}],[8,"ConvAsUtil","","This extension trait exists to simplify using various conversions.",null,null],[11,"approx","","Approximate the subject with the default scheme.",25,{"inputs":[{"name":"convasutil"}],"output":{"name":"result"}}],[11,"approx_by","","Approximate the subject with a specific scheme.",25,{"inputs":[{"name":"convasutil"}],"output":{"name":"result"}}],[14,"TryFrom!","","See the documentation for the [`macros`](./macros/index.html#tryfrom!) module for details.",null,null]],"paths":[[4,"GeneralError"],[4,"GeneralErrorKind"],[4,"FloatError"],[4,"RangeError"],[4,"RangeErrorKind"],[8,"Saturate"],[8,"UnwrapOk"],[8,"UnwrapOrInf"],[8,"UnwrapOrInvalid"],[8,"UnwrapOrSaturate"],[4,"NoError"],[3,"Unrepresentable"],[3,"Underflow"],[3,"Overflow"],[4,"Result"],[8,"Saturated"],[8,"InvalidSentinel"],[8,"SignedInfinity"],[8,"ApproxFrom"],[8,"ApproxInto"],[8,"TryFrom"],[8,"TryInto"],[8,"ValueFrom"],[8,"ValueInto"],[8,"ConvUtil"],[8,"ConvAsUtil"]]};
initSearch(searchIndex);
