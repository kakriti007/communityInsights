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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
  "./src/app/app.component.css.shim.ngstyle.js":
  /*!***************************************************!*\
    !*** ./src/app/app.component.css.shim.ngstyle.js ***!
    \***************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"];
    /***/
  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.css.shim.ngstyle */
    "./src/app/app.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component.ngfactory */
    "./src/app/header/header.component.ngfactory.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./data-transfer.service */
    "./src/app/data-transfer.service.ts");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1163264, null, 0, _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"], apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDateParserFormatter"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCalendar"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], [], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
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

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'NewImpact';
    };
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-chips */
    "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "./node_modules/apollo-angular-link-http/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var _graphql_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./graphql.module */
    "./src/app/graphql.module.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _ngb_date_fr_parser_formatter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./ngb-date-fr-parser-formatter */
    "./src/app/ngb-date-fr-parser-formatter.ts");
    /* harmony import */


    var _ngb_UTC_string_adapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./ngb-UTC-string-adapter */
    "./src/app/ngb-UTC-string-adapter.ts");
    /* harmony import */


    var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng2-material-dropdown */
    "./node_modules/ng2-material-dropdown/fesm2015/ng2-material-dropdown.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵsNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_10__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_chips__WEBPACK_IMPORTED_MODULE_12__["ɵc"], ngx_chips__WEBPACK_IMPORTED_MODULE_12__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_14__["HttpLink"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_14__["HttpLink"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, apollo_angular__WEBPACK_IMPORTED_MODULE_15__["APOLLO_OPTIONS"], _graphql_module__WEBPACK_IMPORTED_MODULE_16__["createApollo"], [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_14__["HttpLink"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, apollo_angular__WEBPACK_IMPORTED_MODULE_15__["Apollo"], apollo_angular__WEBPACK_IMPORTED_MODULE_15__["Apollo"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, apollo_angular__WEBPACK_IMPORTED_MODULE_15__["APOLLO_OPTIONS"]], [2, apollo_angular__WEBPACK_IMPORTED_MODULE_15__["APOLLO_NAMED_OPTIONS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDateParserFormatter"], _ngb_date_fr_parser_formatter__WEBPACK_IMPORTED_MODULE_18__["NgbDateFRParserFormatter"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDateAdapter"], _ngb_UTC_string_adapter__WEBPACK_IMPORTED_MODULE_19__["NgbUTCStringAdapter"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_20__["Ng2DropdownModule"], ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_20__["Ng2DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_chips__WEBPACK_IMPORTED_MODULE_12__["TagInputModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_12__["TagInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, apollo_angular__WEBPACK_IMPORTED_MODULE_15__["ApolloModule"], apollo_angular__WEBPACK_IMPORTED_MODULE_15__["ApolloModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_14__["HttpLinkModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_14__["HttpLinkModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _graphql_module__WEBPACK_IMPORTED_MODULE_16__["GraphQLModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_16__["GraphQLModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["COMPOSITION_BUFFER_MODE"], false, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
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

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/chart/chart.component.css.shim.ngstyle.js":
  /*!***********************************************************!*\
    !*** ./src/app/chart/chart.component.css.shim.ngstyle.js ***!
    \***********************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppChartChartComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"];
    /***/
  },

  /***/
  "./src/app/chart/chart.component.ngfactory.js":
  /*!****************************************************!*\
    !*** ./src/app/chart/chart.component.ngfactory.js ***!
    \****************************************************/

  /*! exports provided: RenderType_ChartComponent, View_ChartComponent_0, View_ChartComponent_Host_0, ChartComponentNgFactory */

  /***/
  function srcAppChartChartComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ChartComponent", function () {
      return RenderType_ChartComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ChartComponent_0", function () {
      return View_ChartComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ChartComponent_Host_0", function () {
      return View_ChartComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartComponentNgFactory", function () {
      return ChartComponentNgFactory;
    });
    /* harmony import */


    var _chart_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chart.component.css.shim.ngstyle */
    "./src/app/chart/chart.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chart.component */
    "./src/app/chart/chart.component.ts");
    /* harmony import */


    var _data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../data-transfer.service */
    "./src/app/data-transfer.service.ts");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ChartComponent = [_chart_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ChartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ChartComponent,
      data: {}
    });

    function View_ChartComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "text-center mt-5 mx-auto px-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "mb-4 text-center pb-2 "], ["src", "/assets/zero_page_icon.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "p", [["id", "emptySearch"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "fas fa-exclamation-circle mx-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Click on topics/hashtag to see the trends."]))], null, null);
    }

    function View_ChartComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["id", "chart"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.empty;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_ChartComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chart", [], null, null, null, View_ChartComponent_0, RenderType_ChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"], [_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"], apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ChartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chart", _chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"], View_ChartComponent_Host_0, {}, {}, []);
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
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

    aws_amplify__WEBPACK_IMPORTED_MODULE_4__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_3__["default"]);

    _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_3__["default"]);

    var ChartComponent = /*#__PURE__*/function () {
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


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DataTransferService = /*#__PURE__*/function () {
      function DataTransferService() {
        _classCallCheck(this, DataTransferService);

        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
        this.share = this.content.asObservable(); //sharing sentiment bifurcation data to chart component

        this.clickedItem = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
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

    DataTransferService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function DataTransferService_Factory() {
        return new DataTransferService();
      },
      token: DataTransferService,
      providedIn: "root"
    });
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


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "./node_modules/apollo-angular-link-http/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-cache-inmemory */
    "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
    /* harmony import */


    var apollo_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-env */
    "./node_modules/apollo-env/lib/index.js");
    /* harmony import */


    var apollo_env__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_env__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aws-amplify */
    "./node_modules/aws-amplify/lib-esm/index.js");
    /* harmony import */


    var _aws_exports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../aws-exports */
    "./src/aws-exports.js");
    /* harmony import */


    var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! apollo-boost */
    "./node_modules/apollo-boost/lib/index.js");

    aws_amplify__WEBPACK_IMPORTED_MODULE_3__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_4__["default"]);
    var uri = 'https://hv64oxco7naipotbgrduo7lwla.appsync-api.us-west-2.amazonaws.com/graphql';

    function createApollo(httpLink) {
      var http = httpLink.create({
        uri: uri
      });
      var authLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_5__["ApolloLink"](function (operation, forward) {
        // Use the setContext method to set the HTTP headers.
        operation.setContext({
          headers: {
            "X-Api-Key": "da2-zy5mhx7dlzaxdg4b2gw6vi6wya"
          },
          fetch: apollo_env__WEBPACK_IMPORTED_MODULE_2__["fetch"]
        });
        return forward(operation);
      });
      return {
        link: authLink.concat(http),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]()
      };
    }

    var GraphQLModule = function GraphQLModule() {
      _classCallCheck(this, GraphQLModule);
    };
    /***/

  },

  /***/
  "./src/app/header/header.component.css.shim.ngstyle.js":
  /*!*************************************************************!*\
    !*** ./src/app/header/header.component.css.shim.ngstyle.js ***!
    \*************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppHeaderHeaderComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["body[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n#top-nav[_ngcontent-%COMP%] {\r\n  background-color: #2098d1;\r\n  position: fixed;\r\n  padding: 7px 10px 11px 19px;\r\n  z-index: 1000;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 100%;\r\n  background-color: #24292E;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 60px;\r\n  z-index: 100;\r\n  padding: 0 80px\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background: #ddd;\r\n  color: black;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  margin-top: 60px;\r\n}\r\n\r\n.nav.nav-tabs[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n}\r\n\r\n\r\n\r\n.custom-day[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 0.185rem 0.25rem;\r\n  display: inline-block;\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n\r\n.custom-day.focused[_ngcontent-%COMP%] {\r\n    background-color: #e6e6e6;\r\n  }\r\n\r\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(2, 117, 216);\r\n    color: white;\r\n  }\r\n\r\n.custom-day.faded[_ngcontent-%COMP%] {\r\n    background-color: rgba(2, 117, 216, 0.5);\r\n  }\r\n\r\n\r\n\r\n@media (min-width: 1200px) {\r\n  .container-fluid[_ngcontent-%COMP%] {\r\n    max-width: 90%;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVFO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHdDQUF3QztFQUMxQzs7QUFFRix5QkFBeUI7O0FBRXpCO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiN0b3AtbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5OGQxO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOiA3cHggMTBweCAxMXB4IDE5cHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG4ubmF2YmFyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MkU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcGFkZGluZzogMCA4MHB4XHJcbn1cclxuXHJcbi5uYXZiYXIgYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4ubmF2YmFyIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLm5hdi5uYXYtdGFicyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSBhe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi8qRGF0ZVRpbWVQb3B1cCBDc3MgU3RhcnRzKi9cclxuLmN1c3RvbS1kYXkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbiAgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1kYXkucmFuZ2UsIC5jdXN0b20tZGF5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWRheS5mYWRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xyXG4gIH1cclxuXHJcbi8qRGF0ZVRpbWVQb3B1cCBDU1MgZW5kcyovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxufVxyXG4iXX0= */"];
    /***/
  },

  /***/
  "./src/app/header/header.component.ngfactory.js":
  /*!******************************************************!*\
    !*** ./src/app/header/header.component.ngfactory.js ***!
    \******************************************************/

  /*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */

  /***/
  function srcAppHeaderHeaderComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function () {
      return RenderType_HeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function () {
      return View_HeaderComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function () {
      return View_HeaderComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function () {
      return HeaderComponentNgFactory;
    });
    /* harmony import */


    var _header_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./header.component.css.shim.ngstyle */
    "./src/app/header/header.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _trending_trending_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../trending/trending.component.ngfactory */
    "./src/app/trending/trending.component.ngfactory.js");
    /* harmony import */


    var _trending_trending_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../trending/trending.component */
    "./src/app/trending/trending.component.ts");
    /* harmony import */


    var _data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../data-transfer.service */
    "./src/app/data-transfer.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var _verbatim_verbatim_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../verbatim/verbatim.component.ngfactory */
    "./src/app/verbatim/verbatim.component.ngfactory.js");
    /* harmony import */


    var _verbatim_verbatim_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../verbatim/verbatim.component */
    "./src/app/verbatim/verbatim.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../node_modules/ngx-chips/ngx-chips.ngfactory */
    "./node_modules/ngx-chips/ngx-chips.ngfactory.js");
    /* harmony import */


    var ngx_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-chips */
    "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./header.component */
    "./src/app/header/header.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_HeaderComponent = [_header_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_HeaderComponent,
      data: {}
    });

    function View_HeaderComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Loading...\n"]))], null, null);
    }

    function View_HeaderComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "custom-day"]], [[2, "range", null], [2, "faded", null]], [[null, "click"], [null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.onDateSelection(_v.context.date) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseenter" === en) {
          var pd_1 = (_co.hoveredDate = _v.context.date) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseleave" === en) {
          var pd_2 = (_co.hoveredDate = null) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.isFrom(_v.context.date) || _co.isTo(_v.context.date) || _co.isInside(_v.context.date) || _co.isHovered(_v.context.date);

        var currVal_1 = _co.isHovered(_v.context.date) || _co.isInside(_v.context.date);

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_2 = _v.context.date.day;

        _ck(_v, 1, 0, currVal_2);
      });
    }

    function View_HeaderComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "hr", [["class", "my-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["class", "btn btn-primary btn-sm m-2 float-left"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          _co.getToday(_co.today, "");

          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 42).close() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Today"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "button", [["class", "btn btn-secondary btn-sm m-2"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          _co.getWeek(_co.today);

          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 42).close() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["This Week"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "button", [["class", "btn btn-secondary btn-sm m-2 float-right"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 42).close() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Close"]))], null, null);
    }

    function View_HeaderComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-trending", [], null, null, null, _trending_trending_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TrendingComponent_0"], _trending_trending_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TrendingComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _trending_trending_component__WEBPACK_IMPORTED_MODULE_3__["TrendingComponent"], [_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], apollo_angular__WEBPACK_IMPORTED_MODULE_6__["Apollo"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_HeaderComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Verbatim"]))], null, null);
    }

    function View_HeaderComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-verbatim", [], null, null, null, _verbatim_verbatim_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_VerbatimComponent_0"], _verbatim_verbatim_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_VerbatimComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _verbatim_verbatim_component__WEBPACK_IMPORTED_MODULE_8__["VerbatimComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_HeaderComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["About This Tool"]))], null, null);
    }

    function View_HeaderComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park. "]))], null, null);
    }

    function View_HeaderComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        input: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, {
        datePick: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 3, {
        myRangeInput: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 44, "div", [["class", "w-100 text-white"], ["id", "top-nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 5, "div", [["class", "navbar p-mobile-0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "a", [["class", ""], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NewImpact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "a", [["class", "pull-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Some Text Here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 37, "div", [["class", "p-right-80 p-mobile-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 36, "div", [["id", "d-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 35, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 34, "div", [["class", "col d-flex place-date-choice"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 11, "div", [["class", "inner-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["See what people are saying in "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 8, "tag-input", [["class", "d-inline-block"]], [[1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_TagInputComponent_0"], _node_modules_ngx_chips_ngx_chips_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_TagInputComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 4308992, null, 2, ngx_chips__WEBPACK_IMPORTED_MODULE_11__["TagInputComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_chips__WEBPACK_IMPORTED_MODULE_11__["ɵc"]], {
        maxItems: [0, "maxItems"],
        removable: [1, "removable"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        dropdown: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        templates: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [ngx_chips__WEBPACK_IMPORTED_MODULE_11__["TagInputComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, [[2, 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](25, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 21, "div", [["class", "inner-wrapper mt-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "span", [["class", "px-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["during"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 16, "form", [["class", "form-inline d-inline-block"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 10, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 16777216, [[3, 0], ["myRangeInput", 1]], null, 4, "input", [["class", "form-control form-control-sm"], ["myRangeInput", "myRangeInput"], ["name", "dp"], ["ngbDatepicker", ""], ["placeholder", "yyyy-mm-dd to yyyy-mm-dd "]], [[8, "value", 0], [8, "disabled", 0]], [[null, "click"], [null, "valueChange"], [null, "input"], [null, "change"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).manualDateChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("change" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).manualDateChange($event.target.value, true) !== false;
          ad = pd_1 && ad;
        }

        if ("focus" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onFocus() !== false;
          ad = pd_2 && ad;
        }

        if ("blur" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onBlur() !== false;
          ad = pd_3 && ad;
        }

        if ("click" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).toggle() !== false;
          ad = pd_4 && ad;
        }

        if ("valueChange" === en) {
          var pd_5 = (_co.text = $event) !== false;
          ad = pd_5 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerConfig"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepickerConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 671744, [[1, 4], ["d", 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepickerConfig"]], {
        autoClose: [0, "autoClose"],
        dayTemplate: [1, "dayTemplate"],
        displayMonths: [2, "displayMonths"],
        footerTemplate: [3, "footerTemplate"],
        minDate: [4, "minDate"],
        maxDate: [5, "maxDate"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["t", 2]], null, 0, null, View_HeaderComponent_2)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["footerTemplate", 2]], null, 0, null, View_HeaderComponent_3)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "button", [["class", "btn btn-sm btn-outline-light"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).toggle();

          var pd_0 = $event.stopPropagation() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 0, "i", [["class", "far fa-calendar-alt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "button", [["class", "btn btn-sm mx-4"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.updateText(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).value) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Search"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 26, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 25, "div", [["class", "main-tabs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 24, "ngb-tabset", [], null, null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_NgbTabset_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_NgbTabset"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 2146304, null, 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabset"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabsetConfig"]], {
        destroyOnHide: [0, "destroyOnHide"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        tabs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 5, "ngb-tab", [["title", "Trending"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 2113536, [[6, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTab"], [], {
        title: [0, "title"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_HeaderComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, [[8, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 7, "ngb-tab", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 2113536, [[6, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTab"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_HeaderComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, [[9, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_HeaderComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 16384, [[10, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 7, "ngb-tab", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 2113536, [[6, 4]], 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTab"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_HeaderComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 16384, [[11, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_HeaderComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, [[12, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.loading;

        _ck(_v, 4, 0, currVal_0);

        var currVal_9 = 0;
        var currVal_10 = false;

        _ck(_v, 20, 0, currVal_9, currVal_10);

        var currVal_11 = _ck(_v, 25, 0, "Seattle");

        _ck(_v, 24, 0, currVal_11);

        var currVal_21 = true;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43);

        var currVal_23 = 2;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44);

        var currVal_25 = _co.minDate;
        var currVal_26 = _co.maxDate;

        _ck(_v, 42, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26);

        var currVal_27 = false;

        _ck(_v, 53, 0, currVal_27);

        var currVal_28 = "Trending";

        _ck(_v, 56, 0, currVal_28);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).tabindexAttr;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending;

        _ck(_v, 19, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassUntouched;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassTouched;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPristine;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassDirty;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassValid;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassInvalid;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPending;

        _ck(_v, 31, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);

        var currVal_19 = _co.text;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).disabled;

        _ck(_v, 38, 0, currVal_19, currVal_20);
      });
    }

    function View_HeaderComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1163264, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], [_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"], apollo_angular__WEBPACK_IMPORTED_MODULE_6__["Apollo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent, ɵ0, ɵ1, ɵ2 */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
      return ɵ1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
      return ɵ2;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
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

    aws_amplify__WEBPACK_IMPORTED_MODULE_6__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_5__["default"]);

    _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_4__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_5__["default"]);

    var now = new Date();

    var equals = function equals(one, two) {
      return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
    };

    var ɵ0 = equals;

    var before = function before(one, two) {
      return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ? false : one.day < two.day : one.month < two.month : one.year < two.year;
    };

    var ɵ1 = before;

    var after = function after(one, two) {
      return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day ? false : one.day > two.day : one.month > two.month : one.year > two.year;
    };

    var ɵ2 = after;

    var HeaderComponent = /*#__PURE__*/function () {
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
    /**
     * Abstract type serving as a DI token for the service converting from your application Date model to internal
     * NgbDateStruct model.
     * A default implementation converting from and to NgbDateStruct is provided for retro-compatibility,
     * but you can provide another implementation to use an alternative format, ie for using with native Date Object.
     */


    var NgbDateAdapter = function NgbDateAdapter() {
      _classCallCheck(this, NgbDateAdapter);
    };

    var NgbUTCStringAdapter = /*#__PURE__*/function (_NgbDateAdapter) {
      _inherits(NgbUTCStringAdapter, _NgbDateAdapter);

      var _super = _createSuper(NgbUTCStringAdapter);

      function NgbUTCStringAdapter() {
        _classCallCheck(this, NgbUTCStringAdapter);

        return _super.apply(this, arguments);
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

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

    var NgbDateFRParserFormatter = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
      _inherits(NgbDateFRParserFormatter, _ng_bootstrap_ng_boot);

      var _super2 = _createSuper(NgbDateFRParserFormatter);

      function NgbDateFRParserFormatter() {
        _classCallCheck(this, NgbDateFRParserFormatter);

        return _super2.apply(this, arguments);
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
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDateParserFormatter"]);
    /***/

  },

  /***/
  "./src/app/tree-map/tree-map.component.css.shim.ngstyle.js":
  /*!*****************************************************************!*\
    !*** ./src/app/tree-map/tree-map.component.css.shim.ngstyle.js ***!
    \*****************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppTreeMapTreeMapComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["#container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: calc(100vh - 45vh);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS1tYXAvdHJlZS1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC90cmVlLW1hcC90cmVlLW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0NXZoKTtcclxufVxyXG4iXX0= */"];
    /***/
  },

  /***/
  "./src/app/tree-map/tree-map.component.ngfactory.js":
  /*!**********************************************************!*\
    !*** ./src/app/tree-map/tree-map.component.ngfactory.js ***!
    \**********************************************************/

  /*! exports provided: RenderType_TreeMapComponent, View_TreeMapComponent_0, View_TreeMapComponent_Host_0, TreeMapComponentNgFactory */

  /***/
  function srcAppTreeMapTreeMapComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TreeMapComponent", function () {
      return RenderType_TreeMapComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TreeMapComponent_0", function () {
      return View_TreeMapComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TreeMapComponent_Host_0", function () {
      return View_TreeMapComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeMapComponentNgFactory", function () {
      return TreeMapComponentNgFactory;
    });
    /* harmony import */


    var _tree_map_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tree-map.component.css.shim.ngstyle */
    "./src/app/tree-map/tree-map.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _tree_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tree-map.component */
    "./src/app/tree-map/tree-map.component.ts");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_TreeMapComponent = [_tree_map_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_TreeMapComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_TreeMapComponent,
      data: {}
    });

    function View_TreeMapComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], [[8, "selected", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) {
        var currVal_1 = _v.context.$implicit.value;

        _ck(_v, 1, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.value;

        _ck(_v, 2, 0, currVal_2);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.$implicit.value === _co.defaultView;

        _ck(_v, 0, 0, currVal_0);

        var currVal_3 = _v.context.$implicit.value;

        _ck(_v, 3, 0, currVal_3);
      });
    }

    function View_TreeMapComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        test: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["id", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["id", "treemap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "controls"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "select", [], null, [[null, "change"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _co.filterChanged($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TreeMapComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.filterTypes;

        _ck(_v, 6, 0, currVal_0);
      }, null);
    }

    function View_TreeMapComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-tree-map", [], null, null, null, View_TreeMapComponent_0, RenderType_TreeMapComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _tree_map_component__WEBPACK_IMPORTED_MODULE_4__["TreeMapComponent"], [apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TreeMapComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-tree-map", _tree_map_component__WEBPACK_IMPORTED_MODULE_4__["TreeMapComponent"], View_TreeMapComponent_Host_0, {}, {}, []);
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var d3plus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3plus */
    "./node_modules/d3plus/es/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
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

    aws_amplify__WEBPACK_IMPORTED_MODULE_5__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_4__["default"]);

    _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_4__["default"]);

    var TreeMapComponent = /*#__PURE__*/function () {
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
    /***/

  },

  /***/
  "./src/app/trending/trending.component.css.shim.ngstyle.js":
  /*!*****************************************************************!*\
    !*** ./src/app/trending/trending.component.css.shim.ngstyle.js ***!
    \*****************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppTrendingTrendingComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".card-box[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  padding: 1.5rem;\r\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);\r\n  margin-bottom: 24px;\r\n  border-radius: .25rem;\r\n  transition: 0.3s linear;\r\n  position: relative;\r\n  overflow: auto;\r\n}\r\n\r\n.h-350[_ngcontent-%COMP%] {\r\n    height: 350px;\r\n}\r\n\r\n.header-title[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  margin: 0 0 7px 0;\r\n}\r\n\r\n.sentiment-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .sentiment-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 10px 0px;\r\n  vertical-align: top;\r\n  border-top: 1px solid #dee2e6;\r\n  font-size: 12px;\r\n  vertical-align:middle;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%]{\r\n    height: 10px;\r\n}\r\n\r\n.icon-sm[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n}\r\n\r\n.sweep-to-right[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transform: translateZ(0);\r\n  transition: color 1000ms;\r\n}\r\n\r\n.sweep-to-right[_ngcontent-%COMP%]:before {\r\n    height: 5px;\r\n    content: \"\";\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: #2098d1;\r\n    transform: scaleX(0);\r\n    transform-origin: 0 50%;\r\n    transition-property: transform;\r\n    transition: 300ms ease-out;\r\n  }\r\n\r\n.sweep-to-right[_ngcontent-%COMP%]:hover:before {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n.switchView[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 3px 12px;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    line-height: 24px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    border: 1px solid transparent;\r\n    background-color: #ffffff;\r\n    color: #b3a7a7;\r\n    border-color: #cccccc;\r\n    *border: 0;\r\n    *background: #e6e6e6;\r\n    border-radius: 4px;\r\n    *margin-left: .3em;\r\n    box-shadow: inset 0 -2px 0px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.5);\r\n  }\r\n\r\n.switchView.selected[_ngcontent-%COMP%] {\r\n    outline: none !important;\r\n    color: #666666;\r\n    background-image: none;\r\n    box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);\r\n}\r\n\r\n.switchView.btn[_ngcontent-%COMP%]:hover{\r\n  outline: none !important;\r\n  color: #666666;\r\n  background-image: none;\r\n  box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);\r\n}\r\n\r\n#emptySearch[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-size: 15px;\r\n  padding: 2px 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.smalltooltip[_ngcontent-%COMP%]   .tooltip-inner[_ngcontent-%COMP%] {\r\n  font-size: 10px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlbmRpbmcvdHJlbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBRWYsc0NBQXNDO0VBQ3RDLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFFbEIsd0JBQXdCO0VBRXhCLHdCQUF3QjtBQUMxQjs7QUFFRTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUJBQW1CO0lBRW5CLG9CQUFvQjtJQUVwQix1QkFBdUI7SUFFdkIsOEJBQThCO0lBRTlCLDBCQUEwQjtFQUM1Qjs7QUFFQTtJQUVFLG9CQUFvQjtFQUN0Qjs7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxxQkFBcUI7S0FDckIsU0FBVTtLQUNWLG1CQUFvQjtJQUdwQixrQkFBa0I7S0FDbEIsaUJBQWtCO0lBR2xCLGdGQUFnRjtFQUNsRjs7QUFFQTtJQUNFLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLDZDQUE2QztBQUNqRDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDZDQUE2QztBQUMvQzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL3RyZW5kaW5nL3RyZW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMSk7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uaC0zNTAge1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbjogMCAwIDdweCAwO1xyXG59XHJcblxyXG4uc2VudGltZW50LXRhYmxlIHRkLCAuc2VudGltZW50LXRhYmxlIHRoIHtcclxuICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbn1cclxuLnByb2dyZXNze1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbi1zbSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uc3dlZXAtdG8tcmlnaHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAxMDAwbXM7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zO1xyXG59XHJcblxyXG4gIC5zd2VlcC10by1yaWdodDpiZWZvcmUge1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjA5OGQxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAuc3dlZXAtdG8tcmlnaHQ6aG92ZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICB9XHJcbiAgLnN3aXRjaFZpZXcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogM3B4IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICNiM2E3YTc7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2NjY2M7XHJcbiAgICAqYm9yZGVyOiAwO1xyXG4gICAgKmJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgKm1hcmdpbi1sZWZ0OiAuM2VtO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMHB4IHJnYmEoMCwwLDAsLjE1KSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDBweCByZ2JhKDAsMCwwLC4xNSksIGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuNSk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMHB4IHJnYmEoMCwwLDAsLjE1KSwgaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuICB9XHJcblxyXG4gIC5zd2l0Y2hWaWV3LnNlbGVjdGVkIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsMCwwLDAuMTI1KTtcclxufVxyXG4gIFxyXG4uc3dpdGNoVmlldy5idG46aG92ZXJ7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsMC4xMjUpO1xyXG59XHJcbiNlbXB0eVNlYXJjaCB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnNtYWxsdG9vbHRpcCAudG9vbHRpcC1pbm5lciB7XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/trending/trending.component.ngfactory.js":
  /*!**********************************************************!*\
    !*** ./src/app/trending/trending.component.ngfactory.js ***!
    \**********************************************************/

  /*! exports provided: RenderType_TrendingComponent, View_TrendingComponent_0, View_TrendingComponent_Host_0, TrendingComponentNgFactory */

  /***/
  function srcAppTrendingTrendingComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TrendingComponent", function () {
      return RenderType_TrendingComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TrendingComponent_0", function () {
      return View_TrendingComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TrendingComponent_Host_0", function () {
      return View_TrendingComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrendingComponentNgFactory", function () {
      return TrendingComponentNgFactory;
    });
    /* harmony import */


    var _trending_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./trending.component.css.shim.ngstyle */
    "./src/app/trending/trending.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../node_modules/ngx-pagination/dist/ngx-pagination.ngfactory */
    "./node_modules/ngx-pagination/dist/ngx-pagination.ngfactory.js");
    /* harmony import */


    var _chart_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../chart/chart.component.ngfactory */
    "./src/app/chart/chart.component.ngfactory.js");
    /* harmony import */


    var _chart_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../chart/chart.component */
    "./src/app/chart/chart.component.ts");
    /* harmony import */


    var _data_transfer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../data-transfer.service */
    "./src/app/data-transfer.service.ts");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/fesm2015/ngApollo.js");
    /* harmony import */


    var _tree_map_tree_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../tree-map/tree-map.component.ngfactory */
    "./src/app/tree-map/tree-map.component.ngfactory.js");
    /* harmony import */


    var _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../tree-map/tree-map.component */
    "./src/app/tree-map/tree-map.component.ts");
    /* harmony import */


    var _trending_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./trending.component */
    "./src/app/trending/trending.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_TrendingComponent = [_trending_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_TrendingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_TrendingComponent,
      data: {}
    });

    function View_TrendingComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "loader mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["src", "/assets/loader.gif"]], null, null, null, null, null))], null, null);
    }

    function View_TrendingComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "tr", [["class", "odd"], ["role", "row"], ["style", "cursor: pointer;"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.updateClicked(_v.context.$implicit.topic + " topic") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "td", [["class", "d-flex"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 10, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 9, "div", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 16777216, null, null, 2, "div", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "sentimentData.negative"], ["class", "progress-bar bg-danger"], ["role", "progressbar"], ["tooltipClass", "smalltooltip"]], [[8, "style", 2]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], {
        placement: [0, "placement"],
        tooltipClass: [1, "tooltipClass"],
        ngbTooltip: [2, "ngbTooltip"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](11, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 16777216, null, null, 2, "div", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "sentimentData.neutral"], ["class", "progress-bar"], ["role", "progressbar"], ["tooltipClass", "smalltooltip"]], [[8, "style", 2]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], {
        placement: [0, "placement"],
        tooltipClass: [1, "tooltipClass"],
        ngbTooltip: [2, "ngbTooltip"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](14, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 16777216, null, null, 2, "div", [["aria-valuemax", "100"], ["aria-valuemin", "sentimentData.positive"], ["class", "progress-bar bg-success"], ["role", "progressbar"], ["tooltipClass", "smalltooltip"]], [[8, "style", 2]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], {
        placement: [0, "placement"],
        tooltipClass: [1, "tooltipClass"],
        ngbTooltip: [2, "ngbTooltip"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](17, 2)], function (_ck, _v) {
        var currVal_4 = _ck(_v, 11, 0, "top", "left");

        var currVal_5 = "smalltooltip";

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (_v.context.$implicit.negative / _v.context.$implicit.counts * 100).toFixed(2), "% Negative");

        _ck(_v, 10, 0, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _ck(_v, 14, 0, "top", "left");

        var currVal_9 = "smalltooltip";

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (_v.context.$implicit.neutral / _v.context.$implicit.counts * 100).toFixed(2), "% Neutral");

        _ck(_v, 13, 0, currVal_8, currVal_9, currVal_10);

        var currVal_12 = _ck(_v, 17, 0, "top", "left");

        var currVal_13 = "smalltooltip";

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (_v.context.$implicit.positive / _v.context.$implicit.counts * 100).toFixed(2), "% Positive");

        _ck(_v, 16, 0, currVal_12, currVal_13, currVal_14);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "fas icon-sm pr-2 my-auto ", _v.context.$implicit.sentiment == 0 - 1 ? "fa-arrow-circle-down" : _v.context.$implicit.sentiment == 0 ? "fa-minus-circle" : "fa-arrow-circle-up", "");

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.counts;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.topic;

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "width: ", _v.context.$implicit.negative / _v.context.$implicit.counts * 100, "%");

        _ck(_v, 9, 0, currVal_3);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "width: ", _v.context.$implicit.neutral / _v.context.$implicit.counts * 100, "%");

        _ck(_v, 12, 0, currVal_7);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "width: ", _v.context.$implicit.positive / _v.context.$implicit.counts * 100, "%");

        _ck(_v, 15, 0, currVal_11);
      });
    }

    function View_TrendingComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 3, null, View_TrendingComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        itemsPerPage: 0,
        currentPage: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).transform(_co.listTrendingTopics, _ck(_v, 3, 0, 8, _co.p)));

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_TrendingComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "tr", [["class", "odd"], ["role", "row"], ["style", "cursor: pointer;"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.updateClicked(_v.context.$implicit.hashtag + " hashtag") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "td", [["class", "d-flex"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 10, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 9, "div", [["class", "progress"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 16777216, null, null, 2, "div", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "sentimentData.negative"], ["class", "progress-bar bg-danger"], ["role", "progressbar"], ["tooltipClass", "smalltooltip"]], [[8, "style", 2]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], {
        placement: [0, "placement"],
        tooltipClass: [1, "tooltipClass"],
        ngbTooltip: [2, "ngbTooltip"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](11, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 16777216, null, null, 2, "div", [["aria-valuemax", "100"], ["aria-valuemin", "0"], ["aria-valuenow", "sentimentData.neutral"], ["class", "progress-bar"], ["role", "progressbar"], ["tooltipClass", "smalltooltip"]], [[8, "style", 2]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], {
        placement: [0, "placement"],
        tooltipClass: [1, "tooltipClass"],
        ngbTooltip: [2, "ngbTooltip"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](14, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 16777216, null, null, 2, "div", [["aria-valuemax", "100"], ["aria-valuemin", "sentimentData.positive"], ["class", "progress-bar bg-success"], ["role", "progressbar"], ["tooltipClass", "smalltooltip"]], [[8, "style", 2]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 737280, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipConfig"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]], {
        placement: [0, "placement"],
        tooltipClass: [1, "tooltipClass"],
        ngbTooltip: [2, "ngbTooltip"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](17, 2)], function (_ck, _v) {
        var currVal_4 = _ck(_v, 11, 0, "top", "left");

        var currVal_5 = "smalltooltip";

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (_v.context.$implicit.negative / _v.context.$implicit.counts * 100).toFixed(2), "% Negative");

        _ck(_v, 10, 0, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _ck(_v, 14, 0, "top", "left");

        var currVal_9 = "smalltooltip";

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (_v.context.$implicit.neutral / _v.context.$implicit.counts * 100).toFixed(2), "% Neutral");

        _ck(_v, 13, 0, currVal_8, currVal_9, currVal_10);

        var currVal_12 = _ck(_v, 17, 0, "top", "left");

        var currVal_13 = "smalltooltip";

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", (_v.context.$implicit.positive / _v.context.$implicit.counts * 100).toFixed(2), "% Positive");

        _ck(_v, 16, 0, currVal_12, currVal_13, currVal_14);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "fas icon-sm pr-2 my-auto ", _v.context.$implicit.sentiment == 0 - 1 ? "fa-arrow-circle-down" : _v.context.$implicit.sentiment == 0 ? "fa-minus-circle" : "fa-arrow-circle-up", "");

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.counts;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.hashtag;

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "width: ", _v.context.$implicit.negative / _v.context.$implicit.counts * 100, "%");

        _ck(_v, 9, 0, currVal_3);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "width: ", _v.context.$implicit.neutral / _v.context.$implicit.counts * 100, "%");

        _ck(_v, 12, 0, currVal_7);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "width: ", _v.context.$implicit.positive / _v.context.$implicit.counts * 100, "%");

        _ck(_v, 15, 0, currVal_11);
      });
    }

    function View_TrendingComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 3, null, View_TrendingComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        itemsPerPage: 0,
        currentPage: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationService"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).transform(_co.listHashtags, _ck(_v, 3, 0, 8, _co.p)));

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_TrendingComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 50, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 18, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 17, "div", [["class", "col-xl-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 16, "div", [["class", "card-box sweep-to-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h4", [["class", "header-title mb-3 d-inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Trending Topics"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 10, "div", [["class", "d-inline-block pull-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "button", [["class", "btn-sm btn rounded-0 m-0 switchView"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          _co.getTrendingTopics();

          var pd_0 = (_co.loading = true) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](10, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Topics"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "button", [["class", "btn-sm btn rounded-0 m-0 switchView"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          _co.getHashtags();

          var pd_0 = (_co.loading = true) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](15, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hashtags"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "div", [["class", "h-350 d-flex align-items-center"], ["id", "trending-topics"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TrendingComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 30, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 22, "div", [["class", "col-xl-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 21, "div", [["class", "card-box sweep-to-right"], ["style", "padding-bottom: 15px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "div", [["class", "d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "h4", [["class", "header-title mb-3 d-inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sentiment Bifurcation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "pagination-controls", [["class", "hide-page-numbers d-inline-block"], ["directionLinks", "true"], ["nextLabel", ""], ["previousLabel", ""]], null, [[null, "pageChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("pageChange" === en) {
          var pd_0 = (_co.p = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_PaginationControlsComponent_0"], _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_PaginationControlsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 49152, null, 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], [], {
        directionLinks: [0, "directionLinks"],
        previousLabel: [1, "previousLabel"],
        nextLabel: [2, "nextLabel"]
      }, {
        pageChange: "pageChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 15, "div", [["class", "row h-350"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 14, "div", [["class", "col-xl-12 p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 13, "table", [["class", "table table-hover m-0 table-centered nowrap w-100 sentiment-table"], ["role", "grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 6, "tr", [["role", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "th", [["class", "sorting_asc col-3 w-25"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Count"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "th", [["class", "sorting col-3 w-25"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Topic Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "th", [["class", "sorting col-6 w-50"], ["tabindex", "0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sentiment"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TrendingComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TrendingComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 6, "div", [["class", "col-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 5, "div", [["class", "card-box sweep-to-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "h4", [["class", "header-title mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Topics Over Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "div", [["class", "row h-350"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "app-chart", [], null, null, null, _chart_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ChartComponent_0"], _chart_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 114688, null, 0, _chart_chart_component__WEBPACK_IMPORTED_MODULE_7__["ChartComponent"], [_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__["DataTransferService"], apollo_angular__WEBPACK_IMPORTED_MODULE_9__["Apollo"]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "btn-sm btn rounded-0 m-0 switchView";

        var currVal_1 = _ck(_v, 10, 0, _co.selectedTopics ? "selected" : "notSelected");

        _ck(_v, 9, 0, currVal_0, currVal_1);

        var currVal_2 = "btn-sm btn rounded-0 m-0 switchView";

        var currVal_3 = _ck(_v, 15, 0, _co.selectedTopics ? "notSelected" : "selected");

        _ck(_v, 14, 0, currVal_2, currVal_3);

        var currVal_4 = _co.loading;

        _ck(_v, 19, 0, currVal_4);

        var currVal_5 = "true";
        var currVal_6 = "";
        var currVal_7 = "";

        _ck(_v, 27, 0, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _co.selectedTopics;

        _ck(_v, 41, 0, currVal_8);

        var currVal_9 = !_co.selectedTopics;

        _ck(_v, 43, 0, currVal_9);

        _ck(_v, 50, 0);
      }, null);
    }

    function View_TrendingComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "text-center mt-5 mx-auto px-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "mb-4 text-center pb-2 "], ["src", "/assets/zero_page_icon.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "p", [["id", "emptySearch"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "fas fa-exclamation-circle mx-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" No Data Found. Please Refine your Search"]))], null, null);
    }

    function View_TrendingComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TrendingComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TrendingComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "div", [["class", "col-xl-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "div", [["class", "card-box sweep-to-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h4", [["class", "header-title mb-3 d-inline-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tree Map"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["class", "h-350"], ["id", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "app-tree-map", [], null, null, null, _tree_map_tree_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_TreeMapComponent_0"], _tree_map_tree_map_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_TreeMapComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 114688, null, 0, _tree_map_tree_map_component__WEBPACK_IMPORTED_MODULE_11__["TreeMapComponent"], [apollo_angular__WEBPACK_IMPORTED_MODULE_9__["Apollo"]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.empty;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _co.empty;

        _ck(_v, 3, 0, currVal_1);

        _ck(_v, 12, 0);
      }, null);
    }

    function View_TrendingComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-trending", [], null, null, null, View_TrendingComponent_0, RenderType_TrendingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _trending_component__WEBPACK_IMPORTED_MODULE_12__["TrendingComponent"], [_data_transfer_service__WEBPACK_IMPORTED_MODULE_8__["DataTransferService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], apollo_angular__WEBPACK_IMPORTED_MODULE_9__["Apollo"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TrendingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-trending", _trending_component__WEBPACK_IMPORTED_MODULE_12__["TrendingComponent"], View_TrendingComponent_Host_0, {}, {}, []);
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
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

    aws_amplify__WEBPACK_IMPORTED_MODULE_5__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_4__["default"]);

    _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_3__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_4__["default"]);

    var TrendingComponent = /*#__PURE__*/function () {
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
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a(_templateObject5()),
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
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a(_templateObject6()),
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
    /***/

  },

  /***/
  "./src/app/verbatim/verbatim.component.css.shim.ngstyle.js":
  /*!*****************************************************************!*\
    !*** ./src/app/verbatim/verbatim.component.css.shim.ngstyle.js ***!
    \*****************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppVerbatimVerbatimComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["@-webkit-keyframes swing {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  10% {\r\n    transform: rotate(10deg);\r\n  }\r\n\r\n  30% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  40% {\r\n    transform: rotate(-10deg);\r\n  }\r\n\r\n  50% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  60% {\r\n    transform: rotate(5deg);\r\n  }\r\n\r\n  70% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  80% {\r\n    transform: rotate(-5deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n@keyframes swing {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  10% {\r\n    transform: rotate(10deg);\r\n  }\r\n\r\n  30% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  40% {\r\n    transform: rotate(-10deg);\r\n  }\r\n\r\n  50% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  60% {\r\n    transform: rotate(5deg);\r\n  }\r\n\r\n  70% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  80% {\r\n    transform: rotate(-5deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes sonar {\r\n  0% {\r\n    transform: scale(0.9);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    transform: scale(2);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes sonar {\r\n  0% {\r\n    transform: scale(0.9);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    transform: scale(2);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.page-wrapper[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after, .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, .sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #show-sidebar[_ngcontent-%COMP%], #close-sidebar[_ngcontent-%COMP%] {\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n\r\n\r\n.page-wrapper[_ngcontent-%COMP%] {\r\nposition:relative;\r\n}\r\n\r\n.page-wrapper[_ngcontent-%COMP%]   .theme[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    display: inline-block;\r\n    border-radius: 4px;\r\n    margin: 2px;\r\n  }\r\n\r\n.page-wrapper[_ngcontent-%COMP%]   .theme.chiller-theme[_ngcontent-%COMP%] {\r\n      background: #1e2229;\r\n    }\r\n\r\n\r\n\r\n.page-wrapper.toggled[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\r\n    left: 0px;\r\n    top: auto;\r\n    position: absolute;\r\n  }\r\n\r\n@media screen and (min-width: 768px) {\r\n  .page-wrapper.toggled[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\r\n    padding-left: 300px;\r\n  }\r\n}\r\n\r\n\r\n\r\n#show-sidebar[_ngcontent-%COMP%] {\r\n  left: 0;\r\n  top: 0px;\r\n  border-radius: 0 4px 4px 0px;\r\n  width: 35px;\r\n  transition-delay: 0.3s;\r\n  position: absolute;\r\n}\r\n\r\n.page-wrapper.toggled[_ngcontent-%COMP%]   #show-sidebar[_ngcontent-%COMP%] {\r\n  left: 20%;\r\n  top: 0%;\r\n}\r\n\r\n\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -300px;\r\n  z-index: 999;\r\n}\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n  }\r\n\r\n\r\n\r\n.sidebar-content[_ngcontent-%COMP%] {\r\n  max-height: calc(100% - 30px);\r\n  height: calc(100% - 30px);\r\n  overflow-y: auto;\r\n  position: relative;\r\n}\r\n\r\n.sidebar-content.desktop[_ngcontent-%COMP%] {\r\n    overflow-y: hidden;\r\n  }\r\n\r\n\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    flex-grow: 1;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n  }\r\n\r\n\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n}\r\n\r\n\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    padding: 15px 20px 5px 20px;\r\n    display: inline-block;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    text-decoration: none;\r\n    position: relative;\r\n    padding: 8px 30px 8px 20px;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n      margin-right: 10px;\r\n      font-size: 12px;\r\n      width: 30px;\r\n      height: 30px;\r\n      line-height: 30px;\r\n      text-align: center;\r\n      border-radius: 4px;\r\n    }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%]::before {\r\n      display: inline-block;\r\n      -webkit-animation: swing ease-in-out 0.5s 1 alternate;\r\n              animation: swing ease-in-out 0.5s 1 alternate;\r\n    }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 900;\r\n    content: \"\\f105\";\r\n    font-style: normal;\r\n    display: inline-block;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    background: 0 0;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 14px;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding: 5px 0;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n    font-size: 13px;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n      content: \"\\f111\";\r\n      font-family: \"Font Awesome 5 Free\";\r\n      font-weight: 400;\r\n      font-style: normal;\r\n      display: inline-block;\r\n      text-align: center;\r\n      text-decoration: none;\r\n      -webkit-font-smoothing: antialiased;\r\n      -moz-osx-font-smoothing: grayscale;\r\n      margin-right: 10px;\r\n      font-size: 8px;\r\n    }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 8px;\r\n    margin-left: 5px;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-top: 0px;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n.sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\r\n    transform: rotate(90deg);\r\n    right: 17px;\r\n  }\r\n\r\n\r\n\r\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 100%;\r\n  padding-left: 30px;\r\n  padding-top: 20px;\r\n  padding-right: 30px;\r\n  z-index: -1;\r\n}\r\n\r\n.page-wrapper[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\r\n  overflow-x: hidden;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 5px;\r\n  height: 7px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-button {\r\n  width: 0px;\r\n  height: 0px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: #525965;\r\n  border: 0px none #ffffff;\r\n  border-radius: 0px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #525965;\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\r\n    background: #525965;\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: transparent;\r\n  border: 0px none #ffffff;\r\n  border-radius: 50px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track:hover {\r\n    background: transparent;\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track:active {\r\n    background: transparent;\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-corner {\r\n  background: transparent;\r\n}\r\n\r\n\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%] {\r\n  background: #31353D;\r\n}\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #3a3f48;\r\n  }\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n      border-color: transparent;\r\n      box-shadow: none;\r\n    }\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      color: #818896;\r\n    }\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-brand[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n        color: #b8bfce;\r\n      }\r\n\r\n.page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%] {\r\n  color: #bdbdbd;\r\n}\r\n\r\n.page-wrapper.chiller-theme.toggled[_ngcontent-%COMP%]   #close-sidebar[_ngcontent-%COMP%]:hover {\r\n    color: #ffffff;\r\n  }\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .sidebar-submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%]:focus    + span[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #16c7ff;\r\n  text-shadow: 0px 0px 10px rgba(22, 199, 255, 0.5);\r\n}\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.search-menu[_ngcontent-%COMP%], .chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n  background: #3a3f48;\r\n}\r\n\r\n.chiller-theme[_ngcontent-%COMP%]   .sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-menu[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #6c7b88;\r\n}\r\n\r\n.sub-details[_ngcontent-%COMP%] {\r\n  box-shadow: hsl(0, 0%, 84%) 0 0 8px;\r\n    padding: 10px;\r\n    position: relative;\r\n    margin: 20px 0px;\r\n}\r\n\r\n.topics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 4px 4px;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  line-height: 14px;\r\n  color: #ffffff;\r\n  vertical-align: baseline;\r\n  white-space: nowrap;\r\n  border-radius: 3px;\r\n  margin: 0px 5px;\r\n}\r\n\r\n.pink[_ngcontent-%COMP%] {\r\n  background-color: #ea4ca0;\r\n}\r\n\r\n.blue[_ngcontent-%COMP%] {\r\n  background-color: #00accd;\r\n}\r\n\r\n.green[_ngcontent-%COMP%] {\r\n  background-color: #25a01a;\r\n}\r\n\r\n.red[_ngcontent-%COMP%] {\r\n  background-color: #cc1a1a;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .smiley[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 25px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyYmF0aW0vdmVyYmF0aW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBcENBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjs7QUFWQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7Ozs7Ozs7RUFlRSx5QkFBeUI7QUFDM0I7O0FBRUEsK0NBQStDOztBQUUvQztBQUNBLGlCQUFpQjtBQUNqQjs7QUFFRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0FBRUU7TUFDRSxtQkFBbUI7SUFDckI7O0FBRUYsbURBQW1EOztBQUVuRDtJQUNFLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsa0JBQWtCO0VBQ3BCOztBQUVGO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFDQSxzREFBc0Q7O0FBQ3REO0VBQ0UsT0FBTztFQUNQLFFBQVE7RUFDUiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUNBLGtEQUFrRDs7QUFFbEQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUU7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7QUFFRixrREFBa0Q7O0FBRWxEO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVFO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGLDBEQUEwRDs7QUFFMUQ7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFRTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0FBR0YsZ0VBQWdFOztBQUVoRTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSw4REFBOEQ7O0FBRTlEO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVFO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtFQUM1Qjs7QUFFRTtNQUNFLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsV0FBVztNQUNYLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGtCQUFrQjtJQUNwQjs7QUFFQTtNQUNFLHFCQUFxQjtNQUNyQixxREFBNkM7Y0FBN0MsNkNBQTZDO0lBQy9DOztBQUVGO0lBQ0Usa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0VBQ1g7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0FBRUU7TUFDRSxnQkFBZ0I7TUFDaEIsa0NBQWtDO01BQ2xDLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsbUNBQW1DO01BQ25DLGtDQUFrQztNQUNsQyxrQkFBa0I7TUFDbEIsY0FBYztJQUNoQjs7QUFFRjs7SUFFRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7QUFFQTs7SUFFRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0VBQ2I7O0FBR0Ysc0VBQXNFOztBQUV0RTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLHdDQUF3Qzs7QUFFeEM7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVFO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUU7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUY7RUFDRSx1QkFBdUI7QUFDekI7O0FBR0EsOEZBQThGOztBQUU5RjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFRTs7O0lBR0UsNkJBQTZCO0VBQy9COztBQUVFOztNQUVFLHlCQUF5QjtNQUN6QixnQkFBZ0I7SUFDbEI7O0FBRUE7Ozs7TUFJRSxjQUFjO0lBQ2hCOztBQUVFOzs7UUFHRSxjQUFjO01BQ2hCOztBQUVOO0VBQ0UsY0FBYztBQUNoQjs7QUFFRTtJQUNFLGNBQWM7RUFDaEI7O0FBRUY7Ozs7RUFJRSxjQUFjO0VBQ2QsaURBQWlEO0FBQ25EOztBQUVBOzs7O0VBSUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtFQUdJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBS0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztFQUNiOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvdmVyYmF0aW0vdmVyYmF0aW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc3dpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICB9XHJcblxyXG4gIDMwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgNzAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgODAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNvbmFyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4ucGFnZS13cmFwcGVyIC5zaWRlYmFyLXdyYXBwZXIsXHJcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQgPiBhLFxyXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWRyb3Bkb3duID4gYTphZnRlcixcclxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpiZWZvcmUsXHJcbi5zaWRlYmFyLXdyYXBwZXIgdWwgbGkgYSBpLFxyXG4ucGFnZS13cmFwcGVyIC5wYWdlLWNvbnRlbnQsXHJcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxyXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCxcclxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEsXHJcbiNzaG93LXNpZGViYXIsXHJcbiNjbG9zZS1zaWRlYmFyIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tcGFnZS13cmFwcGVyLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ucGFnZS13cmFwcGVyIHtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbiAgLnBhZ2Utd3JhcHBlciAudGhlbWUge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICB9XHJcblxyXG4gICAgLnBhZ2Utd3JhcHBlciAudGhlbWUuY2hpbGxlci10aGVtZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxZTIyMjk7XHJcbiAgICB9XHJcblxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLXRvZ2dlbGVkIHNpZGViYXItLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgLnBhZ2Utd3JhcHBlci50b2dnbGVkIC5zaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnBhZ2Utd3JhcHBlci50b2dnbGVkIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMDBweDtcclxuICB9XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tc2hvdyBzaWRlYmFyIGJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jc2hvdy1zaWRlYmFyIHtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwcHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5wYWdlLXdyYXBwZXIudG9nZ2xlZCAjc2hvdy1zaWRlYmFyIHtcclxuICBsZWZ0OiAyMCU7XHJcbiAgdG9wOiAwJTtcclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLXdyYXBwZXItLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5zaWRlYmFyLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0zMDBweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLWNvbnRlbnQtLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5zaWRlYmFyLWNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiAgLnNpZGViYXItY29udGVudC5kZXNrdG9wIHtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1icmFuZC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kID4gYSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kICNjbG9zZS1zaWRlYmFyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItc2VhcmNoLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoID4gZGl2IHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItbWVudS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLmhlYWRlci1tZW51IHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHggNXB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYTpob3ZlciA+IGk6OmJlZm9yZSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgYW5pbWF0aW9uOiBzd2luZyBlYXNlLWluLW91dCAwLjVzIDEgYWx0ZXJuYXRlO1xyXG4gICAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gPiBhOmFmdGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb250ZW50OiBcIlxcZjEwNVwiO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IDAgMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgdWwge1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuICAgIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGE6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcXGYxMTFcIjtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBzcGFuLmxhYmVsLFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHNwYW4uYmFkZ2Uge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGEgLmJhZGdlLFxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGEgLmxhYmVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1zdWJtZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlID4gYTphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICByaWdodDogMTdweDtcclxuICB9XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXBhZ2UtY29udGVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ucGFnZS13cmFwcGVyIC5wYWdlLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLyotLS0tLS1zY3JvbGwgYmFyLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcclxuICB3aWR0aDogMHB4O1xyXG4gIGhlaWdodDogMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjNTI1OTY1O1xyXG4gIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTI1OTY1O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzUyNTk2NTtcclxuICB9XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDBweCBub25lICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjazphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoaWxsZXItdGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzMTM1M0Q7XHJcbn1cclxuXHJcbiAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlcixcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCxcclxuICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTNmNDg7XHJcbiAgfVxyXG5cclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxyXG4gICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQsXHJcbiAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kID4gYSxcclxuICAgIC5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHtcclxuICAgICAgY29sb3I6ICM4MTg4OTY7XHJcbiAgICB9XHJcblxyXG4gICAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGk6aG92ZXIgPiBhLFxyXG4gICAgICAuY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlID4gYSxcclxuICAgICAgLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCA+IGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYjhiZmNlO1xyXG4gICAgICB9XHJcblxyXG4ucGFnZS13cmFwcGVyLmNoaWxsZXItdGhlbWUudG9nZ2xlZCAjY2xvc2Utc2lkZWJhciB7XHJcbiAgY29sb3I6ICNiZGJkYmQ7XHJcbn1cclxuXHJcbiAgLnBhZ2Utd3JhcHBlci5jaGlsbGVyLXRoZW1lLnRvZ2dsZWQgI2Nsb3NlLXNpZGViYXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciB1bCBsaTpob3ZlciBhIGksXHJcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmhvdmVyOmJlZm9yZSxcclxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnU6Zm9jdXMgKyBzcGFuLFxyXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlIGEgaSB7XHJcbiAgY29sb3I6ICMxNmM3ZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDIyLCAxOTksIDI1NSwgMC41KTtcclxufVxyXG5cclxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEgaSxcclxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIGRpdixcclxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXHJcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kOiAjM2EzZjQ4O1xyXG59XHJcblxyXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLmhlYWRlci1tZW51IHNwYW4ge1xyXG4gIGNvbG9yOiAjNmM3Yjg4O1xyXG59XHJcblxyXG5cclxuLnN1Yi1kZXRhaWxzIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGhzbCgwLCAwJSwgODQlKSAwIDAgOHB4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBoc2woMCwgMCUsIDg0JSkgMCAwIDhweDtcclxuICAgIGJveC1zaGFkb3c6IGhzbCgwLCAwJSwgODQlKSAwIDAgOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbn1cclxuXHJcbi50b3BpY3Mgc3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDRweCA0cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMHB4IDVweDtcclxufVxyXG5cclxuLnBpbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTRjYTA7XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2NkO1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNWEwMWE7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzFhMWE7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zbWlsZXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/verbatim/verbatim.component.ngfactory.js":
  /*!**********************************************************!*\
    !*** ./src/app/verbatim/verbatim.component.ngfactory.js ***!
    \**********************************************************/

  /*! exports provided: RenderType_VerbatimComponent, View_VerbatimComponent_0, View_VerbatimComponent_Host_0, VerbatimComponentNgFactory */

  /***/
  function srcAppVerbatimVerbatimComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_VerbatimComponent", function () {
      return RenderType_VerbatimComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_VerbatimComponent_0", function () {
      return View_VerbatimComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_VerbatimComponent_Host_0", function () {
      return View_VerbatimComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerbatimComponentNgFactory", function () {
      return VerbatimComponentNgFactory;
    });
    /* harmony import */


    var _verbatim_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./verbatim.component.css.shim.ngstyle */
    "./src/app/verbatim/verbatim.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _verbatim_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./verbatim.component */
    "./src/app/verbatim/verbatim.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_VerbatimComponent = [_verbatim_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_VerbatimComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_VerbatimComponent,
      data: {}
    });

    function View_VerbatimComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "d-flex align-items-center justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "input", [["id", "impact-1"], ["name", "impact-1"], ["type", "checkbox"], ["value", "Impact Area Name 1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "label", [["class", "my-0 px-2"], ["for", "impact-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Impact Area Name 1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "badge badge-pill badge-warning"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 6, "div", [["class", "d-flex align-items-center justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "input", [["id", "impact-2"], ["name", "impact-2"], ["type", "checkbox"], ["value", "Impact Area Name 2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "label", [["class", "my-0 px-2"], ["for", "impact-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Impact Area Name 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "span", [["class", "badge badge-pill badge-warning"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["20"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "div", [["class", "d-flex align-items-center justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "input", [["id", "impact-3"], ["name", "impact-3"], ["type", "checkbox"], ["value", "Impact Area Name 3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "label", [["class", "my-0 px-2"], ["for", "impact-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Impact Area Name 3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "span", [["class", "badge badge-pill badge-warning"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["100"]))], null, null);
    }

    function View_VerbatimComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. "]))], null, null);
    }

    function View_VerbatimComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["_ngcontent-pbe-c111", ""], ["class", "badge badge-pill badge-warning"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. "]))], null, null);
    }

    function View_VerbatimComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. "]))], null, null);
    }

    function View_VerbatimComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, {
        accordion: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 318, "div", [["class", "page-wrapper chiller-theme"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "a", [["class", "btn btn-sm btn-dark"], ["href", "#"], ["id", "show-sidebar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [["class", "fas fa-bars"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = (_co.isOn ? _co.isOn = false : _co.isOn = true) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 48, "nav", [["class", "sidebar-wrapper"], ["id", "sidebar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 47, "div", [["class", "sidebar-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "div", [["class", "sidebar-brand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "a", [["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Filter Data"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "div", [["id", "close-sidebar"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = (_co.isOn = false) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "i", [["class", "far fa-times-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "div", [["class", "sidebar-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "input", [["class", "form-control search-menu"], ["placeholder", "Search Filter Criteria"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "span", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 34, "div", [["class", "sidebar-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 33, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 32, "ngb-accordion", [["class", "accordion"], ["role", "tablist"]], [[1, "aria-multiselectable", 0]], null, null, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NgbAccordion_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NgbAccordion"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 2146304, null, 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAccordion"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAccordionConfig"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        panels: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 6, "ngb-panel", [["class", "sidebar-dropdown"], ["title", "Impact"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 2113536, [[2, 4]], 3, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanel"], [], {
        title: [0, "title"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        headerTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_VerbatimComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, [[5, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 8, "ngb-panel", [["class", "sidebar-dropdown"], ["title", "Source"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 2113536, [[2, 4]], 3, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanel"], [], {
        title: [0, "title"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        headerTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "span", [["_ngcontent-pbe-c111", ""], ["class", "badge badge-pill badge-warning"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_VerbatimComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, [[8, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 6, "ngb-panel", [["class", "sidebar-dropdown"], ["title", "Type"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 2113536, [[2, 4]], 3, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanel"], [], {
        title: [0, "title"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        headerTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_VerbatimComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, [[11, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 6, "ngb-panel", [["class", "sidebar-dropdown"], ["title", "Sentiment"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 2113536, [[2, 4]], 3, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanel"], [], {
        title: [0, "title"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
        titleTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
        headerTpls: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
        contentTpls: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_VerbatimComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, [[14, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 263, "main", [["class", "page-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 262, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "div", [["class", "source-location"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Seattle ... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 25, "div", [["class", "card sub-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "span", [["class", "col-sm-12 location col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Seattle "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2/20/2020 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 1, "span", [["class", "col-md-4 col-sm-4 sources"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" From Twitter "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 metadata text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Traffic "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 6, "div", [["class", "row d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 1, "span", [["class", "col-1 smiley text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 0, "i", [["class", "far fa-smile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 1, "span", [["class", "col-1 icon-comment text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 0, "i", [["class", "far fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 1, "p", [["class", "col-10 inline-block my-0"], ["title", "orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 8, "div", [["class", "row topics col-12 d-flex justify-content-center mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 1, "span", [["class", "pink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inclusion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 1, "span", [["class", "blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Economics "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 1, "span", [["class", "red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Advances "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "span", [["class", "green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Water "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 25, "div", [["class", "card sub-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 1, "span", [["class", "col-sm-12 location col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Seattle "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2/20/2020 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 1, "span", [["class", "col-md-4 col-sm-4 sources"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" From Twitter "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 metadata text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Traffic "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 6, "div", [["class", "row d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 1, "span", [["class", "col-1 smiley text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 0, "i", [["class", "far fa-smile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 1, "span", [["class", "col-1 icon-comment text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 0, "i", [["class", "far fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 1, "p", [["class", "col-10 inline-block my-0"], ["title", "orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 8, "div", [["class", "row topics col-12 d-flex justify-content-center mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 1, "span", [["class", "pink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inclusion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 1, "span", [["class", "blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Economics "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 1, "span", [["class", "red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Advances "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 1, "span", [["class", "green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Water "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 25, "div", [["class", "card sub-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 1, "span", [["class", "col-sm-12 location col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Seattle "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2/20/2020 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 1, "span", [["class", "col-md-4 col-sm-4 sources"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" From Twitter "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 metadata text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Traffic "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 6, "div", [["class", "row d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 1, "span", [["class", "col-1 smiley text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, null, 0, "i", [["class", "far fa-smile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, null, 1, "span", [["class", "col-1 icon-comment text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 0, null, null, 0, "i", [["class", "far fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, null, 1, "p", [["class", "col-10 inline-block my-0"], ["title", "orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 8, "div", [["class", "row topics col-12 d-flex justify-content-center mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 1, "span", [["class", "pink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inclusion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 1, "span", [["class", "blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Economics "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 1, "span", [["class", "red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Advances "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 1, "span", [["class", "green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Water "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, null, 25, "div", [["class", "card sub-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](140, 0, null, null, 1, "span", [["class", "col-sm-12 location col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Seattle "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](142, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2/20/2020 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](144, 0, null, null, 1, "span", [["class", "col-md-4 col-sm-4 sources"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" From Twitter "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 metadata text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Traffic "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](148, 0, null, null, 6, "div", [["class", "row d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](149, 0, null, null, 1, "span", [["class", "col-1 smiley text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](150, 0, null, null, 0, "i", [["class", "far fa-smile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, null, 1, "span", [["class", "col-1 icon-comment text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 0, "i", [["class", "far fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, null, 1, "p", [["class", "col-10 inline-block my-0"], ["title", "orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 8, "div", [["class", "row topics col-12 d-flex justify-content-center mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 1, "span", [["class", "pink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inclusion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 1, "span", [["class", "blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Economics "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 1, "span", [["class", "red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Advances "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](162, 0, null, null, 1, "span", [["class", "green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Water "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 0, null, null, 25, "div", [["class", "card sub-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](165, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](166, 0, null, null, 1, "span", [["class", "col-sm-12 location col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Seattle "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](168, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2/20/2020 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](170, 0, null, null, 1, "span", [["class", "col-md-4 col-sm-4 sources"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" From Twitter "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](172, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 metadata text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Traffic "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](174, 0, null, null, 6, "div", [["class", "row d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](175, 0, null, null, 1, "span", [["class", "col-1 smiley text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](176, 0, null, null, 0, "i", [["class", "far fa-smile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](177, 0, null, null, 1, "span", [["class", "col-1 icon-comment text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](178, 0, null, null, 0, "i", [["class", "far fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](179, 0, null, null, 1, "p", [["class", "col-10 inline-block my-0"], ["title", "orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](181, 0, null, null, 8, "div", [["class", "row topics col-12 d-flex justify-content-center mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](182, 0, null, null, 1, "span", [["class", "pink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inclusion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](184, 0, null, null, 1, "span", [["class", "blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Economics "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](186, 0, null, null, 1, "span", [["class", "red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Advances "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](188, 0, null, null, 1, "span", [["class", "green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Water "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](190, 0, null, null, 25, "div", [["class", "card sub-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](191, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](192, 0, null, null, 1, "span", [["class", "col-sm-12 location col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Seattle "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](194, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2/20/2020 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](196, 0, null, null, 1, "span", [["class", "col-md-4 col-sm-4 sources"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" From Twitter "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](198, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 metadata text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Traffic "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](200, 0, null, null, 6, "div", [["class", "row d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](201, 0, null, null, 1, "span", [["class", "col-1 smiley text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](202, 0, null, null, 0, "i", [["class", "far fa-smile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](203, 0, null, null, 1, "span", [["class", "col-1 icon-comment text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](204, 0, null, null, 0, "i", [["class", "far fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](205, 0, null, null, 1, "p", [["class", "col-10 inline-block my-0"], ["title", "orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](207, 0, null, null, 8, "div", [["class", "row topics col-12 d-flex justify-content-center mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](208, 0, null, null, 1, "span", [["class", "pink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inclusion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](210, 0, null, null, 1, "span", [["class", "blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Economics "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](212, 0, null, null, 1, "span", [["class", "red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Advances "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](214, 0, null, null, 1, "span", [["class", "green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Water "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](216, 0, null, null, 25, "div", [["class", "card sub-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](217, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](218, 0, null, null, 1, "span", [["class", "col-sm-12 location col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Seattle "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](220, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2/20/2020 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](222, 0, null, null, 1, "span", [["class", "col-md-4 col-sm-4 sources"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" From Twitter "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](224, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 metadata text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Traffic "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](226, 0, null, null, 6, "div", [["class", "row d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](227, 0, null, null, 1, "span", [["class", "col-1 smiley text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](228, 0, null, null, 0, "i", [["class", "far fa-smile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](229, 0, null, null, 1, "span", [["class", "col-1 icon-comment text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](230, 0, null, null, 0, "i", [["class", "far fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](231, 0, null, null, 1, "p", [["class", "col-10 inline-block my-0"], ["title", "orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](233, 0, null, null, 8, "div", [["class", "row topics col-12 d-flex justify-content-center mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](234, 0, null, null, 1, "span", [["class", "pink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inclusion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](236, 0, null, null, 1, "span", [["class", "blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Economics "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](238, 0, null, null, 1, "span", [["class", "red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Advances "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](240, 0, null, null, 1, "span", [["class", "green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Water "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](242, 0, null, null, 25, "div", [["class", "card sub-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](243, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](244, 0, null, null, 1, "span", [["class", "col-sm-12 location col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Seattle "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](246, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2/20/2020 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](248, 0, null, null, 1, "span", [["class", "col-md-4 col-sm-4 sources"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" From Twitter "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](250, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 metadata text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Traffic "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](252, 0, null, null, 6, "div", [["class", "row d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](253, 0, null, null, 1, "span", [["class", "col-1 smiley text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](254, 0, null, null, 0, "i", [["class", "far fa-smile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](255, 0, null, null, 1, "span", [["class", "col-1 icon-comment text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](256, 0, null, null, 0, "i", [["class", "far fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](257, 0, null, null, 1, "p", [["class", "col-10 inline-block my-0"], ["title", "orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](259, 0, null, null, 8, "div", [["class", "row topics col-12 d-flex justify-content-center mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](260, 0, null, null, 1, "span", [["class", "pink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inclusion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](262, 0, null, null, 1, "span", [["class", "blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Economics "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](264, 0, null, null, 1, "span", [["class", "red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Advances "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](266, 0, null, null, 1, "span", [["class", "green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Water "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](268, 0, null, null, 25, "div", [["class", "card sub-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](269, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](270, 0, null, null, 1, "span", [["class", "col-sm-12 location col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Seattle "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](272, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2/20/2020 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](274, 0, null, null, 1, "span", [["class", "col-md-4 col-sm-4 sources"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" From Twitter "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](276, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 metadata text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Traffic "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](278, 0, null, null, 6, "div", [["class", "row d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](279, 0, null, null, 1, "span", [["class", "col-1 smiley text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](280, 0, null, null, 0, "i", [["class", "far fa-smile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](281, 0, null, null, 1, "span", [["class", "col-1 icon-comment text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](282, 0, null, null, 0, "i", [["class", "far fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](283, 0, null, null, 1, "p", [["class", "col-10 inline-block my-0"], ["title", "orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](285, 0, null, null, 8, "div", [["class", "row topics col-12 d-flex justify-content-center mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](286, 0, null, null, 1, "span", [["class", "pink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inclusion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](288, 0, null, null, 1, "span", [["class", "blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Economics "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](290, 0, null, null, 1, "span", [["class", "red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Advances "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](292, 0, null, null, 1, "span", [["class", "green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Water "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](294, 0, null, null, 25, "div", [["class", "card sub-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](295, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](296, 0, null, null, 1, "span", [["class", "col-sm-12 location col-md-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Seattle "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](298, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 2/20/2020 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](300, 0, null, null, 1, "span", [["class", "col-md-4 col-sm-4 sources"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" From Twitter "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](302, 0, null, null, 1, "span", [["class", "col-sm-4 col-md-3 metadata text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Traffic "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](304, 0, null, null, 6, "div", [["class", "row d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](305, 0, null, null, 1, "span", [["class", "col-1 smiley text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](306, 0, null, null, 0, "i", [["class", "far fa-smile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](307, 0, null, null, 1, "span", [["class", "col-1 icon-comment text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](308, 0, null, null, 0, "i", [["class", "far fa-comment-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](309, 0, null, null, 1, "p", [["class", "col-10 inline-block my-0"], ["title", "orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](311, 0, null, null, 8, "div", [["class", "row topics col-12 d-flex justify-content-center mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](312, 0, null, null, 1, "span", [["class", "pink"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Inclusion "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](314, 0, null, null, 1, "span", [["class", "blue"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Economics "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](316, 0, null, null, 1, "span", [["class", "red"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Advances "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](318, 0, null, null, 1, "span", [["class", "green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Water "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "page-wrapper chiller-theme";

        var currVal_1 = _ck(_v, 4, 0, _co.isOn === true ? "toggled" : "toggle");

        _ck(_v, 3, 0, currVal_0, currVal_1);

        var currVal_3 = "Impact";

        _ck(_v, 27, 0, currVal_3);

        var currVal_4 = "Source";

        _ck(_v, 34, 0, currVal_4);

        var currVal_5 = "Type";

        _ck(_v, 43, 0, currVal_5);

        var currVal_6 = "Sentiment";

        _ck(_v, 50, 0, currVal_6);
      }, function (_ck, _v) {
        var currVal_2 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).closeOtherPanels;

        _ck(_v, 23, 0, currVal_2);
      });
    }

    function View_VerbatimComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-verbatim", [], null, null, null, View_VerbatimComponent_0, RenderType_VerbatimComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _verbatim_component__WEBPACK_IMPORTED_MODULE_5__["VerbatimComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var VerbatimComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-verbatim", _verbatim_component__WEBPACK_IMPORTED_MODULE_5__["VerbatimComponent"], View_VerbatimComponent_Host_0, {}, {}, []);
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
    "./node_modules/@angular/core/fesm2015/core.js");

    var VerbatimComponent = /*#__PURE__*/function () {
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
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
    /*! C:\Users\iGuest\Desktop\Winwin_new_Layout\NI\NewImpact\src\main.ts */
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
  5:
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
  6:
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
  7:
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