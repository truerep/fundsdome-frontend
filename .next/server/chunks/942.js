"use strict";
exports.id = 942;
exports.ids = [942];
exports.modules = {

/***/ 2797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* reexport safe */ _loginUser__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _loginUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2669);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_loginUser__WEBPACK_IMPORTED_MODULE_0__]);
_loginUser__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2669:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1283);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, universal_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, universal_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const loginUser = async (username, password)=>{
    const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_1__["default"]();
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_helpers__WEBPACK_IMPORTED_MODULE_2__/* .appEnv.apiUrl */ .w.apiUrl}/users/login`, {
            username,
            password
        });
        const { token  } = response.data;
        localStorage.setItem("token", token);
        const setAuthTokenCookie = (token)=>{
            cookies.set("auth_token", {
                token
            }, {
                path: "/",
                domain: "fundsdome.com"
            });
        };
        setAuthTokenCookie(token);
        const authToken = cookies.get("auth_token", {
            domain: "fundsdome.com"
        });
        console.log(authToken, "<--authToken from cookies");
        return token;
    } catch (error) {
        console.error("Authentication failed", error);
        throw error;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2162:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getEventDonation = async (eventId)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_helpers__WEBPACK_IMPORTED_MODULE_1__/* .appEnv.apiUrl */ .w.apiUrl}/donations/event/${eventId}`, {});
        return response.data;
    } catch (error) {
        console.error("Failed to fetch data", error);
        throw error;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEventDonation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getGroupDonations = async (groupId)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_helpers__WEBPACK_IMPORTED_MODULE_1__/* .appEnv.apiUrl */ .w.apiUrl}/donations/group/${groupId}`, {});
        return response.data;
    } catch (error) {
        console.error("Failed to fetch data", error);
        throw error;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGroupDonations);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* reexport safe */ _getGroupDonations__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "h": () => (/* reexport safe */ _getEventDonation__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _getGroupDonations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(259);
/* harmony import */ var _getEventDonation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2162);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getGroupDonations__WEBPACK_IMPORTED_MODULE_0__, _getEventDonation__WEBPACK_IMPORTED_MODULE_1__]);
([_getGroupDonations__WEBPACK_IMPORTED_MODULE_0__, _getEventDonation__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getAllEvents = async ()=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_helpers__WEBPACK_IMPORTED_MODULE_1__/* .appEnv.apiUrl */ .w.apiUrl}/events/all/1`, {});
        return response.data;
    } catch (error) {
        console.error("Failed to fetch data", error);
        throw error;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllEvents);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2198:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* reexport safe */ _getAllEvents__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _getAllEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getAllEvents__WEBPACK_IMPORTED_MODULE_0__]);
_getAllEvents__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 643:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getAllGroups = async (pageNum = 1)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_helpers__WEBPACK_IMPORTED_MODULE_1__/* .appEnv.apiUrl */ .w.apiUrl}/conversation/all/${pageNum}`, {});
        return response.data;
    } catch (error) {
        console.error("Failed to fetch data", error);
        throw error;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllGroups);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getGroupDetail = async (groupSlug)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_helpers__WEBPACK_IMPORTED_MODULE_1__/* .appEnv.apiUrl */ .w.apiUrl}/conversation/slug/${groupSlug}`, {});
        return response.data;
    } catch (error) {
        console.error("Failed to fetch data", error);
        throw error;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getGroupDetail);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* reexport safe */ _getAllGroups__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "M": () => (/* reexport safe */ _getGroupDetail__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _getAllGroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(643);
/* harmony import */ var _getGroupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5938);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getAllGroups__WEBPACK_IMPORTED_MODULE_0__, _getGroupDetail__WEBPACK_IMPORTED_MODULE_1__]);
([_getAllGroups__WEBPACK_IMPORTED_MODULE_0__, _getGroupDetail__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fb": () => (/* reexport safe */ _groups__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   "H4": () => (/* reexport safe */ _posts__WEBPACK_IMPORTED_MODULE_4__.H),
/* harmony export */   "IP": () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_3__.I),
/* harmony export */   "MC": () => (/* reexport safe */ _groups__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   "Nz": () => (/* reexport safe */ _donations__WEBPACK_IMPORTED_MODULE_5__.N),
/* harmony export */   "bG": () => (/* reexport safe */ _users__WEBPACK_IMPORTED_MODULE_1__.b),
/* harmony export */   "hz": () => (/* reexport safe */ _donations__WEBPACK_IMPORTED_MODULE_5__.h),
/* harmony export */   "pH": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_0__.p)
/* harmony export */ });
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2797);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2455);
/* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5748);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2198);
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4028);
/* harmony import */ var _donations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4131);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_authentication__WEBPACK_IMPORTED_MODULE_0__, _users__WEBPACK_IMPORTED_MODULE_1__, _groups__WEBPACK_IMPORTED_MODULE_2__, _events__WEBPACK_IMPORTED_MODULE_3__, _posts__WEBPACK_IMPORTED_MODULE_4__, _donations__WEBPACK_IMPORTED_MODULE_5__]);
([_authentication__WEBPACK_IMPORTED_MODULE_0__, _users__WEBPACK_IMPORTED_MODULE_1__, _groups__WEBPACK_IMPORTED_MODULE_2__, _events__WEBPACK_IMPORTED_MODULE_3__, _posts__WEBPACK_IMPORTED_MODULE_4__, _donations__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getLatestGroupPost = async (groupId)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_helpers__WEBPACK_IMPORTED_MODULE_1__/* .appEnv.apiUrl */ .w.apiUrl}/posts/group/${groupId}/1/1`, {});
        return response.data;
    } catch (error) {
        console.error("Failed to fetch data", error);
        throw error;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLatestGroupPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4028:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* reexport safe */ _getLatestGroupPost__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _getLatestGroupPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9931);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getLatestGroupPost__WEBPACK_IMPORTED_MODULE_0__]);
_getLatestGroupPost__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1283);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, universal_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, universal_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const getUserInfo = async ()=>{
    const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_1__["default"]();
    try {
        // const token = localStorage.getItem('token');
        const authToken = cookies.get("auth_token");
        if (authToken?.token) {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_helpers__WEBPACK_IMPORTED_MODULE_2__/* .appEnv.apiUrl */ .w.apiUrl}/users/user-info`, {
                headers: {
                    Authorization: `Bearer ${authToken?.token}`
                }
            });
            return response.data;
        }
    } catch (error) {
    // console.error('Failed to fetch data', error);
    // throw error;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2455:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* reexport safe */ _getUserInfo__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _getUserInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5931);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getUserInfo__WEBPACK_IMPORTED_MODULE_0__]);
_getUserInfo__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7914:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Campaigns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4188);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(370);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Campaigns__WEBPACK_IMPORTED_MODULE_2__, _api__WEBPACK_IMPORTED_MODULE_3__]);
([_Campaigns__WEBPACK_IMPORTED_MODULE_2__, _api__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




let allGroupsList = [];
const CampaignsContainer = ({ groupsList  })=>{
    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    groupsList?.groups.forEach((newObj)=>{
        if (!allGroupsList.some((existingObj)=>existingObj._id === newObj._id)) {
            allGroupsList.push(newObj);
        }
    });
    const isSectionVisible = ()=>{
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            return rect.bottom <= window.innerHeight;
        }
        return false;
    };
    const handleScroll = async ()=>{
        if (isSectionVisible()) {
            if (groupsList?.currentPage !== groupsList?.totalPages) {
                setIsLoading(true);
                let res = await (0,_api__WEBPACK_IMPORTED_MODULE_3__/* .getAllGroups */ .Fb)(groupsList?.currentPage + 1);
                groupsList = res;
                groupsList?.groups.forEach((newObj)=>{
                    if (!allGroupsList.some((existingObj)=>existingObj._id === newObj._id)) {
                        allGroupsList.push(newObj);
                    }
                });
                setIsLoading(false);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Campaigns__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        sectionRef: sectionRef,
        isLoading: isLoading,
        groupsList: allGroupsList
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CampaignsContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_UiElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9948);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1025);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common__WEBPACK_IMPORTED_MODULE_4__]);
_common__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Campaigns = ({ sectionRef , groupsList , isLoading  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CampaignsContainer, {
        ref: sectionRef,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CampaignsWrapper, {
                children: groupsList.length && groupsList.map((group)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common__WEBPACK_IMPORTED_MODULE_4__/* .CampaignItem */ .x9, {
                        groupData: group
                    }, group._id))
            }),
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common__WEBPACK_IMPORTED_MODULE_4__/* .Loader */ .aN, {}) : ""
        ]
    });
};
const CampaignsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-c8a441a3-0"
})`
	padding-bottom: 70px;
`;
const CampaignsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_common_UiElements__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W).withConfig({
    componentId: "sc-c8a441a3-1"
})`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 30px;
	padding: 70px 0;

	@media (max-width: 1200px) {
		padding: 70px 20px;
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 576px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Campaigns);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9747:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Campaigns_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Campaigns_container__WEBPACK_IMPORTED_MODULE_0__]);
_Campaigns_container__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Campaigns_container__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(314);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Events__WEBPACK_IMPORTED_MODULE_2__]);
_Events__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const EventsContainer = ({ eventsList  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Events__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        eventsList: eventsList
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 314:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_UiElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9948);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1025);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common__WEBPACK_IMPORTED_MODULE_4__]);
_common__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Events = ({ eventsList  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(EventsWrapper, {
        children: [
            eventsList?.events.map((event)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common__WEBPACK_IMPORTED_MODULE_4__/* .EventItem */ .cx, {
                    eventData: event
                }, event._id)),
            console.log(eventsList, "<--eventsList")
        ]
    });
};
const EventsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_common_UiElements__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W).withConfig({
    componentId: "sc-35e891f7-0"
})`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 30px;
	padding: 70px 0;

	@media (max-width: 1200px) {
		padding: 70px 20px;
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Events_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3246);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Events_container__WEBPACK_IMPORTED_MODULE_0__]);
_Events_container__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Events_container__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 561:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(370);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8494);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_2__]);
_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const LoginContainer = ()=>{
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleLogin = async ()=>{
        try {
            const token = await (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .loginUser */ .pH)(username, password);
            console.log("Token:", token);
        } catch (error) {}
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Login__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        username: username,
        setUsername: setUsername,
        password: password,
        setPassword: setPassword,
        handleLogin: handleLogin
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const Login = ({ username , setUsername , password , setPassword , handleLogin  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoginWrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                placeholder: "Username",
                value: username,
                onChange: (e)=>setUsername(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "password",
                placeholder: "Password",
                value: password,
                onChange: (e)=>setPassword(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn-primary",
                onClick: handleLogin,
                children: "Login"
            })
        ]
    });
};
const LoginWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-81ea7aff-0"
})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid lightgray;
  max-width: 450px;
  border-radius: 10px;

  button {
    width: fit-content;
    margin-left: auto;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ 5973:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(561);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Login_container__WEBPACK_IMPORTED_MODULE_0__]);
