"use strict";
exports.id = 14;
exports.ids = [14];
exports.modules = {

/***/ 9014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6606);






const FirstBlockLayout = ({ title , bgAnimationSrc , subTitle  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const isMobileScreen = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)("(max-width:768px)");
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [reftp, setReftp] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null);
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        if (false) {}
    }, []);
    const handleScroll = ()=>{
        reftp?.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            position: "relative",
            overflow: "hidden"
        },
        children: [
            bgAnimationSrc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    position: "absolute",
                    zIndex: -1,
                    top: {
                        xs: "400px",
                        md: 0
                    },
                    right: {
                        xs: "65%",
                        md: "-5%"
                    },
                    width: {
                        xs: "120%",
                        md: "100%"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    playsInline: true,
                    id: "myVideo",
                    style: {
                        width: isMobileScreen ? "170%" : "95%"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                        src: "/videos/klava.mp4",
                        type: "video/mp4"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
                disableGutters: true,
                sx: {
                    padding: {
                        xs: "1rem",
                        md: "1rem 3rem"
                    },
                    minHeight: {
                        xs: "90vh",
                        md: "60vh"
                    },
                    mt: {
                        md: "4rem"
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    direction: "column",
                    maxWidth: "692px",
                    gap: "16px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            sx: {
                                fontSize: {
                                    xs: "40px",
                                    md: "64px",
                                    fontWeight: 700,
                                    lineHeight: "110%",
                                    letterSpacing: "0.025rem",
                                    fontFamily: locale === "ru" ? "Source Sans Pro" : "Poppins"
                                }
                            },
                            children: title
                        }),
                        subTitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            fontSize: "16px",
                            fontWeight: "400",
                            color: utils_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.palette.text.secondary */ .r.palette.text.secondary,
                            lineHeight: "150%",
                            mt: "1rem",
                            width: "70%",
                            children: subTitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            onClick: handleScroll,
                            sx: {
                                width: {
                                    xs: "100%",
                                    md: "50%"
                                },
                                bgcolor: utils_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.palette.primary.main */ .r.palette.primary.main,
                                color: "#FFFFFF",
                                fontFamily: "Poppins",
                                fontWeight: 700,
                                fontSize: "18px",
                                ":hover": {
                                    bgcolor: utils_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme.palette.primary.main */ .r.palette.primary.main
                                }
                            },
                            size: "large",
                            children: t("button.letstalk")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    position: "absolute",
                    bottom: 0,
                    height: "50px",
                    width: "100%",
                    zIndex: -1
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    width: "100%",
                    height: "100px",
                    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FirstBlockLayout);


/***/ })

};
;