(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{227:function(e,t,n){},228:function(e,t,n){},229:function(e,t,n){},238:function(e,t,n){},245:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(89),c=n.n(a),o=(n(227),n(228),n(16)),r=(n(229),n(267)),i=n(266),l=n(65),u=n(25),j=n(198),d=n(3),b={user:null};if(localStorage.getItem("jwtToken")){var O=Object(j.a)(localStorage.getItem("jwtToken"));1e3*O.exp<Date.now()?localStorage.removeItem("jwtToken"):b.user=O}var m=Object(s.createContext)({user:null,register:function(e){},login:function(e){},logout:function(){}});function p(e,t){switch(t.type){case"LOGIN":case"REGISTER":return Object(u.a)(Object(u.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(u.a)(Object(u.a)({},e),{},{user:null});default:return e}}function h(e){var t=Object(s.useReducer)(p,b),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(d.jsx)(m.Provider,Object(u.a)({value:{user:a.user,login:function(e){localStorage.setItem("jwtToken",e.token),c({type:"LOGIN",payload:e})},logout:function(e){localStorage.removeItem("jwtToken"),c({type:"LOGOUT"})},register:function(e){localStorage.setItem("jwtToken",e.token),c({type:"REGISTER",payload:e})}}},e))}var x,g=function(){var e=Object(s.useContext)(m),t=e.user,n=e.logout;console.log(t);var a=Object(s.useState)(""),c=Object(o.a)(a,2),u=c[0],j=c[1],b="";t&&(b=t.username);var O=[{key:"user",text:b,value:b},{key:"sign-out",text:"Sign Out",onClick:n,icon:"sign out",as:l.b,to:"/login"}],p=[{key:"login",text:"Login",as:l.b,to:"/login"},{key:"signup",text:"Signup",as:l.b,to:"/Signup"}];return Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)(r.a,{borderless:!0,inverted:!0,style:{paddingRight:"40vh",paddingLeft:"40vh"},children:[Object(d.jsx)("img",{src:"https://assets.splitwise.com/assets/core/logo-wordmark-horizontal-white-short-c309b91b96261a8a993563bdadcf22a89f00ebb260f4f04fd814c2249a6e05d4.svg",alt:""}),Object(d.jsx)(r.a.Menu,{position:"right",children:Object(d.jsxs)(r.a.Item,{name:"friends",active:"friends"===u,onClick:function(e,t){var n=t.name;return j(n)},children:[Object(d.jsx)("img",{src:"http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",style:{borderRadius:"30px",width:"3vh",marginRight:"20px"},alt:""}),t?Object(d.jsx)(i.a,{inline:!0,options:O,defaultValue:O[0].value}):Object(d.jsx)(i.a,{inline:!0,options:p,defaultValue:p[0].value})]})})]})})},f=n(26),v=(n(237),n(46)),w=n(67),y=n(268),_=n(270),C=n(116),N=(n(238),n(35)),S=n.n(N),A=n(265),k=n(167),I=(k.a.initializeApp({apiKey:"AIzaSyD4ZA1mmNQ42_XDPgczLxoQWjg1G4C3_Ys",authDomain:"splitwise-clone-ea9a2.firebaseapp.com",projectId:"splitwise-clone-ea9a2",storageBucket:"splitwise-clone-ea9a2.appspot.com",messagingSenderId:"636225333027",appId:"1:636225333027:web:390880c608375d97d74e96",measurementId:"G-M7R5MYH9NL"}).firestore(),k.a.auth()),D=new k.a.auth.GoogleAuthProvider;var $,E=S()(x||(x=Object(v.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      email\n      username\n      createdAt\n      token\n    }\n  }\n"]))),L=function(e){var t=Object(s.useContext)(m),n=Object(s.useState)({}),a=Object(o.a)(n,2),c=a[0],r=a[1],i=Object(s.useState)({email:"",password:""}),l=Object(o.a)(i,2),j=l[0],b=l[1],O=Object(s.useState)(!1),p=Object(o.a)(O,2),h=p[0],x=p[1],g=Object(A.useMutation)(E,{update:function(n,s){var a=s.data.login;console.log(a),t.login(a),e.history.push("/")},onError:function(e){r(e&&e.graphQLErrors[0]?e.graphQLErrors[0].extensions.exception.errors:{})},variables:j}),f=Object(o.a)(g,2),v=f[0],N=f[1].loading;h&&""!=j.password&&(console.log("Call Google SignIn"),console.log(j),v());var S=function(e){b(Object(u.a)(Object(u.a)({},j),{},Object(w.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)("img",{src:"https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg",alt:""}),Object(d.jsxs)("div",{className:"login__details",children:[Object(d.jsx)("h4",{children:"WELCOME TO SPLITWISE"}),Object(d.jsxs)(y.a,{onSubmit:function(e){e.preventDefault(),console.log(j),v()},noValidate:!0,className:N?"loading":"",children:[Object(d.jsxs)(y.a.Field,{children:[Object(d.jsx)("label",{children:"Email address"}),Object(d.jsx)("input",{type:"text",name:"email",value:j.email,onChange:S,autocomplete:"off"})]}),Object(d.jsxs)(y.a.Field,{children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",name:"password",value:j.password,onChange:S})]}),Object(d.jsx)(_.a,{className:"ui orange button",type:"submit",children:"Log in"}),Object(d.jsxs)("p",{children:["Forgot your password? ",Object(d.jsx)("span",{style:{color:"blue"},children:"Click Here"})]}),Object(d.jsx)("hr",{})]}),Object(d.jsxs)("div",{className:"login__socialButtons",children:[Object(d.jsx)("p",{children:"Or log in with"}),Object(d.jsxs)(_.a,{basic:!0,onClick:function(){x(!0),console.log("Google Sign In"),I.signInWithPopup(D).then((function(e){b({email:e.user.email,password:e.user.uid})}))},children:[Object(d.jsx)(C.a,{name:"google"})," Google"]})]}),Object.keys(c).length>0&&Object(d.jsx)("div",{className:"ui error message",children:Object(d.jsx)("ul",{className:"list",children:Object.values(c).map((function(e){return Object(d.jsx)("li",{children:e},e)}))})})]})]})};n(245);var P=S()($||($=Object(v.a)(["\n  mutation register(\n    $username: String!\n    $email: String!\n    $password: String!\n  ) {\n    register(registerInput:{\n    username:$username\n    password:$password\n    email:$email\n    }){\n        id\n        email\n        token\n        username\n    }\n  }\n"]))),U=function(e){var t=Object(s.useContext)(m),n=Object(s.useState)({}),a=Object(o.a)(n,2),c=a[0],r=(a[1],Object(s.useState)({username:"",email:"",password:""})),i=Object(o.a)(r,2),l=i[0],j=i[1],b=function(e){j(Object(u.a)(Object(u.a)({},l),{},Object(w.a)({},e.target.name,e.target.value)))},O=Object(A.useMutation)(P,{variables:l,update:function(n,s){console.log(s),t.register(s.data.register),e.history.push("/")},onError:function(e){}}),p=Object(o.a)(O,2),h=p[0],x=p[1].loading;return""!=l.password&&h(),Object(d.jsxs)("div",{className:"signup",children:[Object(d.jsx)("img",{src:"https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg",alt:""}),Object(d.jsxs)("div",{className:"signup__details",children:[Object(d.jsx)("h4",{children:"INTRODUCE YOURSELF"}),Object(d.jsxs)(y.a,{onSubmit:function(){console.log(l),h()},noValidate:!0,className:x?"loading":"",children:[Object(d.jsxs)(y.a.Field,{children:[Object(d.jsx)("label",{children:"Hi there! My name is"}),Object(d.jsx)("input",{type:"text",name:"username",value:l.username,onChange:b,autocomplete:"off"})]}),Object(d.jsxs)(y.a.Field,{children:[Object(d.jsx)("label",{children:"Here\u2019s my email address:"}),Object(d.jsx)("input",{type:"text",name:"email",value:l.email,onChange:b,autocomplete:"off"})]}),Object(d.jsxs)(y.a.Field,{children:[Object(d.jsx)("label",{children:"And here\u2019s my password:"}),Object(d.jsx)("input",{type:"password",name:"password",value:l.password,onChange:b,autocomplete:"off"})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)(_.a,{className:"ui orange button",type:"submit",children:"Sign me up!"}),"or",Object(d.jsxs)(_.a,{basic:!0,onClick:function(e){console.log("I am clicked"),e.preventDefault(),I.signInWithPopup(D).then((function(e){j({username:e.user.displayName,email:e.user.email,password:e.user.uid})})).catch((function(e){return alert(e.message)}))},children:[Object(d.jsx)(C.a,{name:"google"})," Google"]})]})]}),Object.keys(c).length>0&&Object(d.jsx)("div",{className:"ui error message",children:Object(d.jsx)("ul",{className:"list",children:Object.values(c).map((function(e){return Object(d.jsx)("li",{children:e},e)}))})})]})]})},T=n(211);var F=function(e){var t=e.component,n=Object(T.a)(e,["component"]),a=Object(s.useContext)(m).user;return Object(d.jsx)(f.b,Object(u.a)(Object(u.a)({},n),{},{render:function(e){return a?Object(d.jsx)(f.a,{to:"/"}):Object(d.jsx)(t,Object(u.a)({},e))}}))};n(246);var R,M,G,Q=function(){return Object(d.jsxs)("div",{className:"ads",children:[Object(d.jsx)("h3",{children:"Get Splitwise Pro"}),Object(d.jsx)("img",{src:"https://assets.splitwise.com/assets/pro/logo-337b1a7d372db4b56c075c7893d68bfc6873a65d2f77d61b27cb66b6d62c976c.svg",alt:""}),Object(d.jsx)("p",{children:"Subscribe to Splitwise Pro for no ads, currency conversion, charts, search, and more."}),Object(d.jsx)(_.a,{color:"orange",children:"Learn More"})]})},H=(n(247),n(56)),z=n(269),q=S()(R||(R=Object(v.a)(["\n{\n    getUsers{\n        username\n        email\n        createdAt\n    }\n}"]))),Y=(S()(M||(M=Object(v.a)(["\nmutation settleUpAmount(\n    $amount:String!, \n    $postID:String!\n  ) {\n    addAmount(amount:$amount, postID:$postID){\n        user1\n        user2\n        user1OweCount\n        user2OweCount\n        createdAt\n    }\n  }\n"]))),S()(G||(G=Object(v.a)(["\n    query($username: String!){\n        getAccountDetails(username:$username){\n            _id\n            user1\n            user2\n            amountOwe{\n                amount\n                body\n                lenderName\n                borrowerName\n            }\n            user1OweCount\n            user2OweCount\n            createdAt\n        }\n    }\n"]))));n(248);var W=function(e){var t=e.name,n=e.amount,s=e.owe;return Object(d.jsx)("div",{className:"card",children:s?Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{class:"ui avatar image",src:"https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-teal22-100px.png",alt:""}),Object(d.jsxs)("div",{className:"card__details",children:[Object(d.jsx)("h4",{children:t}),s?Object(d.jsx)("span",{style:{color:"#ff652f"},children:Object(d.jsxs)("p",{children:["you owe $",n]})}):Object(d.jsx)("span",{style:{color:"#5bc5a7"},children:Object(d.jsxs)("p",{children:["owes you $",n]})})]})]}):Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{class:"ui avatar image",src:"https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-orange22-100px.png",alt:""}),Object(d.jsxs)("div",{className:"card__details",children:[Object(d.jsx)("h4",{children:t}),s?Object(d.jsx)("span",{style:{color:"#ff652f"},children:Object(d.jsxs)("p",{children:["you owe $",n]})}):Object(d.jsx)("span",{style:{color:"#5bc5a7"},children:Object(d.jsxs)("p",{children:["owes you $",n]})})]})]})})};n(249),n(203);var V,B;n(251);var K=Object(A.gql)(V||(V=Object(v.a)(["\n  mutation addAmount(\n    $body:String!, \n    $amount:String!, \n    $username:String!\n  ) {\n    addAmount(body:$body, amount:$amount, username:$username){\n        user1\n        user2\n        amountOwe{\n            body\n            amount\n            lenderName\n            borrowerName\n        }\n        user1OweCount\n        user2OweCount\n        createdAt\n    }\n  }\n"]))),J=Object(A.gql)(B||(B=Object(v.a)(["\n  mutation($postId: String!, $amount: String!) {\n    settleUpAmount(postId: $postId, amount: $amount) {\n      user1\n      user2\n      user1OweCount\n      user2OweCount\n      createdAt\n    }\n  }\n"]))),X=function(e){e.props;var t=Object(s.useContext)(m),n=Object(s.useState)([]),a=Object(o.a)(n,2),c=a[0],r=a[1],l=Object(s.useState)([]),j=Object(o.a)(l,2),b=j[0],O=j[1],p=Object(s.useState)([]),h=Object(o.a)(p,2),x=h[0],g=h[1],f=Object(s.useState)(!1),v=Object(o.a)(f,2),N=v[0],S=v[1],k=Object(s.useState)(!1),I=Object(o.a)(k,2),D=I[0],$=I[1],E=Object(s.useState)(!1),L=Object(o.a)(E,2),P=L[0],U=L[1],T=Object(s.useState)({}),F=Object(o.a)(T,2),R=F[0],M=F[1],G=Object(s.useState)([]),Q=Object(o.a)(G,2),V=Q[0],B=Q[1],X=Object(s.useState)([]),Z=Object(o.a)(X,2),ee=Z[0],te=Z[1],ne=0,se=0,ae=Object(s.useState)({amount:"",postId:""}),ce=Object(o.a)(ae,2),oe=ce[0],re=ce[1],ie=Object(s.useState)({body:"",amount:"",username:""}),le=Object(o.a)(ie,2),ue=le[0],je=le[1],de=function(e){je(Object(u.a)(Object(u.a)({},ue),{},Object(w.a)({},e.target.name,e.target.value)))},be=Object(A.useQuery)(q),Oe=(be.loading,be.data);Object(s.useEffect)((function(){Oe&&Oe.getUsers.map((function(e){"Maharsh"!=e.username&&B((function(t){return[].concat(Object(H.a)(t),[e.username])}))}))}),[Oe]);var me=function(e){e.preventDefault(),$(!1),U(!1),ve()},pe=Object(A.useQuery)(Y,{variables:{username:t.user.username},update:function(e,t){}}).data;console.log(x),Object(s.useEffect)((function(){r([]),O([]),pe&&pe.getAccountDetails.map((function(e){if(e.user1===t.user.username){var n={id:e._id,friendName:e.user2,amount:e.user1OweCount};e.user1OweCount>0?O((function(e){return[].concat(Object(H.a)(e),[{AccountDetails:n}])})):(console.log(e.user1OweCount),r((function(e){return[].concat(Object(H.a)(e),[{AccountDetails:n}])})))}if(e.user2==t.user.username){var s={id:e._id,friendName:e.user1,amount:-e.user1OweCount};e.user2OweCount>0?O((function(e){return[].concat(Object(H.a)(e),[{AccountDetails:s}])})):r((function(e){return[].concat(Object(H.a)(e),[{AccountDetails:s}])}))}}))}),[pe,x]);var he=Object(A.useMutation)(K,{variables:ue,update:function(e,n){console.log(n.data.addAmount);var s=e.readQuery({query:Y,variables:{username:t.user.username}});console.log(s),s&&s.getAccountDetails.map((function(t){n.data.addAmount.user1===t.user1&&n.data.addAmount.user2===t.user2&&(t.amountOwe=[n.data.addAmount.amountOwe[0]].concat(Object(H.a)(t.amountOwe)),t.user1OweCount=n.data.addAmount.user1OweCount,t.user2OweCount=n.data.addAmount.user2OweCount,e.writeQuery({query:Y,data:s}),g(x+1))})),ue.body="",ue.amount="",ue.username=""},onError:function(e){M(e&&e.graphQLErrors[0]?e.graphQLErrors[0].extensions.exception.errors:{})}}),xe=Object(o.a)(he,2),ge=xe[0],fe=(xe[1].error,Object(A.useMutation)(J,{variables:oe,update:function(e,n){console.log(n.data.settleUpAmount);var s=e.readQuery({query:Y,variables:{username:t.user.username}});console.log(s),s&&s.getAccountDetails.map((function(t){n.data.settleUpAmount.user1===t.user1&&n.data.settleUpAmount.user2===t.user2&&(t.user1OweCount=n.data.settleUpAmount.user1OweCount,t.user2OweCount=n.data.settleUpAmount.user2OweCount,e.writeQuery({query:Y,data:s}),g(x+1))})),console.log("Changed Data",s),oe.amount="",oe.postId=""}})),ve=Object(o.a)(fe,1)[0];return Object(d.jsxs)("div",{className:"dashboard",children:[Object(d.jsxs)("div",{className:"dashboard__heading",children:[Object(d.jsx)("h3",{children:"Dashboard"}),Object(d.jsx)("div",{className:"dashboard__buttons",children:t.user&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{class:"medium ui orange button",onClick:function(){return S(!0)},children:"Add an Expense"}),Object(d.jsx)("button",{class:"medium ui teal button",onClick:function(){return $(!0)},children:"Settle Up"}),Object(d.jsxs)(z.a,{as:y.a,onSubmit:function(e){e.preventDefault(),S(!1),ge()},size:"tiny",onClose:function(){return S(!1)},onOpen:function(){return S(!0)},open:N,children:[Object(d.jsx)(z.a.Header,{children:"Add an Expense"}),Object(d.jsxs)(z.a.Content,{className:"model__content",children:["With you and :",Object(d.jsx)("input",{list:"people",placeholder:"Choose a friend...",onChange:function(e){return je({username:e.target.value})},autocomplete:"off"}),Object(d.jsx)("datalist",{id:"people",children:V&&V.map((function(e){return Object(d.jsx)("option",{value:e},e)}))})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)(z.a.Content,{className:"model__contentdescription divider",children:[Object(d.jsx)("input",{placeholder:"Enter a description",name:"body",value:ue.body,onChange:de,autocomplete:"off"}),Object(d.jsx)("input",{placeholder:"Enter an amount",name:"amount",value:ue.amount,onChange:de,autocomplete:"off"})]}),Object(d.jsxs)(z.a.Content,{className:"model__contentbuttons",children:["Paid by ",Object(d.jsx)("p",{children:c&&c.AccountDetails}),Object(d.jsx)(i.a,{text:"Add user",labeled:!0,button:!0,className:"icon",style:{marginLeft:"10px"},children:Object(d.jsx)(i.a.Menu,{children:Object(d.jsx)(i.a.Header,{content:"People You Might Know"})})}),"and split",Object(d.jsx)(i.a,{text:"Add user",labeled:!0,button:!0,className:"icon",style:{marginLeft:"10px"},children:Object(d.jsxs)(i.a.Menu,{children:[Object(d.jsx)(i.a.Header,{content:"People You Might Know"}),Object(d.jsx)(i.a.Item,{value:"You Owe Full"})]})})]}),Object(d.jsxs)(z.a.Actions,{children:[Object(d.jsx)(_.a,{color:"black",onClick:function(){return S(!1)},children:"Cancel"}),Object(d.jsx)(_.a,{content:"Save",type:"submit",positive:!0})]}),Object.keys(R).length>0&&Object(d.jsx)("div",{className:"ui error message",children:Object(d.jsx)("ul",{className:"list",children:Object.values(R).map((function(e){return Object(d.jsx)("li",{children:e},e)}))})})]}),Object(d.jsxs)(z.a,{size:"tiny",onClose:function(){return $(!1)},onOpen:function(){return $(!0)},open:D,onClick:function(){c.map((function(e){console.log(e.AccountDetails.id),re({postId:e.AccountDetails.id,amount:-e.AccountDetails.amount}),te(e.AccountDetails.friendName)}))},children:[Object(d.jsx)(z.a.Header,{children:"Settle Up"}),Object(d.jsx)(z.a.Content,{className:"model__contentdescription divider",style:{textAlign:"center"},children:"Choose a payment method"}),Object(d.jsxs)(z.a.Content,{className:"model__contentbuttons",style:{display:"flex",flexDirection:"column",paddingTop:"20px"},children:[Object(d.jsx)(_.a,{color:"green",onClick:function(){return U(!0)},children:"Record a cash payment "}),Object(d.jsxs)(_.a,{style:{margin:"20px 0"},children:[" ",Object(d.jsx)(C.a,{name:"paypal"})," Paypal"]}),"Note: PayPal payments via debit or credit card incur fees of up to 4%. Venmo payments via credit card incur fees of 3%. Visit PayPal.com or Venmo.com for details."]}),Object(d.jsxs)(z.a.Actions,{children:[Object(d.jsx)(_.a,{color:"black",onClick:function(){return $(!1)},children:"Cancel"}),Object(d.jsx)(_.a,{content:"Save",onClick:function(){return U(!0)},positive:!0})]})]}),Object(d.jsxs)(z.a,{as:y.a,onSubmit:me,onClose:function(){return U(!1)},open:P,size:"small",children:[Object(d.jsx)(z.a.Header,{children:"Settle Up the Payment"}),Object(d.jsxs)(z.a.Content,{className:"model__contentdescription divider",style:{textAlign:"center"},children:["You Paid ",ee]}),Object(d.jsx)(z.a.Content,{className:"model__contentdescription",style:{display:"flex",flexDirection:"column",paddingTop:"20px"},children:Object(d.jsx)("input",{placeholder:"Enter an amount",name:"amount",value:oe.amount,onChange:function(e){re(Object(u.a)(Object(u.a)({},oe),{},Object(w.a)({},e.target.name,e.target.value)))}})}),Object(d.jsxs)(z.a.Actions,{children:[Object(d.jsx)(_.a,{content:"Cancel",onClick:function(){$(!1),U(!1)}}),Object(d.jsx)(_.a,{content:"Save",onClick:me,positive:!0,type:"submit"})]})]})]})})]}),Object(d.jsxs)("div",{className:"dashboard__insights",children:[Object(d.jsxs)("div",{className:"dashboard__insight",children:[b&&b.map((function(e){ne+=e.AccountDetails.amount})),c&&c.map((function(e){se+=e.AccountDetails.amount})),Object(d.jsx)("h4",{children:"total balances"}),Object(d.jsxs)("p",{children:["$",ne+se]})]}),Object(d.jsxs)("div",{className:"dashboard__insight",style:{borderRight:"1px solid #ddd",borderLeft:"1px solid #ddd",lineHeight:"1px"},children:[Object(d.jsx)("h4",{children:"you owe"}),Object(d.jsxs)("p",{children:["$",-se]})]}),Object(d.jsxs)("div",{className:"dashboard__insight",children:[Object(d.jsx)("h4",{children:"you owed"}),Object(d.jsxs)("p",{children:["$",ne]})]})]}),Object(d.jsxs)("div",{className:"dashboard__body",children:[Object(d.jsxs)("div",{className:"body__headings",children:[Object(d.jsx)("h3",{children:"YOU OWE"}),Object(d.jsxs)("div",{className:"body__headings__buttons",children:[Object(d.jsxs)("button",{class:"small ui button",children:[Object(d.jsx)("i",{class:"list icon"}),"view as list"]}),Object(d.jsxs)("button",{class:"small ui basic button",children:[Object(d.jsx)("i",{class:"chart bar outline icon"}),"view chart"]})]}),Object(d.jsx)("h3",{children:"YOU ARE OWED"})]}),Object(d.jsxs)("div",{className:"dashboard__accounts",children:[Object(d.jsx)("div",{className:"dashboard__owe",children:c&&c.map((function(e){return Object(d.jsx)(W,{name:e.AccountDetails.friendName,amount:-e.AccountDetails.amount,owe:!0})}))}),Object(d.jsx)("div",{className:"dashboard__owed",children:b&&b.map((function(e){return Object(d.jsx)(W,{name:e.AccountDetails.friendName,amount:e.AccountDetails.amount,owe:!1})}))})]})]})]})};n(252);var Z=function(){var e=Object(A.useQuery)(q),t=(e.loading,e.data),n=Object(s.useContext)(m),a=Object(s.useState)([]),c=Object(o.a)(a,2),r=c[0],i=c[1];Object(s.useEffect)((function(){t&&t.getUsers.map((function(e){e.username!=n.user.username&&i((function(t){return[].concat(Object(H.a)(t),[e.username])}))}))}),[t]),console.log(r);var l=Object(s.useState)(!1),u=Object(o.a)(l,2);return u[0],u[1],Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsxs)("div",{className:"sidebar__upper",children:[Object(d.jsxs)("div",{className:"sidebar__upper__items",style:{borderLeft:"5px solid #5bc5a7"},children:[Object(d.jsx)("img",{src:"https://www.splitwise.com/assets/press/logos/bg-primary.svg",alt:""}),Object(d.jsx)("h3",{children:"Dashboard"})]}),Object(d.jsxs)("div",{className:"sidebar__upper__items",children:[Object(d.jsx)("i",{className:"flag outline icon"}),Object(d.jsx)("h3",{children:"Recent Activity"})]}),Object(d.jsxs)("div",{className:"sidebar__upper__items sidebar__upper__items__input",children:[Object(d.jsx)("i",{className:"search icon"}),Object(d.jsx)("input",{type:"text",placeholder:"Filter by name"})]}),Object(d.jsxs)("div",{className:"sidebar__upper__items",children:[Object(d.jsx)("i",{className:"list icon"}),Object(d.jsx)("h3",{children:"All Expenses"})]})]}),Object(d.jsxs)("div",{className:"sidebar__middle",children:[Object(d.jsxs)("div",{className:"sidebar__headline",children:[Object(d.jsx)("h4",{children:"GROUPS"}),Object(d.jsxs)("span",{children:[Object(d.jsx)("i",{class:"plus icon"}),"Add"]})]}),Object(d.jsxs)("div",{className:"sidebar__upper__items",children:[Object(d.jsx)("i",{class:"tag icon"}),Object(d.jsx)("h3",{children:"Home"})]}),Object(d.jsxs)("div",{className:"sidebar__upper__items",children:[Object(d.jsx)("i",{class:"tag icon"}),Object(d.jsx)("h3",{children:"Friends"})]})]}),Object(d.jsxs)("div",{className:"sidebar__lower",children:[Object(d.jsxs)("div",{className:"sidebar__headline",children:[Object(d.jsx)("h4",{children:"FRIENDS"}),Object(d.jsxs)("span",{style:{display:"flex"},children:[Object(d.jsx)("i",{class:"plus icon"}),"Add"]})]}),t&&r.map((function(e){return Object(d.jsxs)("div",{className:"sidebar__upper__items",children:[Object(d.jsx)("i",{class:"user icon"}),Object(d.jsx)("h3",{children:e})]})}))]})]})};var ee,te=function(){var e=Object(s.useContext)(m);return console.log("user:-",e),Object(d.jsx)("div",{className:"body",children:e.user?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Z,{}),Object(d.jsx)(X,{}),Object(d.jsx)(Q,{})]}):Object(d.jsx)(L,{})})};var ne=S()(ee||(ee=Object(v.a)(["\n  mutation($postId: String!, $amount: String!) {\n    settleUpAmount(postId: $postId, amount: $amount) {\n      user1\n      user2\n      user1OweCount\n      user2OweCount\n      createdAt\n    }\n  }\n"]))),se=function(){var e=Object(s.useState)({amount:"50",postId:"602af74427c710359c0a4e81"}),t=Object(o.a)(e,2),n=t[0],a=(t[1],Object(A.useMutation)(ne,{update:function(){},variables:n})),c=Object(o.a)(a,1)[0];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Test"}),Object(d.jsx)(_.a,{onClick:function(){console.log("I am clicked"),console.log(n),c()},children:"Click"})]})};var ae=function(){var e=Object(s.useContext)(m).user;return console.log("user",e),Object(d.jsx)(h,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(g,{}),Object(d.jsx)(f.b,{exact:!0,path:"/",component:te}),Object(d.jsx)(f.b,{exact:!0,path:"/test",component:se}),Object(d.jsx)(F,{exact:!0,path:"/Signup",component:U}),Object(d.jsx)(F,{exact:!0,path:"/login",component:L})]})})})},ce=n(205),oe=n(209),re=n(210),ie=n(204),le=Object(re.a)({uri:"https://splitwise-clone.herokuapp.com/"}),ue=Object(ie.a)((function(e,t){var n=localStorage.getItem("jwtToken");return{headers:{Authorization:n?"Bearer ".concat(n):""}}})),je=new ce.a({link:ue.concat(le),cache:new oe.a}),de=Object(d.jsx)(A.ApolloProvider,{client:je,children:Object(d.jsx)(ae,{})}),be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,273)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),c(e),o(e)}))};c.a.render(de,document.getElementById("root")),be()}},[[253,1,2]]]);
//# sourceMappingURL=main.6f07562a.chunk.js.map