_Login_container__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Login_container__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_OrganizationContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9076);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(370);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3211);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1802);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_3__, _Banner__WEBPACK_IMPORTED_MODULE_4__, _services__WEBPACK_IMPORTED_MODULE_5__]);
([_api__WEBPACK_IMPORTED_MODULE_3__, _Banner__WEBPACK_IMPORTED_MODULE_4__, _services__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const BannerContainer = ()=>{
    const organizationData = (0,_context_OrganizationContext__WEBPACK_IMPORTED_MODULE_2__/* .useOrganizationContext */ .m)();
    const [donations, setDonations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [donationId, setDonationId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [donationAmount, setDonationAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [donationTotal, setDonationTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showAmountModal, setShowAmountModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showLoginModal, setShowLoginModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const getDonations = async (groupId)=>{
        const res = await (0,_api__WEBPACK_IMPORTED_MODULE_3__/* .getGroupDonations */ .Nz)(groupId);
        const targetAmount = res.reduce((acc, obj)=>acc + obj.targetAmount, 0);
        const currentAmount = res.reduce((acc, obj)=>acc + obj.currentAmount, 0);
        const percentage = parseInt(currentAmount / targetAmount * 100);
        setDonations(res);
        setDonationTotal({
            targetAmount,
            currentAmount,
            percentage
        });
    };
    const handleDonation = async ()=>{
        const isAuthenticated = await (0,_services__WEBPACK_IMPORTED_MODULE_5__/* .authService */ .O)();
        if (donationAmount && isAuthenticated) {
            window.open(`https://app.fundsdome.com/contribute?amount=${donationAmount}&donationId=${donationId}`, "_blank");
        } else {
            setShowLoginModal(true);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(organizationData?.chat?._id, "<--organizationData");
        getDonations(organizationData?.chat?._id);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Banner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        donationTotal: donationTotal,
        donations: donations,
        organizationData: organizationData,
        showModal: showModal,
        setShowModal: setShowModal,
        showAmountModal: showAmountModal,
        setShowAmountModal: setShowAmountModal,
        donationId: donationId,
        setDonationId: setDonationId,
        donationAmount: donationAmount,
        setDonationAmount: setDonationAmount,
        showLoginModal: showLoginModal,
        setShowLoginModal: setShowLoginModal,
        handleDonation: handleDonation
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_UiElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9948);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1025);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common__WEBPACK_IMPORTED_MODULE_4__]);
_components_common__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-img-element */ 




const Banner = ({ donationTotal , organizationData , donations , donationId , setDonationId , donationAmount , setDonationAmount , showModal , setShowModal , showAmountModal , setShowAmountModal , showLoginModal , setShowLoginModal , handleDonation  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BannerWrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: organizationData?.posts[0]?.image,
                alt: "organization-banner"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(OraganizationDetailsWrapper, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(OrganizationInfoWrapper, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                class: "logo",
                                src: "https://pkstatic.imgix.net/media/companyprofile/331/onecause-logo.png",
                                alt: "organization-logo"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(OrganizationContext, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: organizationData?.chat?.chatName
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            organizationData?.chat?.users?.length,
                                            " Members | ",
                                            organizationData?.events?.length,
                                            " Events Organized"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        children: "Organization Info"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(OrganizationActionLinks, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Donation, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgressBox, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgressBar, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgressFilled, {
                                                percentage: donationTotal?.percentage,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProgressNumber, {
                                                    children: [
                                                        donationTotal?.percentage,
                                                        "%"
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DonationAmount, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                children: [
                                                    "Raised $",
                                                    donationTotal?.currentAmount
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                children: [
                                                    "Goal $",
                                                    donationTotal?.targetAmount
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DonateButton, {
                                onClick: ()=>setShowModal(true),
                                children: "Donate"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u_, {
                showModal: showModal,
                setShowModal: setShowModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EventsWrapper, {
                    children: donations.length && donations.map((donation, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(EventItem, {
                            children: [
                                console.log(donation),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: donation?.event?.thumbnail
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DonationDetail, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                            children: donation?.event?.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DonationAmount, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                    children: [
                                                        "Raised $",
                                                        donation?.currentAmount
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                    children: [
                                                        "Goal $",
                                                        donation?.targetAmount
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgressBar, {
                                            className: "bar",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgressFilled, {
                                                percentage: parseInt(donation?.currentAmount / donation?.targetAmount * 100)
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DonateBtn, {
                                    onClick: ()=>{
                                        setDonationId(donation._id);
                                        setShowAmountModal(true);
                                    },
                                    children: "Donate"
                                })
                            ]
                        }, donation._id))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u_, {
                showModal: showAmountModal,
                setShowModal: setShowAmountModal,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AmountModalWrapper, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            value: donationAmount,
                            onChange: (e)=>setDonationAmount(e.target.value),
                            placeholder: "Enter Amount USD $"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DonateBtn, {
                            onClick: ()=>handleDonation(),
                            children: "Donate"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common__WEBPACK_IMPORTED_MODULE_4__/* .Modal */ .u_, {
                showModal: showLoginModal,
                setShowModal: setShowLoginModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common__WEBPACK_IMPORTED_MODULE_4__/* .LoginModal */ ._A, {
                    setShowLoginModal: setShowLoginModal
                })
            })
        ]
    });
};
const BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_common_UiElements__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W).withConfig({
    componentId: "sc-34b298d5-0"
})`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    margin: 40px auto 60px;

    img {
        width: 100%;
    }
`;
const OraganizationDetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-1"
})`
    display: flex;
    align-items: center;
    padding: 26px;
`;
const OrganizationInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-2"
})`
    display: flex;
    align-items: center;

    img.logo {
        height: 110px;
        width: 110px;
        object-fit: cover;
        border-radius: 100%;
        flex-shrink: 0;
        margin-right: 12px;
    }
`;
const OrganizationContext = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-3"
})`
    h1 {
        font-family: Martel;
        font-size: 32px;
        font-weight: 400;
        text-transform: capitalize;
    }

    p {
        color: #7D7D7D;
    }

    a {
        padding: 10px 0;
        display: block;
        color: #001AFF;
        text-decoration: none;
    }
`;
const OrganizationActionLinks = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-4"
})`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
`;
const Donation = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-5"
})`
    width: 320px;
`;
const DonateButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
    componentId: "sc-34b298d5-6"
})`
    display: inline-block;
    background-color: #9F85F7;
    padding: 12px 22px;
    border-radius: 10px;
    font-family: "Quicksand", sans-serif;
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    margin-top: -15px;
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
    }
`;
const ProgressBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-7"
})``;
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-8"
})`
	width: 100%;
    height: 7px;
    border: 1px solid #965995;
    border-radius: 10px;
    position: relative;
`;
const ProgressFilled = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-9"
})`
	position: relative;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #965995;
    transition: all 1500ms linear;
    border-radius: 10px;
    width: ${(props)=>props.percentage}%;
    z-index: 1;	

	&::after {
		content: "";
		width: 8px;
		height: 8px;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-50%, -50%);
		z-index: 11;
	}

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		right: -1px;
		transform: translateY(-50%);
		background-color: #965995;
		border: 0;
		height: 18px;
		width: 18px;
		border-radius: 50%;
		z-index: 11;
	}
`;
const ProgressNumber = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-10"
})`
	position: absolute;
    bottom: calc(100% + 13px);
    right: 0;
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.166;
    text-transform: capitalize;
    color: var(--cleenhearts-purple, #965995)
`;
const DonationAmount = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-11"
})`
	margin-top: 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;	

	h5 {
		font-size: 12px;
		color: #351C42;
		font-weight: 500;
		line-height: 14px;
		text-transform: capitalize;
		margin-bottom: 0;
		font-family: "Quicksand", sans-serif;
	}
`;
const EventsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-12"
})`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    
    @media (min-width: 576px) {
        min-width: 450px;
    }
`;
const EventItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-13"
})`
    display: flex;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 15px;
    }

    .bar {
        margin-top: 5px;
        transform: scaleY(0.6);

        & > div::after, & > div::before {
            content: unset;
        }
    }

    h4 {
        font-size: 15px;
        font-weight: 400;
    }

    img {
        height: 60px;
        width: 80px;
        object-fit: cover;
        border-radius: 5px;
    }
`;
const DonationDetail = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-14"
})`
    padding: 0 15px;
    flex: 1;
`;
const DonateBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
    componentId: "sc-34b298d5-15"
})`
    margin-left: auto;
    display: inline-block;
    background-color: #fff;
    padding: 9px 18px;
    border-radius: 10px;
    font-family: "Quicksand", sans-serif;
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #9F85F7;
    color: #9F85F7;

    &:hover {
        background-color: #9F85F7;
        color: #fff;
    }
`;
const AmountModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-34b298d5-16"
})`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    max-width: 220px;

    input {
        border-radius: 10px;
        padding: 10px;
        width: calc(100% - 20px);
        border: 1px solid #965995;
        outline: 0;
    }

    button {
        margin-top: 20px;
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Banner_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1225);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Banner_container__WEBPACK_IMPORTED_MODULE_0__]);
_Banner_container__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Banner_container__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8867:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4720);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PageWrapper__WEBPACK_IMPORTED_MODULE_2__]);
_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const PageWrapperContainer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapperContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4720:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_UiElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9948);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9206);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_4__]);
_components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const PageWrapper = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PageContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Posts */ .V, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Events */ .z, {})
        ]
    });
};
const PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_common_UiElements__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W).withConfig({
    componentId: "sc-3863826c-0"
})`
    display: flex;
    gap: 55px;
    margin-bottom: 60px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageWrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Events)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./context/OrganizationContext.js
