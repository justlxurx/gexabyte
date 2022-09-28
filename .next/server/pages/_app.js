(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5296:
/***/ ((module) => {

// Exports
module.exports = {
	"dropdown": "Dropdown_dropdown__0Ewku",
	"dropdown_content": "Dropdown_dropdown_content__fD4KD"
};


/***/ }),

/***/ 1307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_GlobalLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Container"
const Container_namespaceObject = require("@mui/material/Container");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./utils/theme.ts
var theme = __webpack_require__(6606);
;// CONCATENATED MODULE: ./components/custom/CustomButton.tsx




const CustomButton = ({ title , handleClick , bgcolor , rounded =false , fullWidth =false  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
        onClick: handleClick,
        fullWidth: fullWidth,
        sx: {
            bgcolor,
            color: theme/* theme.palette.text.primary */.r.palette.text.primary,
            borderRadius: rounded ? "4px" : "1px",
            padding: "10px 22px",
            fontSize: "16px",
            textTransform: "none",
            fontWeight: 700,
            "&:hover": {
                bgcolor
            }
        },
        children: title
    });
};
/* harmony default export */ const custom_CustomButton = (CustomButton);

// EXTERNAL MODULE: ./styles/components/Dropdown.module.scss
var Dropdown_module = __webpack_require__(5296);
var Dropdown_module_default = /*#__PURE__*/__webpack_require__.n(Dropdown_module);
;// CONCATENATED MODULE: ./public/icons/sr-chevron-right.svg
/* harmony default export */ const sr_chevron_right = ({"src":"/_next/static/media/sr-chevron-right.b76a83d2.svg","height":16,"width":16});
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/custom/Dropdown.tsx






