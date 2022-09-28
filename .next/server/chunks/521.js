"use strict";
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 4521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_page_ContactUs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
;// CONCATENATED MODULE: ./utils/validations/contactUsSchema.ts

const contactUsSchema = external_yup_.object().shape({
    name: external_yup_.string().required(),
    email: external_yup_.string().email().required(),
    company: external_yup_.string().required(),
    info: external_yup_.string().required(),
    type: external_yup_.string()
});

// EXTERNAL MODULE: ./components/custom/SocialMedia.tsx
var SocialMedia = __webpack_require__(3978);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
;// CONCATENATED MODULE: ./components/custom/home-page/ContactUs.tsx









// import styles from './ContactUs.module.scss';
const ContactUs = ()=>{
    const { t  } = (0,external_react_i18next_.useTranslation)();
    const isMobileScreen = (0,material_.useMediaQuery)("(max-width:768px)");
    const [services, setServices] = external_react_default().useState({
        bd: false,
        bc: false,
        wd: false
    });
    const formik = (0,external_formik_.useFormik)({
        initialValues: {
            name: "",
            email: "",
            company: "",
            info: "",
            type: "consulting, developement"
        },
        onSubmit: async (values)=>{
            try {
                const res = await external_axios_default().post("https://techculture.tech/api/contact/us", values);
                if (res.status === 200) {
                    alert("Ваша заявка принята!");
                    resetForm();
                }
            } catch (e) {
                alert("Ошибочка... Попробуйте позже");
            }
        },
        validationSchema: contactUsSchema,
        validateOnChange: false,
        validateOnBlur: false,
        validateOnMount: false
    });
    const { values: form , handleSubmit , handleChange , errors , resetForm  } = formik;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "contact-us",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
            disableGutters: true,
            sx: {
                mb: "6rem",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        position: "absolute",
                        top: 0,
                        height: "100px",
                        width: "100%",
                        zIndex: -1,
                        background: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                    sx: {
                        position: "absolute",
                        bottom: 0,
                        height: "100px",
                        width: "100%",
                        zIndex: -1,
                        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
                    direction: isMobileScreen ? "column-reverse" : "row",
                    alignItems: "center",
                    justifyContent: "center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                            item: true,
                            xs: true,
                            p: "5%",
                            children: [
                                isMobileScreen ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                            sx: {
                                                position: "absolute",
                                                top: "105vh",
                                                height: "100px",
                                                width: "100%",
                                                zIndex: -1,
                                                background: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                            autoPlay: true,
                                            muted: true,
                                            loop: true,
                                            id: "myVideo",
                                            style: {
                                                width: "100vh",
                                                top: "130vh",
                                                visibility: "visible",
                                                position: "absolute",
                                                zIndex: -2,
                                                left: "-55%",
                                                transform: "rotate(90deg)"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                                src: "/videos/Emitter.mp4",
                                                type: "video/mp4"
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("video", {
                                    autoPlay: true,
                                    muted: true,
                                    loop: true,
                                    id: "myVideo",
                                    style: {
                                        height: "100%",
                                        visibility: "visible",
                                        position: "absolute",
                                        zIndex: -2,
                                        left: "-30%",
                                        transform: "rotate(90deg)"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                                        src: "/videos/Emitter.mp4",
                                        type: "video/mp4"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        fontSize: "32px",
                                        fontWeight: 700,
                                        fontFamily: "Readex Pro",
                                        width: "60%",
                                        textTransform: "capitalize",
                                        mb: "1.25rem"
                                    },
                                    children: t("contactUsForm.title")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        color: "#F0B270",
                                        fontSize: "16px",
                                        fontWeight: 600
                                    },
                                    children: t("contactUsForm.address")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://go.2gis.com/9h3gey",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            textDecoration: "underline",
                                            fontSize: "16px",
                                            fontWeight: 600,
                                            mb: "1rem"
                                        },
                                        children: "Almaty, Markova 22/37"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        color: "#F0B270",
                                        fontSize: "16px",
                                        fontWeight: 600
                                    },
                                    children: t("contactUsForm.sales")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "mailto:aa@techculture.tech",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            textDecoration: "underline",
                                            fontSize: "16px",
                                            fontWeight: 600,
                                            mb: "1rem"
                                        },
                                        children: "aa@techculture.tech"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    style: {
                                        color: "#F0B270",
                                        fontSize: "16px",
                                        fontWeight: 600
                                    },
                                    children: t("contactUsForm.hr")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "mailto:hr@techculture.tech",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            textDecoration: "underline",
                                            fontSize: "16px",
                                            fontWeight: 600,
                                            mb: "1rem"
                                        },
                                        children: "hr@techculture.tech"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    sx: {
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        color: "#F0B270"
                                    },
                                    children: t("contactUsForm.socialMeda")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(SocialMedia/* default */.Z, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            xs: true,
                            p: "5%",
                            id: "#get-in-touch",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            fontSize: "48px",
                                            fontWeight: 600,
                                            fontFamily: "Readex Pro",
                                            mb: "1rem"
                                        },
                                        children: t("contactUsForm.formTitle")
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                        sx: {
                                            fontSize: "18px",
                                            fontWeight: 500,
                                            color: "#667085",
                                            width: "60%",
                                            mb: "2.5rem"
                                        },
                                        children: [
                                            "You can reach us anytime via ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "#736AE4"
                                                },
                                                children: "techculturellp@gmail.com"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledInputLabel, {
                                        children: t("contactUsForm.name")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                        id: "bootstrap-input1",
                                        placeholder: "Your name",
                                        value: form.name,
                                        name: "name",
                                        onChange: handleChange,
                                        fullWidth: true,
                                        required: true,
                                        error: !!errors.name,
                                        sx: {
                                            bgcolor: "#FFFFFF",
                                            borderRadius: "4px",
                                            input: {
                                                color: "#667085"
                                            },
                                            mb: !!!errors.name ? "16px" : "0px"
                                        }
                                    }),
                                    !!errors.name && /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        variant: "caption",
                                        color: "red",
                                        children: errors.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledInputLabel, {
                                        children: t("contactUsForm.email")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                        id: "bootstrap-input2",
                                        value: form.email,
                                        type: "email",
                                        name: "email",
                                        onChange: handleChange,
                                        error: !!errors.email,
                                        fullWidth: true,
                                        required: true,
                                        placeholder: "you@company.com",
                                        sx: {
                                            bgcolor: "#FFFFFF",
                                            borderRadius: "4px",
                                            input: {
                                                color: "#667085"
                                            },
                                            mb: !!!errors.email ? "16px" : "0px"
                                        }
                                    }),
                                    !!errors.email && /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        variant: "caption",
                                        color: "red",
                                        children: errors.email
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledInputLabel, {
                                        children: t("contactUsForm.company")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                        value: form.company,
                                        name: "company",
                                        onChange: handleChange,
                                        error: !!errors.company,
                                        required: true,
                                        id: "bootstrap-input3",
                                        fullWidth: true,
                                        placeholder: "Company name",
                                        sx: {
                                            bgcolor: "#FFFFFF",
                                            borderRadius: "4px",
                                            mb: !!!errors.company ? "16px" : "0px",
                                            input: {
                                                color: "#667085"
                                            }
                                        }
                                    }),
                                    !!errors.company && /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        variant: "caption",
                                        color: "red",
                                        children: errors.company
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledInputLabel, {
                                        children: t("contactUsForm.help")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                        id: "bootstrap-input4",
                                        value: form.info,
                                        name: "info",
                                        onChange: handleChange,
                                        fullWidth: true,
                                        multiline: true,
                                        required: true,
                                        rows: 3,
                                        error: !!errors.info,
                                        placeholder: "Tell us a little about the project...",
                                        inputProps: {
                                            style: {
                                                color: "#667085"
                                            }
                                        },
                                        sx: {
                                            bgcolor: "#FFFFFF",
                                            borderRadius: "4px",
                                            mb: !!!errors.info ? "16px" : "0px",
                                            input: {
                                                color: "#667085"
                                            }
                                        }
                                    }),
                                    !!errors.info && /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        variant: "caption",
                                        color: "red",
                                        children: errors.info
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(StyledInputLabel, {
                                        children: "Services"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                        container: true,
                                        columns: 3,
                                        spacing: 1,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                xs: 1,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    variant: "outlined",
                                                    onClick: ()=>setServices((prev)=>({
                                                                ...prev,
                                                                bd: !prev.bd
                                                            })),
                                                    sx: {
                                                        borderColor: services.bd ? "#F0B270" : "#2D2D2D",
                                                        color: services.bd ? "#F0B270" : "#2D2D2D",
                                                        fontSize: {
                                                            xs: "14px",
                                                            md: "18px"
                                                        },
                                                        fontWeight: {
                                                            xs: 700,
                                                            md: 700
                                                        },
                                                        ":hover": {
                                                            borderColor: services.bd ? "#F0B270" : "#2D2D2D"
                                                        },
                                                        fontFamily: "Helvetica Neue",
                                                        width: {
                                                            xs: "126px",
                                                            md: "100%"
                                                        }
                                                    },
                                                    children: "Blockchain Development"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                xs: 1,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    variant: "outlined",
                                                    onClick: ()=>setServices((prev)=>({
                                                                ...prev,
                                                                bc: !prev.bc
                                                            })),
                                                    sx: {
                                                        width: {
                                                            xs: "126px",
                                                            md: "100%"
                                                        },
                                                        borderColor: services.bc ? "#F0B270" : "#2D2D2D",
                                                        color: services.bc ? "#F0B270" : "#2D2D2D",
                                                        fontSize: {
                                                            xs: "14px",
                                                            md: "18px"
                                                        },
                                                        fontWeight: {
                                                            xs: 700,
                                                            md: 700
                                                        },
                                                        ":hover": {
                                                            borderColor: services.bc ? "#F0B270" : "#2D2D2D"
                                                        },
                                                        fontFamily: "Helvetica Neue"
                                                    },
                                                    children: "Blockchain Consulting"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                                item: true,
                                                xs: 1,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    variant: "outlined",
                                                    onClick: ()=>setServices((prev)=>({
                                                                ...prev,
                                                                wd: !prev.wd
                                                            })),
                                                    sx: {
                                                        borderColor: services.wd ? "#F0B270" : "#2D2D2D",
                                                        color: services.wd ? "#F0B270" : "#2D2D2D",
                                                        fontSize: {
                                                            xs: "14px",
                                                            md: "18px"
                                                        },
                                                        fontWeight: {
                                                            xs: 700,
                                                            md: 700
                                                        },
                                                        ":hover": {
                                                            borderColor: services.wd ? "#F0B270" : "#2D2D2D"
                                                        },
                                                        width: {
                                                            xs: "126px",
                                                            md: "100%"
                                                        },
                                                        fontFamily: "Helvetica Neue",
                                                        fontStyle: "normal"
                                                    },
                                                    children: "Web&mobile development"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        fullWidth: true,
                                        size: "large",
                                        type: "submit",
                                        sx: {
                                            bgcolor: "#7F56D9",
                                            my: "0.5rem",
                                            color: "#FFFFFF",
                                            fontSize: "16px",
                                            fontWeight: 700,
                                            fontFamily: "Poppins"
                                        },
                                        children: t("button.getStarted")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                        fullWidth: true,
                                        size: "large",
                                        sx: {
                                            bgcolor: "#69B1F3",
                                            my: "0.5rem",
                                            color: "#FFFFFF",
                                            fontSize: "16px",
                                            fontWeight: 700,
                                            fontFamily: "Poppins"
                                        },
                                        children: t("button.letsChatInTelegram")
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const home_page_ContactUs = (ContactUs);
const StyledInputLabel = (styled_default()).p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  margin-bottom: 8px;
  color: #FFFFFF;
  text-transform: capitalize;
`;


/***/ })

};
;