var OrganizationContext = __webpack_require__(9076);
;// CONCATENATED MODULE: ./utils/eventTiming.js
const eventTiming = (dateTime)=>{
    console.log(dateTime, "<---");
    const eventDate = new Date(dateTime?.date);
    // Format date
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    const formattedDate = eventDate.toLocaleDateString("en-US", options);
    // Format time
    const formattedTime = dateTime?.time.replace(/(\d{2}):(\d{2})/, (match, hour, minute)=>{
        const hh = parseInt(hour, 10);
        const meridiem = hh < 12 ? "AM" : "PM";
        const formattedHour = hh % 12 || 12; // Convert to 12-hour format
        return `${formattedHour}:${minute}${meridiem}`;
    });
    // Current date and time
    const currentDate = new Date();
    const isUpcoming = eventDate > currentDate;
    // Determine the status (starts at or ended on)
    const status = isUpcoming ? "Starts" : "Ended";
    // Combine formatted date and time
    const result = `${status} ${formattedTime}, ${formattedDate}`;
    return result;
};
/* harmony default export */ const utils_eventTiming = (eventTiming);

;// CONCATENATED MODULE: ./components/Organization/PageWrapper/components/Events/components/EventCard/EventCard.js




const EventCard = ({ eventName , event , thumbnail  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(EventCardWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(EventImageWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(EventImage, {
                    src: thumbnail,
                    alt: "event-icon",
                    className: "event-icon"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(EventInfo, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(EventTitle, {
                        children: eventName
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(EventTiming, {
                        children: utils_eventTiming(event)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DonationInfo, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DonationAmount, {
                                children: "$ 4500 / $ 6000"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DonationContributors, {
                                children: "350 Contributions"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const EventCardWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-418fe459-0"
})`
    border-radius: 5px;
    border: 1px solid #9F85F7;
    background: #FAF9FC;
    overflow: hidden;
    display: flex;
    margin-bottom: 19px;
`;
const EventImageWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-418fe459-1"
})`
    width: 100px;
    flex-shrink: 0;
`;
const EventImage = external_styled_components_default().img.withConfig({
    componentId: "sc-418fe459-2"
})`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
const EventInfo = external_styled_components_default().div.withConfig({
    componentId: "sc-418fe459-3"
})`
    padding: 11px 14px 13px;
    color: #7D7D7D;
    font-family: Inter;
    font-size: 15px;
    flex: 1;
`;
const EventTitle = external_styled_components_default().h3.withConfig({
    componentId: "sc-418fe459-4"
})`
    color: #000;
    font-size: 19px;
    font-weight: 400;
    line-height: normal;
`;
const EventTiming = external_styled_components_default().p.withConfig({
    componentId: "sc-418fe459-5"
})`
    padding: 7px 0 9px;
`;
const DonationInfo = external_styled_components_default().div.withConfig({
    componentId: "sc-418fe459-6"
})`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
`;
const DonationAmount = external_styled_components_default().p.withConfig({
    componentId: "sc-418fe459-7"
})`

`;
const DonationContributors = external_styled_components_default().p.withConfig({
    componentId: "sc-418fe459-8"
})`

`;
/* harmony default export */ const EventCard_EventCard = (EventCard);

;// CONCATENATED MODULE: ./components/Organization/PageWrapper/components/Events/components/EventCard/EventCard.container.js




const EventCardContainer = ()=>{
    const organizationData = (0,OrganizationContext/* useOrganizationContext */.m)();
    return organizationData?.events.map((event)=>/*#__PURE__*/ jsx_runtime_.jsx(EventCard_EventCard, {
            eventName: event?.name,
            event: event,
            thumbnail: event?.thumbnail || ""
        }, event._id));
};
/* harmony default export */ const EventCard_container = (EventCardContainer);

;// CONCATENATED MODULE: ./components/Organization/PageWrapper/components/Events/components/EventCard/index.js

/* harmony default export */ const components_EventCard = (EventCard_container);

;// CONCATENATED MODULE: ./components/Organization/PageWrapper/components/Events/components/index.js



;// CONCATENATED MODULE: ./components/Organization/PageWrapper/components/Events/Events.js




const Events = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(EventsWrapper, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_EventCard, {})
    });
};
const EventsWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-ac81069b-0"
})`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
    padding: 18px 27px;
    flex: 1;
    height: fit-content;
    flex-shrink: 0;
    position: sticky;
    top: 30px;
`;
/* harmony default export */ const Events_Events = (Events);

;// CONCATENATED MODULE: ./components/Organization/PageWrapper/components/Events/Events.container.js



const EventsContainer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Events_Events, {});
};
/* harmony default export */ const Events_container = (EventsContainer);

;// CONCATENATED MODULE: ./components/Organization/PageWrapper/components/Events/index.js

/* harmony default export */ const components_Events = (Events_container);


/***/ }),

/***/ 4604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_OrganizationContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9076);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(370);
/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9839);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_3__, _Posts__WEBPACK_IMPORTED_MODULE_4__]);
([_api__WEBPACK_IMPORTED_MODULE_3__, _Posts__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const PostsContainer = ()=>{
    const organizationData = (0,_context_OrganizationContext__WEBPACK_IMPORTED_MODULE_2__/* .useOrganizationContext */ .m)();
    const [isAdmin, setIsAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const userInfo = async ()=>{
        const userInfo = await (0,_api__WEBPACK_IMPORTED_MODULE_3__/* .getUserInfo */ .bG)();
        if (userInfo?._id === organizationData?.chat?.groupAdmin?._id) {
            setIsAdmin(true);
        }
        console.log(userInfo);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        userInfo();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Posts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        isAdmin: isAdmin,
        organizationData: organizationData
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9839:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__]);
_components__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Posts = ({ isAdmin , organizationData  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostsWrapper, {
            children: organizationData?.posts.map((postItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .PostItem */ .YS, {
                    organizationName: organizationData?.chat?.chatName,
                    timeStamp: postItem?.createdAt,
                    description: postItem?.description,
                    imageUrl: postItem?.image
                }, postItem?._id))
        })
    });
};
const PostsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-fec4f54e-0"
})`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
    width: 700px;
    flex-shrink: 0;
    height: fit-content;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8331:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Posts_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4604);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Posts_container__WEBPACK_IMPORTED_MODULE_0__]);
_Posts_container__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Posts_container__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* reexport safe */ _Posts__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "z": () => (/* reexport safe */ _Events__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8331);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(475);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Posts__WEBPACK_IMPORTED_MODULE_0__]);
_Posts__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageWrapper_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PageWrapper_container__WEBPACK_IMPORTED_MODULE_0__]);
_PageWrapper_container__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PageWrapper_container__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9700:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* reexport safe */ _PageWrapper__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "j": () => (/* reexport safe */ _Banner__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8834);
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1059);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Banner__WEBPACK_IMPORTED_MODULE_0__, _PageWrapper__WEBPACK_IMPORTED_MODULE_1__]);
([_Banner__WEBPACK_IMPORTED_MODULE_0__, _PageWrapper__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5011:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(370);
/* harmony import */ var _CampaignItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_2__]);
_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const CampaignItemContainer = ({ groupData  })=>{
    const [campaignBanner, setCampaignBanner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("https://i.stack.imgur.com/IA7jp.gif");
    const [donationTotal, setDonationTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const getGroupBanner = async (groupId)=>{
        const res = await (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .getLatestGroupPost */ .H4)(groupId);
        if (res?.posts?.length) {
            setCampaignBanner(res.posts[0].image);
        } else {
            setCampaignBanner("https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg");
        }
    };
    const getDonations = async (groupId)=>{
        const res = await (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .getGroupDonations */ .Nz)(groupId);
        const targetAmount = res.reduce((acc, obj)=>acc + obj.targetAmount, 0);
        const currentAmount = res.reduce((acc, obj)=>acc + obj.currentAmount, 0);
        const percentage = parseInt(currentAmount / targetAmount * 100);
        setDonationTotal({
            targetAmount,
            currentAmount,
            percentage
        });
    };
    if (groupData?._id) {
        getGroupBanner(groupData?._id);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getDonations(groupData?._id);
    }, [
        groupData
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CampaignItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        groupData: groupData,
        campaignBanner: campaignBanner,
        donationTotal: donationTotal
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CampaignItemContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const CampaignItem = ({ groupData , campaignBanner , donationTotal  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/${groupData?.slug}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CampaignContext, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CampaignThumbnail, {
                                src: campaignBanner
                            }),
                            donationTotal?.targetAmount ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Donation, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgressBox, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgressBar, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgressFilled, {
                                                percentage: donationTotal?.percentage,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProgressNumber, {
                                                    children: [
                                                        donationTotal?.percentage,
                                                        "%"
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DonationAmount, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                children: [
                                                    "Raised $",
                                                    donationTotal?.currentAmount
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                children: [
                                                    "Goal $",
                                                    donationTotal?.targetAmount
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }) : ""
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Info, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                                children: groupData?.chatName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Description, {
                                children: groupData?.description
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2b762718-0"
})`
	a {
		text-decoration: none;
	}
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2b762718-1"
})`
	padding: 22px;
	position: relative;
	background-color: #EFECE7;
	border-radius: 20px;
	background-image: url("https://truerep.github.io/fundsdome-ui/assets/images/backgrounds/donation-bg-1-1.png");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	border-radius: 20px;
	color: #351C42;
	text-decoration: none;
`;
const CampaignContext = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2b762718-2"
})`
	height: 220px;
	position: relative;
`;
const Donation = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2b762718-3"
})`
	padding: 38px 20px 11px;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(50%);
	width: calc(100% - 80px);
	background-color: #fff;
	border-radius: 10px;
`;
const CampaignThumbnail = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
    componentId: "sc-2b762718-4"
})`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 20px;
`;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2b762718-5"
})`
	padding-top: 65px;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h3.withConfig({
    componentId: "sc-2b762718-6"
})`
	font-size: 22px;
	line-height: 1.5;
	letter-spacing: -0.66px;
	text-transform: capitalize;
	margin-bottom: 15px;
	font-family: Quicksand, sans-serif;
`;
const Description = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
    componentId: "sc-2b762718-7"
})`
	font-family: "DM Sans", sans-serif;
	font-size: 16px;
	color: #757277;
	font-weight: 400;
	line-height: 1.75;
`;
const ProgressBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2b762718-8"
})``;
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2b762718-9"
})`
	width: 100%;
    height: 7px;
    border: 1px solid #965995;
    border-radius: 10px;
    position: relative;
`;
const ProgressFilled = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2b762718-10"
})`
	position: relative;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #965995;
    transition: all 1500ms linear;
    border-radius: 10px;
    width: ${(props)=>props.percentage}%;
    z-index: 1;	

	&::after {
		content: "";
		width: 8px;
		height: 8px;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-50%, -50%);
		z-index: 11;
	}

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		right: -1px;
		transform: translateY(-50%);
		background-color: #965995;
		border: 0;
		height: 18px;
		width: 18px;
		border-radius: 50%;
		z-index: 11;
	}
`;
const ProgressNumber = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2b762718-11"
})`
	position: absolute;
    bottom: calc(100% + 13px);
    right: 0;
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.166;
    text-transform: capitalize;
    color: var(--cleenhearts-purple, #965995)
`;
const DonationAmount = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-2b762718-12"
})`
	margin-top: 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;	

	h5 {
		font-size: 12px;
		color: #351C42;
		font-weight: 500;
		line-height: 14px;
		text-transform: capitalize;
		margin-bottom: 0;
		font-family: "Quicksand", sans-serif;
	}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CampaignItem);


/***/ }),

/***/ 6161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CampaignItem_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CampaignItem_container__WEBPACK_IMPORTED_MODULE_0__]);
_CampaignItem_container__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CampaignItem_container__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9113:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/CreatePost/CreatePost.js



const CreatePost_CreatePost = ()=>{
    return /*#__PURE__*/ _jsx(CreatePostWrapper, {
        children: /*#__PURE__*/ _jsxs(PostInputWrapper, {
            children: [
                /*#__PURE__*/ _jsx(UserImage, {
                    src: "https://pbs.twimg.com/profile_images/1273515780173205504/B6bWH3m5_bigger.jpg",
                    alt: "profile-image"
                }),
                /*#__PURE__*/ _jsx(PostText, {
                    placeholder: "Share happenings!"
                })
            ]
        })
    });
};
const CreatePostWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-d20f8e30-0"
})`
  padding: 22px 26px;
  margin-bottom: 45px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.05);
  width: 100%;
