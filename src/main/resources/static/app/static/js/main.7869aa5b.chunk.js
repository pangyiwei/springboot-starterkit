(this.webpackJsonpbrs=this.webpackJsonpbrs||[]).push([[0],{193:function(e,t,a){e.exports=a.p+"static/media/signin-image.d586706c.jpg"},195:function(e,t,a){e.exports=a.p+"static/media/signup-image.75eb7c4e.jpg"},197:function(e,t,a){e.exports=a.p+"static/media/bus.fb52abb7.png"},198:function(e,t,a){e.exports=a.p+"static/media/bus2.a564af4e.jpg"},225:function(e,t,a){e.exports=a(357)},230:function(e,t,a){},253:function(e,t){},255:function(e,t){},292:function(e,t){},293:function(e,t){},357:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),i=(a(230),a(409)),c=a(411),s=a(204),u={background:"#f8f8f8",blue:"#1e88e5",tealBlue:"#26c6da"},p=Object(s.a)({palette:{background:{paper:u.background},primary:{main:u.blue},secondary:{main:u.tealBlue},text:{primary:"#000"}},typography:{h2:{fontSize:"36px",fontWeight:800,marginBottom:"12px"},h3:{fontSize:"21px",fontWeight:400},h6:{fontSize:"14px",fontWeight:400},body1:{fontSize:"15px",fontWeight:400},subtitle1:{fontSize:"14px",fontWeight:400,color:"#99abb4"},subtitle2:{fontSize:"12px",fontWeight:400,color:"#99abb4"}}}),m=a(59),d=a(17),f=a.n(d),h=a(32),g=a(13),E=a(385),b=a(44),x=a(414),v=a(391),y=a(193),k=a.n(y),S=a(50),w=a(51),j=a(64),C=a.n(j),O=function(){function e(){Object(S.a)(this,e)}return Object(w.a)(e,null,[{key:"signUp",value:function(e,t,a,n,r){return C()({method:"post",url:"http://localhost:8080/api/v1/user/signup",data:{email:e,password:t,firstName:a,lastName:n,mobileNumber:r},headers:{"Content-Type":"application/json"}})}},{key:"login",value:function(e,t){return C.a.post("http://localhost:8080/api/auth",{email:e,password:t}).then((function(e){return console.log(e),e}))}},{key:"getStops",value:function(e){return C.a.get("http://localhost:8080/api/v1/reservation/stops",{headers:{Authorization:"Bearer "+e}})}},{key:"getTripSchedules",value:function(e,t,a,n){return C.a.post("http://localhost:8080/api/v1/reservation/tripschedules",{sourceStop:t,destinationStop:a,tripDate:n},{headers:{Authorization:"Bearer "+e}})}},{key:"bookTrip",value:function(e,t,a){return C.a.post("http://localhost:8080/api/v1/reservation/bookticket",{tripID:t,tripDate:a},{headers:{Authorization:"Bearer "+e}})}},{key:"getTrips",value:function(e){return C.a.get("http://localhost:8080/api/v1/reservation/tickets",{headers:{Authorization:"Bearer "+e}})}}]),e}(),D=a(118),N=a.n(D),W=function(){function e(){Object(S.a)(this,e),this.token="",this.user="",this.exp=0;var t=localStorage.getItem("brs_jwt");if(t){var a=N.a.decode(t);console.log(a),(new Date).getTime()<1e3*a.exp?(this.token=t,this.user=a.sub,this.exp=a.exp):localStorage.clear(),this.update()}}return Object(w.a)(e,[{key:"update",value:function(){}}]),Object(w.a)(e,[{key:"isAuthenticated",value:function(){var e=(new Date).getTime();return this.token.length>0&&e<=1e3*this.exp}},{key:"getToken",value:function(){return this.token}},{key:"getUser",value:function(){return this.user}},{key:"login",value:function(){var e=Object(h.a)(f.a.mark((function e(t,a){var n=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.login(t,a).then((function(e){if(console.log(e),200===e.status&&e.headers.authorization){var t=e.headers.authorization.split(" ")[1];n.token=t,localStorage.setItem("brs_jwt",t);var a=N.a.decode(t);return console.log(a),n.user=a.sub,n.exp=a.exp,n.update(),!0}return Promise.reject({message:"Email or Password Incorrect"})})));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"logout",value:function(){this.token="",localStorage.clear(),this.update()}}]),e}(),Y=a(205),B=a(206),T=r.a.createContext({dependencies:{}}),M=function(e){Object(B.a)(a,e);var t=Object(Y.a)(a);function a(e){var n;Object(S.a)(this,a),(n=t.call(this,e)).getDependency=function(e){return n.state.dependencies[e.id]},n.update=function(){n.setState({})};var r={};return e.dependencies.forEach((function(e,t){void 0!==e.id&&null!==e.id||(e.id=t.toString()),r[e.id]=new e,r[e.id].update=n.update})),n.state={dependencies:r},n}return Object(w.a)(a,[{key:"componentWillUnmount",value:function(){this.state.dependencies.forEach((function(e){return e.dispose()}))}},{key:"render",value:function(){return r.a.createElement(T.Provider,{value:this.state},this.props.children)}}]),a}(r.a.Component),F=function(e){return r.a.useContext(T).dependencies[e.id]},I=Object(E.a)({container:{backgroundColor:"#fff",borderRadius:"20px"},textField:{marginBottom:"16px"},signUpBtn:{color:u.blue},error:{color:"#DD0000"}}),A=function(){var e=I(),t=Object(m.g)(),a=F(W),n=r.a.useState(""),o=Object(g.a)(n,2),l=o[0],i=o[1],s=r.a.useState(""),u=Object(g.a)(s,2),p=u[0],d=u[1],E=r.a.useState(""),y=Object(g.a)(E,2),S=y[0],w=y[1];r.a.useEffect((function(){a.isAuthenticated()&&t.push("/")}),[]);var j=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.login(l,p);case 3:e.sent&&t.push("/booking"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),w(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(c.a,{mx:"auto",my:"64px",maxWidth:"400px",width:"95%",className:e.container,boxShadow:3,display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement(c.a,{m:"32px"},r.a.createElement(b.a,{variant:"h2"},"Login"),r.a.createElement(c.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},r.a.createElement("img",{src:k.a,alt:"signin",width:"150px"})),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(c.a,{marginBottom:"24px"},r.a.createElement(x.a,{fullWidth:!0,id:"email",label:"Email",className:e.textField,value:l,onChange:function(e){return i(e.target.value)}}),r.a.createElement(x.a,{fullWidth:!0,id:"password",label:"Password",type:"password",className:e.textField,value:p,onChange:function(e){return d(e.target.value)}})),r.a.createElement(c.a,{id:"error",display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(b.a,{variant:"body1",className:e.error},S)),r.a.createElement(v.a,{id:"login",variant:"contained",color:"primary",fullWidth:!0,onClick:j},"Login"),r.a.createElement(c.a,{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",my:"8px"},r.a.createElement(b.a,{variant:"subtitle2"},"OR")),r.a.createElement(v.a,{id:"signup",fullWidth:!0,className:e.signUpBtn,onClick:function(){t.push("/signup")}},"Sign Up"))))},z=a(392),U=a(393),P=a(394),R=a(395),L=a(396),q=a(195),J=a.n(q),$=Object(E.a)({container:{backgroundColor:"#fff",borderRadius:"20px"},textField:{marginBottom:"16px"},error:{color:"#DD0000"}}),K=function(){var e=$(),t=Object(m.g)(),a=r.a.useState(""),n=Object(g.a)(a,2),o=n[0],l=n[1],i=r.a.useState(""),s=Object(g.a)(i,2),u=s[0],p=s[1],d=r.a.useState(""),E=Object(g.a)(d,2),y=E[0],k=E[1],S=r.a.useState(""),w=Object(g.a)(S,2),j=w[0],C=w[1],D=r.a.useState(""),N=Object(g.a)(D,2),Y=N[0],B=N[1],T=r.a.useState(""),M=Object(g.a)(T,2),I=M[0],A=M[1],q=r.a.useState(!1),K=Object(g.a)(q,2),V=K[0],_=K[1],G=F(W);r.a.useEffect((function(){G.isAuthenticated()&&t.push("/")}),[]);var H=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o.length<1)){e.next=5;break}return A("Email is required"),e.abrupt("return");case 5:if(X(o)){e.next=10;break}return A("Email is of the wrong format"),e.abrupt("return");case 10:if(!(u.length<1)){e.next=15;break}return A("Password is required"),e.abrupt("return");case 15:if(!(y.length<1)){e.next=20;break}return A("First Name is required"),e.abrupt("return");case 20:if(!(j.length<1)){e.next=25;break}return A("Last Name is required"),e.abrupt("return");case 25:A("");case 26:return e.prev=26,e.next=29,O.signUp(o,u,y,j,Y);case 29:200===e.sent.status&&_(!0),e.next=37;break;case 33:e.prev=33,e.t0=e.catch(26),console.log(e.t0),A(e.t0.message);case 37:case"end":return e.stop()}}),e,null,[[26,33]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){t.push("/login")},X=function(e){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{mx:"auto",my:"64px",maxWidth:"400px",width:"95%",className:e.container,boxShadow:3,display:"flex",flexDirection:"column",alignItems:"center"},r.a.createElement(c.a,{m:"32px"},r.a.createElement(b.a,{variant:"h2"},"Sign Up"),r.a.createElement(c.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},r.a.createElement("img",{src:J.a,alt:"signin",width:"150px"})),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(c.a,{marginBottom:"24px"},r.a.createElement(x.a,{fullWidth:!0,id:"email",label:"Email",className:e.textField,onChange:function(e){return l(e.target.value)},value:o}),r.a.createElement(x.a,{fullWidth:!0,id:"password",label:"Password",type:"password",className:e.textField,onChange:function(e){return p(e.target.value)},value:u}),r.a.createElement(x.a,{fullWidth:!0,id:"firstName",label:"First Name",className:e.textField,onChange:function(e){return k(e.target.value)},value:y}),r.a.createElement(x.a,{fullWidth:!0,id:"lastName",label:"Last Name",className:e.textField,onChange:function(e){return C(e.target.value)},value:j}),r.a.createElement(x.a,{fullWidth:!0,id:"mobileNumber",label:"Mobile Number",className:e.textField,onChange:function(e){return B(e.target.value)},value:Y})),r.a.createElement(c.a,{id:"error",display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(b.a,{variant:"body1",className:e.error},I)),r.a.createElement(v.a,{id:"signup",variant:"contained",color:"primary",fullWidth:!0,onClick:H},"Sign Up"),r.a.createElement(c.a,{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",my:"8px"}),r.a.createElement(v.a,{id:"returnToLogin",fullWidth:!0,onClick:function(){t.push("/login")}},"Already Registered?")))),r.a.createElement(z.a,{open:V,onClose:Q},r.a.createElement(U.a,{id:"alert-dialog-title"},"Success"),r.a.createElement(P.a,null,r.a.createElement(R.a,{id:"alert-dialog-description"},"Your account has been created. You can now log in with the given email and password.")),r.a.createElement(L.a,null,r.a.createElement(v.a,{onClick:Q,color:"primary"},"Close"))))},V=function(e){return F(W).isAuthenticated()?r.a.createElement(m.b,e):r.a.createElement(m.a,{to:"/login"})},_=a(397),G=a(416),H=a(412),Q=a(388),X=a(196),Z=a(21),ee=a(410),te=Object(E.a)({container:{backgroundColor:"#F8F8F8",borderRadius:"8px"},error:{color:"#DD0000"}}),ae=function(e){var t=te(),a=e.stops.map((function(e){return r.a.createElement(_.a,{key:e.code,value:e.code},e.name+" - "+e.detail)}));return r.a.createElement(c.a,{className:t.container,padding:"24px",boxShadow:1},r.a.createElement(b.a,{variant:"h3"},"Search For Trips"),r.a.createElement(c.a,{my:"24px"},r.a.createElement(b.a,{variant:"h6"},"Select Start Point and Destination:")),r.a.createElement(c.a,{display:"flex",flexDirection:"row",flexWrap:"wrap"},r.a.createElement(c.a,{flex:"300px 1 1",padding:"8px"},r.a.createElement(G.a,null,"Start"),r.a.createElement(H.a,{fullWidth:!0,value:e.sourceStop,onChange:e.handleSourceChange,input:r.a.createElement(Q.a,{id:"sourceStop"})},a)),r.a.createElement(c.a,{flex:"300px 1 1",padding:"8px"},r.a.createElement(G.a,null,"End"),r.a.createElement(H.a,{fullWidth:!0,value:e.destinationStop,onChange:e.handleDestinationChange,input:r.a.createElement(Q.a,{id:"destinationStop"})},a)),r.a.createElement(c.a,{padding:"8px",flex:"300px 1 1"},r.a.createElement(G.a,null,"Date"),r.a.createElement(Z.a,{utils:X.a},r.a.createElement(ee.a,{fullWidth:!0,clearable:!0,value:e.date,placeholder:"YYYY-MM-DD",onChange:e.setDate,format:"YYYY-MM-DD",id:"tripDate"})))),r.a.createElement(c.a,{display:"flex",alignItems:"center",justifyContent:"center",my:"8px"},r.a.createElement(b.a,{variant:"body1",className:t.error},e.error)),r.a.createElement(c.a,{display:"flex",justifyContent:"flex-end",my:"16px"},r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:e.handleSearch},"Search")))},ne=a(69),re=a.n(ne),oe=a(400),le=a(401),ie=a(402),ce=a(403),se=a(197),ue=a.n(se),pe=a(198),me=a.n(pe),de=Object(E.a)({tripContainer:{backgroundColor:"#f8f8f8",borderRadius:"8px"},tripCard:{width:"100%",height:"100%"},tripMedia:{height:"140px"},tripActions:{justifyContent:"flex-end"}}),fe=function(e){var t=de(),a=e.trips.map((function(a){return r.a.createElement(c.a,{key:a.id,id:a.id,flex:"1 1 30%",minWidth:"300px",margin:"8px"},r.a.createElement(oe.a,{className:t.tripCard},r.a.createElement(le.a,{image:a.availableSeats>12?ue.a:me.a,title:"Bus",className:t.tripMedia}),r.a.createElement(ie.a,null,r.a.createElement(b.a,{variant:"body1"},"Journey: ",a.sourceStop," - ",a.destinationStop),r.a.createElement(b.a,{variant:"body1"},"Available Seats: ",a.availableSeats),r.a.createElement(b.a,{variant:"body1"},"Journey Time: ",a.journeyTime),r.a.createElement(b.a,{variant:"body1"},"Fare: $",a.fare)),r.a.createElement(ce.a,{className:t.tripActions},r.a.createElement(v.a,{size:"small",color:"primary",onClick:e.handleBook,id:a.tripId+"-button"},"Book"))))}));return r.a.createElement(c.a,{display:"flex",flexDirection:"row",flexWrap:"wrap",my:"16px",justifyContent:"space-around"},a,r.a.createElement(c.a,{flex:"1 1 30%",minWidth:"300px",margin:"8px"}),r.a.createElement(c.a,{flex:"1 1 30%",minWidth:"300px",margin:"8px"}))},he=function(){function e(){Object(S.a)(this,e),this.show=!1,this.selected=""}return Object(w.a)(e,[{key:"update",value:function(){}},{key:"open",value:function(){this.show=!0,this.update()}},{key:"close",value:function(){this.show=!1,this.update()}},{key:"toggle",value:function(){this.show=!this.show,this.update()}},{key:"setSelected",value:function(e){this.selected=e,this.update()}}]),e}(),ge=function(){var e=F(W),t=r.a.useState([]),a=Object(g.a)(t,2),n=a[0],o=a[1],l=new Date,i=r.a.useState(re()().year(l.getFullYear()).month(l.getMonth()).date(l.getDate())),s=Object(g.a)(i,2),u=s[0],p=s[1],d=r.a.useState(""),E=Object(g.a)(d,2),b=E[0],x=E[1],y=r.a.useState(""),k=Object(g.a)(y,2),S=k[0],w=k[1],j=r.a.useState(""),C=Object(g.a)(j,2),D=C[0],N=C[1],Y=r.a.useState([]),B=Object(g.a)(Y,2),T=B[0],M=B[1],I=r.a.useState(!1),A=Object(g.a)(I,2),q=A[0],J=A[1],$=Object(m.g)(),K=F(he),V=function(){J(!1),$.push("/schedule")},_=function(){var t=Object(h.a)(f.a.mark((function t(a){var n,r,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.currentTarget.id.split("-")[0],console.log(n),t.prev=2,r=e.getToken(),t.next=6,O.bookTrip(r,n,u.format("YYYY-MM-DD"));case 6:o=t.sent,console.log(o),J(!0),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}(),G=function(){var t=Object(h.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(b!==S){t.next=3;break}return N("Source and Destination Stop Cannot be the same"),t.abrupt("return");case 3:return t.prev=3,a=e.getToken(),t.next=7,O.getTripSchedules(a,b,S,u.format("YYYY-MM-DD"));case 7:n=t.sent,console.log(n),n.data.payload?M(n.data.payload):(M([]),N("No trips found")),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(3);case 14:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(){return t.apply(this,arguments)}}();return r.a.useEffect((function(){K.setSelected("booking"),function(){var t=Object(h.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.getToken(),t.next=4,O.getStops(a);case 4:n=t.sent,o(n.data.payload),x(n.data.payload[0].code),w(n.data.payload[0].code),console.log(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{padding:"16px"},r.a.createElement(ae,{stops:n,handleSearch:G,sourceStop:b,destinationStop:S,date:u,handleSourceChange:function(e){x(e.target.value)},handleDestinationChange:function(e){w(e.target.value)},setDate:function(e){p(e)},error:D}),r.a.createElement(fe,{trips:T,handleBook:_})),r.a.createElement(z.a,{open:q,onClose:V},r.a.createElement(U.a,{id:"alert-dialog-title"},"Ticket Booked Success"),r.a.createElement(P.a,null,r.a.createElement(R.a,{id:"alert-dialog-description"},"Ticket Booked Successfully. Press OK to continue.")),r.a.createElement(L.a,null,r.a.createElement(v.a,{onClick:V,color:"primary"},"OK"))))},Ee=a(404),be=a(361),xe=a(199),ve=a.n(xe),ye=Object(be.a)({ticketCard:{width:"100%",marginTop:"12px",marginBottom:"12px"}}),ke=function(){var e=ye(),t=r.a.useState([]),a=Object(g.a)(t,2),n=a[0],o=a[1],l=F(he),i=F(W);r.a.useEffect((function(){l.setSelected("schedule"),function(){var e=Object(h.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=i.getToken(),e.next=4,O.getTrips(t);case 4:a=e.sent,o(a.data.payload),console.log(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var s=n.map((function(t){return r.a.createElement(oe.a,{className:e.ticketCard,key:t.id},r.a.createElement(Ee.a,{title:t.sourceStop+" to "+t.destinationStop,subheader:"Trip Date: "+re()(t.journeyDate,"YYYY-MM-DD").format("D MMM YYYY")}),r.a.createElement(ie.a,null,r.a.createElement(c.a,{display:"flex",flexDirection:"row",justifyContent:"space-between"},r.a.createElement(c.a,null,r.a.createElement(b.a,{variant:"body1"},"Passenger: ",t.passengerName),r.a.createElement(b.a,{variant:"body1"},"Passenger Contact: ",t.passengerMobileNumber),r.a.createElement(b.a,{variant:"body1"},"Bus ID: ",t.busCode),r.a.createElement(b.a,{variant:"body1"},"Seat Number: ",t.seatNumber)),r.a.createElement(c.a,null,r.a.createElement(ve.a,{value:t.id,size:96})))))}));return r.a.createElement(c.a,{padding:"16px"},r.a.createElement(b.a,{variant:"h3"},"My Schedule"),r.a.createElement(b.a,{variant:"subtitle1"},"Your tickets can be found here"),s)},Se=function(){return r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/login"},r.a.createElement(A,null)),r.a.createElement(m.b,{path:"/signup"},r.a.createElement(K,null)),r.a.createElement(V,{path:"/booking"},r.a.createElement(ge,null)),r.a.createElement(V,{path:"/schedule"},r.a.createElement(ke,null)),r.a.createElement(m.b,{path:"/"},r.a.createElement(m.a,{to:"/booking"})))},we=a(405),je=a(399),Ce=a(413),Oe=a(398),De=a(200),Ne=a.n(De),We=Object(E.a)({menuIcon:{color:"white"}}),Ye=function(){var e=We(),t=F(W),a=F(he);return t.isAuthenticated()&&r.a.createElement(we.a,{position:"static"},r.a.createElement(je.a,null,r.a.createElement(Ce.a,{smUp:!0,implementation:"js"},r.a.createElement(Oe.a,{onClick:function(){a.toggle()}},r.a.createElement(Ne.a,{className:e.menuIcon}))),r.a.createElement(c.a,{mx:"16px",flexGrow:1},"Bus Reservation System"),r.a.createElement(c.a,{mx:"16px"})))},Be=a(390),Te=a(360),Me=a(418),Fe=a(406),Ie=a(407),Ae=a(408),ze=a(419),Ue=a(202),Pe=a.n(Ue),Re=a(201),Le=a.n(Re),qe=a(203),Je=a.n(qe),$e=Object(E.a)({container:{backgroundColor:"#f8f8f8",width:"300px",height:"100%",paddingTop:"24px"},text:{color:"#67757c"}}),Ke=function(){var e=F(he),t=e.show,a=$e(),n=F(W),o=Object(m.g)(),l=n.getUser(),i=r.a.createElement(c.a,{className:a.container,boxShadow:2},r.a.createElement(c.a,null,r.a.createElement(Be.a,null,r.a.createElement(Te.a,null,r.a.createElement(Me.a,null,l.charAt(0).toUpperCase()),r.a.createElement(c.a,{mx:"16px"},l)),r.a.createElement(Te.a,{button:!0,onClick:function(){e.close(),o.push("/booking")},selected:"booking"===e.selected},r.a.createElement(Fe.a,null,r.a.createElement(Le.a,null)),r.a.createElement(Ie.a,{primary:"Bus Bookings"})),r.a.createElement(Te.a,{button:!0,onClick:function(){e.close(),o.push("/schedule")},selected:"schedule"===e.selected},r.a.createElement(Fe.a,null,r.a.createElement(Pe.a,null)),r.a.createElement(Ie.a,{primary:"My Tickets"})),r.a.createElement(Ae.a,null),r.a.createElement(Te.a,{button:!0,onClick:function(){e.close(),n.logout(),o.push("/")}},r.a.createElement(Fe.a,null,r.a.createElement(Je.a,null)),r.a.createElement(Ie.a,{primary:"Logout"})))));return n.isAuthenticated()&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{smUp:!0,implementation:"js"},r.a.createElement(ze.a,{variant:"temporary",anchor:"left",open:t,onClose:function(){e.toggle()},ModalProps:{keepMounted:!0}},i)),r.a.createElement(Ce.a,{xsDown:!0,implementation:"js"},r.a.createElement(c.a,{height:"100%"},i)))},Ve=a(53);var _e=function(){return r.a.createElement(M,{dependencies:[W,he]},r.a.createElement(i.a,{theme:p},r.a.createElement(Ve.a,{basename:"/app"},r.a.createElement(c.a,{height:"100vh",overflow:"hidden"},r.a.createElement(Ye,null),r.a.createElement(c.a,{flexDirection:"row",height:"calc(100%)",display:"flex"},r.a.createElement(Ke,null),r.a.createElement(c.a,{flex:1,overflow:"auto"},r.a.createElement(Se,null),r.a.createElement(c.a,{height:"64px"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[225,1,2]]]);
//# sourceMappingURL=main.7869aa5b.chunk.js.map