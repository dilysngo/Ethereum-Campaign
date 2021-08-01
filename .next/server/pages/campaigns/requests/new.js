/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/campaigns/requests/new";
exports.ids = ["pages/campaigns/requests/new"];
exports.modules = {

/***/ "./pages/campaigns/requests/new.js":
/*!*****************************************!*\
  !*** ./pages/campaigns/requests/new.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Volumes/Root/WORK/BLOCKCHAIN/Ethereum/kickstart/solidity/pages/campaigns/requests/new.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nclass RequestNew extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      value: \"\",\n      description: \"\",\n      recipient: \"\",\n      errorMessage: \"\"\n    });\n\n    _defineProperty(this, \"onSubmit\", async event => {\n      event.preventDefault();\n      this.setState({\n        loading: true,\n        errorMessage: \"\"\n      });\n      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__.default)(this.props.address);\n      const {\n        description,\n        value,\n        recipient\n      } = this.state;\n\n      try {\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();\n        await campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.utils.toWei(value, 'ether'), recipient).send({\n          from: accounts[0]\n        });\n        _routes__WEBPACK_IMPORTED_MODULE_6__.Router.replaceRoute(`/campaigns/${this.props.address}/requests`);\n      } catch (error) {\n        this.setState({\n          loading: false,\n          errorMessage: error.message\n        });\n      }\n\n      this.setState({\n        loading: false,\n        errorMessage: \"\"\n      });\n    });\n  }\n\n  static async getInitialProps(props) {\n    const {\n      address\n    } = props.query;\n    return {\n      address\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_6__.Link, {\n        route: `/campaigns/${this.props.address}/requests`,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Create a Requests\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {\n        onSubmit: this.onSubmit,\n        error: !!this.state.errorMessage,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: \"Description\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n            value: this.state.description,\n            onChange: event => this.setState({\n              description: event.target.value\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: \"Value in Ether\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n            value: this.state.value,\n            onChange: event => this.setState({\n              value: event.target.value\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: \"Recipient\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n            value: this.state.recipient,\n            onChange: event => this.setState({\n              recipient: event.target.value\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {\n            error: true,\n            header: \"Oop!\",\n            content: this.state.errorMessage\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Field, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            primary: true,\n            loading: this.state.loading,\n            children: \"Create!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestNew);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raWNrc3RhcnQvLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvbmV3LmpzP2Q5ZmMiXSwibmFtZXMiOlsiUmVxdWVzdE5ldyIsIkNvbXBvbmVudCIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJlcnJvck1lc3NhZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJsb2FkaW5nIiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInN0YXRlIiwiYWNjb3VudHMiLCJ3ZWIzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsIlJvdXRlciIsImVycm9yIiwibWVzc2FnZSIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicmVuZGVyIiwib25TdWJtaXQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQU4sU0FBeUJDLDRDQUF6QixDQUFtQztBQUFBO0FBQUE7O0FBQUEsbUNBQ3pCO0FBQ05DLFdBQUssRUFBRSxFQUREO0FBRU5DLGlCQUFXLEVBQUUsRUFGUDtBQUdOQyxlQUFTLEVBQUUsRUFITDtBQUlOQyxrQkFBWSxFQUFFO0FBSlIsS0FEeUI7O0FBQUEsc0NBWXRCLE1BQU9DLEtBQVAsSUFBaUI7QUFDMUJBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUFFQyxlQUFPLEVBQUUsSUFBWDtBQUFpQkosb0JBQVksRUFBRTtBQUEvQixPQUFkO0FBRUEsWUFBTUssUUFBUSxHQUFHQywyREFBUSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0MsT0FBWixDQUF6QjtBQUVBLFlBQU07QUFBRVYsbUJBQUY7QUFBZUQsYUFBZjtBQUFzQkU7QUFBdEIsVUFBb0MsS0FBS1UsS0FBL0M7O0FBRUEsVUFBSTtBQUNGLGNBQU1DLFFBQVEsR0FBRyxNQUFN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QixtQkFBTyxFQUFFLEtBQUtZLEtBQUwsQ0FBV1Q7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJGLGVBeUJFLDhEQUFDLHlEQUFEO0FBQUEsaUNBQ0UsOERBQUMscURBQUQ7QUFBUSxtQkFBTyxNQUFmO0FBQWdCLG1CQUFPLEVBQUUsS0FBS1MsS0FBTCxDQUFXTCxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBdUNEOztBQTFFZ0M7O0FBNkVuQywrREFBZVQsVUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIElucHV0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXNcIjtcbiBcbmNsYXNzIFJlcXVlc3ROZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHsgXG4gICAgdmFsdWU6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgcmVjaXBpZW50OiBcIlwiLFxuICAgIGVycm9yTWVzc2FnZTogXCJcIlxuICB9XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHsgXG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcbiAgICByZXR1cm4geyBhZGRyZXNzIH07XG4gIH1cblxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogXCJcIiB9KTtcblxuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIHZhbHVlLCByZWNpcGllbnQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jcmVhdGVSZXF1ZXN0KFxuICAgICAgICBkZXNjcmlwdGlvbiwgXG4gICAgICAgIHdlYjMudXRpbHMudG9XZWkodmFsdWUsICdldGhlcicpLCBcbiAgICAgICAgcmVjaXBpZW50XG4gICAgICApLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYCk7IFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yTWVzc2FnZTogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvck1lc3NhZ2U6IFwiXCIgfSk7XG4gIH0gXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzYH0+XG4gICAgICAgICAgPGE+QmFjazwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8aDM+Q3JlYXRlIGEgUmVxdWVzdHM8L2gzPlxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gIGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgIDxsYWJlbD5WYWx1ZSBpbiBFdGhlcjwvbGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSl9IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+UmVjaXBpZW50PC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZWNpcGllbnR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgcmVjaXBpZW50OiBldmVudC50YXJnZXQudmFsdWUgfSl9IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3AhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgICAgIENyZWF0ZSFcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3ROZXc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/new.js\n");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_web3_js","ethereum_campaign_js"], function() { return __webpack_exec__("./pages/campaigns/requests/new.js"); });
module.exports = __webpack_exports__;

})();