`;
const PostInputWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-d20f8e30-1"
})`
  display: flex;
`;
const UserImage = external_styled_components_default().img.withConfig({
    componentId: "sc-d20f8e30-2"
})`
  height: 45px;
  width: 45px;
  border-radius: 100%;
`;
const PostText = external_styled_components_default().textarea.withConfig({
    componentId: "sc-d20f8e30-3"
})`
`;
/* harmony default export */ const common_CreatePost_CreatePost = ((/* unused pure expression or super */ null && (CreatePost_CreatePost)));

;// CONCATENATED MODULE: ./components/common/CreatePost/CreatePost.container.js



const CreatePostContainer = ()=>{
    return /*#__PURE__*/ _jsx(CreatePost, {});
};
/* harmony default export */ const CreatePost_container = ((/* unused pure expression or super */ null && (CreatePostContainer)));

;// CONCATENATED MODULE: ./components/common/CreatePost/index.js

/* harmony default export */ const common_CreatePost = ((/* unused pure expression or super */ null && (CreatePost)));


/***/ }),

/***/ 1653:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(370);
/* harmony import */ var _EventItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8088);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1802);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_2__, _EventItem__WEBPACK_IMPORTED_MODULE_3__, _services__WEBPACK_IMPORTED_MODULE_4__]);
([_api__WEBPACK_IMPORTED_MODULE_2__, _EventItem__WEBPACK_IMPORTED_MODULE_3__, _services__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const EventItemContainer = ({ eventData  })=>{
    const [donationTotal, setDonationTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [donationId, setDonationId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [donationAmount, setDonationAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [showAmountModal, setShowAmountModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showLoginModal, setShowLoginModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const getDonations = async (eventId)=>{
        const res = await (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .getEventDonation */ .hz)(eventId);
        const targetAmount = res.reduce((acc, obj)=>acc + obj.targetAmount, 0);
        const currentAmount = res.reduce((acc, obj)=>acc + obj.currentAmount, 0);
        const percentage = parseInt(currentAmount / targetAmount * 100);
        console.log(res, "<--res");
        setDonationTotal({
            targetAmount,
            currentAmount,
            percentage,
            _id: res[0]?._id
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getDonations(eventData?._id);
    }, [
        eventData
    ]);
    const handleDonation = async ()=>{
        const isAuthenticated = await (0,_services__WEBPACK_IMPORTED_MODULE_4__/* .authService */ .O)();
        if (donationAmount && isAuthenticated) {
            window.open(`https://app.fundsdome.com/contribute?amount=${donationAmount}&donationId=${donationId}`, "_blank");
        } else {
            setShowLoginModal(true);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EventItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        donationTotal: donationTotal,
        eventData: eventData,
        showAmountModal: showAmountModal,
        setShowAmountModal: setShowAmountModal,
        donationAmount: donationAmount,
        showLoginModal: showLoginModal,
        setShowLoginModal: setShowLoginModal,
        setDonationId: setDonationId,
        setDonationAmount: setDonationAmount,
        handleDonation: handleDonation
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventItemContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8088:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2875);
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3870);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LoginModal__WEBPACK_IMPORTED_MODULE_4__]);
_LoginModal__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const EventItem = ({ donationTotal , eventData , showAmountModal , setShowAmountModal , donationAmount , showLoginModal , setShowLoginModal , setDonationId , setDonationAmount , handleDonation  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            console.log(donationTotal, "<---donto"),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(EventContext, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EventThumbnail, {
                        src: eventData?.thumbnail
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(EventDateWrapper, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(EventTime, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        class: "event-card-grid__time__icon fa fa-clock"
                                    }),
                                    "10:00 aM - 2.00 PM"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EventDate, {
                                children: "03 Sep"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Info, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                        children: eventData?.name || "Unnamed"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(OrganizerInfo, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        class: "event-card-grid__meta__title",
                                        children: "Organizer"
                                    }),
                                    eventData?.chatId?.chatName
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                        class: "event-card-grid__meta__title",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                class: "icon-location"
                                            }),
                                            " Venue"
                                        ]
                                    }),
                                    "Remote | Virtual"
                                ]
                            })
                        ]
                    }),
                    donationTotal?.targetAmount ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DonationWrapper, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Donation, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgressBox, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgressBar, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProgressFilled, {
                                                percentage: donationTotal?.percentage,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProgressNumber, {
                                                    children: [
                                                        donationTotal?.percentage,
                                                        "%"
                                                    ]
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DonationAmount, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                children: [
                                                    "Raised $",
                                                    donationTotal?.currentAmount
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                children: [
                                                    "Goal $",
                                                    donationTotal?.targetAmount
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DonateBtn, {
                                onClick: ()=>{
                                    setDonationId(donationTotal._id);
                                    setShowAmountModal(true);
                                },
                                children: "Donate"
                            })
                        ]
                    }) : ""
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                showModal: showAmountModal,
                setShowModal: setShowAmountModal,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AmountModalWrapper, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            value: donationAmount,
                            onChange: (e)=>setDonationAmount(e.target.value),
                            placeholder: "Enter Amount USD $"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DonateBtn, {
                            onClick: ()=>handleDonation(),
                            children: "Donate"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                showModal: showLoginModal,
                setShowModal: setShowLoginModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginModal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    setShowLoginModal: setShowLoginModal
                })
            })
        ]
    });
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-0"
})`
	position: relative;
	border-radius: 20px;
	overflow: hidden;
	display: flex;
	flex-direction: column;

	&:nth-child(even) {
		& > div:nth-child(1) {
			order: 1;

			div {
				top: unset;
				bottom: 30px;
			}
		}

		& > div:nth-child(2) {
			border-radius: 20px 20px 0 0;
			border-bottom: none;
			border-top: 1px solid #D7D3CB;
		}
	}
	
	@media (max-width: 768px) {
		max-width: 510px;
		margin: 0 auto;
	}
`;
const EventContext = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-1"
})`
	height: 366px;
	position: relative;
`;
const EventThumbnail = styled_components__WEBPACK_IMPORTED_MODULE_2___default().img.withConfig({
    componentId: "sc-a9e0cdb3-2"
})`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
const EventDateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-3"
})`
	position: absolute;
	left: 0;
	top: 30px;
	z-index: 1;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const EventTime = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-4"
})`
	padding: 0 19px 0 30px;
    line-height: 36px;
    display: inline-block;
    border-radius: 0px 100px 100px 0px;
    background-color: #965995;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
`;
const EventDate = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-5"
})`
	padding: 0 31px 0 13px;
    line-height: 36px;
    display: inline-block;
    border-radius: 100px 0px 0px 100px;
    background-color: var(--cleenhearts-secondary, #F6D469);
    font-size: 16px;
    font-weight: 700;
    color: var(--cleenhearts-base, #351C42);
    text-transform: uppercase;
`;
const Info = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-6"
})`
	position: relative;
	border: 1px solid #D7D3CB;
	border-top: none;
	padding: 31px 30px 29px;
	border-radius: 0 0 20px 20px;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h3.withConfig({
    componentId: "sc-a9e0cdb3-7"
})`
	text-transform: capitalize;
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 22px;
	font-family: "Quicksand", sans-serif;
    color: #351C42;
