"use strict";
exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 7355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);





const projects = {
    desktop: [
        "/images/musical.png",
        "/images/defi app.svg",
        "/images/crowdfunding.png",
        "/images/nft.png",
        "/images/euphoria.png",
        "/images/dexoo.svg",
        "/images/emm.svg"
    ],
    mobile: [
        "/images/rocki mobile.png",
        "/images/ton seed mobile.png",
        "/images/defi mobile.png"
    ]
};
const ImageGrid = [
    8,
    4,
    6,
    6,
    4,
    4,
    4
];
const BlockchainProjects = ()=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    const isMobileScreen = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)("(max-width:768px)");
    const [isExtended, setIsExtended] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false);
    const changeIsExtended = ()=>{
        setIsExtended((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        disableGutters: true,
        sx: {
            mb: "6rem",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            padding: {
                xs: "0.75rem",
                md: 0
            }
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                variant: "h1",
                sx: {
                    fontSize: {
                        xs: "32px",
                        md: "56px"
                    },
                    mb: "1.5rem",
                    textAlign: {
                        xs: "start",
                        md: "left"
                    },
                    maxWidth: "700px"
                },
                children: t("home.projects.title")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                gridTemplateColumns: "repeat(auto-fill, minmax(700px, 1fr))",
                spacing: 1,
                children: [
                    isMobileScreen ? projects.mobile.map((src, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            xs: 12,
                            md: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: src,
                                        width: "100%"
                                    })
                                })
                            })
                        }, idx)) : projects.desktop.map((src, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            xs: 12,
                            md: ImageGrid[idx],
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: src,
                                        width: "100%"
                                    })
                                })
                            })
                        }, idx)),
                    isExtended && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: isMobileScreen ? projects.mobile.map((src, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                item: true,
                                xs: 12,
                                md: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: src,
                                            width: "100%"
                                        })
                                    })
                                })
                            }, idx)) : projects.desktop.map((src, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                item: true,
                                xs: 12,
                                md: ImageGrid[idx],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: src,
                                            width: "100%"
                                        })
                                    })
                                })
                            }, idx))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                textAlign: "center",
                                mt: "2rem"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/projects",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    variant: "contained",
                                    sx: {
                                        fontSize: {
                                            xs: "18px",
                                            md: "22px"
                                        },
                                        fontWeight: 700,
                                        width: {
                                            xs: "100%",
                                            md: "254px"
                                        },
                                        height: {
                                            xs: "50px",
                                            md: "80px"
                                        },
                                        textTransform: "uppercase"
                                    },
                                    children: t("button.more")
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockchainProjects);


/***/ })

};
;