const Dropdown = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Dropdown_module_default()).dropdown,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: data.link,
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledLink, {
                    children: data.title
                })
            }),
            data.menu && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: sr_chevron_right.src
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Dropdown_module_default()).dropdown_content,
                children: data.items?.map((i, idx)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: i.link,
                        children: i.title
                    }, idx))
            })
        ]
    });
};
/* harmony default export */ const custom_Dropdown = (Dropdown);
const StyledLink = (styled_default()).span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
`;

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
;// CONCATENATED MODULE: ./components/custom/home-page/LocaleButton.tsx






const LocaleButton = ({ text , locale  })=>{
    const { i18n  } = (0,external_react_i18next_.useTranslation)();
    const { locale: currentLocale , pathname  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: pathname,
        locale: locale,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
            sx: {
                fontSize: "16px",
                fontWeight: currentLocale === locale ? 700 : 500,
                cursor: "pointer",
                color: currentLocale === locale ? "#F0B270" : "#989898",
                borderBottom: currentLocale === locale ? "3px solid #F0B270" : "3px solid transparent"
            },
            children: text
        })
    });
};
/* harmony default export */ const home_page_LocaleButton = (LocaleButton);

;// CONCATENATED MODULE: ./components/custom/app-bar/AppBarDesktop.tsx











const dropdownContent = [
    {
        title: "Solutions",
        menu: true,
        link: "#",
        items: [
            {
                title: "Blockchain",
                link: "/blockchain"
            },
            {
                title: "Consulting",
                link: "/consulting"
            },
            {
                title: "Web&Mobile",
                link: "/webdev"
            }
        ]
    },
    {
        title: "Projects",
        menu: false,
        link: "/projects"
    }, 
];
const AppBarDesktop = ()=>{
    const [reftp, setReftp] = external_react_.useState(null);
    external_react_.useEffect(()=>{
        if (false) {}
    }, []);
    const handleScroll = ()=>{
        reftp?.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
        position: "sticky",
        sx: {
            bgcolor: "rgba(0, 0, 0, 0.65)",
            padding: "12px 80px",
            backdropFilter: "blur(21px)",
            maxWidth: "1920px",
            m: "auto"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            disableGutters: true,
            maxWidth: "xl",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                disableGutters: true,
                sx: {
                    display: "flex",
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            display: "flex"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/logo.svg",
                                    alt: "logo",
                                    width: 100,
                                    height: 50,
                                    style: {
                                        cursor: "pointer"
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                                direction: "row",
                                gap: "2rem",
                                fontSize: "16px",
                                style: {
                                    marginLeft: "10vw"
                                },
                                children: dropdownContent.map((i, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(custom_Dropdown, {
                                            data: i
                                        }, idx)
                                    }))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                        direction: "row",
                        gap: "0.5rem",
                        spacing: 2,
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(home_page_LocaleButton, {
                                text: "ENG",
                                locale: "en"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(home_page_LocaleButton, {
                                text: "RUS",
                                locale: "ru"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "#contact-us",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(custom_CustomButton, {
                                    title: "Get in Touch",
                                    bgcolor: "transparent",
                                    handleClick: handleScroll
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const app_bar_AppBarDesktop = (AppBarDesktop);

// EXTERNAL MODULE: ./components/custom/SocialMedia.tsx
var SocialMedia = __webpack_require__(3978);
;// CONCATENATED MODULE: ./components/custom/app-bar/AppBarMobile.tsx











const AppBarMobile = ()=>{
    const [isOpen, setIsOpen] = external_react_default().useState(false);
    const { pathname  } = (0,router_.useRouter)();
    let reftp = null;
    if (false) {}
    const changeMenu = ()=>{
        setIsOpen((prev)=>!prev);
    };
    const handleScroll = ()=>{
        reftp?.scrollIntoView({
            behavior: "smooth"
        });
    };
    external_react_default().useEffect(()=>{
        changeMenu();
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.AppBar, {
        position: "sticky",
        sx: {
            bgcolor: "rgba(0, 0, 0, 0.65)",
            padding: "8px 8px",
            backdropFilter: "blur(21px)",
            position: "relative",
            zIndex: theme/* theme.zIndex.drawer */.r.zIndex.drawer + 1
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                        size: "large",
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        sx: {
                            mr: 2
                        },
                        onClick: changeMenu,
                        children: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/icons/close.svg",
                            width: "32px",
                            height: "32px"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/icons/burger.svg",
                            width: "32px",
                            height: "32px"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                        sx: {
                            flexGrow: 1
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/logo-raw.svg",
                                width: "32px",
                                height: "32px",
                                style: {
                                    cursor: "pointer"
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(custom_CustomButton, {
                        title: "Get in Touch",
                        bgcolor: "transparent",
                        handleClick: handleScroll
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Drawer, {
                anchor: "left",
                open: isOpen,
                onClose: changeMenu,
                sx: {
                    display: {
                        xs: "block"
                    },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: "100%",
                        bgcolor: "#000000",
                        padding: "2rem"
                    }
                },
                disableScrollLock: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Toolbar, {}),
                    dropdownContent.map((item, idx)=>item.items?.length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Accordion, {
                            sx: {
                                bgcolor: "#000000"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.AccordionSummary, {
                                    expandIcon: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/icons/sr-chevron-right.svg"
                                    }),
                                    "aria-controls": "panel2a-content",
                                    id: "panel2a-header",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            fontSize: "24px",
                                            fontWeight: 500,
                                            color: "#A8B1D1"
                                        },
                                        children: item.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.AccordionDetails, {
                                    children: item.items.map((itemY, idy)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: itemY.link,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                sx: {
                                                    m: "1rem",
                                                    fontSize: "22px",
                                                    fontWeight: 500,
                                                    color: "#A8B1D1"
                                                },
                                                children: itemY.title
                                            })
                                        }, idy))
                                })
                            ]
                        }, idx) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            sx: {
                                m: "1rem",
                                fontSize: "24px",
                                fontWeight: 500,
                                color: "#A8B1D1"
                            },
                            children: item.title
                        }, idx)),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                        direction: "row",
                        sx: {
                            mt: "auto"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialMedia/* default */.Z, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                direction: "row",
                                spacing: 2,
                                sx: {
                                    ml: "auto"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(home_page_LocaleButton, {
                                        text: "ENG",
                                        locale: "en"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(home_page_LocaleButton, {
                                        text: "RUS",
                                        locale: "ru"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const app_bar_AppBarMobile = (AppBarMobile);

;// CONCATENATED MODULE: ./components/custom/Footer.tsx








const Footer = ()=>{
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const { asPath  } = (0,router_.useRouter)();
    const [reftp, setReftp] = external_react_default().useState(null);
    external_react_default().useEffect(()=>{
        if (false) {}
    }, [
        asPath
    ]);
    const handleScroll = ()=>{
        reftp?.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledFooter, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                disableGutters: true,
                maxWidth: "xl",
                sx: {
                    padding: {
                        xs: "16px 16px",
                        md: "12px 80px"
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    columns: {
                        xs: 2,
                        md: 5
                    },
                    spacing: 5,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 2,
                            md: 1,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                direction: "column",
                                spacing: 1,
                                alignItems: "flex-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/logo.svg",
                                        alt: "logo",
                                        width: 120,
                                        height: 50
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        fullWidth: true,
                                        onClick: handleScroll,
                                        sx: {
                                            bgcolor: "#F000000",
                                            border: "2px solid #F0B270",
                                            // p: '1rem',
                                            color: "#FFFFFF",
                                            borderRadius: "1px",
                                            fontWeight: 700,
                                            fontSize: "16px",
                                            textTransform: "none",
                                            width: {
                                                xs: "50%",
                                                md: "100%"
                                            }
                                        },
                                        children: t("button.getInTouch")
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 1,
                            md: 1,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                direction: "column",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            fontSize: "18px",
                                            fontWeight: "700",
                                            fontFamily: "Readex Pro",
                                            mb: "1rem"
                                        },
                                        children: "Solutions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledTypography, {
                                        title: "Blockchain Developement",
                                        link: "/blockchain"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledTypography, {
                                        title: "Blockchain consulting",
                                        link: "/consulting"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledTypography, {
                                        title: "Web&Mobile development",
                                        link: "/webdev"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 1,
                            md: 1,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                direction: "column",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            fontSize: "18px",
                                            fontWeight: "700",
                                            fontFamily: "Readex Pro",
                                            mb: "1rem"
                                        },
                                        children: "Projects"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledTypography, {
                                        title: "Blockchain",
                                        link: "/blockchain"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledTypography, {
                                        title: "Consulting",
                                        link: "/consulting"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledTypography, {
                                        title: "Web&Mobile app",
                                        link: "/webdev"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: 2,
                            md: 2,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                direction: {
                                    xs: "row",
                                    md: "column"
                                },
                                alignItems: {
                                    xs: "center",
                                    md: "end"
                                },
                                justifyContent: {
                                    xs: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            fontSize: "18px",
                                            fontWeight: "700",
                                            fontFamily: "Readex Pro",
                                            mb: "1rem"
                                        },
                                        children: t("footer.keepInTouch")
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                        direction: "row",
                                        spacing: 1,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://instagram.com/tech.culture.it?igshid=YmMyMTA2M2Y=",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/icons/social-media/Instagram.svg",
                                                    width: "24px",
                                                    height: "24px"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://kz.linkedin.com/in/techculture",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/icons/social-media/LinkdIn.svg",
                                                    width: "24px",
                                                    height: "24px"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://t.me/tech_culture_dev",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/icons/social-media/Telegram.svg",
                                                    width: "24px",
                                                    height: "24px"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://www.facebook.com/tech.culture.it",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/icons/social-media/Facebook.svg",
                                                    width: "24px",
                                                    height: "24px"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                sx: {
                    px: {
                        xs: "16px",
                        md: "120px"
                    },
                    py: "30px",
                    display: {
                        xs: "block",
                        md: "flex"
                    },
                    alignItems: "center",
                    gap: "80px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledCopyright, {
                    children: "\xa9 2022 Techculture"
                })
            })
        ]
    });
};
/* harmony default export */ const custom_Footer = (Footer);
const StyledTypography = ({ title , link  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: link,
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
            sx: {
                fontSize: "16px",
                textTransform: "capitalize",
                color: "#667085",
                cursor: "pointer",
                mb: "1rem"
            },
            children: title
        })
    });
const StyledFooter = (styled_default()).footer`
  margin-top: auto;