`;
const OrganizerInfo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
    componentId: "sc-a9e0cdb3-8"
})`
	margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px 0;

	li {
		font-family: "DM Sans", sans-serif;
		text-transform: capitalize;
		color: #351C42;
		position: relative;

		&:nth-child(2) {
			margin-left: 20px;
			padding-left: 20px;

			&::before {
				content: "";
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				width: 1px;
				height: 41px;
				background-color: #D7D3CB;
			}
		}
	}

	h5 {
		font-family: "DM Sans", sans-serif;
		color: #351C42;
		font-size: 16px;
		line-height: 1.75;
		margin-bottom: 0;
		text-transform: capitalize;
	}
`;
const DonationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-9"
})`
	display: flex;
	align-items: center;
	gap: 5px;
	margin-top: 30px;
	border-top: 1px solid #D7D3CB;
`;
const DonateBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
    componentId: "sc-a9e0cdb3-10"
})`
    margin-left: auto;
    display: inline-block;
    background-color: #fff;
    padding: 9px 18px;
    border-radius: 10px;
    font-family: "Quicksand", sans-serif;
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #9F85F7;
    color: #9F85F7;
	transform: translateY(7px);

    &:hover {
        background-color: #9F85F7;
        color: #fff;
    }
`;
const Donation = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-11"
})`
	padding: 45px 20px 0;
	flex: 1;
