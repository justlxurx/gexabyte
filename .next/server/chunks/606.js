"use strict";
exports.id = 606;
exports.ids = [606];
exports.modules = {

/***/ 6606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);

// const theme - createTheme();
const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    components: {
        MuiUseMediaQuery: {
            defaultProps: {
                noSsr: true
            }
        }
    },
    palette: {
        background: {
            default: "#000000"
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#A8B1D1"
        },
        primary: {
            main: "#736AE4"
        },
        secondary: {
            main: "#F0B270"
        }
    },
    typography: {
        fontFamily: "Poppins",
        h1: {
            fontSize: "56px",
            lineHeight: "110%",
            fontWeight: 700,
            letterSpacing: "0.025rem",
            fontFamily: "Readex Pro"
        }
    },
    breakpoints: {
        values: {
            // extra-small
            xs: 0,
            // small
            sm: 375,
            // medium
            md: 768,
            // large
            lg: 1366,
            // extra-large
            xl: 1920
        }
    }
});


/***/ })

};
;