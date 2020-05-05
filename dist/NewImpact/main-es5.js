function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n            query listTrendingHashtags($start: String!, $end: String!) {\n              listTrendingHashtags (start: $start, end: $end){\n              counts\n              sentiment\n              negative\n              neutral\n              positive\n              hashtag\n              start_date\n            }\n          }\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        query listTrendingTopicsMaster($start: String!, $end: String!, $region: String!) {\n            listTrendingTopicsMaster(start: $start, end: $end, region: $region){\n              topic\n              counts\n              sentiment\n              positive\n              negative\n              neutral\n            }\n          }\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n          {\n            listImpactTree{\n              tag\n              level0\n              level1\n              level2\n            }\n          }\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          {\n              listImpactAreas {\n                tag\n                impact_area_id\n                source_parent_id\n                impact_parent_id\n                source_ontology\n              \n              }\n\n          }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      query hashtagMaster($start: String!, $end: String!, $region: String!, $topic:String!) {\n        hashtagMaster(start: $start, end: $end, region: $region, topic: $topic){\n            counts\n            sentiment\n            topic\n            date\n          }\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      query discourseTrendingTopics($start: String!, $end: String!, $region: String!, $topic:String!) {\n        discourseTrendingTopics(start: $start, end: $end, region: $region, topic: $topic){\n            counts\n            sentiment\t\n            topic\n            date\n          }\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/core-js/internals/a-function.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/a-function.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAFunctionJs(module, exports) {
    module.exports = function (it) {
      if (typeof it != 'function') {
        throw TypeError(String(it) + ' is not a function');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/a-possible-prototype.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAPossiblePrototypeJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    module.exports = function (it) {
      if (!isObject(it) && it !== null) {
        throw TypeError("Can't set " + String(it) + ' as a prototype');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/add-to-unscopables.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAddToUnscopablesJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var create = __webpack_require__(
    /*! ../internals/object-create */
    "./node_modules/core-js/internals/object-create.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var UNSCOPABLES = wellKnownSymbol('unscopables');
    var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
    // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

    if (ArrayPrototype[UNSCOPABLES] == undefined) {
      definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create(null)
      });
    } // add a key to Array.prototype[@@unscopables]


    module.exports = function (key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/an-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/an-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAnObjectJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    module.exports = function (it) {
      if (!isObject(it)) {
        throw TypeError(String(it) + ' is not an object');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/array-includes.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/array-includes.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayIncludesJs(module, exports, __webpack_require__) {
    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var toAbsoluteIndex = __webpack_require__(
    /*! ../internals/to-absolute-index */
    "./node_modules/core-js/internals/to-absolute-index.js"); // `Array.prototype.{ indexOf, includes }` methods implementation


    var createMethod = function createMethod(IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value; // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare

        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++]; // eslint-disable-next-line no-self-compare

          if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
        } else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };

    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-species-create.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/array-species-create.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArraySpeciesCreateJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var isArray = __webpack_require__(
    /*! ../internals/is-array */
    "./node_modules/core-js/internals/is-array.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
    // https://tc39.github.io/ecma262/#sec-arrayspeciescreate

    module.exports = function (originalArray, length) {
      var C;

      if (isArray(originalArray)) {
        C = originalArray.constructor; // cross-realm fallback

        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
          C = C[SPECIES];
          if (C === null) C = undefined;
        }
      }

      return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCallWithSafeIterationClosingJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js"); // call something on iterator step with safe closing on error


    module.exports = function (iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
      } catch (error) {
        var returnMethod = iterator['return'];
        if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
        throw error;
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/classof-raw.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/classof-raw.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsClassofRawJs(module, exports) {
    var toString = {}.toString;

    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/classof.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/internals/classof.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsClassofJs(module, exports, __webpack_require__) {
    var TO_STRING_TAG_SUPPORT = __webpack_require__(
    /*! ../internals/to-string-tag-support */
    "./node_modules/core-js/internals/to-string-tag-support.js");

    var classofRaw = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

    var CORRECT_ARGUMENTS = classofRaw(function () {
      return arguments;
    }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

    var tryGet = function tryGet(it, key) {
      try {
        return it[key];
      } catch (error) {
        /* empty */
      }
    }; // getting tag from ES6+ `Object.prototype.toString`


    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
      var O, tag, result;
      return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/copy-constructor-properties.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCopyConstructorPropertiesJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var ownKeys = __webpack_require__(
    /*! ../internals/own-keys */
    "./node_modules/core-js/internals/own-keys.js");

    var getOwnPropertyDescriptorModule = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    module.exports = function (target, source) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/correct-prototype-getter.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCorrectPrototypeGetterJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    module.exports = !fails(function () {
      function F() {
        /* empty */
      }

      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/create-iterator-constructor.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreateIteratorConstructorJs(module, exports, __webpack_require__) {
    "use strict";

    var IteratorPrototype = __webpack_require__(
    /*! ../internals/iterators-core */
    "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;

    var create = __webpack_require__(
    /*! ../internals/object-create */
    "./node_modules/core-js/internals/object-create.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    var setToStringTag = __webpack_require__(
    /*! ../internals/set-to-string-tag */
    "./node_modules/core-js/internals/set-to-string-tag.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js/internals/iterators.js");

    var returnThis = function returnThis() {
      return this;
    };

    module.exports = function (IteratorConstructor, NAME, next) {
      var TO_STRING_TAG = NAME + ' Iterator';
      IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(1, next)
      });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
      Iterators[TO_STRING_TAG] = returnThis;
      return IteratorConstructor;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/create-non-enumerable-property.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreateNonEnumerablePropertyJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    module.exports = DESCRIPTORS ? function (object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/create-property-descriptor.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreatePropertyDescriptorJs(module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/create-property.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/create-property.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreatePropertyJs(module, exports, __webpack_require__) {
    "use strict";

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    module.exports = function (object, key, value) {
      var propertyKey = toPrimitive(key);
      if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/define-iterator.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/define-iterator.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDefineIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var createIteratorConstructor = __webpack_require__(
    /*! ../internals/create-iterator-constructor */
    "./node_modules/core-js/internals/create-iterator-constructor.js");

    var getPrototypeOf = __webpack_require__(
    /*! ../internals/object-get-prototype-of */
    "./node_modules/core-js/internals/object-get-prototype-of.js");

    var setPrototypeOf = __webpack_require__(
    /*! ../internals/object-set-prototype-of */
    "./node_modules/core-js/internals/object-set-prototype-of.js");

    var setToStringTag = __webpack_require__(
    /*! ../internals/set-to-string-tag */
    "./node_modules/core-js/internals/set-to-string-tag.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js/internals/is-pure.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js/internals/iterators.js");

    var IteratorsCore = __webpack_require__(
    /*! ../internals/iterators-core */
    "./node_modules/core-js/internals/iterators-core.js");

    var IteratorPrototype = IteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR = wellKnownSymbol('iterator');
    var KEYS = 'keys';
    var VALUES = 'values';
    var ENTRIES = 'entries';

    var returnThis = function returnThis() {
      return this;
    };

    module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);

      var getIterationMethod = function getIterationMethod(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

        switch (KIND) {
          case KEYS:
            return function keys() {
              return new IteratorConstructor(this, KIND);
            };

          case VALUES:
            return function values() {
              return new IteratorConstructor(this, KIND);
            };

          case ENTRIES:
            return function entries() {
              return new IteratorConstructor(this, KIND);
            };
        }

        return function () {
          return new IteratorConstructor(this);
        };
      };

      var TO_STRING_TAG = NAME + ' Iterator';
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY; // fix native

      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

        if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
            } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
              createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
          } // Set @@toStringTag to native iterators


          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
          if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
        }
      } // fix Array#{values, @@iterator}.name in V8 / FF


      if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        INCORRECT_VALUES_NAME = true;

        defaultIterator = function values() {
          return nativeIterator.call(this);
        };
      } // define iterator


      if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
        createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
      }

      Iterators[NAME] = defaultIterator; // export additional methods

      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            redefine(IterablePrototype, KEY, methods[KEY]);
          }
        } else $({
          target: NAME,
          proto: true,
          forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
      }

      return methods;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/descriptors.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/descriptors.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDescriptorsJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js"); // Thank's IE8 for his funny defineProperty


    module.exports = !fails(function () {
      return Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1] != 7;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/document-create-element.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/document-create-element.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDocumentCreateElementJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var document = global.document; // typeof document.createElement is 'object' in old IE

    var EXISTS = isObject(document) && isObject(document.createElement);

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {};
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/enum-bug-keys.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsEnumBugKeysJs(module, exports) {
    // IE8- don't enum bug keys
    module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
    /***/
  },

  /***/
  "./node_modules/core-js/internals/export.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/export.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsExportJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var getOwnPropertyDescriptor = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js/internals/set-global.js");

    var copyConstructorProperties = __webpack_require__(
    /*! ../internals/copy-constructor-properties */
    "./node_modules/core-js/internals/copy-constructor-properties.js");

    var isForced = __webpack_require__(
    /*! ../internals/is-forced */
    "./node_modules/core-js/internals/is-forced.js");
    /*
      options.target      - name of the target object
      options.global      - target is the global object
      options.stat        - export as static methods of target
      options.proto       - export as prototype methods of target
      options.real        - real prototype method for the `pure` version
      options.forced      - export even if the native feature is available
      options.bind        - bind methods to the target, required for the `pure` version
      options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
      options.unsafe      - use the simple assignment of property instead of delete + defineProperty
      options.sham        - add a flag to not completely full polyfills
      options.enumerable  - export as enumerable property
      options.noTargetGet - prevent calling a getter on target
    */


    module.exports = function (options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;

      if (GLOBAL) {
        target = global;
      } else if (STATIC) {
        target = global[TARGET] || setGlobal(TARGET, {});
      } else {
        target = (global[TARGET] || {}).prototype;
      }

      if (target) for (key in source) {
        sourceProperty = source[key];

        if (options.noTargetGet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];

        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

        if (!FORCED && targetProperty !== undefined) {
          if (typeof sourceProperty === typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        } // add a flag to not completely full polyfills


        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(sourceProperty, 'sham', true);
        } // extend global


        redefine(target, key, sourceProperty, options);
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/fails.js":
  /*!*************************************************!*\
    !*** ./node_modules/core-js/internals/fails.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFailsJs(module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/function-bind-context.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js/internals/function-bind-context.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFunctionBindContextJs(module, exports, __webpack_require__) {
    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js/internals/a-function.js"); // optional / simple context binding


    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;

      switch (length) {
        case 0:
          return function () {
            return fn.call(that);
          };

        case 1:
          return function (a) {
            return fn.call(that, a);
          };

        case 2:
          return function (a, b) {
            return fn.call(that, a, b);
          };

        case 3:
          return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
      }

      return function ()
      /* ...args */
      {
        return fn.apply(that, arguments);
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/get-built-in.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/get-built-in.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGetBuiltInJs(module, exports, __webpack_require__) {
    var path = __webpack_require__(
    /*! ../internals/path */
    "./node_modules/core-js/internals/path.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var aFunction = function aFunction(variable) {
      return typeof variable == 'function' ? variable : undefined;
    };

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/get-iterator-method.js":
  /*!***************************************************************!*\
    !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGetIteratorMethodJs(module, exports, __webpack_require__) {
    var classof = __webpack_require__(
    /*! ../internals/classof */
    "./node_modules/core-js/internals/classof.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js/internals/iterators.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var ITERATOR = wellKnownSymbol('iterator');

    module.exports = function (it) {
      if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/global.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/global.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGlobalJs(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */
    (function (global) {
      var check = function check(it) {
        return it && it.Math == Math && it;
      }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


      module.exports = // eslint-disable-next-line no-undef
      check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func
      Function('return this')();
      /* WEBPACK VAR INJECTION */
    }).call(this, __webpack_require__(
    /*! ./../../webpack/buildin/global.js */
    "./node_modules/webpack/buildin/global.js"));
    /***/
  },

  /***/
  "./node_modules/core-js/internals/has.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/internals/has.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHasJs(module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;

    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/hidden-keys.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/hidden-keys.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHiddenKeysJs(module, exports) {
    module.exports = {};
    /***/
  },

  /***/
  "./node_modules/core-js/internals/html.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/html.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHtmlJs(module, exports, __webpack_require__) {
    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    module.exports = getBuiltIn('document', 'documentElement');
    /***/
  },

  /***/
  "./node_modules/core-js/internals/ie8-dom-define.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIe8DomDefineJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var createElement = __webpack_require__(
    /*! ../internals/document-create-element */
    "./node_modules/core-js/internals/document-create-element.js"); // Thank's IE8 for his funny defineProperty


    module.exports = !DESCRIPTORS && !fails(function () {
      return Object.defineProperty(createElement('div'), 'a', {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/indexed-object.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/indexed-object.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIndexedObjectJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js");

    var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

    module.exports = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins
      return !Object('z').propertyIsEnumerable(0);
    }) ? function (it) {
      return classof(it) == 'String' ? split.call(it, '') : Object(it);
    } : Object;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/inspect-source.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/inspect-source.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsInspectSourceJs(module, exports, __webpack_require__) {
    var store = __webpack_require__(
    /*! ../internals/shared-store */
    "./node_modules/core-js/internals/shared-store.js");

    var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

    if (typeof store.inspectSource != 'function') {
      store.inspectSource = function (it) {
        return functionToString.call(it);
      };
    }

    module.exports = store.inspectSource;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/internal-state.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/internal-state.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsInternalStateJs(module, exports, __webpack_require__) {
    var NATIVE_WEAK_MAP = __webpack_require__(
    /*! ../internals/native-weak-map */
    "./node_modules/core-js/internals/native-weak-map.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var objectHas = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js/internals/shared-key.js");

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    var WeakMap = global.WeakMap;
    var set, get, has;

    var enforce = function enforce(it) {
      return has(it) ? get(it) : set(it, {});
    };

    var getterFor = function getterFor(TYPE) {
      return function (it) {
        var state;

        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        }

        return state;
      };
    };

    if (NATIVE_WEAK_MAP) {
      var store = new WeakMap();
      var wmget = store.get;
      var wmhas = store.has;
      var wmset = store.set;

      set = function set(it, metadata) {
        wmset.call(store, it, metadata);
        return metadata;
      };

      get = function get(it) {
        return wmget.call(store, it) || {};
      };

      has = function has(it) {
        return wmhas.call(store, it);
      };
    } else {
      var STATE = sharedKey('state');
      hiddenKeys[STATE] = true;

      set = function set(it, metadata) {
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };

      get = function get(it) {
        return objectHas(it, STATE) ? it[STATE] : {};
      };

      has = function has(it) {
        return objectHas(it, STATE);
      };
    }

    module.exports = {
      set: set,
      get: get,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-array-iterator-method.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsArrayIteratorMethodJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js/internals/iterators.js");

    var ITERATOR = wellKnownSymbol('iterator');
    var ArrayPrototype = Array.prototype; // check on default Array iterator

    module.exports = function (it) {
      return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/is-array.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/is-array.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsArrayJs(module, exports, __webpack_require__) {
    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js"); // `IsArray` abstract operation
    // https://tc39.github.io/ecma262/#sec-isarray


    module.exports = Array.isArray || function isArray(arg) {
      return classof(arg) == 'Array';
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/is-forced.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/is-forced.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsForcedJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var replacement = /#|\.prototype\./;

    var isForced = function isForced(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
    };

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = 'N';
    var POLYFILL = isForced.POLYFILL = 'P';
    module.exports = isForced;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/is-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsObjectJs(module, exports) {
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/is-pure.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/internals/is-pure.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsPureJs(module, exports) {
    module.exports = false;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/iterate.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/internals/iterate.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIterateJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var isArrayIteratorMethod = __webpack_require__(
    /*! ../internals/is-array-iterator-method */
    "./node_modules/core-js/internals/is-array-iterator-method.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var bind = __webpack_require__(
    /*! ../internals/function-bind-context */
    "./node_modules/core-js/internals/function-bind-context.js");

    var getIteratorMethod = __webpack_require__(
    /*! ../internals/get-iterator-method */
    "./node_modules/core-js/internals/get-iterator-method.js");

    var callWithSafeIterationClosing = __webpack_require__(
    /*! ../internals/call-with-safe-iteration-closing */
    "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

    var Result = function Result(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };

    var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
      var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
      var iterator, iterFn, index, length, result, next, step;

      if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = toLength(iterable.length); length > index; index++) {
            result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
            if (result && result instanceof Result) return result;
          }

          return new Result(false);
        }

        iterator = iterFn.call(iterable);
      }

      next = iterator.next;

      while (!(step = next.call(iterator)).done) {
        result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
        if (typeof result == 'object' && result && result instanceof Result) return result;
      }

      return new Result(false);
    };

    iterate.stop = function (result) {
      return new Result(true, result);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/iterators-core.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/iterators-core.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIteratorsCoreJs(module, exports, __webpack_require__) {
    "use strict";

    var getPrototypeOf = __webpack_require__(
    /*! ../internals/object-get-prototype-of */
    "./node_modules/core-js/internals/object-get-prototype-of.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js/internals/is-pure.js");

    var ITERATOR = wellKnownSymbol('iterator');
    var BUGGY_SAFARI_ITERATORS = false;

    var returnThis = function returnThis() {
      return this;
    }; // `%IteratorPrototype%` object
    // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object


    var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

    if ([].keys) {
      arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

      if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }

    if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

    if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
      createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
    }

    module.exports = {
      IteratorPrototype: IteratorPrototype,
      BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/iterators.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/iterators.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIteratorsJs(module, exports) {
    module.exports = {};
    /***/
  },

  /***/
  "./node_modules/core-js/internals/native-symbol.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/native-symbol.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsNativeSymbolJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
      // Chrome 38 Symbol has incorrect toString conversion
      // eslint-disable-next-line no-undef
      return !String(Symbol());
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/native-weak-map.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/native-weak-map.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsNativeWeakMapJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var inspectSource = __webpack_require__(
    /*! ../internals/inspect-source */
    "./node_modules/core-js/internals/inspect-source.js");

    var WeakMap = global.WeakMap;
    module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-create.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/object-create.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectCreateJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var defineProperties = __webpack_require__(
    /*! ../internals/object-define-properties */
    "./node_modules/core-js/internals/object-define-properties.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js/internals/enum-bug-keys.js");

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    var html = __webpack_require__(
    /*! ../internals/html */
    "./node_modules/core-js/internals/html.js");

    var documentCreateElement = __webpack_require__(
    /*! ../internals/document-create-element */
    "./node_modules/core-js/internals/document-create-element.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js/internals/shared-key.js");

    var GT = '>';
    var LT = '<';
    var PROTOTYPE = 'prototype';
    var SCRIPT = 'script';
    var IE_PROTO = sharedKey('IE_PROTO');

    var EmptyConstructor = function EmptyConstructor() {
      /* empty */
    };

    var scriptTag = function scriptTag(content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
    }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


    var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
      activeXDocument.write(scriptTag(''));
      activeXDocument.close();
      var temp = activeXDocument.parentWindow.Object;
      activeXDocument = null; // avoid memory leak

      return temp;
    }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


    var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = documentCreateElement('iframe');
      var JS = 'java' + SCRIPT + ':';
      var iframeDocument;
      iframe.style.display = 'none';
      html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag('document.F=Object'));
      iframeDocument.close();
      return iframeDocument.F;
    }; // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug


    var activeXDocument;

    var _NullProtoObject = function NullProtoObject() {
      try {
        /* global ActiveXObject */
        activeXDocument = document.domain && new ActiveXObject('htmlfile');
      } catch (error) {
        /* ignore */
      }

      _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
      var length = enumBugKeys.length;

      while (length--) {
        delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      }

      return _NullProtoObject();
    };

    hiddenKeys[IE_PROTO] = true; // `Object.create` method
    // https://tc39.github.io/ecma262/#sec-object.create

    module.exports = Object.create || function create(O, Properties) {
      var result;

      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

        result[IE_PROTO] = O;
      } else result = _NullProtoObject();

      return Properties === undefined ? result : defineProperties(result, Properties);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-define-properties.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/object-define-properties.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectDefinePropertiesJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var objectKeys = __webpack_require__(
    /*! ../internals/object-keys */
    "./node_modules/core-js/internals/object-keys.js"); // `Object.defineProperties` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperties


    module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;

      while (length > index) {
        definePropertyModule.f(O, key = keys[index++], Properties[key]);
      }

      return O;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-define-property.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-define-property.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectDefinePropertyJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ../internals/ie8-dom-define */
    "./node_modules/core-js/internals/ie8-dom-define.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperty

    exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return nativeDefineProperty(O, P, Attributes);
      } catch (error) {
        /* empty */
      }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertyDescriptorJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var propertyIsEnumerableModule = __webpack_require__(
    /*! ../internals/object-property-is-enumerable */
    "./node_modules/core-js/internals/object-property-is-enumerable.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ../internals/ie8-dom-define */
    "./node_modules/core-js/internals/ie8-dom-define.js");

    var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

    exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return nativeGetOwnPropertyDescriptor(O, P);
      } catch (error) {
        /* empty */
      }
      if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-names.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertyNamesJs(module, exports, __webpack_require__) {
    var internalObjectKeys = __webpack_require__(
    /*! ../internals/object-keys-internal */
    "./node_modules/core-js/internals/object-keys-internal.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js/internals/enum-bug-keys.js");

    var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-symbols.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertySymbolsJs(module, exports) {
    exports.f = Object.getOwnPropertySymbols;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-prototype-of.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetPrototypeOfJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js/internals/shared-key.js");

    var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
    /*! ../internals/correct-prototype-getter */
    "./node_modules/core-js/internals/correct-prototype-getter.js");

    var IE_PROTO = sharedKey('IE_PROTO');
    var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.getprototypeof

    module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];

      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      }

      return O instanceof Object ? ObjectPrototype : null;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-keys-internal.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectKeysInternalJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var indexOf = __webpack_require__(
    /*! ../internals/array-includes */
    "./node_modules/core-js/internals/array-includes.js").indexOf;

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    module.exports = function (object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;

      for (key in O) {
        !has(hiddenKeys, key) && has(O, key) && result.push(key);
      } // Don't enum bug & hidden keys


      while (names.length > i) {
        if (has(O, key = names[i++])) {
          ~indexOf(result, key) || result.push(key);
        }
      }

      return result;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-keys.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/object-keys.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectKeysJs(module, exports, __webpack_require__) {
    var internalObjectKeys = __webpack_require__(
    /*! ../internals/object-keys-internal */
    "./node_modules/core-js/internals/object-keys-internal.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js/internals/enum-bug-keys.js"); // `Object.keys` method
    // https://tc39.github.io/ecma262/#sec-object.keys


    module.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-property-is-enumerable.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectPropertyIsEnumerableJs(module, exports, __webpack_require__) {
    "use strict";

    var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

    var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
      1: 2
    }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : nativePropertyIsEnumerable;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-set-prototype-of.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectSetPrototypeOfJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var aPossiblePrototype = __webpack_require__(
    /*! ../internals/a-possible-prototype */
    "./node_modules/core-js/internals/a-possible-prototype.js"); // `Object.setPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.

    /* eslint-disable no-proto */


    module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;

      try {
        setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
        setter.call(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
        /* empty */
      }

      return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
        return O;
      };
    }() : undefined);
    /***/
  },

  /***/
  "./node_modules/core-js/internals/own-keys.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/own-keys.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsOwnKeysJs(module, exports, __webpack_require__) {
    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    var getOwnPropertyNamesModule = __webpack_require__(
    /*! ../internals/object-get-own-property-names */
    "./node_modules/core-js/internals/object-get-own-property-names.js");

    var getOwnPropertySymbolsModule = __webpack_require__(
    /*! ../internals/object-get-own-property-symbols */
    "./node_modules/core-js/internals/object-get-own-property-symbols.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js"); // all object keys, includes non-enumerable and symbols


    module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/path.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/path.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsPathJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    module.exports = global;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/redefine.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/redefine.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRedefineJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js/internals/set-global.js");

    var inspectSource = __webpack_require__(
    /*! ../internals/inspect-source */
    "./node_modules/core-js/internals/inspect-source.js");

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js/internals/internal-state.js");

    var getInternalState = InternalStateModule.get;
    var enforceInternalState = InternalStateModule.enforce;
    var TEMPLATE = String(String).split('String');
    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;

      if (typeof value == 'function') {
        if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
        enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }

      if (O === global) {
        if (simple) O[key] = value;else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }

      if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/require-object-coercible.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRequireObjectCoercibleJs(module, exports) {
    // `RequireObjectCoercible` abstract operation
    // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on " + it);
      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/set-global.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/set-global.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSetGlobalJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    module.exports = function (key, value) {
      try {
        createNonEnumerableProperty(global, key, value);
      } catch (error) {
        global[key] = value;
      }

      return value;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/set-to-string-tag.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSetToStringTagJs(module, exports, __webpack_require__) {
    var defineProperty = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js").f;

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var TO_STRING_TAG = wellKnownSymbol('toStringTag');

    module.exports = function (it, TAG, STATIC) {
      if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
        defineProperty(it, TO_STRING_TAG, {
          configurable: true,
          value: TAG
        });
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/shared-key.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/shared-key.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedKeyJs(module, exports, __webpack_require__) {
    var shared = __webpack_require__(
    /*! ../internals/shared */
    "./node_modules/core-js/internals/shared.js");

    var uid = __webpack_require__(
    /*! ../internals/uid */
    "./node_modules/core-js/internals/uid.js");

    var keys = shared('keys');

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/shared-store.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/shared-store.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedStoreJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js/internals/set-global.js");

    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || setGlobal(SHARED, {});
    module.exports = store;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/shared.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/shared.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedJs(module, exports, __webpack_require__) {
    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js/internals/is-pure.js");

    var store = __webpack_require__(
    /*! ../internals/shared-store */
    "./node_modules/core-js/internals/shared-store.js");

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.6.4',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/to-absolute-index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToAbsoluteIndexJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var max = Math.max;
    var min = Math.min; // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

    module.exports = function (index, length) {
      var integer = toInteger(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-indexed-object.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToIndexedObjectJs(module, exports, __webpack_require__) {
    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject = __webpack_require__(
    /*! ../internals/indexed-object */
    "./node_modules/core-js/internals/indexed-object.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-integer.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/to-integer.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToIntegerJs(module, exports) {
    var ceil = Math.ceil;
    var floor = Math.floor; // `ToInteger` abstract operation
    // https://tc39.github.io/ecma262/#sec-tointeger

    module.exports = function (argument) {
      return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-length.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/to-length.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToLengthJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var min = Math.min; // `ToLength` abstract operation
    // https://tc39.github.io/ecma262/#sec-tolength

    module.exports = function (argument) {
      return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/to-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToObjectJs(module, exports, __webpack_require__) {
    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js"); // `ToObject` abstract operation
    // https://tc39.github.io/ecma262/#sec-toobject


    module.exports = function (argument) {
      return Object(requireObjectCoercible(argument));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-primitive.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/to-primitive.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToPrimitiveJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js"); // `ToPrimitive` abstract operation
    // https://tc39.github.io/ecma262/#sec-toprimitive
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string


    module.exports = function (input, PREFERRED_STRING) {
      if (!isObject(input)) return input;
      var fn, val;
      if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
      if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
      if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-string-tag-support.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToStringTagSupportJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    var test = {};
    test[TO_STRING_TAG] = 'z';
    module.exports = String(test) === '[object z]';
    /***/
  },

  /***/
  "./node_modules/core-js/internals/uid.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/internals/uid.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsUidJs(module, exports) {
    var id = 0;
    var postfix = Math.random();

    module.exports = function (key) {
      return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/use-symbol-as-uid.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsUseSymbolAsUidJs(module, exports, __webpack_require__) {
    var NATIVE_SYMBOL = __webpack_require__(
    /*! ../internals/native-symbol */
    "./node_modules/core-js/internals/native-symbol.js");

    module.exports = NATIVE_SYMBOL // eslint-disable-next-line no-undef
    && !Symbol.sham // eslint-disable-next-line no-undef
    && typeof Symbol.iterator == 'symbol';
    /***/
  },

  /***/
  "./node_modules/core-js/internals/well-known-symbol.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsWellKnownSymbolJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var shared = __webpack_require__(
    /*! ../internals/shared */
    "./node_modules/core-js/internals/shared.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var uid = __webpack_require__(
    /*! ../internals/uid */
    "./node_modules/core-js/internals/uid.js");

    var NATIVE_SYMBOL = __webpack_require__(
    /*! ../internals/native-symbol */
    "./node_modules/core-js/internals/native-symbol.js");

    var USE_SYMBOL_AS_UID = __webpack_require__(
    /*! ../internals/use-symbol-as-uid */
    "./node_modules/core-js/internals/use-symbol-as-uid.js");

    var WellKnownSymbolsStore = shared('wks');
    var Symbol = global.Symbol;
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

    module.exports = function (name) {
      if (!has(WellKnownSymbolsStore, name)) {
        if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }

      return WellKnownSymbolsStore[name];
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/es.array.iterator.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayIteratorJs(module, exports, __webpack_require__) {
    "use strict";

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var addToUnscopables = __webpack_require__(
    /*! ../internals/add-to-unscopables */
    "./node_modules/core-js/internals/add-to-unscopables.js");

    var Iterators = __webpack_require__(
    /*! ../internals/iterators */
    "./node_modules/core-js/internals/iterators.js");

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js/internals/internal-state.js");

    var defineIterator = __webpack_require__(
    /*! ../internals/define-iterator */
    "./node_modules/core-js/internals/define-iterator.js");

    var ARRAY_ITERATOR = 'Array Iterator';
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.entries
    // `Array.prototype.keys` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.keys
    // `Array.prototype.values` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.values
    // `Array.prototype[@@iterator]` method
    // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
    // `CreateArrayIterator` internal method
    // https://tc39.github.io/ecma262/#sec-createarrayiterator

    module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        // target
        index: 0,
        // next index
        kind: kind // kind

      }); // `%ArrayIteratorPrototype%.next` method
      // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
    }, function () {
      var state = getInternalState(this);
      var target = state.target;
      var kind = state.kind;
      var index = state.index++;

      if (!target || index >= target.length) {
        state.target = undefined;
        return {
          value: undefined,
          done: true
        };
      }

      if (kind == 'keys') return {
        value: index,
        done: false
      };
      if (kind == 'values') return {
        value: target[index],
        done: false
      };
      return {
        value: [index, target[index]],
        done: false
      };
    }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
    // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
    // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

    Iterators.Arguments = Iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if (typeof window === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'NewImpact';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngb_date_fr_parser_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ngb-date-fr-parser-formatter */
    "./src/app/ngb-date-fr-parser-formatter.ts");
    /* harmony import */


    var _ngb_UTC_string_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ngb-UTC-string-adapter */
    "./src/app/ngb-UTC-string-adapter.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _trending_trending_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./trending/trending.component */
    "./src/app/trending/trending.component.ts");
    /* harmony import */


    var _verbatim_verbatim_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./verbatim/verbatim.component */
    "./src/app/verbatim/verbatim.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./chart/chart.component */
    "./src/app/chart/chart.component.ts");
    /* harmony import */


    var _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./tree-map/tree-map.component */
    "./src/app/tree-map/tree-map.component.ts");
    /* harmony import */


    var ngx_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-chips */
    "./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js");
    /* harmony import */


    var _graphql_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./graphql.module */
    "./src/app/graphql.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"],
        useClass: _ngb_date_fr_parser_formatter__WEBPACK_IMPORTED_MODULE_3__["NgbDateFRParserFormatter"]
      }, {
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"],
        useClass: _ngb_UTC_string_adapter__WEBPACK_IMPORTED_MODULE_4__["NgbUTCStringAdapter"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_13__["TagInputModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_14__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _trending_trending_component__WEBPACK_IMPORTED_MODULE_8__["TrendingComponent"], _verbatim_verbatim_component__WEBPACK_IMPORTED_MODULE_9__["VerbatimComponent"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"], _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_12__["TreeMapComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_13__["TagInputModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_14__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _trending_trending_component__WEBPACK_IMPORTED_MODULE_8__["TrendingComponent"], _verbatim_verbatim_component__WEBPACK_IMPORTED_MODULE_9__["VerbatimComponent"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"], _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_12__["TreeMapComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_13__["TagInputModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_14__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"]],
          exports: [],
          providers: [{
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"],
            useClass: _ngb_date_fr_parser_formatter__WEBPACK_IMPORTED_MODULE_3__["NgbDateFRParserFormatter"]
          }, {
            provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"],
            useClass: _ngb_UTC_string_adapter__WEBPACK_IMPORTED_MODULE_4__["NgbUTCStringAdapter"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chart/chart.component.ts":
  /*!******************************************!*\
    !*** ./src/app/chart/chart.component.ts ***!
    \******************************************/

  /*! exports provided: ChartComponent */

  /***/
  function srcAppChartChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartComponent", function () {
      return ChartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @aws-amplify/pubsub */
    "./node_modules/@aws-amplify/pubsub/lib-esm/index.js");
    /* harmony import */


    var _aws_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../aws-exports */
    "./src/aws-exports.js");
    /* harmony import */


    var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! aws-amplify */
    "./node_modules/aws-amplify/lib-esm/index.js");
    /* harmony import */


    var d3plus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! d3plus */
    "./node_modules/d3plus/es/index.js");
    /* harmony import */


    var _data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! .././data-transfer.service */
    "./src/app/data-transfer.service.ts");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChartComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Click on topics/hashtag to see the trends.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    aws_amplify__WEBPACK_IMPORTED_MODULE_4__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_3__["default"]);

    _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_3__["default"]);

    var ChartComponent =
    /*#__PURE__*/
    function () {
      function ChartComponent(data, apollo) {
        _classCallCheck(this, ChartComponent);

        this.data = data;
        this.apollo = apollo;
        this.text = '';
        this.dates = [];
        this.start = String;
        this.end = String;
        this.empty = true;
        this.topicsChart = [];
        this.hashtagChart = [];
      }

      _createClass(ChartComponent, [{
        key: "plotChart",
        value: function plotChart(chartData) {
          function assignColor(d) {
            if (d === 1) return "green";
            if (d === 0) return "goldenrod";
            if (d === -1) return "red";
            return "grey";
          }

          new d3plus__WEBPACK_IMPORTED_MODULE_5__["LinePlot"]().config({
            data: chartData,
            groupBy: "sentiment",
            x: "date",
            y: "counts",
            xConfig: {
              title: "Dates",
              labels: []
            },
            legendTooltip: {
              tbody: []
            },
            tooltipConfig: {
              title: function title(d) {
                return "Sentiment Count:" + d["counts"];
              },
              tbody: [["Date: ", function (d) {
                return d["date"];
              }]]
            },
            select: "#chart"
          }).render();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.empty = true;
          this.data.share.subscribe(function (x) {
            if (_this.text != x) {
              _this.text = x;
              _this.dates = _this.text.split(' to ');
              _this.start = _this.dates[0];
              _this.end = _this.dates[1];
            }
          });
          this.data.sharedData.subscribe(function (y) {
            if (_this.selectedData != y) {
              _this.selectedData = y;
              _this.selectedData = _this.selectedData.split(' ');
              _this.searchValue = _this.selectedData[0];
              _this.type = _this.selectedData[1];
              _this.type === 'topic' ? _this.getTopicsChart() : _this.getHashtagsChart();
            }
          });
        }
      }, {
        key: "getTopicsChart",
        value: function getTopicsChart() {
          var _this2 = this;

          document.getElementById('chart').innerHTML = '';
          this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject()),
            variables: {
              start: this.start,
              end: this.end,
              region: "King County",
              topic: this.selectedData
            }
          }).subscribe(function (_ref) {
            var data = _ref.data,
                loading = _ref.loading;
            _this2.topicsChart = data && data.discourseTrendingTopics;
          }, function (error) {
            console.log("error is: ", error);
          }).add(function () {
            _this2.empty = false;

            _this2.plotChart(_this2.topicsChart);
          });
        }
      }, {
        key: "getHashtagsChart",
        value: function getHashtagsChart() {
          var _this3 = this;

          document.getElementById('chart').innerHTML = '';
          this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject2()),
            variables: {
              start: this.start,
              end: this.end,
              region: "King County",
              topic: this.searchValue
            }
          }).subscribe(function (_ref2) {
            var data = _ref2.data,
                loading = _ref2.loading;
            _this3.hashtagChart = data && data.hashtagMaster;
          }, function (error) {
            console.log("error is: ", error);
          }).add(function () {
            _this3.empty = false;

            _this3.plotChart(_this3.hashtagChart);
          });
        }
      }]);

      return ChartComponent;
    }();

    ChartComponent.ɵfac = function ChartComponent_Factory(t) {
      return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"]));
    };

    ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChartComponent,
      selectors: [["app-chart"]],
      decls: 2,
      vars: 1,
      consts: [[4, "ngIf"], ["id", "chart"], [1, "text-center", "mt-5", "mx-auto", "px-4"], ["src", "/assets/zero_page_icon.svg", 1, "mb-4", "text-center", "pb-2"], ["id", "emptySearch"], [1, "fas", "fa-exclamation-circle", "mx-2"]],
      template: function ChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChartComponent_div_0_Template, 6, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.empty);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chart',
          templateUrl: './chart.component.html',
          styleUrls: ['./chart.component.css']
        }]
      }], function () {
        return [{
          type: _data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data-transfer.service.ts":
  /*!******************************************!*\
    !*** ./src/app/data-transfer.service.ts ***!
    \******************************************/

  /*! exports provided: DataTransferService */

  /***/
  function srcAppDataTransferServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTransferService", function () {
      return DataTransferService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DataTransferService =
    /*#__PURE__*/
    function () {
      function DataTransferService() {
        _classCallCheck(this, DataTransferService);

        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.share = this.content.asObservable(); //sharing sentiment bifurcation data to chart component

        this.clickedItem = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
        this.sharedData = this.clickedItem.asObservable();
      }

      _createClass(DataTransferService, [{
        key: "updateData",
        value: function updateData(text) {
          this.content.next(text);
        }
      }, {
        key: "updateClickedData",
        value: function updateClickedData(selectedData) {
          this.clickedItem.next(selectedData);
        }
      }]);

      return DataTransferService;
    }();

    DataTransferService.ɵfac = function DataTransferService_Factory(t) {
      return new (t || DataTransferService)();
    };

    DataTransferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataTransferService,
      factory: DataTransferService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTransferService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/graphql.module.ts":
  /*!***********************************!*\
    !*** ./src/app/graphql.module.ts ***!
    \***********************************/

  /*! exports provided: createApollo, GraphQLModule */

  /***/
  function srcAppGraphqlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createApollo", function () {
      return createApollo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
      return GraphQLModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "./node_modules/apollo-angular-link-http/__ivy_ngcc__/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-cache-inmemory */
    "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
    /* harmony import */


    var apollo_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! apollo-env */
    "./node_modules/apollo-env/lib/index.js");
    /* harmony import */


    var apollo_env__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(apollo_env__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var aws_amplify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! aws-amplify */
    "./node_modules/aws-amplify/lib-esm/index.js");
    /* harmony import */


    var _aws_exports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../aws-exports */
    "./src/aws-exports.js");
    /* harmony import */


    var apollo_boost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! apollo-boost */
    "./node_modules/apollo-boost/lib/bundle.esm.js");

    aws_amplify__WEBPACK_IMPORTED_MODULE_5__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_6__["default"]);
    var uri = 'https://hv64oxco7naipotbgrduo7lwla.appsync-api.us-west-2.amazonaws.com/graphql';

    function createApollo(httpLink) {
      var http = httpLink.create({
        uri: uri
      });
      var authLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_7__["ApolloLink"](function (operation, forward) {
        // Use the setContext method to set the HTTP headers.
        operation.setContext({
          headers: {
            "X-Api-Key": "da2-zy5mhx7dlzaxdg4b2gw6vi6wya"
          },
          fetch: apollo_env__WEBPACK_IMPORTED_MODULE_4__["fetch"]
        });
        return forward(operation);
      });
      return {
        link: authLink.concat(http),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]()
      };
    }

    var GraphQLModule = function GraphQLModule() {
      _classCallCheck(this, GraphQLModule);
    };

    GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GraphQLModule
    });
    GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GraphQLModule_Factory(t) {
        return new (t || GraphQLModule)();
      },
      providers: [{
        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
        useFactory: createApollo,
        deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]]
      }],
      imports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GraphQLModule, {
        exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_1__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLinkModule"]],
          providers: [{
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
            useFactory: createApollo,
            deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]]
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @aws-amplify/pubsub */
    "./node_modules/@aws-amplify/pubsub/lib-esm/index.js");
    /* harmony import */


    var _aws_exports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../aws-exports */
    "./src/aws-exports.js");
    /* harmony import */


    var aws_amplify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! aws-amplify */
    "./node_modules/aws-amplify/lib-esm/index.js");
    /* harmony import */


    var _data_transfer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! .././data-transfer.service */
    "./src/app/data-transfer.service.ts");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-chips */
    "./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js");
    /* harmony import */


    var _trending_trending_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../trending/trending.component */
    "./src/app/trending/trending.component.ts");
    /* harmony import */


    var _verbatim_verbatim_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../verbatim/verbatim.component */
    "./src/app/verbatim/verbatim.component.ts");

    var _c0 = ["d"];
    var _c1 = ["myRangeInput"];

    function HeaderComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading...\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_24_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var date_r12 = ctx.date;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.onDateSelection(date_r12);
        })("mouseenter", function HeaderComponent_ng_template_24_Template_span_mouseenter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var date_r12 = ctx.date;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.hoveredDate = date_r12;
        })("mouseleave", function HeaderComponent_ng_template_24_Template_span_mouseleave_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.hoveredDate = null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var date_r12 = ctx.date;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("range", ctx_r4.isFrom(date_r12) || ctx_r4.isTo(date_r12) || ctx_r4.isInside(date_r12) || ctx_r4.isHovered(date_r12))("faded", ctx_r4.isHovered(date_r12) || ctx_r4.isInside(date_r12));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r12.day, " ");
      }
    }

    function HeaderComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_26_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          ctx_r18.getToday(ctx_r18.today, "");
          return _r2.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Today");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_26_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          ctx_r20.getWeek(ctx_r20.today);
          return _r2.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This Week");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_26_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          return _r2.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-trending");
      }
    }

    function HeaderComponent_ng_template_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Verbatim");
      }
    }

    function HeaderComponent_ng_template_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-verbatim");
      }
    }

    function HeaderComponent_ng_template_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "About This Tool");
      }
    }

    function HeaderComponent_ng_template_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return ["Seattle"];
    };

    aws_amplify__WEBPACK_IMPORTED_MODULE_6__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_5__["default"]);

    _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_5__["default"]);

    var now = new Date();

    var equals = function equals(one, two) {
      return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
    };

    var before = function before(one, two) {
      return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ? false : one.day < two.day : one.month < two.month : one.year < two.year;
    };

    var after = function after(one, two) {
      return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ? false : one.day > two.day : one.month > two.month : one.year > two.year;
    };

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(data, apollo, element, renderer, _parserFormatter, calendar) {
        var _this4 = this;

        _classCallCheck(this, HeaderComponent);

        this.data = data;
        this.apollo = apollo;
        this.renderer = renderer;
        this._parserFormatter = _parserFormatter;
        this.calendar = calendar;
        this.listImpactAreas = [];
        this.loading = true;
        this.test = [];
        this.today = this.calendar.getToday();

        this.isHovered = function (date) {
          return _this4.fromDate && !_this4.toDate && _this4.hoveredDate && after(date, _this4.fromDate) && before(date, _this4.hoveredDate);
        };

        this.isInside = function (date) {
          return after(date, _this4.fromDate) && before(date, _this4.toDate);
        };

        this.isFrom = function (date) {
          return equals(date, _this4.fromDate);
        };

        this.isTo = function (date) {
          return equals(date, _this4.toDate);
        };

        this.disabled = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.text = this.calendar.getToday();
          this.getToday(this.text, 'getinitialdate');
          this.text = this.initialDate;
          this.updateText(this.text);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a(_templateObject3())
          }).subscribe(function (_ref3) {
            var data = _ref3.data,
                loading = _ref3.loading;
            _this5.listImpactAreas = data;
            _this5.loading = loading;
          }, function (error) {
            _this5.loading = false;
            _this5.error = error;
            console.log("error is: ", error);
          });
          this.startDate = {
            year: now.getFullYear(),
            month: now.getMonth() + 1,
            day: now.getDate()
          };
          this.maxDate = {
            year: now.getFullYear() + 1,
            month: now.getMonth() + 1,
            day: now.getDate()
          };
          this.minDate = {
            year: 2000,
            month: 1,
            day: 1
          };
        }
      }, {
        key: "updateText",
        value: function updateText(text) {
          this.data.updateData(text);
        }
      }, {
        key: "getToday",
        value: function getToday(date, initialData) {
          var parsed = '';
          var fromDate = new Date(date.year + "-" + date.month + "-" + date.day);
          var time = fromDate.getDay() ? fromDate.getDay() - 1 : 6;
          fromDate = new Date(fromDate.getTime() - time * 24 * 60 * 60 * 1000);
          this.fromDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](fromDate.getFullYear(), fromDate.getMonth() + 1, fromDate.getDate());
          parsed += this._parserFormatter.format(this.fromDate) + ' to ' + this._parserFormatter.format(this.fromDate);

          if (initialData != '') {
            this.initialDate = parsed;
          } else this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', parsed);
        }
      }, {
        key: "getWeek",
        value: function getWeek(date) {
          var fromDate = new Date(date.year + "-" + date.month + "-" + date.day);
          var time = fromDate.getDay() ? fromDate.getDay() - 1 : 6;
          fromDate = new Date(fromDate.getTime() - time * 24 * 60 * 60 * 1000);
          this.fromDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](fromDate.getFullYear(), fromDate.getMonth() + 1, fromDate.getDate());
          var toDate = new Date(fromDate.getTime() + 6 * 24 * 60 * 60 * 1000);
          this.toDate = new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"](toDate.getFullYear(), toDate.getMonth() + 1, toDate.getDate());
          var weekparsed = '';
          weekparsed += this._parserFormatter.format(this.fromDate);
          weekparsed += ' to ' + this._parserFormatter.format(this.toDate);
          this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', weekparsed);
        }
      }, {
        key: "onDateSelection",
        value: function onDateSelection(date) {
          var parsed = '';

          if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
          } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
            this.input.close();
          } else {
            this.toDate = null;
            this.fromDate = date;
          }

          if (this.toDate === null) {
            parsed += this._parserFormatter.format(this.fromDate) + ' to ';
            this.input.close();
          }

          if (this.fromDate) {
            parsed += this._parserFormatter.format(this.fromDate);
          }

          if (this.toDate) {
            parsed += ' to ' + this._parserFormatter.format(this.toDate);
          }

          this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', parsed);
        }
      }, {
        key: "week",
        set: function set(value) {
          this.onChange({
            year: this.fromDate.year,
            week: value
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_transfer_service__WEBPACK_IMPORTED_MODULE_7__["DataTransferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_8__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      viewQuery: function HeaderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.datePick = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myRangeInput = _t.first);
        }
      },
      decls: 44,
      vars: 13,
      consts: [[4, "ngIf"], ["id", "top-nav", 1, "w-100", "text-white"], [1, "navbar", "p-mobile-0"], ["href", "#", 1, ""], [1, "pull-right"], [1, "p-right-80", "p-mobile-0"], ["id", "d-block"], [1, "row"], [1, "col", "d-flex", "place-date-choice"], [1, "inner-wrapper"], [1, "d-inline-block", 3, "ngModel", "removable", "maxItems"], [1, "inner-wrapper", "mt-1"], [1, "px-2"], [1, "form-inline", "d-inline-block"], [1, "form-group"], [1, "input-group"], ["myRangeInput", "myRangeInput", "placeholder", "yyyy-mm-dd to yyyy-mm-dd ", "name", "dp", "ngbDatepicker", "", 1, "form-control", "form-control-sm", 3, "value", "footerTemplate", "dayTemplate", "autoClose", "displayMonths", "maxDate", "minDate", "click", "valueChange"], ["myRangeInput", "", "d", "ngbDatepicker"], ["t", ""], ["footerTemplate", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-light", 3, "click"], [1, "far", "fa-calendar-alt"], ["type", "button", 1, "btn", "btn-sm", "mx-4", 3, "click"], [1, "wrapper"], [1, "main-tabs"], [3, "destroyOnHide"], ["title", "Trending"], ["ngbTabContent", ""], ["ngbTabTitle", ""], [1, "custom-day", 3, "click", "mouseenter", "mouseleave"], [1, "my-0"], [1, "btn", "btn-primary", "btn-sm", "m-2", "float-left", 3, "click"], [1, "btn", "btn-secondary", "btn-sm", "m-2", 3, "click"], [1, "btn", "btn-secondary", "btn-sm", "m-2", "float-right", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "NewImpact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Some Text Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "See what people are saying in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tag-input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "during");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_input_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            return _r2.toggle();
          })("valueChange", function HeaderComponent_Template_input_valueChange_21_listener($event) {
            return ctx.text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeaderComponent_ng_template_24_Template, 2, 5, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderComponent_ng_template_26_Template, 7, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            _r2.toggle();

            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return ctx.updateText(_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ngb-tabset", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngb-tab", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HeaderComponent_ng_template_37_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngb-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HeaderComponent_ng_template_39_Template, 1, 0, "ng-template", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, HeaderComponent_ng_template_40_Template, 1, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngb-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HeaderComponent_ng_template_42_Template, 1, 0, "ng-template", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, HeaderComponent_ng_template_43_Template, 2, 0, "ng-template", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2))("removable", false)("maxItems", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.text)("footerTemplate", _r5)("dayTemplate", _r3)("autoClose", true)("displayMonths", 2)("maxDate", ctx.maxDate)("minDate", ctx.minDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("destroyOnHide", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], ngx_chips__WEBPACK_IMPORTED_MODULE_10__["TagInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabTitle"], _trending_trending_component__WEBPACK_IMPORTED_MODULE_11__["TrendingComponent"], _verbatim_verbatim_component__WEBPACK_IMPORTED_MODULE_12__["VerbatimComponent"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n#top-nav[_ngcontent-%COMP%] {\r\n  background-color: #2098d1;\r\n  position: fixed;\r\n  padding: 7px 10px 11px 19px;\r\n  z-index: 1000;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 100%;\r\n  background-color: #24292E;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 60px;\r\n  z-index: 100;\r\n  padding: 0 80px\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background: #ddd;\r\n  color: black;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  margin-top: 60px;\r\n}\r\n\r\n.nav.nav-tabs[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n}\r\n\r\n\r\n\r\n.custom-day[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 0.185rem 0.25rem;\r\n  display: inline-block;\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n\r\n.custom-day.focused[_ngcontent-%COMP%] {\r\n    background-color: #e6e6e6;\r\n  }\r\n\r\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(2, 117, 216);\r\n    color: white;\r\n  }\r\n\r\n.custom-day.faded[_ngcontent-%COMP%] {\r\n    background-color: rgba(2, 117, 216, 0.5);\r\n  }\r\n\r\n\r\n\r\n@media (min-width: 1200px) {\r\n  .container-fluid[_ngcontent-%COMP%] {\r\n    max-width: 90%;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVFO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHdDQUF3QztFQUMxQzs7QUFFRix5QkFBeUI7O0FBRXpCO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiN0b3AtbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5OGQxO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOiA3cHggMTBweCAxMXB4IDE5cHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG4ubmF2YmFyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MkU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcGFkZGluZzogMCA4MHB4XHJcbn1cclxuXHJcbi5uYXZiYXIgYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ubmF2YmFyIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLm5hdi5uYXYtdGFicyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSBhe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi8qRGF0ZVRpbWVQb3B1cCBDc3MgU3RhcnRzKi9cclxuLmN1c3RvbS1kYXkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbiAgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1kYXkucmFuZ2UsIC5jdXN0b20tZGF5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWRheS5mYWRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xyXG4gIH1cclxuXHJcbi8qRGF0ZVRpbWVQb3B1cCBDU1MgZW5kcyovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _data_transfer_service__WEBPACK_IMPORTED_MODULE_7__["DataTransferService"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_8__["Apollo"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
        }];
      }, {
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["d"]
        }],
        datePick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]
        }],
        myRangeInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['myRangeInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ngb-UTC-string-adapter.ts":
  /*!*******************************************!*\
    !*** ./src/app/ngb-UTC-string-adapter.ts ***!
    \*******************************************/

  /*! exports provided: NgbDateAdapter, NgbUTCStringAdapter */

  /***/
  function srcAppNgbUTCStringAdapterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function () {
      return NgbDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbUTCStringAdapter", function () {
      return NgbUTCStringAdapter;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * Abstract type serving as a DI token for the service converting from your application Date model to internal
     * NgbDateStruct model.
     * A default implementation converting from and to NgbDateStruct is provided for retro-compatibility,
     * but you can provide another implementation to use an alternative format, ie for using with native Date Object.
     */


    var NgbDateAdapter = function NgbDateAdapter() {
      _classCallCheck(this, NgbDateAdapter);
    };

    NgbDateAdapter.ɵfac = function NgbDateAdapter_Factory(t) {
      return new (t || NgbDateAdapter)();
    };

    NgbDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgbDateAdapter,
      factory: NgbDateAdapter.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    var NgbUTCStringAdapter =
    /*#__PURE__*/
    function (_NgbDateAdapter) {
      _inherits(NgbUTCStringAdapter, _NgbDateAdapter);

      function NgbUTCStringAdapter() {
        _classCallCheck(this, NgbUTCStringAdapter);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbUTCStringAdapter).apply(this, arguments));
      }

      _createClass(NgbUTCStringAdapter, [{
        key: "fromModel",

        /**
         * Converts a NgbDateStruct value into NgbDateStruct value
         * @param  {NgbDateStruct} value
         * @return {NgbDateStruct}
         */
        value: function fromModel(date) {
          return date && date.year && date.month && date.day ? {
            year: date.year,
            month: date.month,
            day: date.day
          } : null;
        }
        /**
         * Converts a NgbDateStruct value into NgbDateStruct value
         * @param  {NgbDateStruct} value
         * @return {NgbDateStruct}
         */

      }, {
        key: "toModel",
        value: function toModel(date) {
          return date && date.year && date.month && date.day ? {
            year: date.year,
            month: date.month,
            day: date.day
          } : null;
        }
      }]);

      return NgbUTCStringAdapter;
    }(NgbDateAdapter);

    NgbUTCStringAdapter.ɵfac = function NgbUTCStringAdapter_Factory(t) {
      return ɵNgbUTCStringAdapter_BaseFactory(t || NgbUTCStringAdapter);
    };

    NgbUTCStringAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgbUTCStringAdapter,
      factory: NgbUTCStringAdapter.ɵfac
    });

    var ɵNgbUTCStringAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbUTCStringAdapter);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbUTCStringAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ngb-date-fr-parser-formatter.ts":
  /*!*************************************************!*\
    !*** ./src/app/ngb-date-fr-parser-formatter.ts ***!
    \*************************************************/

  /*! exports provided: NgbDateFRParserFormatter */

  /***/
  function srcAppNgbDateFrParserFormatterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDateFRParserFormatter", function () {
      return NgbDateFRParserFormatter;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function padNumber(value) {
      if (isNumber(value)) {
        return "0".concat(value).slice(-2);
      } else {
        return "";
      }
    }

    function isNumber(value) {
      return !isNaN(toInteger(value));
    }

    function toInteger(value) {
      return parseInt("".concat(value), 10);
    }

    var NgbDateFRParserFormatter =
    /*#__PURE__*/
    function (_ng_bootstrap_ng_boot) {
      _inherits(NgbDateFRParserFormatter, _ng_bootstrap_ng_boot);

      function NgbDateFRParserFormatter() {
        _classCallCheck(this, NgbDateFRParserFormatter);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbDateFRParserFormatter).apply(this, arguments));
      }

      _createClass(NgbDateFRParserFormatter, [{
        key: "parse",
        value: function parse(value) {
          if (value) {
            var dateParts = value.trim().split("/");

            if (dateParts.length === 1 && isNumber(dateParts[0])) {
              return {
                year: toInteger(dateParts[0]),
                month: null,
                day: null
              };
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
              return {
                year: toInteger(dateParts[1]),
                month: toInteger(dateParts[0]),
                day: null
              };
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
              return {
                year: toInteger(dateParts[2]),
                month: toInteger(dateParts[1]),
                day: toInteger(dateParts[0])
              };
            }
          }

          return null;
        }
      }, {
        key: "format",
        value: function format(date) {
          var stringDate = "";

          if (date) {
            stringDate += date.year + "-";
            stringDate += isNumber(date.month) ? padNumber(date.month) + "-" : "";
            stringDate += isNumber(date.day) ? padNumber(date.day) : "";
          }

          return stringDate;
        }
      }]);

      return NgbDateFRParserFormatter;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]);

    NgbDateFRParserFormatter.ɵfac = function NgbDateFRParserFormatter_Factory(t) {
      return ɵNgbDateFRParserFormatter_BaseFactory(t || NgbDateFRParserFormatter);
    };

    NgbDateFRParserFormatter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgbDateFRParserFormatter,
      factory: NgbDateFRParserFormatter.ɵfac
    });

    var ɵNgbDateFRParserFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgbDateFRParserFormatter);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbDateFRParserFormatter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tree-map/tree-map.component.ts":
  /*!************************************************!*\
    !*** ./src/app/tree-map/tree-map.component.ts ***!
    \************************************************/

  /*! exports provided: TreeMapComponent */

  /***/
  function srcAppTreeMapTreeMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeMapComponent", function () {
      return TreeMapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3plus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3plus */
    "./node_modules/d3plus/es/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @aws-amplify/pubsub */
    "./node_modules/@aws-amplify/pubsub/lib-esm/index.js");
    /* harmony import */


    var _aws_exports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../aws-exports */
    "./src/aws-exports.js");
    /* harmony import */


    var aws_amplify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! aws-amplify */
    "./node_modules/aws-amplify/lib-esm/index.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["test"];

    function TreeMapComponent_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r46 = ctx.$implicit;

        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", type_r46.value === ctx_r45.defaultView)("value", type_r46.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r46.value);
      }
    }

    aws_amplify__WEBPACK_IMPORTED_MODULE_5__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_4__["default"]);

    _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_4__["default"]);

    var TreeMapComponent =
    /*#__PURE__*/
    function () {
      function TreeMapComponent(apollo) {
        _classCallCheck(this, TreeMapComponent);

        this.apollo = apollo;
        this.data = [];
        this.data2 = [];
        this.defaultView = 2;
        this.filterTypes = [{
          value: 0
        }, {
          value: 1
        }, {
          value: 2
        }, {
          value: 3
        }];
      }

      _createClass(TreeMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a(_templateObject4())
          }).subscribe(function (_ref4) {
            var data = _ref4.data,
                loading = _ref4.loading;
            _this6.treemapdata = data;

            for (var i = 0; i < data.listImpactTree.length; i++) {
              _this6.data2.push({
                value: 1,
                level0: data.listImpactTree[i].level0,
                level1: data.listImpactTree[i].level1,
                level2: data.listImpactTree[i].level2,
                tag: data.listImpactTree[i].tag
              });
            }
          }, function (error) {
            _this6.loading = false;
            _this6.error = error;
            console.log("error is: ", error);
          }).add(function () {
            _this6.makevisualization(_this6.data2);
          });
        }
      }, {
        key: "makevisualization",
        value: function makevisualization(data) {
          var depthOption = 0;
          var visualization = new d3plus__WEBPACK_IMPORTED_MODULE_1__["Treemap"]().data(data).select("#treemap").groupBy(["level0", "level1", "level2", "tag"]).depth(2).legend(false).render();

          this.filterChanged = function (event) {
            depthOption = parseInt(event);
            visualization.depth(depthOption).render();
          };
        }
      }]);

      return TreeMapComponent;
    }();

    TreeMapComponent.ɵfac = function TreeMapComponent_Factory(t) {
      return new (t || TreeMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_6__["Apollo"]));
    };

    TreeMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TreeMapComponent,
      selectors: [["app-tree-map"]],
      viewQuery: function TreeMapComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.test = _t.first);
        }
      },
      decls: 5,
      vars: 1,
      consts: [["id", "container"], ["id", "treemap"], [1, "controls"], [3, "change"], [3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"]],
      template: function TreeMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TreeMapComponent_Template_select_change_3_listener($event) {
            return ctx.filterChanged($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TreeMapComponent_option_4_Template, 2, 3, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterTypes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"]],
      styles: ["#container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: calc(100vh - 45vh);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS1tYXAvdHJlZS1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC90cmVlLW1hcC90cmVlLW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0NXZoKTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tree-map',
          templateUrl: './tree-map.component.html',
          styleUrls: ['./tree-map.component.css']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_6__["Apollo"]
        }];
      }, {
        test: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['test']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/trending/trending.component.ts":
  /*!************************************************!*\
    !*** ./src/app/trending/trending.component.ts ***!
    \************************************************/

  /*! exports provided: TrendingComponent */

  /***/
  function srcAppTrendingTrendingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrendingComponent", function () {
      return TrendingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @aws-amplify/pubsub */
    "./node_modules/@aws-amplify/pubsub/lib-esm/index.js");
    /* harmony import */


    var _aws_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../aws-exports */
    "./src/aws-exports.js");
    /* harmony import */


    var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! aws-amplify */
    "./node_modules/aws-amplify/lib-esm/index.js");
    /* harmony import */


    var _data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! .././data-transfer.service */
    "./src/app/data-transfer.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../tree-map/tree-map.component */
    "./src/app/tree-map/tree-map.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../chart/chart.component */
    "./src/app/chart/chart.component.ts");

    function TrendingComponent_ng_container_0_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["top", "left"];
    };

    function TrendingComponent_ng_container_0_ng_container_32_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendingComponent_ng_container_0_ng_container_32_tr_1_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var sentimentData_r29 = ctx.$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r30.updateClicked(sentimentData_r29.topic + " topic");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sentimentData_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas icon-sm pr-2 my-auto ", sentimentData_r29.sentiment == 0 - 1 ? "fa-arrow-circle-down" : sentimentData_r29.sentiment == 0 ? "fa-minus-circle" : "fa-arrow-circle-up", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sentimentData_r29.counts);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sentimentData_r29.topic, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", sentimentData_r29.negative / sentimentData_r29.counts * 100, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("ngbTooltip", "", (sentimentData_r29.negative / sentimentData_r29.counts * 100).toFixed(2), "% Negative");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", sentimentData_r29.neutral / sentimentData_r29.counts * 100, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("ngbTooltip", "", (sentimentData_r29.neutral / sentimentData_r29.counts * 100).toFixed(2), "% Neutral");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", sentimentData_r29.positive / sentimentData_r29.counts * 100, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("ngbTooltip", "", (sentimentData_r29.positive / sentimentData_r29.counts * 100).toFixed(2), "% Positive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
      }
    }

    var _c1 = function _c1(a1) {
      return {
        itemsPerPage: 8,
        currentPage: a1
      };
    };

    function TrendingComponent_ng_container_0_ng_container_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendingComponent_ng_container_0_ng_container_32_tr_1_Template, 12, 23, "tr", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r26.listTrendingTopics, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r26.p)));
      }
    }

    function TrendingComponent_ng_container_0_ng_container_33_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendingComponent_ng_container_0_ng_container_33_tr_1_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var sentimentData_r33 = ctx.$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r34.updateClicked(sentimentData_r33.hashtag + " hashtag");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sentimentData_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas icon-sm pr-2 my-auto ", sentimentData_r33.sentiment == 0 - 1 ? "fa-arrow-circle-down" : sentimentData_r33.sentiment == 0 ? "fa-minus-circle" : "fa-arrow-circle-up", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sentimentData_r33.counts);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sentimentData_r33.hashtag, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", sentimentData_r33.negative / sentimentData_r33.counts * 100, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("ngbTooltip", "", (sentimentData_r33.negative / sentimentData_r33.counts * 100).toFixed(2), "% Negative");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", sentimentData_r33.neutral / sentimentData_r33.counts * 100, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("ngbTooltip", "", (sentimentData_r33.neutral / sentimentData_r33.counts * 100).toFixed(2), "% Neutral");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", sentimentData_r33.positive / sentimentData_r33.counts * 100, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("ngbTooltip", "", (sentimentData_r33.positive / sentimentData_r33.counts * 100).toFixed(2), "% Positive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
      }
    }

    function TrendingComponent_ng_container_0_ng_container_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendingComponent_ng_container_0_ng_container_33_tr_1_Template, 12, 23, "tr", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r27.listHashtags, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r27.p)));
      }
    }

    var _c2 = function _c2(a0) {
      return [a0];
    };

    function TrendingComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Trending Topics");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendingComponent_ng_container_0_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r36.getTrendingTopics();
          return ctx_r36.loading = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Topics");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendingComponent_ng_container_0_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r38.getHashtags();
          return ctx_r38.loading = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hashtags");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TrendingComponent_ng_container_0_div_12_Template, 2, 0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sentiment Bifurcation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pagination-controls", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TrendingComponent_ng_container_0_Template_pagination_controls_pageChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.p = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Count");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Topic Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sentiment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TrendingComponent_ng_container_0_ng_container_32_Template, 3, 6, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TrendingComponent_ng_container_0_ng_container_33_Template, 3, 6, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Topics Over Time");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-chart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r23.selectedTopics ? "selected" : "notSelected"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r23.selectedTopics ? "notSelected" : "selected"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.selectedTopics);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r23.selectedTopics);
      }
    }

    function TrendingComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " No Data Found. Please Refine your Search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    aws_amplify__WEBPACK_IMPORTED_MODULE_4__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_3__["default"]);

    _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_3__["default"]);

    var TrendingComponent =
    /*#__PURE__*/
    function () {
      function TrendingComponent(data, calendar, element, renderer, apollo) {
        _classCallCheck(this, TrendingComponent);

        this.data = data;
        this.calendar = calendar;
        this.renderer = renderer;
        this.apollo = apollo;
        this.loading = true;
        this.topics = [];
        this.selectedTopics = true;
        this.start = String;
        this.end = String;
        this.listHashtags = [];
        this.listTrendingTopics = [];
        this.p = 1;
        this.empty = false; //Variables for assigning weight to tag cloud:

        this.minWeight = 1;
        this.maxWeight = 20;
        this.text = '';
        this.dates = [];
        this.finalDates = [];
      }

      _createClass(TrendingComponent, [{
        key: "functionGetTrendingData",
        value: function functionGetTrendingData(topicHashtag) {
          var finalTrending = [];
          var length = topicHashtag.length;
          var MaxViewed = topicHashtag[0].counts;
          var MinViewed = topicHashtag[length - 1].counts;

          if (MaxViewed != MinViewed) {
            for (var counts in topicHashtag) {
              var fontsize = this.minWeight + (topicHashtag[counts].counts - MinViewed) * (this.maxWeight - this.minWeight) / (MaxViewed - MinViewed);

              if (topicHashtag[0].hasOwnProperty("hashtag")) {
                finalTrending.push({
                  text: topicHashtag[counts].hashtag,
                  weight: Math.round(fontsize)
                });
              } else {
                finalTrending.push({
                  text: topicHashtag[counts].topic,
                  weight: Math.round(fontsize)
                });
              }
            }
          }

          this.loading = false;
          setTimeout(function () {
            $("#trending-topics").jQCloud(finalTrending);
          }, 500);
        }
      }, {
        key: "getTrendingTopics",
        value: function getTrendingTopics() {
          var _this7 = this;

          this.loading = true;
          $("#trending-topics").find('span').remove();
          this.listTrendingTopics = [];
          this.selectedTopics = true;
          this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject5()),
            variables: {
              start: this.start,
              end: this.end,
              region: "King County"
            }
          }).subscribe(function (_ref5) {
            var data = _ref5.data,
                loading = _ref5.loading;
            _this7.listTrendingTopics = data && data.listTrendingTopicsMaster;
            _this7.listTrendingTopics.length === 0 ? _this7.empty = true : _this7.empty = false;
          }, function (error) {
            _this7.error = error;
            console.log("error is: ", error);
          }).add(function () {
            if (_this7.listTrendingTopics.length != 0) {
              _this7.empty = false;

              _this7.functionGetTrendingData(_this7.listTrendingTopics);
            } else {
              _this7.empty = true;
              _this7.loading = false;
            }
          });
        }
      }, {
        key: "getHashtags",
        value: function getHashtags() {
          var _this8 = this;

          this.loading = true;
          $("#trending-topics").find('span').remove();
          this.selectedTopics = false;
          this.listHashtags = [];
          this.apollo.query({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject6()),
            variables: {
              start: this.start,
              end: this.end
            }
          }).subscribe(function (_ref6) {
            var data = _ref6.data,
                loading = _ref6.loading;
            _this8.listHashtags = data && data.listTrendingHashtags;
          }, function (error) {
            _this8.error = error;
            console.log("error is: ", error);
          }).add(function () {
            if (_this8.listHashtags.length != 0) {
              _this8.empty = false;

              _this8.functionGetTrendingData(_this8.listHashtags);
            } else {
              _this8.empty = true;
              _this8.loading = false;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          //word list data structure:  { text: "Lorem", weight: 13, link: "https://github.com/DukeLeNoir/jQCloud" },
          this.data.share.subscribe(function (x) {
            if (_this9.text != x) {
              _this9.text = x;
              _this9.dates = _this9.text.split(' to ');
              _this9.start = _this9.dates[0];
              _this9.end = _this9.dates[1];
              $("#trending-topics").find('span').remove();
              _this9.selectedTopics ? _this9.getTrendingTopics() : _this9.getHashtags();
            }
          });
        }
      }, {
        key: "updateClicked",
        value: function updateClicked(selectedData) {
          this.data.updateClickedData(selectedData);
        }
      }]);

      return TrendingComponent;
    }();

    TrendingComponent.ɵfac = function TrendingComponent_Factory(t) {
      return new (t || TrendingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"]));
    };

    TrendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TrendingComponent,
      selectors: [["app-trending"]],
      decls: 10,
      vars: 2,
      consts: [[4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card-box", "sweep-to-right"], [1, "d-flex", "justify-content-between"], [1, "header-title", "mb-3", "d-inline-block"], ["id", "", 1, "h-350"], [1, "d-inline-block", "pull-right"], ["type", "button", 1, "btn-sm", "btn", "rounded-0", "m-0", "switchView", 3, "ngClass", "click"], ["id", "trending-topics", 1, "h-350", "d-flex", "align-items-center"], ["class", "loader mx-auto", 4, "ngIf"], [1, "col-xl-7"], [1, "card-box", "sweep-to-right", 2, "padding-bottom", "15px"], ["directionLinks", "true", "previousLabel", "", "nextLabel", "", 1, "hide-page-numbers", "d-inline-block", 3, "pageChange"], [1, "row", "h-350"], [1, "col-xl-12", "p-0"], ["role", "grid", 1, "table", "table-hover", "m-0", "table-centered", "nowrap", "w-100", "sentiment-table"], ["role", "row"], ["tabindex", "0", 1, "sorting_asc", "col-3", "w-25"], ["tabindex", "0", 1, "sorting", "col-3", "w-25"], ["tabindex", "0", 1, "sorting", "col-6", "w-50"], [1, "col-xl-5"], [1, "header-title", "mb-3"], [1, "loader", "mx-auto"], ["src", "/assets/loader.gif"], ["role", "row", "class", "odd", "style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["role", "row", 1, "odd", 2, "cursor", "pointer", 3, "click"], ["tabindex", "0", 1, "d-flex"], [1, "progress"], ["tooltipClass", "smalltooltip", "role", "progressbar", "aria-valuenow", "sentimentData.negative", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 3, "ngbTooltip", "placement"], ["tooltipClass", "smalltooltip", "role", "progressbar", "aria-valuenow", "sentimentData.neutral", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 3, "ngbTooltip", "placement"], ["tooltipClass", "smalltooltip", "role", "progressbar", "aria-valuemin", "sentimentData.positive", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 3, "ngbTooltip", "placement"], ["role", "progressbar", "tooltipClass", "smalltooltip", "aria-valuenow", "sentimentData.neutral", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 3, "ngbTooltip", "placement"], [1, "text-center", "mt-5", "mx-auto", "px-4"], ["src", "/assets/zero_page_icon.svg", 1, "mb-4", "text-center", "pb-2"], ["id", "emptySearch"], [1, "fas", "fa-exclamation-circle", "mx-2"]],
      template: function TrendingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrendingComponent_ng_container_0_Template, 40, 9, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendingComponent_ng_container_1_Template, 6, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tree Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-tree-map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.empty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.empty);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_9__["TreeMapComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"]],
      styles: [".card-box[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  padding: 1.5rem;\r\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);\r\n  margin-bottom: 24px;\r\n  border-radius: .25rem;\r\n  -webkit-transition: 0.3s linear;\r\n  transition: 0.3s linear;\r\n  position: relative;\r\n  overflow: auto;\r\n}\r\n\r\n.h-350[_ngcontent-%COMP%] {\r\n    height: 350px;\r\n}\r\n\r\n.header-title[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  margin: 0 0 7px 0;\r\n}\r\n\r\n.sentiment-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .sentiment-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 10px 0px;\r\n  vertical-align: top;\r\n  border-top: 1px solid #dee2e6;\r\n  font-size: 12px;\r\n  vertical-align:middle;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%]{\r\n    height: 10px;\r\n}\r\n\r\n.icon-sm[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n}\r\n\r\n.sweep-to-right[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition: color 1000ms;\r\n  transition: color 1000ms;\r\n}\r\n\r\n.sweep-to-right[_ngcontent-%COMP%]:before {\r\n    height: 5px;\r\n    content: \"\";\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: #2098d1;\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: 0 50%;\r\n    transform-origin: 0 50%;\r\n    -webkit-transition-property: transform;\r\n    -webkit-transition-property: -webkit-transform;\r\n    transition-property: -webkit-transform;\r\n    transition-property: transform;\r\n    transition-property: transform, -webkit-transform;\r\n    -webkit-transition: 300ms ease-out;\r\n    transition: 300ms ease-out;\r\n  }\r\n\r\n.sweep-to-right[_ngcontent-%COMP%]:hover:before {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n  }\r\n\r\n.switchView[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 3px 12px;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    line-height: 24px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    border: 1px solid transparent;\r\n    background-color: #ffffff;\r\n    color: #b3a7a7;\r\n    border-color: #cccccc;\r\n    *border: 0;\r\n    *background: #e6e6e6;\r\n    border-radius: 4px;\r\n    *margin-left: .3em;\r\n    box-shadow: inset 0 -2px 0px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.5);\r\n  }\r\n\r\n.switchView.selected[_ngcontent-%COMP%] {\r\n    outline: none !important;\r\n    color: #666666;\r\n    background-image: none;\r\n    box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);\r\n}\r\n\r\n.switchView.btn[_ngcontent-%COMP%]:hover{\r\n  outline: none !important;\r\n  color: #666666;\r\n  background-image: none;\r\n  box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);\r\n}\r\n\r\n#emptySearch[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-size: 15px;\r\n  padding: 2px 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.smalltooltip[_ngcontent-%COMP%]   .tooltip-inner[_ngcontent-%COMP%] {\r\n  font-size: 10px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlbmRpbmcvdHJlbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBRWYsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsK0JBQXVCO0VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtBQUMxQjs7QUFFRTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsOENBQThCO0lBQTlCLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFBOUIsaURBQThCO0lBQzlCLGtDQUFrQztJQUNsQywwQkFBMEI7RUFDNUI7O0FBRUE7SUFDRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0VBQ3RCOztBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtLQUNyQixTQUFVO0tBQ1YsbUJBQW9CO0lBR3BCLGtCQUFrQjtLQUNsQixpQkFBa0I7SUFHbEIsZ0ZBQWdGO0VBQ2xGOztBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsNkNBQTZDO0FBQ2pEOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsNkNBQTZDO0FBQy9DOztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvdHJlbmRpbmcvdHJlbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLC4xKTtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLC4xKTtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5oLTM1MCB7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luOiAwIDAgN3B4IDA7XHJcbn1cclxuXHJcbi5zZW50aW1lbnQtdGFibGUgdGQsIC5zZW50aW1lbnQtdGFibGUgdGgge1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxufVxyXG4ucHJvZ3Jlc3N7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLXNtIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5zd2VlcC10by1yaWdodCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDEwMDBtcztcclxuICB0cmFuc2l0aW9uOiBjb2xvciAxMDAwbXM7XHJcbn1cclxuXHJcbiAgLnN3ZWVwLXRvLXJpZ2h0OmJlZm9yZSB7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6ICMyMDk4ZDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIC5zd2VlcC10by1yaWdodDpob3ZlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIH1cclxuICAuc3dpdGNoVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzcHggMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2IzYTdhNztcclxuICAgIGJvcmRlci1jb2xvcjogI2NjY2NjYztcclxuICAgICpib3JkZXI6IDA7XHJcbiAgICAqYmFja2dyb3VuZDogI2U2ZTZlNjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAqbWFyZ2luLWxlZnQ6IC4zZW07XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwcHggcmdiYSgwLDAsMCwuMTUpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMHB4IHJnYmEoMCwwLDAsLjE1KSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwcHggcmdiYSgwLDAsMCwuMTUpLCBpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG4gIH1cclxuXHJcbiAgLnN3aXRjaFZpZXcuc2VsZWN0ZWQge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsMC4xMjUpO1xyXG59XHJcbiAgXHJcbi5zd2l0Y2hWaWV3LmJ0bjpob3ZlcntcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwwLjEyNSk7XHJcbn1cclxuI2VtcHR5U2VhcmNoIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uc21hbGx0b29sdGlwIC50b29sdGlwLWlubmVyIHtcclxuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-trending',
          templateUrl: './trending.component.html',
          styleUrls: ['./trending.component.css']
        }]
      }], function () {
        return [{
          type: _data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCalendar"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/verbatim/verbatim.component.ts":
  /*!************************************************!*\
    !*** ./src/app/verbatim/verbatim.component.ts ***!
    \************************************************/

  /*! exports provided: VerbatimComponent */

  /***/
  function srcAppVerbatimVerbatimComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerbatimComponent", function () {
      return VerbatimComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var _c0 = ["myaccordion"];

    function VerbatimComponent_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Impact Area Name 1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Impact Area Name 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "20");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Impact Area Name 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VerbatimComponent_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. ");
      }
    }

    function VerbatimComponent_ng_template_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. ");
      }
    }

    function VerbatimComponent_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. ");
      }
    }

    var _c1 = function _c1(a0) {
      return [a0];
    };

    var VerbatimComponent =
    /*#__PURE__*/
    function () {
      function VerbatimComponent() {
        _classCallCheck(this, VerbatimComponent);
      }

      _createClass(VerbatimComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isOn = true;
        }
      }, {
        key: "beforeChange",
        value: function beforeChange($event) {
          console.log($event.panelId);

          if ($event.panelId === 'panelOne') {
            $event.preventDefault();
          }

          if ($event.panelId === 'panelTwo' && $event.nextState === false) {
            $event.preventDefault();
          }
        }
      }]);

      return VerbatimComponent;
    }();

    VerbatimComponent.ɵfac = function VerbatimComponent_Factory(t) {
      return new (t || VerbatimComponent)();
    };

    VerbatimComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VerbatimComponent,
      selectors: [["app-verbatim"]],
      viewQuery: function VerbatimComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
        }
      },
      decls: 294,
      vars: 3,
      consts: [[1, "page-wrapper", "chiller-theme", 3, "ngClass"], ["id", "show-sidebar", "href", "#", 1, "btn", "btn-sm", "btn-dark"], [1, "fas", "fa-bars", 3, "click"], ["id", "sidebar", 1, "sidebar-wrapper"], [1, "sidebar-content"], [1, "sidebar-brand"], ["href", "#"], ["id", "close-sidebar", 3, "click"], [1, "far", "fa-times-circle"], [1, "sidebar-search"], [1, "input-group"], ["type", "text", "placeholder", "Search Filter Criteria", 1, "form-control", "search-menu"], [1, "input-group-append"], [1, "input-group-text"], ["aria-hidden", "true", 1, "fa", "fa-search"], [1, "sidebar-menu"], ["title", "Impact", 1, "sidebar-dropdown"], ["ngbPanelContent", ""], ["title", "Source", 1, "sidebar-dropdown"], ["_ngcontent-pbe-c111", "", 1, "badge", "badge-pill", "badge-warning"], ["title", "Type", 1, "sidebar-dropdown"], ["title", "Sentiment", 1, "sidebar-dropdown"], [1, "page-content"], [1, "container-fluid"], [1, "source-location"], [1, "card", "sub-details"], [1, "row"], [1, "col-sm-12", "location", "col-md-2"], [1, "col-sm-4", "col-md-3", "date"], [1, "col-md-4", "col-sm-4", "sources"], [1, "col-sm-4", "col-md-3", "metadata", "text-right"], [1, "row", "d-flex", "align-items-center"], [1, "col-1", "smiley", "text-center"], [1, "far", "fa-smile"], [1, "col-1", "icon-comment", "text-center"], [1, "far", "fa-comment-dots"], ["title", "orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ", 1, "col-10", "inline-block", "my-0"], [1, "row", "topics", "col-12", "d-flex", "justify-content-center", "mt-3"], [1, "pink"], [1, "blue"], [1, "red"], [1, "green"], [1, "d-flex", "align-items-center", "justify-content-between"], ["type", "checkbox", "id", "impact-1", "name", "impact-1", "value", "Impact Area Name 1"], ["for", "impact-1", 1, "my-0", "px-2"], [1, "badge", "badge-pill", "badge-warning"], ["type", "checkbox", "id", "impact-2", "name", "impact-2", "value", "Impact Area Name 2"], ["for", "impact-2", 1, "my-0", "px-2"], ["type", "checkbox", "id", "impact-3", "name", "impact-3", "value", "Impact Area Name 3"], ["for", "impact-3", 1, "my-0", "px-2"]],
      template: function VerbatimComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerbatimComponent_Template_i_click_2_listener() {
            return ctx.isOn ? ctx.isOn = false : ctx.isOn = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filter Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerbatimComponent_Template_div_click_8_listener() {
            return ctx.isOn = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ngb-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ngb-panel", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VerbatimComponent_ng_template_21_Template, 21, 0, "ng-template", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ngb-panel", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "New");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, VerbatimComponent_ng_template_25_Template, 1, 0, "ng-template", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngb-panel", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, VerbatimComponent_ng_template_27_Template, 3, 0, "ng-template", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ngb-panel", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, VerbatimComponent_ng_template_29_Template, 1, 0, "ng-template", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "main", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Seattle ... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Seattle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 2/20/2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " From Twitter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Traffic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Inclusion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Economics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Advances ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Water ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Seattle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " 2/20/2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " From Twitter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Traffic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Inclusion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Economics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Advances ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Water ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Seattle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " 2/20/2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " From Twitter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Traffic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Inclusion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Economics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Advances ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Water ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Seattle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " 2/20/2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " From Twitter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Traffic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Inclusion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Economics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Advances ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Water ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Seattle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " 2/20/2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " From Twitter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Traffic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Inclusion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Economics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Advances ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Water ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Seattle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " 2/20/2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " From Twitter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Traffic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Inclusion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Economics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Advances ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Water ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Seattle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " 2/20/2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " From Twitter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Traffic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Inclusion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " Economics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Advances ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Water ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " Seattle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " 2/20/2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " From Twitter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " Traffic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " Inclusion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " Economics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " Advances ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " Water ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " Seattle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " 2/20/2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " From Twitter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " Traffic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " Inclusion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " Economics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " Advances ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " Water ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " Seattle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " 2/20/2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " From Twitter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " Traffic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " Inclusion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " Economics ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " Advances ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " Water ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx.isOn === true ? "toggled" : "toggle"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"]],
      styles: ["@-webkit-keyframes swing {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  10% {\r\n    -webkit-transform: rotate(10deg);\r\n            transform: rotate(10deg);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: rotate(-10deg);\r\n            transform: rotate(-10deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: rotate(5deg);\r\n            transform: rotate(5deg);\r\n  }\r\n\r\n  70% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: rotate(-5deg);\r\n            transform: rotate(-5deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n@keyframes swing {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  10% {\r\n    -webkit-transform: rotate(10deg);\r\n            transform: rotate(10deg);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: rotate(-10deg);\r\n            transform: rotate(-10deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: rotate(5deg);\r\n            transform: rotate(5deg);\r\n  }\r\n\r\n  70% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: rotate(-5deg);\r\n            transform: rotate(-5deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes sonar {\r\n  0% {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes sonar {\r\n  0% {\r\n    -webkit-transform: scale(0.9);\r\n            transform: scale(0.9);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(2);\r\n            transform: scale(2);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.page-wrapper[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after, .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, .sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #show-sidebar[_ngcontent-%COMP%], #close-sidebar[_ngcontent-%COMP%] {\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n\r\n\r\n.page-wrapper[_ngcontent-%COMP%] {\r\nposition:relative;\r\n}\r\n\r\n.page-wrapper[_ngcontent-%COMP%]   .theme[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    display: inline-block;\r\n    border-radius: 4px;\r\n    margin: 2px;\r\n  }\r\n\r\n.page-wrapper[_ngcontent-%COMP%]   .theme.chiller-theme[_ngcontent-%COMP%] {\r\n      background: #1e2229;\r\n    }\r\n\r\n\r\n\r\n.page-wrapper.toggled[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\r\n    left: 0px;\r\n    top: auto;\r\n    position: absolute;\r\n  }\r\n\r\n@media screen and (min-width: 768px) {\r\n  .page-wrapper.toggled[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\r\n    padding-left: 300px;\r\n  }\r\n}\r\n\r\n\r\n\r\n#show-sidebar[_ngcontent-%COMP%] {\r\n  left: 0;\r\n  top: 0px;\r\n  border-radius: 0 4px 4px 0px;\r\n  width: 35px;\r\n  -webkit-transition-delay: 0.3s;\r\n          transition-delay: 0.3s;\r\n  position: absolute;\r\n}\r\n\r\n.page-wrapper.toggled[_ngcontent-%COMP%]   #show-sidebar[_ngcontent-%COMP%] {\r\n  left: 20%;\r\n  top: 0%;\r\n}\r\n\r\n\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -300px;\r\n  z-index: 999;\r\n}\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n  }\r\n\r\n\r\n\r\n.sidebar-content[_ngcontent-%COMP%] {\r\n  max-height: calc(100% - 30px);\r\n  height: calc(100% - 30px);\r\n  overflow-y: auto;\r\n  position: relative;\r\n}\r\n\r\n.sidebar-content.desktop[_ngcontent-%COMP%] {\r\n    overflow-y: hidden;\r\n  }\r\n\r\n\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    -webkit-box-flex: 1;\r\n            flex-grow: 1;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n  }\r\n\r\n\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n}\r\n\r\n\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    padding: 15px 20px 5px 20px;\r\n    display: inline-block;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    text-decoration: none;\r\n    position: relative;\r\n    padding: 8px 30px 8px 20px;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n      margin-right: 10px;\r\n      font-size: 12px;\r\n      width: 30px;\r\n      height: 30px;\r\n      line-height: 30px;\r\n      text-align: center;\r\n      border-radius: 4px;\r\n    }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%]::before {\r\n      display: inline-block;\r\n      -webkit-animation: swing ease-in-out 0.5s 1 alternate;\r\n              animation: swing ease-in-out 0.5s 1 alternate;\r\n    }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 900;\r\n    content: \"\\f105\";\r\n    font-style: normal;\r\n    display: inline-block;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    background: 0 0;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 14px;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding: 5px 0;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n    font-size: 13px;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n      content: \"\\f111\";\r\n      font-family: \"Font Awesome 5 Free\";\r\n      font-weight: 400;\r\n      font-style: normal;\r\n      display: inline-block;\r\n      text-align: center;\r\n      text-decoration: none;\r\n      -webkit-font-smoothing: antialiased;\r\n      -moz-osx-font-smoothing: grayscale;\r\n      margin-right: 10px;\r\n      font-size: 8px;\r\n    }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 8px;\r\n    margin-left: 5px;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 0px;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n    right: 17px;\r\n  }\r\n\r\n\r\n\r\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 100%;\r\n  padding-left: 30px;\r\n  padding-top: 20px;\r\n  padding-right: 30px;\r\n  z-index: -1;\r\n}\r\n\r\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\r\n  overflow-x: hidden;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 5px;\r\n  height: 7px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\r\n  width: 0px;\r\n  height: 0px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #525965;\r\n  border: 0px none #ffffff;\r\n  border-radius: 0px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #525965;\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\r\n    background: #525965;\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: transparent;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track:hover {\r\n    background: transparent;\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track:active {\r\n    background: transparent;\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\r\n  background: transparent;\r\n}\r\n\r\n\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\r\n  background: #31353D;\r\n}\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #3a3f48;\r\n  }\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n      border-color: transparent;\r\n      box-shadow: none;\r\n    }\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      color: #818896;\r\n    }\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n        color: #b8bfce;\r\n      }\r\n\r\n.page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\r\n  color: #bdbdbd;\r\n}\r\n\r\n.page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%]:hover {\r\n    color: #ffffff;\r\n  }\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]:focus    + span[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #16c7ff;\r\n  text-shadow: 0px 0px 10px rgba(22, 199, 255, 0.5);\r\n}\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n  background: #3a3f48;\r\n}\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #6c7b88;\r\n}\r\n\r\n.sub-details[_ngcontent-%COMP%] {\r\n  box-shadow: hsl(0, 0%, 84%) 0 0 8px;\r\n    padding: 10px;\r\n    position: relative;\r\n    margin: 20px 0px;\r\n}\r\n\r\n.topics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 4px 4px;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  line-height: 14px;\r\n  color: #ffffff;\r\n  vertical-align: baseline;\r\n  white-space: nowrap;\r\n  border-radius: 3px;\r\n  margin: 0px 5px;\r\n}\r\n\r\n.pink[_ngcontent-%COMP%] {\r\n  background-color: #ea4ca0;\r\n}\r\n\r\n.blue[_ngcontent-%COMP%] {\r\n  background-color: #00accd;\r\n}\r\n\r\n.green[_ngcontent-%COMP%] {\r\n  background-color: #25a01a;\r\n}\r\n\r\n.red[_ngcontent-%COMP%] {\r\n  background-color: #cc1a1a;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .smiley[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 25px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyYmF0aW0vdmVyYmF0aW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBcENBO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtBQUNGOztBQVZBO0VBQ0U7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Ozs7Ozs7O0VBV0UsaUNBQWlDO0VBSWpDLHlCQUF5QjtBQUMzQjs7QUFFQSwrQ0FBK0M7O0FBRS9DO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVFO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7QUFFRTtNQUNFLG1CQUFtQjtJQUNyQjs7QUFFRixtREFBbUQ7O0FBRW5EO0lBQ0UsU0FBUztJQUNULFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0FBRUY7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUNBLHNEQUFzRDs7QUFDdEQ7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUNBLGtEQUFrRDs7QUFFbEQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUU7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7QUFFRixrREFBa0Q7O0FBRWxEO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVFO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGLDBEQUEwRDs7QUFFMUQ7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQVk7WUFBWixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7QUFHRixnRUFBZ0U7O0FBRWhFO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLDhEQUE4RDs7QUFFOUQ7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUU7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCOztBQUVFO01BQ0Usa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsa0JBQWtCO0lBQ3BCOztBQUVBO01BQ0UscUJBQXFCO01BQ3JCLHFEQUE2QztjQUE3Qyw2Q0FBNkM7SUFDL0M7O0FBRUY7SUFDRSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7RUFDWDs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7QUFFRTtNQUNFLGdCQUFnQjtNQUNoQixrQ0FBa0M7TUFDbEMsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQixtQ0FBbUM7TUFDbkMsa0NBQWtDO01BQ2xDLGtCQUFrQjtNQUNsQixjQUFjO0lBQ2hCOztBQUVGOztJQUVFLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztBQUVBOztJQUVFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixXQUFXO0VBQ2I7O0FBR0Ysc0VBQXNFOztBQUV0RTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLHdDQUF3Qzs7QUFFeEM7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVFO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUU7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUY7RUFDRSx1QkFBdUI7QUFDekI7O0FBR0EsOEZBQThGOztBQUU5RjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFRTs7O0lBR0UsNkJBQTZCO0VBQy9COztBQUVFOztNQUVFLHlCQUF5QjtNQUN6QixnQkFBZ0I7SUFDbEI7O0FBRUE7Ozs7TUFJRSxjQUFjO0lBQ2hCOztBQUVFOzs7UUFHRSxjQUFjO01BQ2hCOztBQUVOO0VBQ0UsY0FBYztBQUNoQjs7QUFFRTtJQUNFLGNBQWM7RUFDaEI7O0FBRUY7Ozs7RUFJRSxjQUFjO0VBQ2QsaURBQWlEO0FBQ25EOztBQUVBOzs7O0VBSUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtFQUdJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBS0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztFQUNiOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvdmVyYmF0aW0vdmVyYmF0aW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc3dpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICB9XHJcblxyXG4gIDMwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgNzAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgODAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNvbmFyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4ucGFnZS13cmFwcGVyIC5zaWRlYmFyLXdyYXBwZXIsXHJcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQgPiBhLFxyXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWRyb3Bkb3duID4gYTphZnRlcixcclxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpiZWZvcmUsXHJcbi5zaWRlYmFyLXdyYXBwZXIgdWwgbGkgYSBpLFxyXG4ucGFnZS13cmFwcGVyIC5wYWdlLWNvbnRlbnQsXHJcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxyXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCxcclxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEsXHJcbiNzaG93LXNpZGViYXIsXHJcbiNjbG9zZS1zaWRlYmFyIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tcGFnZS13cmFwcGVyLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ucGFnZS13cmFwcGVyIHtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbiAgLnBhZ2Utd3JhcHBlciAudGhlbWUge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICB9XHJcblxyXG4gICAgLnBhZ2Utd3JhcHBlciAudGhlbWUuY2hpbGxlci10aGVtZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxZTIyMjk7XHJcbiAgICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLXRvZ2dlbGVkIHNpZGViYXItLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgLnBhZ2Utd3JhcHBlci50b2dnbGVkIC5zaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnBhZ2Utd3JhcHBlci50b2dnbGVkIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMDBweDtcclxuICB9XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tc2hvdyBzaWRlYmFyIGJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jc2hvdy1zaWRlYmFyIHtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwcHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5wYWdlLXdyYXBwZXIudG9nZ2xlZCAjc2hvdy1zaWRlYmFyIHtcclxuICBsZWZ0OiAyMCU7XHJcbiAgdG9wOiAwJTtcclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLXdyYXBwZXItLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5zaWRlYmFyLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0zMDBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLWNvbnRlbnQtLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5zaWRlYmFyLWNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiAgLnNpZGViYXItY29udGVudC5kZXNrdG9wIHtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1icmFuZC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kID4gYSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kICNjbG9zZS1zaWRlYmFyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItc2VhcmNoLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoID4gZGl2IHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItbWVudS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLmhlYWRlci1tZW51IHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHggNXB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYTpob3ZlciA+IGk6OmJlZm9yZSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgYW5pbWF0aW9uOiBzd2luZyBlYXNlLWluLW91dCAwLjVzIDEgYWx0ZXJuYXRlO1xyXG4gICAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gPiBhOmFmdGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb250ZW50OiBcIlxcZjEwNVwiO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgdWwge1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuICAgIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGE6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcXGYxMTFcIjtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBzcGFuLmxhYmVsLFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHNwYW4uYmFkZ2Uge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGEgLmJhZGdlLFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGEgLmxhYmVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1zdWJtZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlID4gYTphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICByaWdodDogMTdweDtcclxuICB9XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXBhZ2UtY29udGVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ucGFnZS13cmFwcGVyIC5wYWdlLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLyotLS0tLS1zY3JvbGwgYmFyLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcclxuICB3aWR0aDogMHB4O1xyXG4gIGhlaWdodDogMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjNTI1OTY1O1xyXG4gIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTI1OTY1O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzUyNTk2NTtcclxuICB9XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDBweCBub25lICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjazphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoaWxsZXItdGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzMTM1M0Q7XHJcbn1cclxuXHJcbiAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlcixcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCxcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTNmNDg7XHJcbiAgfVxyXG5cclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kID4gYSxcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHtcclxuICAgICAgY29sb3I6ICM4MTg4OTY7XHJcbiAgICB9XHJcblxyXG4gICAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGk6aG92ZXIgPiBhLFxyXG4gICAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlID4gYSxcclxuICAgICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCA+IGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYjhiZmNlO1xyXG4gICAgICB9XHJcblxyXG4ucGFnZS13cmFwcGVyLmNoaWxsZXItdGhlbWUudG9nZ2xlZCAjY2xvc2Utc2lkZWJhciB7XHJcbiAgY29sb3I6ICNiZGJkYmQ7XHJcbn1cclxuXHJcbiAgLnBhZ2Utd3JhcHBlci5jaGlsbGVyLXRoZW1lLnRvZ2dsZWQgI2Nsb3NlLXNpZGViYXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciB1bCBsaTpob3ZlciBhIGksXHJcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmhvdmVyOmJlZm9yZSxcclxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnU6Zm9jdXMgKyBzcGFuLFxyXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlIGEgaSB7XHJcbiAgY29sb3I6ICMxNmM3ZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDIyLCAxOTksIDI1NSwgMC41KTtcclxufVxyXG5cclxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEgaSxcclxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIGRpdixcclxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kOiAjM2EzZjQ4O1xyXG59XHJcblxyXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLmhlYWRlci1tZW51IHNwYW4ge1xyXG4gIGNvbG9yOiAjNmM3Yjg4O1xyXG59XHJcblxyXG5cclxuLnN1Yi1kZXRhaWxzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGhzbCgwLCAwJSwgODQlKSAwIDAgOHB4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBoc2woMCwgMCUsIDg0JSkgMCAwIDhweDtcclxuICAgIGJveC1zaGFkb3c6IGhzbCgwLCAwJSwgODQlKSAwIDAgOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbn1cclxuXHJcbi50b3BpY3Mgc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDRweCA0cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMHB4IDVweDtcclxufVxyXG5cclxuLnBpbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTRjYTA7XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2NkO1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNWEwMWE7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzFhMWE7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zbWlsZXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerbatimComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-verbatim',
          templateUrl: './verbatim.component.html',
          styleUrls: ['./verbatim.component.css']
        }]
      }], function () {
        return [];
      }, {
        accordion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['myaccordion', {
            static: true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/aws-exports.js":
  /*!****************************!*\
    !*** ./src/aws-exports.js ***!
    \****************************/

  /*! exports provided: default */

  /***/
  function srcAwsExportsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); // WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.


    var awsmobile = {
      "aws_project_region": "us-west-2",
      "aws_appsync_graphqlEndpoint": "https://is75sk5yqzflroaqvegbewkuai.appsync-api.us-west-2.amazonaws.com/graphql",
      "aws_appsync_region": "us-west-2",
      "aws_appsync_authenticationType": "API_KEY",
      "aws_appsync_apiKey": "da2-bsobwsfrmbf7thtmw4tbce4x4y"
    };
    /* harmony default export */

    __webpack_exports__["default"] = awsmobile;
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\iGuest\Desktop\Quarter 3\NI\NewImpact\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!**********************!*\
    !*** util (ignored) ***!
    \**********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  4:
  /*!************************!*\
    !*** buffer (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  5:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map