`;
const ProgressBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-12"
})``;
const ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-13"
})`
	width: 100%;
    height: 7px;
    border: 1px solid #965995;
    border-radius: 10px;
    position: relative;
`;
const ProgressFilled = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-14"
})`
	position: relative;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #965995;
    transition: all 1500ms linear;
    border-radius: 10px;
    width: ${(props)=>props.percentage}%;
    z-index: 1;	

	&::after {
		content: "";
		width: 8px;
		height: 8px;
		background-color: #fff;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-50%, -50%);
		z-index: 11;
	}

	&::before {
		content: "";
		position: absolute;
		top: 50%;
		right: -1px;
		transform: translateY(-50%);
		background-color: #965995;
		border: 0;
		height: 18px;
		width: 18px;
		border-radius: 50%;
		z-index: 11;
	}
`;
const ProgressNumber = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-15"
})`
	position: absolute;
    bottom: calc(100% + 13px);
    right: 0;
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.166;
    text-transform: capitalize;
    color: var(--cleenhearts-purple, #965995)
`;
const DonationAmount = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-16"
})`
	margin-top: 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;	

	h5 {
		font-size: 12px;
		color: #351C42;
		font-weight: 500;
		line-height: 14px;
		text-transform: capitalize;
		margin-bottom: 0;
		font-family: "Quicksand", sans-serif;
	}
`;
const AmountModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-a9e0cdb3-17"
})`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    max-width: 220px;

    input {
        border-radius: 10px;
        padding: 10px;
        width: calc(100% - 20px);
        border: 1px solid #965995;
        outline: 0;
    }

    button {
        margin-top: 20px;
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EventItem_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1653);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EventItem_container__WEBPACK_IMPORTED_MODULE_0__]);
_EventItem_container__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_EventItem_container__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/Footer/Footer.js




const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(FooterText, {}),
            "\xa9 Copyright 2024 FundsDome All Rights Reserved."
        ]
    });
};
const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-6eb433c1-0"
})`
    text-align: center;
    padding: 25px 20px;
    font-size: 14px;
    font-weight: 600;
    color: #351C42;
    line-height: 1.5;
    font-family: "DM Sans", sans-serif;
    background-color: #F6D469;
    position: relative;
    z-index: 1;
`;
const FooterText = external_styled_components_default().div.withConfig({
    componentId: "sc-6eb433c1-1"
})`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url("https://truerep.github.io/fundsdome-ui/assets/images/backgrounds/footer-bottom-bg-1-2.png");
    mix-blend-mode: multiply;
`;
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./components/common/Footer/Footer.container.js



const FooterContainer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {});
};
/* harmony default export */ const Footer_container = (FooterContainer);

;// CONCATENATED MODULE: ./components/common/Footer/index.js

/* harmony default export */ const common_Footer = (Footer_container);


/***/ }),

/***/ 3646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1802);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1065);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services__WEBPACK_IMPORTED_MODULE_3__, _Header__WEBPACK_IMPORTED_MODULE_4__]);
([_services__WEBPACK_IMPORTED_MODULE_3__, _Header__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const HeaderContainer = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showLoginModal, setShowLoginModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [toggleNav, setToggleNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services__WEBPACK_IMPORTED_MODULE_3__/* .authService */ .O)().then((res)=>{
            setIsAuthenticated(res);
        });
    }, [
        showLoginModal
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        router: router,
        isAuthenticated: isAuthenticated,
        showLoginModal: showLoginModal,
        setShowLoginModal: setShowLoginModal,
        toggleNav: toggleNav,
        setToggleNav: setToggleNav
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1065:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2875);
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3870);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LoginModal__WEBPACK_IMPORTED_MODULE_5__]);
_LoginModal__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Header = ({ router , isAuthenticated , showLoginModal , setShowLoginModal , toggleNav , setToggleNav  })=>{
    const hamburgerIcon = `${_helpers__WEBPACK_IMPORTED_MODULE_6__/* .appEnv.IMAGES_CDN_URL */ .w.IMAGES_CDN_URL}/hamburger-dark.png`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Logo, {
                src: "https://ik.imagekit.io/sahildhingra/fundsdome-logo.jpeg?updatedAt=1705766654348",
                alt: "fundsdome-logo"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Nav, {
                className: toggleNav ? "toggled" : "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            className: router.pathname === "/" ? "active" : "",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/campaigns",
                            className: router.pathname === "/campaigns" ? "active" : "",
                            children: "Campaigns"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/events",
                            className: router.pathname === "/events" ? "active" : "",
                            children: "Events"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "https://app.fundsdome.com/video-chat",
                            className: "btn-primary btn-outlined",
                            children: "Dashboard"
                        })
                    }),
                    !isAuthenticated && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "btn-primary",
                            onClick: ()=>setShowLoginModal(true),
                            children: "LogIn"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavButton, {
                onClick: ()=>setToggleNav(!toggleNav),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: hamburgerIcon,
                    alt: "menu"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                showModal: showLoginModal,
                setShowModal: setShowLoginModal,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    setShowLoginModal: setShowLoginModal,
                    redirectUrl: "https://app.fundsdome.com/video-chat"
                })
            })
        ]
    });
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-da2c06ed-0"
})`
    padding: 0 20px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
    componentId: "sc-da2c06ed-1"
})`
    height: 70px;
    z-index: 9;

    @media (max-width: 768px) {
        height: 40px;
        margin: 10px 0;
    }
`;
const NavButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
    componentId: "sc-da2c06ed-2"
})`
    border: 0;
    background: transparent;
    display: none;
    z-index: 9;

    img {
        height: 22px;
    }

    @media (max-width: 768px) {
        display: block;
    }
`;
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_3___default().ul.withConfig({
    componentId: "sc-da2c06ed-3"
})`
    list-style: none;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
        position: fixed;
        flex-direction: column;
        background: #fff;
        height: 100vh;
        width: 100vw;
        top: 0;
        right: 0;
        z-index: 8;
        align-items: flex-start;
        padding-top: 60px;

        a {
            padding: 10px 20px!important;

            &.btn-primary {
                margin: 10px 20px!important;
            }
        }

        &.toggled {
            display: flex;
        }
    }
`;
const Item = styled_components__WEBPACK_IMPORTED_MODULE_3___default().li.withConfig({
    componentId: "sc-da2c06ed-4"
})`
    a {
        display: block;
        padding: 40px 20px;
        color: #351C42;
        font-size: 15px;
        font-weight: 500;

        &:hover, &.active {
            color: #F6D469;
        }

        &.btn-primary {
            color: #fff;
            padding: 15px 25px;
            margin: 0 10px;
        }
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6522:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3646);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header_container__WEBPACK_IMPORTED_MODULE_0__]);
_Header_container__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Header_container__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Loader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/Loader/Loader.js



