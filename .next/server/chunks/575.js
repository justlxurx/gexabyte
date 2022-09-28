exports.id = 575;
exports.ids = [575];
exports.modules = {

/***/ 7087:
/***/ ((module) => {

// Exports
module.exports = {
	"circle": "RoundedCircle_circle__N6KNu",
	"text": "RoundedCircle_text__sL_TI",
	"rotateText": "RoundedCircle_rotateText__wRD6N"
};


/***/ }),

/***/ 3575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ custom_RoundedAnimation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/components/RoundedCircle.module.scss
var RoundedCircle_module = __webpack_require__(7087);
var RoundedCircle_module_default = /*#__PURE__*/__webpack_require__.n(RoundedCircle_module);
;// CONCATENATED MODULE: ./public/icons/sr-arrow-upright-4x.svg
/* harmony default export */ const sr_arrow_upright_4x = ({"src":"/_next/static/media/sr-arrow-upright-4x.75dc4553.svg","height":65,"width":65});
;// CONCATENATED MODULE: ./public/icons/Star.svg
/* harmony default export */ const Star = ({"src":"/_next/static/media/Star.76d681c0.svg","height":12,"width":13});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/custom/RoundedAnimation.tsx








const mobileDegree = 5;
const desktopDegree = 6.5;
const RoundedAnimation = ()=>{
    const isMobileScreen = (0,material_.useMediaQuery)("(max-width:768px)");
    const memoizedWidth = (0,external_react_.useMemo)(()=>isMobileScreen ? 50 : 75, [
        isMobileScreen
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (RoundedCircle_module_default()).circle,
        children: [
            isMobileScreen ? /*#__PURE__*/ jsx_runtime_.jsx(MobileRotate, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (RoundedCircle_module_default()).center_icon,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: sr_arrow_upright_4x.src,
                        width: memoizedWidth,
                        height: memoizedWidth
                    })
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (RoundedCircle_module_default()).center_icon,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: sr_arrow_upright_4x.src,
                    width: memoizedWidth,
                    height: memoizedWidth
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (RoundedCircle_module_default()).text,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    style: {
                        fontSize: "10px",
                        fontWeight: 600,
                        textTransform: "uppercase"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                transform: "rotate(-18deg)"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: Star.src
                            })
                        }),
                        "EXPLORE OUR PROJECTS".split("").map((char, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: {
                                    transform: `rotate(${idx * 7}deg)`
                                },
                                children: char
                            }, idx)),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                transform: "rotate(147deg)"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: Star.src
                            })
                        }),
                        "EXPLORE OUR PROJECTS".split("").map((char, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: {
                                    transform: `rotate(${(idx + 24) * 7}deg)`
                                },
                                children: char
                            }, idx)),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            style: {
                                transform: "rotate(310deg)"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: Star.src
                            })
                        })
                    ]
                })
            })
        ]
    });
};
const MobileRotate = (styled_default()).div`
-webkit-transform: rotate(270deg);
-moz-transform: rotate(270deg);
-o-transform: rotate(270deg);
-ms-transform: rotate(270deg);
transform: rotate(270deg);
`;
/* harmony default export */ const custom_RoundedAnimation = (RoundedAnimation);


/***/ })

};
;