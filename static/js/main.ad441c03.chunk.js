(this["webpackJsonpbook-app"]=this["webpackJsonpbook-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),l=a(10),i=a.n(l),r=(a(36),a(37),a(12)),c=a(13),d=a(8),s=a(15),g=a(14),h=a(11),u=a.n(h),k=a(72),m=a(65),E=a(74),B=a(66),p=a(67),b=a(68),f=a(69),M=a(70),C=a(71),v=a(73),w=function(e){Object(s.a)(a,e);var t=Object(g.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).toggleEditBookModal=function(){o.setState({editModalState:!o.state.editModalState})},o.handleChange=function(e){var t=o.state.editBookData;t[e.target.name]=e.target.value,o.setState({editBookData:t})},o.editBook=function(e,t,a){o.setState({editBookData:{id:e,title:t,rating:a},editModalState:!o.state.editModalState})},o.updateBook=function(){var e=o.state.editBookData,t=e.title,a=e.rating;u.a.put("https://tranquil-gorge-80875.herokuapp.com/books/"+o.state.editBookData.id,{title:t,rating:a}).then((function(e){o.props.refreshList(),o.setState({editModalState:!1})})).catch((function(e){return console.log(e)}))},o.deleteBook=function(e){u.a.delete("https://tranquil-gorge-80875.herokuapp.com/books/"+e).then((function(e){o.props.refreshList()}))},o.state={editBookData:{id:0,title:"",rating:""},editModalState:!1},o.toggleEditBookModal=o.toggleEditBookModal.bind(Object(d.a)(o)),o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.editBook=o.editBook.bind(Object(d.a)(o)),o.updateBook=o.updateBook.bind(Object(d.a)(o)),o.deleteBook=o.deleteBook.bind(Object(d.a)(o)),o}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.books;return n.a.createElement(n.a.Fragment,null,t.map((function(t){return n.a.createElement("tr",{key:t.id},n.a.createElement("td",null,t.id),n.a.createElement("td",null,t.title),n.a.createElement("td",null,t.rating),n.a.createElement("td",null,n.a.createElement(m.a,{color:"success",size:"sm",className:"mr-2",onClick:e.editBook.bind(e,t.id,t.title,t.rating)},"Edit"),n.a.createElement(m.a,{color:"danger",size:"sm",onClick:e.deleteBook.bind(e,t.id)},"Delete")))})),n.a.createElement(E.a,{isOpen:this.state.editModalState,toggle:this.toggleEditBookModal},n.a.createElement(B.a,{toggle:this.toggleEditBookModal},"Add a new Book"),n.a.createElement(p.a,null,n.a.createElement(b.a,null,n.a.createElement(f.a,{for:"bookTitle"},"Title"),n.a.createElement(M.a,{id:"bookTitle",value:this.state.editBookData.title,name:"title",onChange:this.handleChange})),n.a.createElement(b.a,null,n.a.createElement(f.a,{for:"bookRating"},"Rating"),n.a.createElement(M.a,{id:"bookRating",value:this.state.editBookData.rating,name:"rating",onChange:this.handleChange}))),n.a.createElement(C.a,null,n.a.createElement(m.a,{color:"primary",onClick:this.updateBook},"Update Book")," ",n.a.createElement(m.a,{color:"secondary",onClick:this.toggleEditBookModal},"Cancel"))))}}]),a}(n.a.Component),S=function(e){Object(s.a)(a,e);var t=Object(g.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).toggleNewBookModal=function(){o.setState({addModalState:!o.state.addModalState})},o.addBook=function(){u.a.post("https://tranquil-gorge-80875.herokuapp.com/books",o.state.newBookData).then((function(e){var t=o.state.books;t.push(e.data),o.setState({books:t,newBookData:{title:"",rating:""},addModalState:!1})}))},o.handleChange=function(e){var t=o.state.newBookData;t[e.target.name]=e.target.value,o.setState({newBookData:t})},o.refreshList=function(){u.a.get("https://tranquil-gorge-80875.herokuapp.com/books").then((function(e){o.setState({books:e.data})}))},o.state={books:[],newBookData:{title:"",rating:""},addModalState:!1},o.toggleNewBookModal=o.toggleNewBookModal.bind(Object(d.a)(o)),o.handleChange=o.handleChange.bind(Object(d.a)(o)),o}return Object(c.a)(a,[{key:"componentWillMount",value:function(){this.refreshList()}},{key:"render",value:function(){var e=this.state.books;return n.a.createElement(k.a,{className:"App"},n.a.createElement("h1",null,"Book App"),n.a.createElement(m.a,{className:"my-3",color:"primary",onClick:this.toggleNewBookModal},"Add Book"),n.a.createElement(E.a,{isOpen:this.state.addModalState,toggle:this.toggleNewBookModal},n.a.createElement(B.a,{toggle:this.toggleNewBookModal},"Add a new Book"),n.a.createElement(p.a,null,n.a.createElement(b.a,null,n.a.createElement(f.a,{for:"title"},"Title"),n.a.createElement(M.a,{id:"title",value:this.state.newBookData.title,name:"title",onChange:this.handleChange})),n.a.createElement(b.a,null,n.a.createElement(f.a,{for:"rating"},"Rating"),n.a.createElement(M.a,{id:"rating",value:this.state.newBookData.rating,name:"rating",onChange:this.handleChange}))),n.a.createElement(C.a,null,n.a.createElement(m.a,{color:"primary",onClick:this.addBook},"Add Book")," ",n.a.createElement(m.a,{color:"secondary",onClick:this.toggleNewBookModal},"Cancel"))),n.a.createElement(v.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Id"),n.a.createElement("th",null,"Title"),n.a.createElement("th",null,"Ratings"),n.a.createElement("th",null,"Actions"))),n.a.createElement("tbody",null,n.a.createElement(w,{books:e,refreshList:this.refreshList}))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.ad441c03.chunk.js.map