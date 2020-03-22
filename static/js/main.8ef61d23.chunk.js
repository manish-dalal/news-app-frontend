(this["webpackJsonpnews-app-frontend"]=this["webpackJsonpnews-app-frontend"]||[]).push([[0],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(28),r=a.n(s),i=a(19),c=a(15),l=(a(74),a(75),a(76),a(16)),d=a(57),m={logo:"https://cdn-images-1.medium.com/max/280/1*DqOmR8pN1KGfPUUlZC7Bqg@2x.png",defaultBg:a.n(d).a},u=function(e){return m[e]},h=function(e){return o.a.createElement("div",{className:"Header center"},o.a.createElement("img",{src:u("logo"),alt:"logo",className:"Header_logo",onClick:function(){e.history.push("/")}}),o.a.createElement("div",{className:"search-wrapper center"}))},p=Object(l.h)((function(e){return o.a.createElement(h,e)})),g=function(e){var t=e.width,a=void 0===t?150:t,n=e.height,s=void 0===n?150:n,r=e.colorFirst,i=void 0===r?"#1d3f72":r,c=e.colorSecond,l=void 0===c?"#5699d2":c,d=e.strokeWidth,m=void 0===d?4:d,u=e.radiusFirst,h=void 0===u?40:u,p=e.radiusSecond,g=void 0===p?35:p;return o.a.createElement("svg",{width:a,height:s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"lds-double-ring"},o.a.createElement("circle",{cx:50,cy:50,"ng-attr-r":"{{config.radius}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-stroke":"{{config.c1}}","ng-attr-stroke-dasharray":"{{config.dasharray}}",fill:"none",strokeLinecap:"round",r:h,strokeWidth:m,stroke:i,strokeDasharray:"62.83185307179586 62.83185307179586",transform:"rotate(199.69 50 50)"},o.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"0.9s",begin:"0s",repeatCount:"indefinite"})),o.a.createElement("circle",{cx:50,cy:50,"ng-attr-r":"{{config.radius2}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-stroke":"{{config.c2}}","ng-attr-stroke-dasharray":"{{config.dasharray2}}","ng-attr-stroke-dashoffset":"{{config.dashoffset2}}",fill:"none",strokeLinecap:"round",r:g,strokeWidth:m,stroke:l,strokeDasharray:"54.97787143782138 54.97787143782138",strokeDashoffset:"54.97787143782138",transform:"rotate(-199.69 50 50)"},o.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;-360 50 50",keyTimes:"0;1",dur:"0.9s",begin:"0s",repeatCount:"indefinite"})))},f=Object(c.b)((function(e){return{loading:e.loadingReducer.loadState}}))((function(e){var t=e.loading;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"fixed-body",style:{opacity:.8,backgroundImage:"url(".concat(u("defaultBg"),")"),backgroundPosition:"top",backgroundSize:"cover"}}),t&&o.a.createElement("div",{className:"loading"},o.a.createElement(g,null)),o.a.createElement(p,null),o.a.createElement("div",{className:"main-app"},e.children))})),v={UPDATE_LOADING:"UPDATE_LOADING",GET_ITEMS:"GET_ITEMS",GET_ITEMS_SUCCESS:"GET_ITEMS_SUCCESS",GET_ITEMS_FAILURE:"GET_ITEMS_FAILURE",CLEAR_ITEMS_LIST:"CLEAR_ITEMS_LIST",ADD_LIKE:"ADD_LIKE",REMOVE_LIKE:"REMOVE_LIKE",ADD_DISLIKE:"ADD_DISLIKE",REMOVE_DISLIKE:"REMOVE_DISLIKE",ADD_BOOKMARK:"ADD_BOOKMARK",REMOVE_BOOKMARK:"REMOVE_BOOKMARK"},k=a(7);function w(e){var t=e.height,a=void 0===t?30:t,n=e.width,s=void 0===n?30:n,r=e.className,i=void 0===r?"":r,c=e.onClick,l=void 0===c?function(){}:c;return o.a.createElement("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",focusable:"false",height:a,width:s,className:i,onClick:l},o.a.createElement("g",{className:"style-scope yt-icon"},o.a.createElement("path",{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",className:"style-scope yt-icon"})))}function b(e){var t=e.height,a=void 0===t?30:t,n=e.width,s=void 0===n?30:n,r=e.className,i=void 0===r?"":r,c=e.onClick,l=void 0===c?function(){}:c;return o.a.createElement("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",focusable:"false",height:a,width:s,className:i,onClick:l},o.a.createElement("g",{className:"style-scope yt-icon"},o.a.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z",className:"style-scope yt-icon"})))}function y(e){var t=e.height,a=void 0===t?25:t,n=e.width,s=void 0===n?25:n,r=e.className,i=void 0===r?"":r,c=e.onClick,l=void 0===c?function(){}:c;return o.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 423.936 423.936",height:a,width:s,className:i,xmlSpace:"preserve",onClick:l},o.a.createElement("g",null,o.a.createElement("g",null,o.a.createElement("path",{d:"M327.68,0H96.256c-22.528,0-40.96,18.432-40.96,40.96v357.376c0,9.728,5.632,18.944,14.336,23.04 c9.216,4.096,19.456,3.072,27.136-3.072l0.512-0.512l114.688-96.768l114.688,96.768l0.512,0.512 c4.608,3.584,10.24,5.632,15.872,5.632c3.584,0,7.68-1.024,11.264-3.072c8.704-4.096,14.336-13.312,14.336-23.04V40.96 C368.64,18.432,350.208,0,327.68,0z"}))))}var E=Object(c.b)((function(e){return{likes:e.userReducer.likes,dislikes:e.userReducer.dislikes,bookmarks:e.userReducer.bookmarks}}))((function(e){var t=e.item,a=e.likes,n=e.dislikes,s=e.bookmarks,r=e.dispatch,i=Object(l.g)(),c=t.title,d=void 0===c?"":c,m=t.url,u=void 0===m?"":m,h=t.urlToImage,p=void 0===h?"":h,g=t.publishedAt,f=void 0===g?"":g,E=t.content,T=void 0===E?"":E,I=t.isDetail,S=void 0!==I&&I,_=t.source.name,A=void 0===_?"":_,x=a.includes(d),M=n.includes(d),C=s.includes(d),R=T&&T.indexOf("\u2026");return R&&-1!==R&&(T=T.slice(0,R+1)),o.a.createElement("div",{className:"ItemCard center"},o.a.createElement("div",{className:"ItemCard_detail"},o.a.createElement("h5",{className:"marginPadding ItemCard_title",onClick:function(){i.push({pathname:"/detail",state:Object(k.a)({},t,{isDetail:!0})})}},d),o.a.createElement("div",null,o.a.createElement("b",null,"Short by "),o.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},A)," at ".concat(f)),o.a.createElement("div",{className:"content ".concat(S?"":"desc_truncate")},T),o.a.createElement("div",{className:"center ItemCard_actions"},o.a.createElement("div",{className:"item"},o.a.createElement(b,{className:x?"active":"",onClick:function(){r(x?{type:v.REMOVE_LIKE,payload:d}:function(e){return{type:v.ADD_LIKE,payload:e}}(d))}})),o.a.createElement("div",{className:"item"},o.a.createElement(w,{className:M?"active":"",onClick:function(){r(M?{type:v.REMOVE_DISLIKE,payload:d}:function(e){return{type:v.ADD_DISLIKE,payload:e}}(d))}})),o.a.createElement("div",{className:"item"},o.a.createElement(y,{className:C?"active":"",onClick:function(){r(C?{type:v.REMOVE_BOOKMARK,payload:d}:function(e){return{type:v.ADD_BOOKMARK,payload:e}}(d))}})))),p?o.a.createElement("div",{className:"ItemCard_imageView"},o.a.createElement("img",{src:p,alt:"img"})):void 0)})),T=a(38),I=a.n(T),S=a(59),_=a.n(S).a.theme;var A=function(e){var t=e.key;return o.a.createElement("div",{className:"MatchCard",key:t,style:{borderTopColor:_,display:"block",height:140,margin:"10px 0px"}},o.a.createElement(T.SkeletonTheme,{color:"rgba(227, 247, 250, 0.8)",highlightColor:_},o.a.createElement("p",{style:{margin:"20px 10px 0"}},o.a.createElement(I.a,{count:4}))))};function x(){return o.a.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 512 512",size:60,height:60,width:60,xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M304 192v32c0 6.6-5.4 12-12 12H124c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"}))}var M=Object(c.b)((function(e){return{loading:e.loadingReducer.loadState,items:e.itemsReducer.items,itemsApiInProgress:e.itemsReducer.itemsApiInProgress}}))((function(e){var t=e.dispatch,a=e.items,s=e.itemsApiInProgress;return Object(n.useEffect)((function(){t({type:v.GET_ITEMS})}),[]),o.a.createElement("div",{className:"Home"},a.length?o.a.createElement("div",{className:"center Home_body_container"},s?o.a.createElement("div",{className:"MatchesList",style:{paddingBottom:10},key:new Date},o.a.createElement(A,null)):a.map((function(e,t){return o.a.createElement(E,{item:e,key:t})}))):o.a.createElement("div",{className:"Home_noResult"},o.a.createElement(x,null),o.a.createElement("h4",{className:"title"},"No result found")))})),C=a(60),R=a.n(C);function O(e){return R()(e.location.state)?o.a.createElement(l.a,{to:"/"}):o.a.createElement("div",{className:"Home"},o.a.createElement("div",{className:"center Home_body_container"},o.a.createElement(E,{item:e.location.state})))}var N=function(e){return o.a.createElement(f,null,o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/",exact:!0,component:M}),o.a.createElement(l.b,{path:"/detail",component:O}),o.a.createElement(l.a,{to:"/"})))},j=a(12),D=a(64),L=a(10),B=a.n(L),K=a(13),V=a(61),P=a(62),F=a.n(P),G={status:"ok",totalResults:70,articles:[{source:{id:null,name:"Moneycontrol.com"},author:null,title:"Market tanks as Nifty breaches 7,900; 5 factors that could be dragging the market - Moneycontrol",description:"Sectorally, selling pressure was seen in BSE Finance, Oil & Gas, Bankex, Consumer Durable, Auto as well as Energy indices.",url:"https://www.moneycontrol.com/news/business/markets/market-tanks-as-nifty-breaches-7900-5-factors-that-could-be-dragging-the-market-5049501.html",urlToImage:"https://static-news.moneycontrol.com/static-mcnews/2019/08/Asian-Markets-770x433.jpg",publishedAt:"2020-03-19T04:39:27Z",content:"Indian market witnessed yet another day of massive selling tracking global markets. The S&amp;P BSE Sensex broke below 27,000 to hit a 38-month low, while the Nifty50 breached 7,900 levels for the first time since December 26, 2016.\r\nSectorally, selling press\u2026 [+3676 chars]"},{source:{id:null,name:"Business-standard.com"},author:"SI Reporter",title:"MARKET LIVE: Sensex hits 38-month low, tanks 1,800 pts, Nifty below 8k - Business Standard",description:"Catch all the live market updates here",url:"https://www.business-standard.com/article/markets/market-live-markets-sensex-nifty-bse-nse-coronavirus-yes-bank-120031900150_1.html",urlToImage:"https://bsmedia.business-standard.com/_media/bs/img/hp/home-page/2017-09/22/full/1506081406-8518.jpg",publishedAt:"2020-03-19T04:26:16Z",content:null},{source:{id:null,name:"Investing.com"},author:null,title:"Oil Prices Rebound After Tumbling 20% in Previous Session - Investing.com",description:"Oil Prices Rebound After Tumbling 20% in Previous Session",url:"https://www.investing.com/news/commodities-news/oilpricesrebound-after-tumbling-20-in-previous-session-2114910",urlToImage:"https://i-invdn-com.akamaized.net/news/LYNXNPEF0F1NE_L.jpg",publishedAt:"2020-03-19T04:05:40Z",content:"Investing.com - Oil prices saw some relief from declining prices on Thursday morning after a heavy sell-off in the previous session, but continued to remain under the $30 mark. \r\nBrent tumbled 13% on Wednesday, while U.S. crude oil lost nearly 25%.  \r\nWednesd\u2026 [+1644 chars]"},{source:{id:null,name:"Bloombergquint.com"},author:"Hormaz Fatakia",title:"Live: Sensex Falls 1,800 Points; ICICI Bank Lowest Since October 2018 - BloombergQuint",description:"Catch all live updates on share prices, index moves, corporate announcements and more from the Sensex and Nifty, today.",url:"https://www.bloombergquint.com/markets/live-sgx-nifty-indicates-further-stock-declines-shree-cement-makes-nifty-debut",urlToImage:"https://gumlet.assettype.com/bloombergquint%2F2020-03%2F9f58ffd1-6d91-45c5-9743-85a6f7172322%2F334245257.jpg?rect=0%2C229%2C6720%2C3528&w=1200&auto=format%2Ccompress&ogImage=true",publishedAt:"2020-03-19T04:00:38Z",content:"Shares of Bajaj Finance Ltd. are down for the fourth day in a row. The stock fell to its 52-week low of Rs 2,484.7, a 50 percent drop from its all-time high of Rs 4,923.4 that it made on February 20, 2020.\r\n35 percent of the fall has occoured in the last four\u2026 [+255 chars]"},{source:{id:null,name:"Gaadiwaadi.com"},author:null,title:"2020 Hyundai Verna Facelift Spied Undisguised In India, Launch Next Week - GaadiWaadi.com",description:"As seen in the latest batch of spy images, the 2020 Hyundai Verna facelift will come with an all-digital instrument cluster along with a larger touchscreen infotainment unit",url:"https://gaadiwaadi.com/2020-hyundai-verna-facelift-spied-undisguised-in-india-launch-next-week/",urlToImage:"https://gaadiwaadi.com/wp-content/uploads/2020/03/2020-Hyundai-Verna-Facelift1.jpg",publishedAt:"2020-03-19T03:49:00Z",content:"Recently, Hyundai Motor India Ltd launched the much awaited second generation Creta in India, which goes on sale at a starting price of Rs 9.99 lakh (ex-showroom) as per the introductory offer. Next, the company will launch an updated version of the Verna, wh\u2026 [+2238 chars]"},{source:{id:null,name:"Livemint.com"},author:"Surajit Dasgupta",title:"Rupee slumps to record low against US dollar, near 75 per USD - Livemint",description:"The dollar today also surged against other Asian currencies.The selloff in global equity markets continue despite emergency interest rate cuts around the globe, enormous fiscal support packages",url:"https://www.livemint.com/news/india/rupee-dollar-rate-today-inr-slumps-to-record-low-near-75-per-usd-11584587241279.html",urlToImage:"https://images.livemint.com/img/2020/03/19/600x338/rupee1-ky4--621x414@LiveMint_1584588473256.jpg",publishedAt:"2020-03-19T03:33:38Z",content:"The rupee fell sharply against the US dollar today to a record low as the greenback continued its rally against other global currencies. The rupee fell to 74.98 against the dollar, compared to its previous close of 74.24. The dollar today also surged against \u2026 [+2280 chars]"},{source:{id:null,name:"Moneycontrol.com"},author:null,title:"Stocks in the news: Ashok Leyland, Motilal Oswal, VST Tillers, Karur Vysya Bank, Alphageo - Moneycontrol.com",description:"VST Tillers Tractors | Karur Vysya Bank | Vakrangee | NTPC | Emami and NLC India are among the stocks that are in the news today.",url:"https://www.moneycontrol.com/news/business/markets/stocks-in-the-news-vst-tillers-tractors-karur-vysya-bank-vakrangee-ntpc-emami-5048911.html",urlToImage:"https://static-news.moneycontrol.com/static-mcnews/2017/10/BSE_Sensex_Stocks_NSE_Nifty_NSE-770x433.jpg",publishedAt:"2020-03-19T03:21:00Z",content:"Here are some stocks that are in the news today:\r\nVST Tillers Tractors: February power tillers sales dropped to 1,361 units from 1,495 units YoY, tractors sales fell to 564 units from 581 units.\r\nKarur Vysya Bank:Lender enters into precious metals business.\r\n\u2026 [+2543 chars]"},{source:{id:null,name:"Moneycontrol.com"},author:null,title:"Top buy and sell ideas by Ashwani Gujral, Sudarshan Sukhani, Mitesh Thakkar for short term - Moneycontrol.com",description:"Mitesh Thakkar of miteshthakkar.com recommends selling Bharat Forge  with a stop loss of Rs 354 for target of Rs 330 and Maruti Suzuki with a stop loss of Rs 5455 for target of Rs 5000.",url:"https://www.moneycontrol.com/news/business/markets/top-buy-and-sell-ideas-by-ashwani-gujral-sudarshan-sukhani-mitesh-thakkar-for-short-term-62-5049191.html",urlToImage:"https://static-news.moneycontrol.com/static-mcnews/2017/03/buySell1-770x433.jpg",publishedAt:"2020-03-19T03:10:00Z",content:"The Sensex plunged 1,710 points to close at 28,869.51 while Nifty fell 498 points to end at 8,468.80.\r\nAccording to the pivot charts, the key support level for Nifty is placed at 8208.05, followed by 7947.3. If the index moves up, key resistance levels to wat\u2026 [+1719 chars]"},{source:{id:"the-times-of-india",name:"The Times of India"},author:"ETMarkets.com",title:"What changed for D-Street while you were sleeping - Economic Times",description:"Nifty futures on the Singapore Exchange traded 168.45 points or 2 per cent lower at 8,273.50, indicating a gap-down start for Dalal Street.",url:"https://economictimes.indiatimes.com/markets/stocks/news/what-changed-for-d-street-while-you-were-sleeping/articleshow/74702471.cms",urlToImage:"https://img.etimg.com/thumb/msid-74702469,width-1070,height-580,imgsize-164754,overlay-etmarkets/photo.jpg",publishedAt:"2020-03-19T02:58:00Z",content:"NEW DELHI: The ECB's 750 billion euro bond purchase announcement could not lift Asian markets from the rut this morning, though it helped crude oil prices recover from 18-year lows. Going by signals from Nifty futures trading in Singapore, domestic investors \u2026 [+7267 chars]"},{source:{id:"the-times-of-india",name:"The Times of India"},author:"Rajesh Mascarenhas",title:"Companies flush with cash propose buybacks to lift falling stocks - Economic Times",description:"The tax on buybacks could be a dampener and corporates are appealing to suspend the tax.",url:"https://economictimes.indiatimes.com/markets/stocks/news/companies-flush-with-cash-propose-buybacks-to-lift-falling-stocks/articleshow/74702686.cms",urlToImage:"https://img.etimg.com/thumb/msid-74702681,width-1070,height-580,imgsize-1039105,overlay-etmarkets/photo.jpg",publishedAt:"2020-03-19T02:47:18Z",content:"Mumbai: Cash-rich Indian companies are looking to buy their shares back from investors in their attempts to boost shareholder confidence amid the brutal sell-off in the market.\r\nIn the past two weeks, five companies \u2014 Sun Pharma, Thomas Cook, Supreme Petroche\u2026 [+2156 chars]"},{source:{id:null,name:"Indiatoday.in"},author:null,title:"Govt mulling up to Rs 120 billion rescue for aviation sector as coronavirus takes toll on airlines: Report - India Today",description:"The rescue package, proposed by India's civil aviation ministry, is likely to be worth up to Rs 100-120 billion ($1.3-$1.6 billion), the two sources told Reuters.",url:"https://www.indiatoday.in/business/story/rupees-120-billion-rescue-package-for-aviation-sector-reuters-report-1657222-2020-03-19",urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/airport_pti-647x363.jpeg?V8S4sgo7reMzQBN4hJm_W9vjWUk5mgt2",publishedAt:"2020-03-19T02:42:16Z",content:"India is planning a rescue package worth as much as $1.6 billion for the aviation sector, which has been battered after the coronavirus outbreak forced countries to close borders and brought air travel to a near-halt, two government sources told Reuters.\r\nThe\u2026 [+2286 chars]"},{source:{id:null,name:"Livemint.com"},author:"Ishita Guha",title:"Stocks to Watch: Yes Bank, JSW Steel, PVR, Ashok Leyland, Tata Communications - Livemint",description:"The Reserve Bank of India on Wednesday withdrew its moratorium imposed on Yes Bank on 5 March.PVR said its revenues may get impacted as cinema halls have been shut till 31 March due to the coronavirus spread",url:"https://www.livemint.com/market/stock-market-news/stocks-to-watch-yes-bank-jsw-steel-pvr-ashok-leyland-tata-communications-11584584794814.html",urlToImage:"https://images.livemint.com/img/2020/03/19/600x338/000_2432YES_Bank_1583502684191_1584584825022.jpg",publishedAt:"2020-03-19T02:36:13Z",content:"Yes Bank: The Reserve Bank of India (RBI) on Wednesday withdrew its moratorium imposed on the private lender on 5 March, allowing restoration of all banking operations. This came after a consortium of eight public and private banks, led by State Bank of India\u2026 [+2387 chars]"},{source:{id:null,name:"Bloombergquint.com"},author:"BQ Research",title:"All You Need To Know Going Into Trade On March 19 - BloombergQuint",description:"Stocks in the news, big brokerage calls of the day, complete trade setup and much more!",url:"https://www.bloombergquint.com/markets/all-you-need-to-know-going-into-trade-on-march-19-3",urlToImage:"https://gumlet.assettype.com/bloombergquint%2F2020-03%2F762d1b97-39b2-4d8a-bac2-b7a71dfb96fb%2F360180002.jpg?rect=0%2C155%2C4000%2C2100&w=1200&auto=format%2Ccompress&ogImage=true",publishedAt:"2020-03-19T01:42:57Z",content:""},{source:{id:null,name:"Ndtv.com"},author:null,title:"New York Stock Exchange To Shut Trading Floor Over Coronavirus, Electronic Trade To Continue - NDTV News",description:"The New York Stock Exchange will halt activity on its trading floor due to the coronavirus but remain open for electronic trading, the company's owner said Wednesday.",url:"https://www.ndtv.com/world-news/new-york-stock-exchange-to-shut-trading-floor-over-coronavirus-electronic-trade-to-continue-2197076",urlToImage:"https://i.ndtvimg.com/i/2016-11/nyse_650x400_41478724652.jpg",publishedAt:"2020-03-18T22:12:43Z",content:"Exchange officials have argued strongly against halting trading entirely (Representational)\r\nNew York: The New York Stock Exchange will halt activity on its trading floor due to the coronavirus but remain open for electronic trading, the company's owner said \u2026 [+528 chars]"},{source:{id:null,name:"Business-standard.com"},author:"Reuters",title:"Wall Street extends recent selloff, Dow all but erases Trump-bump - Business Standard",description:"Trump's request for Congress to approve $500 billion in cash payments to taxpayers along with $50 billion in loans for airlines did little to stem the rout",url:"https://www.business-standard.com/article/international/wall-street-s-main-indexes-slump-at-open-as-stimulus-high-fades-120031801359_1.html",urlToImage:"https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/19/full/1584566972-5321.jpg",publishedAt:"2020-03-18T21:33:10Z",content:"US stocks deepened their selloff on Wednesday and the Dow effectively erased the last of its gains since U.S. President Donald Trump's 2017 inauguration, as repercussions of the coronavirus pandemic threatened to cripple economic activity.\r\nThe benchmark S&am\u2026 [+2065 chars]"},{source:{id:null,name:"Caixinglobal.com"},author:null,title:"China Says Japan-Developed Drug Avigan Works Against Coronavirus - Caixin Global",description:"Fujifilm group member\u2019s flu medicine to be recommended for treatment",url:"https://www.caixinglobal.com/2020-03-18/china-says-japan-developed-drug-avigan-works-against-coronavirus-101530182.html",urlToImage:"https://img.caixin.com/2020-03-18/1584519037794131_560_373.jpg",publishedAt:"2020-03-18T20:56:00Z",content:"(Nikkei Asian Review) An influenza medicine developed by a Fujifilm Holdings group member is effective against the novel coronavirus, the Chinese government said Tuesday.\r\nThe government has already begun officially recommending the drugs use. Fujifilm Toyama\u2026 [+1181 chars]"},{source:{id:null,name:"Livemint.com"},author:"Aparna Iyer",title:"Yes Bank\u2019s collapse puts private lender stocks under siege on deposit woes - Livemint",description:"Shares of private sector banks have taken a massive beating ever since Yes Bank was placed under a moratorium",url:"https://www.livemint.com/market/mark-to-market/yes-bank-s-collapse-puts-private-lender-stocks-under-siege-on-deposit-woes-11584557276277.html",urlToImage:"https://images.livemint.com/img/2020/03/18/600x338/DSC_2559-01_1584557398101.jpeg",publishedAt:"2020-03-18T18:59:16Z",content:"Indias private sector banks are facing a challenge that they never anticipated: Convincing stakeholders that their deposits are kosher. This is especially true for the relatively smaller private sector lenders, or those other than the top three-four private s\u2026 [+2470 chars]"},{source:{id:"the-times-of-india",name:"The Times of India"},author:"Joel Rebello",title:"Madhu Kapur sells 2.5 crore shares of YES Bank - Economic Times",description:"The share sale was done through a block deal on the NSE data on the stock exchange showed.",url:"https://economictimes.indiatimes.com/markets/stocks/news/madhu-kapur-sells-2-5-crore-shares-of-yes-bank/articleshow/74699103.cms",urlToImage:"https://img.etimg.com/thumb/msid-74699110,width-1070,height-580,imgsize-320808,overlay-etmarkets/photo.jpg",publishedAt:"2020-03-18T17:40:00Z",content:"Madhu Kapur wife of late Yes Bank co founder Ashok Kapur has sold about 2.5 crore shares of the bank at Rs 65 a piece netting her Rs 161 crore.\r\nThe share sale was done through a block deal on the NSE data on the stock exchange showed. The sale makes about 14\u2026 [+1058 chars]"},{source:{id:null,name:"Livemint.com"},author:"Asit Ranjan Mishra",title:"S&P slashes India\u2019s 2020 growth outlook to 5.2% amid virus fears - Livemint",description:"Fears that the APAC region may slide into a recession looms large as countries go into strict lockdowns.Loss of household and biz confidence will translate into severe supply shocks, said S&P",url:"https://www.livemint.com/news/india/coronavirus-impact-s-p-cuts-india-2020-growth-forecast-to-5-2-from-5-7-11584502441296.html",urlToImage:"https://images.livemint.com/img/2020/03/18/600x338/sp_1584552353502.jpg",publishedAt:"2020-03-18T17:33:06Z",content:"Standard and Poors (S&amp;P) on Wednesday slashed its 2020 growth projection for India from 5.7% to 5.2%, as it fears that the Asia Pacific region may slide into recession as countries implement strict lock-downs to contain the Covid-19 pandemic.Moodys and Or\u2026 [+2950 chars]"},{source:{id:null,name:"Moneycontrol.com"},author:null,title:"Roche Diagnostics India first private firm to get COVID-19 test approval - Moneycontrol",description:"The development comes after the Indian Council of Medical Research (ICMR) permitted accredited private labs to conduct tests for COVID-19 to enhance capacity for diagnosis and detection of novel coronavirus amid rising cases in the country.",url:"https://www.moneycontrol.com/news/business/roche-diagnostics-india-first-private-firm-to-get-covid-19-test-approval-5048621.html",urlToImage:"https://static-news.moneycontrol.com/static-mcnews/2020/03/Coronavirus-research-Reuters-770x433.jpg",publishedAt:"2020-03-18T16:26:31Z",content:"Roche Diagnostics India has received the license from the country's drug regulator DCGI for its 'cobas SARS CoV-2' diagnostic test kit, making it the first private firm to get permission to conduct coronavirus tests.\r\nThe development comes after the Indian Co\u2026 [+3422 chars]"}]},U=function(e){var t=e.method,a=void 0===t?"get":t,n=e.reqUrl,o=e.data,s=void 0===o?{}:o,r=e.headers,i=void 0===r?{"content-type":"application/json",Accept:"application/json"}:r;return new Promise(function(){var e=Object(V.a)(B.a.mark((function e(t,o){var r,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r="".concat("http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ff4224ac548e4c3d821c7f5a7a785d79").concat(n),c={method:a,url:r,data:s,headers:i},"get"===a.toLowerCase()&&delete c.data,F()(Object(k.a)({},c)).then((function(e){e=e.data&&e.data.articles?e:{data:G},t(e)})).catch((function(e){t({data:G})}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},W=B.a.mark(z),Z=B.a.mark(H);function z(){var e;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(K.b)(U,{method:"GET",reqUrl:""});case 3:return e=t.sent,t.next=6,Object(K.d)({type:v.GET_ITEMS_SUCCESS,payload:e.data?e.data.articles:[]});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(K.d)({type:v.GET_ITEMS_FAILURE,payload:[]});case 12:case"end":return t.stop()}}),W,null,[[0,8]])}function H(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([Object(K.e)(v.GET_ITEMS,z)]);case 2:case"end":return e.stop()}}),Z)}var Y=B.a.mark(q);function q(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([Object(K.c)(H)]);case 2:case"end":return e.stop()}}),Y)}var $={loadState:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.UPDATE_LOADING:return{loadState:t.payload};default:return e}},Q=a(17),X=a(63),ee=a.n(X),te={items:[],itemsApiInProgress:!1},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.GET_ITEMS:return Object.assign({},e,{itemsApiInProgress:!0});case v.GET_ITEMS_FAILURE:return Object.assign({},e,{itemsApiInProgress:!1});case v.GET_ITEMS_SUCCESS:return Object.assign({},e,{items:[].concat(Object(Q.a)(e.items),Object(Q.a)(ee()(t,"payload",[]))),itemsApiInProgress:!1,filters:Object(k.a)({},e.filters)});case v.CLEAR_ITEMS_LIST:return Object.assign({},e,{items:[]});default:return e}},ne={likes:[],dislikes:[],bookmarks:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.ADD_LIKE:return Object(k.a)({},e,{likes:[].concat(Object(Q.a)(e.likes),[t.payload]),dislikes:e.dislikes.filter((function(e){return e!==t.payload}))});case v.REMOVE_LIKE:return Object(k.a)({},e,{likes:e.likes.filter((function(e){return e!==t.payload}))});case v.ADD_DISLIKE:return Object(k.a)({},e,{dislikes:[].concat(Object(Q.a)(e.dislikes),[t.payload]),likes:e.likes.filter((function(e){return e!==t.payload}))});case v.REMOVE_DISLIKE:return Object(k.a)({},e,{dislikes:e.dislikes.filter((function(e){return e!==t.payload}))});case v.ADD_BOOKMARK:return Object(k.a)({},e,{bookmarks:[].concat(Object(Q.a)(e.bookmarks),[t.payload])});case v.REMOVE_BOOKMARK:return Object(k.a)({},e,{bookmarks:e.bookmarks.filter((function(e){return e!==t.payload}))});default:return e}},se=Object(j.c)({userReducer:oe,loadingReducer:J,itemsReducer:ae}),re=Object(D.a)(),ie=Object(j.e)(se,Object(j.a)(re));re.run(q);var ce=ie;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(c.a,{store:ce},o.a.createElement(i.a,{basename:"/news-app-frontend"},o.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,a){e.exports=a.p+"static/media/defaultBg.c4750dc0.jpeg"},59:function(e,t,a){e.exports={theme:"#506ae9",themeBg:"#f7f7f7"}},65:function(e,t,a){e.exports=a(149)},75:function(e,t,a){e.exports={theme:"#506ae9",themeBg:"#f7f7f7"}},76:function(e,t,a){e.exports={theme:"#506ae9",themeBg:"#f7f7f7"}}},[[65,1,2]]]);
//# sourceMappingURL=main.8ef61d23.chunk.js.map