const Loader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "https://miro.medium.com/v2/resize:fit:1400/1*Gvgic29bgoiGVLmI6AVbUg.gif",
            alt: "loading..."
        })
    });
};
const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-4d283e62-0"
})`
    text-align: center;
    margin-top: -100px;
    img {
        height: 200px;
    }
`;
/* harmony default export */ const Loader_Loader = (Loader);

;// CONCATENATED MODULE: ./components/common/Loader/index.js

/* harmony default export */ const common_Loader = (Loader_Loader);


/***/ }),

/***/ 6678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(370);
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9283);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_2__]);
_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const LoginModalContainer = ({ setShowLoginModal , redirectUrl  })=>{
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleLogin = async ()=>{
        try {
            const token = await (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .loginUser */ .pH)(username, password);
            if (token && redirectUrl) {
                window.location = redirectUrl;
                setShowLoginModal(false);
            }
            setShowLoginModal(false);
        } catch (error) {}
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        username: username,
        setUsername: setUsername,
        password: password,
        setPassword: setPassword,
        handleLogin: handleLogin
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginModalContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const LoginModal = ({ username , setUsername , password , setPassword , handleLogin  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoginWrapper, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoginOptions, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn-primary",
                        children: "Log In"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn-primary inactive",
                        children: "Sign Up"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                placeholder: "Username",
                value: username,
                onChange: (e)=>setUsername(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "password",
                placeholder: "Password",
                value: password,
                onChange: (e)=>setPassword(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn-primary",
                onClick: handleLogin,
                children: "Login"
            })
        ]
    });
};
const LoginWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-d9b51c70-0"
})`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px 20px 25px;
  border: 1px solid lightgray;
  max-width: 450px;
  border-radius: 10px;
  background: #fff;
  min-width: 320px;

  button {
    width: fit-content;
    margin-left: auto;
  }
`;
const LoginOptions = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-d9b51c70-1"
})`
  display: flex;
  align-items: center;

  & > button {
    flex: 1;
    border-radius: 5px; 

    &.inactive {
        background-color: transparent;
        color: #000;
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginModal);


/***/ }),

/***/ 3870:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginModal_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6678);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LoginModal_container__WEBPACK_IMPORTED_MODULE_0__]);
_LoginModal_container__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_LoginModal_container__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Modal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/Modal/Modal.js



const Modal = ({ showModal , setShowModal , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ModalBackdrop, {
        className: showModal && "toggled",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ModalContent, {
            className: showModal && "toggled",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CloseModalButton, {
                    onClick: ()=>setShowModal(false),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close",
                        alt: "close"
                    })
                }),
                children
            ]
        })
    });
};
const ModalBackdrop = external_styled_components_default().div.withConfig({
    componentId: "sc-72fc25ce-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  &.toggled {
    background: rgba(0, 0, 0, 0.5);
    opacity: 1;
    pointer-events: all;
  }
`;
const ModalContent = external_styled_components_default().div.withConfig({
    componentId: "sc-72fc25ce-1"
})`
  transform: translateY(100%);
  transition: all 0.3s ease-in-out;
  position: relative;

  &.toggled {
    transform: translateY(0);
  }
`;
const CloseModalButton = external_styled_components_default().button.withConfig({
    componentId: "sc-72fc25ce-2"
})`
  position: absolute;
  right: 0;
  top: 0;
  height: 25px;
  width: 25px;
  border-radius: 100px;
  padding: 6px;
  background: #9F85F7;
  border: 0;
  outline: 0;
  transform: translate(50%, -50%);
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
/* harmony default export */ const Modal_Modal = (Modal);

;// CONCATENATED MODULE: ./components/common/Modal/index.js

/* harmony default export */ const common_Modal = (Modal_Modal);


/***/ }),

/***/ 8940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_PostItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/PostItem/components/Comments/components/CommentItem/CommentItem.js



const CommentItem_CommentItem = ()=>{
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Comment, {
                children: /*#__PURE__*/ _jsxs("p", {
                    children: [
                        /*#__PURE__*/ _jsx("a", {
                            href: "#",
                            children: "John D."
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            children: "Superb Work"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Comment, {
                children: /*#__PURE__*/ _jsxs("p", {
                    children: [
                        /*#__PURE__*/ _jsx("a", {
                            href: "#",
                            children: "Karon"
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            children: "Good to see this"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx(Comment, {
                className: "reply",
                children: /*#__PURE__*/ _jsxs("p", {
                    children: [
                        /*#__PURE__*/ _jsx("a", {
                            href: "#",
                            children: "William"
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            children: "Absolutely true"
                        })
                    ]
                })
            })
        ]
    });
};
const Comment = external_styled_components_default().div.withConfig({
    componentId: "sc-dbbf823f-0"
})`
  color: #464646;
  padding: 3px 0;
  font-size: 15px;

  &.reply {
    padding-left: 15px;
  }

  a {
    color: #000;
    text-decoration: none;
    margin-right: 10px;
  }
`;
/* harmony default export */ const components_CommentItem_CommentItem = ((/* unused pure expression or super */ null && (CommentItem_CommentItem)));

;// CONCATENATED MODULE: ./components/common/PostItem/components/Comments/components/CommentItem/CommentItem.container.js



const CommentItemContainer = ()=>{
    return /*#__PURE__*/ _jsx(CommentItem, {});
};
/* harmony default export */ const CommentItem_container = ((/* unused pure expression or super */ null && (CommentItemContainer)));

;// CONCATENATED MODULE: ./components/common/PostItem/components/Comments/components/CommentItem/index.js

/* harmony default export */ const components_CommentItem = ((/* unused pure expression or super */ null && (CommentItem)));

;// CONCATENATED MODULE: ./components/common/PostItem/components/Comments/components/AddComment/AddComment.js



const AddComment_AddComment = ()=>{
    return /*#__PURE__*/ _jsxs(CommentInputBox, {
        children: [
            /*#__PURE__*/ _jsx("input", {
                type: "text",
                placeholder: "Add a comment..."
            }),
            /*#__PURE__*/ _jsx("button", {
                children: /*#__PURE__*/ _jsx("img", {
                    src: "https://ik.imagekit.io/sahildhingra/send-icon-white.png",
                    alt: "comment"
                })
            })
        ]
    });
};
const CommentInputBox = external_styled_components_default().div.withConfig({
    componentId: "sc-6a5eae42-0"
})`
  display: flex;
  border: 1px solid #9F85F7;
  border-radius: 6px;
  margin-top: 15px;

  input {
    flex: 1;
    padding: 8px 14px;
    color: #000;
    font-size: 15px;
    outline: 0;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #9F85F7;
      font-size: 15px;
    }
  }

  button {
    background: #9F85F7;
    border: 0;
    outline: 0;
    padding: 0 8px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 5px 5px 0;
    cursor: pointer;

    img {
      height: 17px;
    }
  }
`;
/* harmony default export */ const components_AddComment_AddComment = ((/* unused pure expression or super */ null && (AddComment_AddComment)));

;// CONCATENATED MODULE: ./components/common/PostItem/components/Comments/components/AddComment/AddComment.container.js



const AddCommentContainer = ()=>{
    return /*#__PURE__*/ _jsx(AddComment, {});
};
/* harmony default export */ const AddComment_container = ((/* unused pure expression or super */ null && (AddCommentContainer)));

;// CONCATENATED MODULE: ./components/common/PostItem/components/Comments/components/AddComment/index.js

/* harmony default export */ const components_AddComment = ((/* unused pure expression or super */ null && (AddComment)));

;// CONCATENATED MODULE: ./components/common/PostItem/components/Comments/components/index.js




;// CONCATENATED MODULE: ./components/common/PostItem/components/Comments/Comments.js




const Comments_Comments = ()=>{
    return /*#__PURE__*/ _jsxs(CommentsWrapper, {
        children: [
            /*#__PURE__*/ _jsx(CommentItem, {}),
            /*#__PURE__*/ _jsx(AddComment, {})
        ]
    });
};
const CommentsWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-1e3d2948-0"
})`
  padding: 5px 0;