`;
const StyledCopyright = (styled_default()).span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #556174;
  cursor: pointer;
`;
const Terms = (styled_default()).div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  .text {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #88909E;
  }

  .dot {
    color: #88909E;
    font-size: 36px;
  }
`;

;// CONCATENATED MODULE: ./components/layouts/GlobalLayout.tsx







const SEOkeywords = [
    "techculture",
    "blockchain",
    "etc"
];
const GlobalLayout = ({ children  })=>{
    const theme = (0,material_.useTheme)();
    const matches = (0,material_.useMediaQuery)(theme.breakpoints.up("md"));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/logo.svg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: SEOkeywords?.join(",")
                    })
                ]
            }),
            matches ? /*#__PURE__*/ jsx_runtime_.jsx(app_bar_AppBarDesktop, {}) : /*#__PURE__*/ jsx_runtime_.jsx(app_bar_AppBarMobile, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                disableGutters: true,
                maxWidth: "xl",
                sx: {
                    minHeight: "80vh"
                },
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(custom_Footer, {})
        ]
    });
};
/* harmony default export */ const layouts_GlobalLayout = (GlobalLayout);


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_GlobalLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1307);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6606);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_locales_en_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9982);
/* harmony import */ var utils_locales_ru_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5191);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_3__]);
i18next__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// import { theme } from '../utils/theme'









i18next__WEBPACK_IMPORTED_MODULE_3__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_4__.initReactI18next) // passes i18n down to react-i18next
.init({
    resources: {
        en: {
            translation: utils_locales_en_json__WEBPACK_IMPORTED_MODULE_7__
        },
        ru: {
            translation: utils_locales_ru_json__WEBPACK_IMPORTED_MODULE_8__
        }
    },
    lng: "en",
    fallbackLng: "en",
    debug:  true ? false : 0
});
function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { locale  } = router;
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        i18n.changeLanguage(locale);
    }, [
        locale
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
        theme: _utils_theme__WEBPACK_IMPORTED_MODULE_5__/* .theme */ .r,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CssBaseline, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_GlobalLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2805:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 1480:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2021:
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ 9982:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"header":{"projects":"projects","solutions":"solutions"},"button":{"getInTouch":"Get in Touch","letstalk":"LET’S TALK","moreDetails":"More details","more":"more","getStarted":"Get started","letsChatInTelegram":"Let’s chat in Telegram","seeAllProjects":"See All Projects","exploreOurProjects":"Больше о наших проектах","learnMore":"Learn More"},"footer":{"solutions":"solutions","blockchainDev":"Blockchain Development","webMobDev":"Web&Mobile development","blockchainConsulting":"Blockchain consulting","projects":"projects","blockchain":"Blockchain","consulting":"Consulting","webdev":"Web & Mobile app","keepInTouch":"Keep In Touch"},"home":{"title":"Blockchain development & consulting company","subtitle":"We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision","Our Techstack":"Our Techstack","WHAT WE CAN HELP YOU WITH":"WHAT WE CAN HELP YOU WITH","BLOCKCHAIN DEVELOPMENT":{"title":"Blockchain development & consulting company","description":"We create and deploy public, closed, hybrid blockchain solutions for various spheres, as well as DEFI and blockchain projects for the crypto industry."},"stats":{"title":"We create digital services for large businesses.","completedProjects":"Number of completed projects","experience":"Blockchain and web development experience","blockchainWeb":"Blockchain and web development"},"help":{"title":"what we can help you with","blockchain":{"title":"blockchain development","text":"We create and deploy public, closed, hybrid blockchain solutions for various spheres, as well as DEFI and blockchain projects for the crypto industry."},"consulting":{"title":"blockchain consulting","text":"We provide consulting services in the following areas: tokenomics, smart contract audit, business analytics, White&Light paper and technical documentation"},"webMobile":{"title":"web and mobile development","text":"Development of web and mobile applications for iOS and Android with a user-friendly interface for automating processes and solving business problems using modern technologies"}},"projects":{"title":"Blockchain Development Projects"},"news":{"title":"latest news","category":{"events":"events","massMedia":"mas media about us","cooperation":"cooperation"},"cards":{"title1":"Tech Culture is the partner of the international forum Digital Bridge!","text1":"On Sep 28-29 Digital Bridge gathers experts and companies from digital technologies, business and IT spheres in Nur-Sultan.","title2":"Web 3.0, метавселенная и NFT: что общего?","text2":"Артур Сундетов, технический директор Tech Culture, объясняет происхождение Web 3.0 и относительное сходство поколений разработки Интернета.","title3":"Tech Culture подписала меморандум с Международным университетом информационных технологий (МУИТ)","text3":""}}},"blockchain":{},"consulting":{},"webdev":{},"contactUsForm":{"title":"Contact us and unleash your ideas","address":"address","sales":"Sales Department","hr":"HR Department","socialMedia":"Social Media","name":"name","email":"email","company":"company","help":"how can we help?","formTitle":"Let’s switch your business to Digital"}}');

/***/ }),

/***/ 5191:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"header":{"projects":"projects","solutions":"solutions"},"button":{"getInTouch":"Get in Touch","letstalk":"LET’S TALK","moreDetails":"More details","more":"more","getStarted":"Get started","letsChatInTelegram":"Let’s chat in Telegram","seeAllProjects":"See All Projects","exploreOurProjects":"Больше о наших проектах","learnMore":"Learn More"},"footer":{"solutions":"solutions","blockchainDev":"Blockchain Development","webMobDev":"Web&Mobile development","blockchainConsulting":"Blockchain consulting","projects":"projects","blockchain":"Blockchain","consulting":"Consulting","webdev":"Web & Mobile app","keepInTouch":"Keep In Touch"},"home":{"title":"Blockchain development & consulting company","subtitle":"We create complex products using artificial intelligence, cloud solutions, blockchain and computer vision","Our Techstack":"Our Techstack","WHAT WE CAN HELP YOU WITH":"WHAT WE CAN HELP YOU WITH","BLOCKCHAIN DEVELOPMENT":{"title":"Blockchain development & consulting company","description":"We create and deploy public, closed, hybrid blockchain solutions for various spheres, as well as DEFI and blockchain projects for the crypto industry."},"stats":{"title":"We create digital services for large businesses.","completedProjects":"Number of completed projects","experience":"Blockchain and web development experience","blockchainWeb":"Blockchain and web development"},"help":{"title":"what we can help you with","blockchain":{"title":"blockchain development","text":"We create and deploy public, closed, hybrid blockchain solutions for various spheres, as well as DEFI and blockchain projects for the crypto industry."},"consulting":{"title":"blockchain consulting","text":"We provide consulting services in the following areas: tokenomics, smart contract audit, business analytics, White&Light paper and technical documentation"},"webMobile":{"title":"web and mobile development","text":"Development of web and mobile applications for iOS and Android with a user-friendly interface for automating processes and solving business problems using modern technologies"}},"projects":{"title":"Blockchain Development Projects"},"news":{"title":"latest news","category":{"events":"events","massMedia":"mas media about us","cooperation":"cooperation"},"cards":{"title1":"Tech Culture is the partner of the international forum Digital Bridge!","text1":"On Sep 28-29 Digital Bridge gathers experts and companies from digital technologies, business and IT spheres in Nur-Sultan.","title2":"Web 3.0, метавселенная и NFT: что общего?","text2":"Артур Сундетов, технический директор Tech Culture, объясняет происхождение Web 3.0 и относительное сходство поколений разработки Интернета.","title3":"Tech Culture подписала меморандум с Международным университетом информационных технологий (МУИТ)","text3":""}}},"blockchain":{},"consulting":{},"webdev":{},"contactUsForm":{"title":"Contact us and unleash your ideas","address":"address","sales":"Sales Department","hr":"HR Department","socialMedia":"Social Media","name":"name","email":"email","company":"company","help":"how can we help?","formTitle":"Let’s switch your business to Digital"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,978,606], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();