`;
/* harmony default export */ const components_Comments_Comments = ((/* unused pure expression or super */ null && (Comments_Comments)));

;// CONCATENATED MODULE: ./components/common/PostItem/components/Comments/Comments.container.js



const CommentsContainer = ()=>{
    return /*#__PURE__*/ _jsx(Comments, {});
};
/* harmony default export */ const Comments_container = ((/* unused pure expression or super */ null && (CommentsContainer)));

;// CONCATENATED MODULE: ./components/common/PostItem/components/Comments/index.js

/* harmony default export */ const components_Comments = ((/* unused pure expression or super */ null && (Comments)));

;// CONCATENATED MODULE: ./components/common/PostItem/components/index.js



;// CONCATENATED MODULE: ./utils/timeAgo.js
const timeAgo = (dateString)=>{
    const currentDate = new Date();
    const pastDate = new Date(dateString);
    const timeDifference = currentDate - pastDate; // in milliseconds
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) {
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (hours > 0) {
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (minutes > 0) {
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else {
        return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    }
};
/* harmony default export */ const utils_timeAgo = (timeAgo);

;// CONCATENATED MODULE: ./components/common/PostItem/PostItem.js





const PostItem = ({ organizationName , timeStamp , description , imageUrl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PostContainer, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PostHeader, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        class: "logo",
                        src: "https://pkstatic.imgix.net/media/companyprofile/331/onecause-logo.png",
                        alt: "organization-logo"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: organizationName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    " ",
                                    utils_timeAgo(timeStamp)
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PostBody, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: description
                    }),
                    imageUrl ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: imageUrl,
                        alt: "post-image"
                    }) : ""
                ]
            })
        ]
    });
};
const PostContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-1ed83f4b-0"
})`
    padding: 22px 26px;
    border-bottom: 1px solid #F5F1FC;

    &:last-child {
        border-bottom: 0;
    }
`;
const PostHeader = external_styled_components_default().div.withConfig({
    componentId: "sc-1ed83f4b-1"
})`
    display: flex;
    align-items: center;

    img {
        height: 45px;
        width: 45px;
        object-fit: cover;
        border-radius: 100%;
        flex-shrink: 0;
        margin-right: 9px;
    }

    h2 {
        color: #000;
        font-size: 16px;
        font-weight: 400;
    }

    p {
        margin-top: 4px;
        color: #7D7D7D;
        font-size: 12px;
    }
`;
const PostBody = external_styled_components_default().div.withConfig({
    componentId: "sc-1ed83f4b-2"
})`
    p {
        margin-top: 15px;
        color: #464646;
    }

    img {
        width: 100%;
        margin-top: 15px;
        border-radius: 5px;
    }
`;
const PostActions = external_styled_components_default().div.withConfig({
    componentId: "sc-1ed83f4b-3"
})`
    display: flex;
    align-items: center;
    gap: 35px;
    padding: 5px 0;
`;
const ActionItem = external_styled_components_default().button.withConfig({
    componentId: "sc-1ed83f4b-4"
})`
    display: flex;
    align-items: center;
    flex-shring: 0;
    color: #7D7D7D;
    font-size: 14px;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 5px 0;
    cursor: pointer;

    img {
        height: 14px;
        margin-right: 7px;
    }
`;
const PostComments = external_styled_components_default().div.withConfig({
    componentId: "sc-1ed83f4b-5"
})`

`;
/* harmony default export */ const PostItem_PostItem = (PostItem);

;// CONCATENATED MODULE: ./components/common/PostItem/PostItem.container.js



const PostItemContainer = ({ organizationName , timeStamp , description , imageUrl  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(PostItem_PostItem, {
        organizationName: organizationName,
        timeStamp: timeStamp,
        description: description,
        imageUrl: imageUrl
    });
};
/* harmony default export */ const PostItem_container = (PostItemContainer);

;// CONCATENATED MODULE: ./components/common/PostItem/index.js

/* harmony default export */ const common_PostItem = (PostItem_container);


/***/ }),

/***/ 9948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-7ccb0040-0"
})`
    max-width: 1200px;
    margin: 0 auto;
`;



/***/ }),

/***/ 1025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "YS": () => (/* reexport safe */ _PostItem__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "_A": () => (/* reexport safe */ _LoginModal__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "aN": () => (/* reexport safe */ _Loader__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "cx": () => (/* reexport safe */ _EventItem__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "u_": () => (/* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "x9": () => (/* reexport safe */ _CampaignItem__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6522);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9364);
/* harmony import */ var _PostItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8940);
/* harmony import */ var _CreatePost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9113);
/* harmony import */ var _CampaignItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6161);
/* harmony import */ var _EventItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(440);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4435);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2875);
/* harmony import */ var _LoginModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3870);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__, _CampaignItem__WEBPACK_IMPORTED_MODULE_4__, _EventItem__WEBPACK_IMPORTED_MODULE_5__, _LoginModal__WEBPACK_IMPORTED_MODULE_8__]);
([_Header__WEBPACK_IMPORTED_MODULE_0__, _CampaignItem__WEBPACK_IMPORTED_MODULE_4__, _EventItem__WEBPACK_IMPORTED_MODULE_5__, _LoginModal__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.$_),
/* harmony export */   "FE": () => (/* reexport safe */ _Organization__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   "YS": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.YS),
/* harmony export */   "h4": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.h4),
/* harmony export */   "iP": () => (/* reexport safe */ _Campaigns__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "jL": () => (/* reexport safe */ _Organization__WEBPACK_IMPORTED_MODULE_2__.j),
/* harmony export */   "m3": () => (/* reexport safe */ _Login__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "zW": () => (/* reexport safe */ _Events__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1025);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5973);
/* harmony import */ var _Organization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9700);
/* harmony import */ var _Campaigns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9747);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1660);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common__WEBPACK_IMPORTED_MODULE_0__, _Login__WEBPACK_IMPORTED_MODULE_1__, _Organization__WEBPACK_IMPORTED_MODULE_2__, _Campaigns__WEBPACK_IMPORTED_MODULE_3__, _Events__WEBPACK_IMPORTED_MODULE_4__]);
([_common__WEBPACK_IMPORTED_MODULE_0__, _Login__WEBPACK_IMPORTED_MODULE_1__, _Organization__WEBPACK_IMPORTED_MODULE_2__, _Campaigns__WEBPACK_IMPORTED_MODULE_3__, _Events__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ OrganizationProvider),
/* harmony export */   "m": () => (/* binding */ useOrganizationContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const OrganizationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const OrganizationProvider = ({ children , data  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OrganizationContext.Provider, {
        value: data,
        children: children
    });
};
const useOrganizationContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(OrganizationContext);
};


/***/ }),

/***/ 7736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* reexport */ helpers_appEnv)
});

;// CONCATENATED MODULE: ./helpers/appEnv.js
const appEnv = {
    // apiUrl: "http://127.0.0.1:8000"
    apiUrl: "https://app.fundsdome.com",
    IMAGES_CDN_URL: "https://ik.imagekit.io/sahildhingra"
};
/* harmony default export */ const helpers_appEnv = (appEnv);

;// CONCATENATED MODULE: ./helpers/index.js




/***/ }),

/***/ 978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1283);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__, universal_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([_api__WEBPACK_IMPORTED_MODULE_0__, universal_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const authService = async ()=>{
    const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_1__["default"]();
    // cookies.remove('auth_token', { path: '/' });
    const authToken = cookies.get("auth_token", {
        domain: "fundsdome.com"
    });
    console.log(authToken, "<--authToken from cookies");
    const isAuthenticated = await (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .getUserInfo */ .bG)();
    console.log(isAuthenticated, "<--isAuthenticaed");
    if (isAuthenticated?._id) {
        return true;
    } else {
        return false;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authService);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1802:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* reexport safe */ _authService__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _authService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(978);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_authService__WEBPACK_IMPORTED_MODULE_0__]);
_authService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;